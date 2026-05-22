/**
 * Interactive neural network background (adapted from VoXelo / CodePen EaabxLj).
 * Brand palette: sage + navy. No UI — fixed behind page content.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const BRAND = {
  navy: 0x0b1c2a,
  sageDeep: 0x4a6b68,
  sageDim: 0x6d8f8c,
  sage: 0x8da9a6,
  sageLight: 0xa8c4c1
};

const colorPalette = [
  new THREE.Color(BRAND.navy),
  new THREE.Color(BRAND.sageDeep),
  new THREE.Color(BRAND.sageDim),
  new THREE.Color(BRAND.sage),
  new THREE.Color(BRAND.sageLight)
];

const isMobile = window.matchMedia('(max-width: 767px)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  document.getElementById('neural-bg')?.remove();
} else {
  init();
}

function init() {
  const canvas = document.getElementById('neural-bg');
  if (!canvas) return;

  const densityFactor = isMobile ? 0.5 : 0.72;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(BRAND.navy, 0.0016);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1200);
  camera.position.set(0, 4, 24);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    powerPreference: 'high-performance',
    alpha: false
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
  renderer.setClearColor(0x000000);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  const starCount = isMobile ? 2200 : 4500;
  for (let i = 0; i < starCount; i++) {
    const r = THREE.MathUtils.randFloat(45, 110);
    const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
    const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
    starPos.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const starField = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      color: BRAND.sage,
      size: 0.12,
      sizeAttenuation: true,
      depthWrite: false,
      opacity: 0.35,
      transparent: true
    })
  );
  scene.add(starField);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.rotateSpeed = 0.35;
  controls.minDistance = 8;
  controls.maxDistance = 90;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.12;
  controls.enablePan = false;
  controls.enableZoom = false;

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    isMobile ? 0.65 : 0.9,
    0.35,
    0.72
  );
  composer.addPass(bloomPass);
  composer.addPass(new OutputPass());

  const pulseUniforms = {
    uTime: { value: 0 },
    uPulsePositions: {
      value: [new THREE.Vector3(1e3, 1e3, 1e3), new THREE.Vector3(1e3, 1e3, 1e3), new THREE.Vector3(1e3, 1e3, 1e3)]
    },
    uPulseTimes: { value: [-1e3, -1e3, -1e3] },
    uPulseColors: {
      value: [new THREE.Color(BRAND.sageLight), new THREE.Color(BRAND.sage), new THREE.Color(BRAND.sageDim)]
    },
    uPulseSpeed: { value: 14 },
    uBaseNodeSize: { value: 0.45 },
    uActivePalette: { value: 0 }
  };

  const noiseFunctions = `
    vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
    float snoise(vec3 v){
      const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
      vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);
      vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
      vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
      vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
      float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
      vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
      vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
      vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;
      vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
      vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
      vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
      p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
      m*=m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
    }
    float fbm(vec3 p,float time){
      float value=0.0;float amplitude=0.5;float frequency=1.0;
      for(int i=0;i<3;i++){
        value+=amplitude*snoise(p*frequency+time*0.2*frequency);
        amplitude*=0.5;frequency*=2.0;
      }
      return value;
    }`;

  const nodeShader = {
    vertexShader: `${noiseFunctions}
      attribute float nodeSize;attribute float nodeType;attribute vec3 nodeColor;attribute float distanceFromRoot;
      uniform float uTime;uniform vec3 uPulsePositions[3];uniform float uPulseTimes[3];uniform float uPulseSpeed;uniform float uBaseNodeSize;
      varying vec3 vColor;varying float vNodeType;varying vec3 vPosition;varying float vPulseIntensity;varying float vDistanceFromRoot;
      float getPulseIntensity(vec3 worldPos, vec3 pulsePos, float pulseTime) {
        if (pulseTime < 0.0) return 0.0;
        float timeSinceClick = uTime - pulseTime;
        if (timeSinceClick < 0.0 || timeSinceClick > 3.0) return 0.0;
        float pulseRadius = timeSinceClick * uPulseSpeed;
        float distToClick = distance(worldPos, pulsePos);
        return smoothstep(2.0, 0.0, abs(distToClick - pulseRadius)) * smoothstep(3.0, 0.0, timeSinceClick);
      }
      void main() {
        vNodeType = nodeType; vColor = nodeColor; vDistanceFromRoot = distanceFromRoot;
        vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vPosition = worldPos;
        float totalPulseIntensity = 0.0;
        for (int i = 0; i < 3; i++) totalPulseIntensity += getPulseIntensity(worldPos, uPulsePositions[i], uPulseTimes[i]);
        vPulseIntensity = min(totalPulseIntensity, 1.0);
        float timeScale = 0.5 + 0.5 * sin(uTime * 0.8 + distanceFromRoot * 0.2);
        float pulseSize = nodeSize * (0.8 + 0.2 * timeScale) * (1.0 + vPulseIntensity * 1.8);
        vec3 modifiedPosition = position;
        if (nodeType > 0.5) modifiedPosition += normal * fbm(position * 0.1, uTime * 0.1) * 0.18;
        vec4 mvPosition = modelViewMatrix * vec4(modifiedPosition, 1.0);
        gl_PointSize = pulseSize * uBaseNodeSize * (800.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }`,
    fragmentShader: `
      uniform float uTime;uniform vec3 uPulseColors[3];
      varying vec3 vColor;varying float vNodeType;varying vec3 vPosition;varying float vPulseIntensity;varying float vDistanceFromRoot;
      void main() {
        vec2 center = 2.0 * gl_PointCoord - 1.0;
        float dist = length(center);
        if (dist > 1.0) discard;
        float glowStrength = pow(1.0 - smoothstep(0.0, 1.0, dist), 1.35);
        vec3 baseColor = vColor * (0.75 + 0.25 * sin(uTime * 0.45 + vDistanceFromRoot * 0.25));
        vec3 finalColor = baseColor;
        if (vPulseIntensity > 0.0) {
          finalColor = mix(baseColor, uPulseColors[0], vPulseIntensity * 0.85);
          finalColor *= (1.0 + vPulseIntensity * 0.5);
        }
        float alpha = glowStrength * (0.85 - 0.45 * dist);
        float distanceFade = smoothstep(85.0, 12.0, length(vPosition - cameraPosition));
        if (vNodeType < 0.5) finalColor *= 1.15;
        gl_FragColor = vec4(finalColor, alpha * distanceFade);
      }`
  };

  const connectionShader = {
    vertexShader: `${noiseFunctions}
      attribute vec3 startPoint;attribute vec3 endPoint;attribute float connectionStrength;attribute float pathIndex;attribute vec3 connectionColor;
      uniform float uTime;uniform vec3 uPulsePositions[3];uniform float uPulseTimes[3];uniform float uPulseSpeed;
      varying vec3 vColor;varying float vConnectionStrength;varying float vPulseIntensity;varying float vPathPosition;
      float getPulseIntensity(vec3 worldPos, vec3 pulsePos, float pulseTime) {
        if (pulseTime < 0.0) return 0.0;
        float timeSinceClick = uTime - pulseTime;
        if (timeSinceClick < 0.0 || timeSinceClick > 3.0) return 0.0;
        float pulseRadius = timeSinceClick * uPulseSpeed;
        return smoothstep(2.0, 0.0, abs(distance(worldPos, pulsePos) - pulseRadius)) * smoothstep(3.0, 0.0, timeSinceClick);
      }
      void main() {
        float t = position.x;
        vPathPosition = t;
        vec3 midPoint = mix(startPoint, endPoint, 0.5);
        vec3 perp = normalize(cross(normalize(endPoint - startPoint), vec3(0.0, 1.0, 0.0)));
        if (length(perp) < 0.1) perp = vec3(1.0, 0.0, 0.0);
        midPoint += perp * sin(t * 3.14159) * 0.08;
        vec3 finalPos = mix(mix(startPoint, midPoint, t), mix(midPoint, endPoint, t), t);
        finalPos += perp * fbm(vec3(pathIndex * 0.1, t * 0.5, uTime * 0.2), uTime * 0.2) * 0.08;
        vec3 worldPos = (modelMatrix * vec4(finalPos, 1.0)).xyz;
        float totalPulseIntensity = 0.0;
        for (int i = 0; i < 3; i++) totalPulseIntensity += getPulseIntensity(worldPos, uPulsePositions[i], uPulseTimes[i]);
        vPulseIntensity = min(totalPulseIntensity, 1.0);
        vColor = connectionColor;
        vConnectionStrength = connectionStrength;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
      }`,
    fragmentShader: `
      uniform float uTime;uniform vec3 uPulseColors[3];
      varying vec3 vColor;varying float vConnectionStrength;varying float vPulseIntensity;varying float vPathPosition;
      void main() {
        vec3 baseColor = vColor * (0.65 + 0.35 * sin(uTime * 0.45 + vPathPosition * 8.0));
        float flow = sin(vPathPosition * 18.0 - uTime * 2.5) * 0.5 + 0.5;
        vec3 finalColor = baseColor * (0.55 + 0.25 * flow * vConnectionStrength + vConnectionStrength * 0.35);
        if (vPulseIntensity > 0.0) finalColor = mix(finalColor, uPulseColors[0], vPulseIntensity * 0.7);
        float alpha = 0.65 * vConnectionStrength + 0.15 * flow;
        gl_FragColor = vec4(finalColor, alpha);
      }`
  };

  class Node {
    constructor(position, level = 0, type = 0) {
      this.position = position;
      this.connections = [];
      this.level = level;
      this.type = type;
      this.size = type === 0 ? THREE.MathUtils.randFloat(0.65, 1.1) : THREE.MathUtils.randFloat(0.35, 0.85);
      this.distanceFromRoot = 0;
    }
    addConnection(node, strength = 1) {
      if (!this.connections.some((c) => c.node === node)) {
        this.connections.push({ node, strength });
        node.connections.push({ node: this, strength });
      }
    }
  }

  function generateNetwork(density) {
    const nodes = [];
    const rootNode = new Node(new THREE.Vector3(0, 0, 0), 0, 0);
    rootNode.size = 1.4;
    nodes.push(rootNode);

    const primaryAxes = 6;
    const nodesPerAxis = isMobile ? 6 : 8;
    const axisLength = 18;
    const axisEndpoints = [];

    for (let a = 0; a < primaryAxes; a++) {
      const phi = Math.acos(-1 + (2 * a) / primaryAxes);
      const theta = Math.PI * (1 + Math.sqrt(5)) * a;
      const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      );
      let prev = rootNode;
      for (let i = 1; i <= nodesPerAxis; i++) {
        const t = i / nodesPerAxis;
        const pos = dir.clone().multiplyScalar(axisLength * Math.pow(t, 0.8));
        const node = new Node(pos, i, i === nodesPerAxis ? 1 : 0);
        node.distanceFromRoot = pos.length();
        nodes.push(node);
        prev.addConnection(node, 1 - t * 0.3);
        prev = node;
        if (i === nodesPerAxis) axisEndpoints.push(node);
      }
    }

    const ringNodes = [];
    for (const ringDist of [5, 10, 14]) {
      const ringLayer = [];
      const nodesInRing = Math.floor(ringDist * 2.8 * density);
      for (let i = 0; i < nodesInRing; i++) {
        const ringPhi = Math.acos(2 * Math.random() - 1);
        const ringTheta = (2 * Math.PI * i) / nodesInRing;
        const pos = new THREE.Vector3(
          ringDist * Math.sin(ringPhi) * Math.cos(ringTheta),
          ringDist * Math.sin(ringPhi) * Math.sin(ringTheta),
          ringDist * Math.cos(ringPhi)
        );
        const node = new Node(pos, Math.ceil(ringDist / 5), Math.random() < 0.35 ? 1 : 0);
        node.distanceFromRoot = ringDist;
        nodes.push(node);
        ringLayer.push(node);
      }
      ringNodes.push(ringLayer);
      for (let i = 0; i < ringLayer.length; i++) {
        ringLayer[i].addConnection(ringLayer[(i + 1) % ringLayer.length], 0.65);
      }
    }

    if (density < 1) {
      const filtered = nodes.filter((n, idx) => {
        if (n === rootNode) return true;
        return (idx * 31) % 100 < density * 100;
      });
      filtered.forEach((n) => {
        n.connections = n.connections.filter((c) => filtered.includes(c.node));
      });
      return { nodes: filtered, rootNode };
    }
    return { nodes, rootNode };
  }

  let neuralNetwork = null;
  let nodesMesh = null;
  let connectionsMesh = null;

  function paletteColor(level) {
    const c = colorPalette[Math.min(level, colorPalette.length - 1) % colorPalette.length].clone();
    c.offsetHSL(THREE.MathUtils.randFloatSpread(0.03), THREE.MathUtils.randFloatSpread(0.06), THREE.MathUtils.randFloatSpread(0.06));
    return c;
  }

  function buildMeshes() {
    if (nodesMesh) {
      scene.remove(nodesMesh);
      nodesMesh.geometry.dispose();
      nodesMesh.material.dispose();
    }
    if (connectionsMesh) {
      scene.remove(connectionsMesh);
      connectionsMesh.geometry.dispose();
      connectionsMesh.material.dispose();
    }

    neuralNetwork = generateNetwork(densityFactor);
    const { nodes } = neuralNetwork;

    const nodePositions = [];
    const nodeTypes = [];
    const nodeSizes = [];
    const nodeColors = [];
    const distancesFromRoot = [];

    nodes.forEach((node) => {
      nodePositions.push(node.position.x, node.position.y, node.position.z);
      nodeTypes.push(node.type);
      nodeSizes.push(node.size);
      distancesFromRoot.push(node.distanceFromRoot);
      const c = paletteColor(node.level);
      nodeColors.push(c.r, c.g, c.b);
    });

    const nodesGeo = new THREE.BufferGeometry();
    nodesGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
    nodesGeo.setAttribute('nodeType', new THREE.Float32BufferAttribute(nodeTypes, 1));
    nodesGeo.setAttribute('nodeSize', new THREE.Float32BufferAttribute(nodeSizes, 1));
    nodesGeo.setAttribute('nodeColor', new THREE.Float32BufferAttribute(nodeColors, 3));
    nodesGeo.setAttribute('distanceFromRoot', new THREE.Float32BufferAttribute(distancesFromRoot, 1));

    const nodesMat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(pulseUniforms),
      vertexShader: nodeShader.vertexShader,
      fragmentShader: nodeShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    nodesMesh = new THREE.Points(nodesGeo, nodesMat);
    scene.add(nodesMesh);

    const segCount = isMobile ? 10 : 12;
    const connPositions = [];
    const startPoints = [];
    const endPoints = [];
    const connectionStrengths = [];
    const connectionColors = [];
    const pathIndices = [];
    const seen = new Set();
    let pathIndex = 0;

    nodes.forEach((node, nodeIndex) => {
      node.connections.forEach(({ node: other, strength }) => {
        const otherIndex = nodes.indexOf(other);
        if (otherIndex === -1) return;
        const key = [Math.min(nodeIndex, otherIndex), Math.max(nodeIndex, otherIndex)].join('-');
        if (seen.has(key)) return;
        seen.add(key);
        const avgLevel = Math.floor((node.level + other.level) / 2);
        const col = paletteColor(avgLevel);
        for (let i = 0; i < segCount; i++) {
          const t = i / (segCount - 1);
          connPositions.push(t, 0, 0);
          startPoints.push(node.position.x, node.position.y, node.position.z);
          endPoints.push(other.position.x, other.position.y, other.position.z);
          connectionStrengths.push(strength);
          connectionColors.push(col.r, col.g, col.b);
          pathIndices.push(pathIndex);
        }
        pathIndex++;
      });
    });

    const connGeo = new THREE.BufferGeometry();
    connGeo.setAttribute('position', new THREE.Float32BufferAttribute(connPositions, 3));
    connGeo.setAttribute('startPoint', new THREE.Float32BufferAttribute(startPoints, 3));
    connGeo.setAttribute('endPoint', new THREE.Float32BufferAttribute(endPoints, 3));
    connGeo.setAttribute('connectionStrength', new THREE.Float32BufferAttribute(connectionStrengths, 1));
    connGeo.setAttribute('connectionColor', new THREE.Float32BufferAttribute(connectionColors, 3));
    connGeo.setAttribute('pathIndex', new THREE.Float32BufferAttribute(pathIndices, 1));

    const connMat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(pulseUniforms),
      vertexShader: connectionShader.vertexShader,
      fragmentShader: connectionShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    connectionsMesh = new THREE.LineSegments(connGeo, connMat);
    scene.add(connectionsMesh);

    colorPalette.slice(0, 3).forEach((c, i) => {
      nodesMat.uniforms.uPulseColors.value[i].copy(c);
      connMat.uniforms.uPulseColors.value[i].copy(c);
    });
  }

  buildMeshes();

  const clock = new THREE.Clock();
  let lastAutoPulse = 0;
  let pulseSlot = 0;

  function firePulse(origin) {
    if (!nodesMesh || !connectionsMesh) return;
    const t = clock.getElapsedTime();
    pulseSlot = (pulseSlot + 1) % 3;
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    [nodesMesh, connectionsMesh].forEach((mesh) => {
      mesh.material.uniforms.uPulsePositions.value[pulseSlot].copy(origin);
      mesh.material.uniforms.uPulseTimes.value[pulseSlot] = t;
      mesh.material.uniforms.uPulseColors.value[pulseSlot].copy(color);
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (nodesMesh) {
      nodesMesh.material.uniforms.uTime.value = t;
      nodesMesh.rotation.y = Math.sin(t * 0.04) * 0.06;
    }
    if (connectionsMesh) {
      connectionsMesh.material.uniforms.uTime.value = t;
      connectionsMesh.rotation.y = Math.sin(t * 0.04) * 0.06;
    }

    if (t - lastAutoPulse > 5.5) {
      lastAutoPulse = t;
      const angle = t * 0.35;
      firePulse(new THREE.Vector3(Math.cos(angle) * 6, Math.sin(t * 0.2) * 3, Math.sin(angle) * 6));
    }

    starField.rotation.y += 0.00025;
    controls.update();
    composer.render();
  }

  function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    bloomPass.resolution.set(w, h);
  }

  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clock.stop();
    else clock.start();
  });

  animate();
}

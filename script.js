(function () {
  const STRINGS = {
    en: {
      'brand-name': 'Market and Products',
      'brand-tagline': 'Market-fit products',
      'nav-industries': 'Industries',
      'nav-approach': 'Approach',
      'nav-products': 'Products',
      'nav-contact': 'Contact',
      'hero-eyebrow': 'We build products aligned with real markets',
      'hero-line1': 'Products that',
      'hero-line2': 'fit the market',
      'hero-line3': 'and your industry.',
      'hero-lead':
        'We dedicate ourselves to building products tuned to each sector, regulations, workflows, and economics included, not one-size-fits-all templates.',
      'hero-cta': 'Explore industries',
      'hero-cta2': 'Start a conversation',
      'hero-metrics-label': 'Focus',
      'hero-highlight': 'Products',
      'stat-sectors': 'Core sectors',
      'stat-focus': 'Enterprise focus',
      'stat-region': 'Delivery',
      'industries-title': 'Industries we serve',
      'industries-label': 'Industries',
      'industries-sub': 'Deep domain context — from pit to patient, shelf to wellhead.',
      'ind-footnote': 'Mining, hyper manufacturing, public sector, telecom, proptech, oil and gas, and more...',
      'ind-mining': 'Mining',
      'ind-mining-desc': 'Operations, compliance & asset intelligence underground and open-pit.',
      'ind-retail': 'Retail',
      'ind-retail-desc': 'Omnichannel, inventory rhythm, and margin-aware merchandising.',
      'ind-finance': 'Financial Services',
      'ind-finance-desc': 'Risk, reporting, and regulated workflows without friction.',
      'ind-oilgas': 'Oil & Gas',
      'ind-oilgas-desc': 'Field logistics, HSE, and capital-intensive project control.',
      'ind-agro': 'Agro',
      'ind-agro-desc': 'Seasonality, traceability, and supply chain from farm to port.',
      'ind-health': 'Health',
      'ind-health-desc': 'Clinical pathways, privacy-by-design, and operational clarity.',
      'ind-energy': 'Energy & Utilities',
      'ind-energy-desc': 'Grid, renewables, and reliability under regulatory pressure.',
      'ind-logistics': 'Logistics',
      'ind-logistics-desc': 'Fleet, warehouse, and last-mile visibility end to end.',
      'ind-more': 'And more',
      'ind-more-desc':
        'Manufacturing, public sector, telecom, construction tech — if the market has rules, we map the product to them.',
      'approach-title': 'How we work',
      'approach-label': 'Process',
      'approach-sub':
        'We start with market fit, who pays, what they decide, and what cannot move, then ship lean products your teams actually adopt.',
      'approach-focus': ' We focus on ',
      'approach-etc': ', etc...',
      'step1-title': 'Discover',
      'step1-detail':
        'We map stakeholders, purchase triggers, and compliance boundaries before writing a single spec.',
      'step1-t1': 'Research',
      'step1-t2': 'ICP',
      'step1-t3': 'Compliance',
      'step2-title': 'Design fit',
      'step2-detail':
        'Scope, pricing logic, and milestones are anchored to how the market actually buys — not internal wishlists.',
      'step2-t1': 'Scope',
      'step2-t2': 'Economics',
      'step2-t3': 'Roadmap',
      'step3-title': 'Build & evolve',
      'step3-detail':
        'We release in tight loops with instrumentation, adoption metrics, and domain experts validating every increment.',
      'step3-t1': 'Ship',
      'step3-t2': 'Metrics',
      'step3-t3': 'Iterate',
      'products-title': 'Our most relevant products',
      'products-label': 'Portfolio',
      'products-sub': 'Platforms we ship and evolve with domain teams, built for real markets!',
      'prod-mining360-name': 'Mining 360',
      'prod-mining360-desc': 'End-to-end mine operations, compliance, and asset visibility in one place.',
      'prod-archlytics-name': 'Archlytics',
      'prod-archlytics-desc': 'Analytics and intelligence for industrial assets, risk, and performance.',
      'prod-pharmatic-name': 'Pharmatic',
      'prod-pharmatic-desc': 'Pharma workflows, pricing logic, and regulatory alignment for market access.',
      'prod-cyberx-name': 'CyberX',
      'prod-cyberx-desc': 'Cyber risk posture, controls, and compliance for regulated enterprises.',
      'prod-visionmining-name': 'VisionMining',
      'prod-visionmining-desc': 'Computer vision and sensing for extraction, processing, and safety on site.',
      'prod-marketmine-name': 'MarketMine',
      'prod-marketmine-desc': 'Market intelligence and deal flow for mining, metals, and commodities.',
      'prod-invenor-name': 'Invenor',
      'prod-invenor-desc': 'Inventory, procurement, and supply orchestration for industrial operations.',
      'prod-elex-name': 'Elex',
      'prod-elex-desc': 'Electrical grid analytics, asset health, and reliability for utilities and energy.',
      'product-flip-hint': 'Hover for details',
      'contact-title': 'Want to see our products?',
      'contact-label': 'Contact',
      'contact-sub':
        'Tell us about your market and industry — we’ll get back with relevant examples and next steps.',
      'contact-name': 'Full name',
      'contact-email': 'Work email',
      'contact-company': 'Company',
      'contact-industry': 'Industry',
      'contact-industry-placeholder': 'Select…',
      'contact-industry-other': 'Other',
      'contact-message': 'What are you looking to build?',
      'contact-hint': 'We typically reply almost instantly.',
      'contact-note': 'Market-fit discovery call',
      'contact-submit': 'Contact us',
      'contact-success': 'Thanks — your email app should open with the message ready to send.',
      'contact-error': 'Please fill in all required fields with a valid email.',
      'footer-by': 'by',
      'back-to-top': 'Back to top'
    },
    es: {
      'brand-name': 'Market and Products',
      'brand-tagline': 'Productos market-fit',
      'nav-industries': 'Industrias',
      'nav-approach': 'Enfoque',
      'nav-products': 'Productos',
      'nav-contact': 'Contacto',
      'hero-eyebrow': 'Construimos productos alineados al mercado real',
      'hero-line1': 'Productos que',
      'hero-line2': 'encajan con el mercado',
      'hero-line3': 'y con tu industria.',
      'hero-lead':
        'Nos dedicamos a construir productos adaptados a cada sector — normativa, flujos y economía incluidos — no plantillas genéricas.',
      'hero-cta': 'Ver industrias',
      'hero-cta2': 'Conversemos',
      'hero-metrics-label': 'Enfoque',
      'hero-highlight': 'Productos',
      'stat-sectors': 'Sectores clave',
      'stat-focus': 'Enfoque B2A',
      'stat-region': 'Alcance',
      'industries-title': 'Industrias que atendemos',
      'industries-label': 'Industrias',
      'industries-sub': 'Contexto de dominio — de mina a paciente, de tienda a pozo.',
      'ind-footnote': 'Minería, hiper manufactura, sector público, telecom, proptech, oil and gas, y más...',
      'ind-mining': 'Industria minera',
      'ind-mining-desc': 'Operaciones, cumplimiento e inteligencia de activos en rajo y subterránea.',
      'ind-retail': 'Retail',
      'ind-retail-desc': 'Omnicanal, inventario y merchandising con foco en margen.',
      'ind-finance': 'Servicios financieros',
      'ind-finance-desc': 'Riesgo, reporting y flujos regulados sin fricción.',
      'ind-oilgas': 'Oil & Gas',
      'ind-oilgas-desc': 'Logística de campo, HSE y control de proyectos capital-intensivos.',
      'ind-agro': 'Agro',
      'ind-agro-desc': 'Estacionalidad, trazabilidad y cadena de suministro del campo al puerto.',
      'ind-health': 'Salud',
      'ind-health-desc': 'Rutas clínicas, privacidad por diseño y claridad operacional.',
      'ind-energy': 'Energía y utilities',
      'ind-energy-desc': 'Red, renovables y confiabilidad bajo presión regulatoria.',
      'ind-logistics': 'Logística',
      'ind-logistics-desc': 'Flota, bodega y última milla con visibilidad de punta a punta.',
      'ind-more': 'Y más',
      'ind-more-desc':
        'Manufactura, sector público, telecom, construcción — si el mercado tiene reglas, mapeamos el producto a ellas.',
      'approach-title': 'Cómo trabajamos',
      'approach-label': 'Proceso',
      'approach-sub':
        'Partimos del market fit, quién paga, qué decide y qué no se mueve, y entregamos productos lean que tu equipo adopta.',
      'approach-focus': ' Nos enfocamos en ',
      'approach-etc': ', etc...',
      'step1-title': 'Descubrir',
      'step1-detail':
        'Mapeamos actores, disparadores de compra y límites de cumplimiento antes de escribir una especificación.',
      'step1-t1': 'Research',
      'step1-t2': 'ICP',
      'step1-t3': 'Cumplimiento',
      'step2-title': 'Diseñar el fit',
      'step2-detail':
        'Alcance, lógica de precio e hitos se anclan a cómo compra el mercado — no a listas internas.',
      'step2-t1': 'Alcance',
      'step2-t2': 'Economía',
      'step2-t3': 'Roadmap',
      'step3-title': 'Construir y evolucionar',
      'step3-detail':
        'Liberamos en ciclos cortos con instrumentación, métricas de adopción y expertos validando cada incremento.',
      'step3-t1': 'Entrega',
      'step3-t2': 'Métricas',
      'step3-t3': 'Iterar',
      'products-title': 'Nuestros productos más relevantes',
      'products-label': 'Portafolio',
      'products-sub': 'Plataformas que entregamos y evolucionamos con equipos de dominio, hechas para mercados reales!',
      'prod-mining360-name': 'Mining 360',
      'prod-mining360-desc': 'Operaciones mineras, cumplimiento y visibilidad de activos de punta a punta.',
      'prod-archlytics-name': 'Archlytics',
      'prod-archlytics-desc': 'Analítica e inteligencia para activos industriales, riesgo y desempeño.',
      'prod-pharmatic-name': 'Pharmatic',
      'prod-pharmatic-desc': 'Flujos farmacéuticos, precios y alineación regulatoria para acceso al mercado.',
      'prod-cyberx-name': 'CyberX',
      'prod-cyberx-desc': 'Postura de ciberriesgo, controles y cumplimiento para empresas reguladas.',
      'prod-visionmining-name': 'VisionMining',
      'prod-visionmining-desc': 'Visión computacional y sensores para extracción, procesamiento y seguridad en terreno.',
      'prod-marketmine-name': 'MarketMine',
      'prod-marketmine-desc': 'Inteligencia de mercado y deal flow para minería, metales y commodities.',
      'prod-invenor-name': 'Invenor',
      'prod-invenor-desc': 'Inventario, compras y orquestación de abastecimiento para operaciones industriales.',
      'prod-elex-name': 'Elex',
      'prod-elex-desc': 'Analítica de red eléctrica, salud de activos y confiabilidad para utilities y energía.',
      'product-flip-hint': 'Pasa el cursor para ver detalle',
      'contact-title': '¿Quieres ver nuestros productos?',
      'contact-label': 'Contacto',
      'contact-sub':
        'Cuéntanos tu mercado e industria — te respondemos con ejemplos relevantes y próximos pasos.',
      'contact-name': 'Nombre completo',
      'contact-email': 'Email corporativo',
      'contact-company': 'Empresa',
      'contact-industry': 'Industria',
      'contact-industry-placeholder': 'Seleccionar…',
      'contact-industry-other': 'Otra',
      'contact-message': '¿Qué producto o solución buscas construir?',
      'contact-hint': 'Solemos responder casi al instante.',
      'contact-note': 'Llamada de discovery market-fit',
      'contact-submit': 'Contactar',
      'contact-success': 'Gracias — se abrirá tu correo con el mensaje listo para enviar.',
      'contact-error': 'Completa los campos obligatorios con un email válido.',
      'footer-by': 'por',
      'back-to-top': 'Volver arriba'
    }
  };

  let lang = localStorage.getItem('mp-lang') || 'en';

  function applyLang(next) {
    lang = next;
    localStorage.setItem('mp-lang', lang);
    document.documentElement.lang = lang;
    const table = STRINGS[lang] || STRINGS.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (table[key]) el.textContent = table[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (table[key]) el.setAttribute('aria-label', table[key]);
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  applyLang(lang);

  const nav = document.getElementById('main-nav');
  const navToggle = document.getElementById('nav-toggle');
  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) closeNav();
    });
  }

  const CONTACT_EMAIL = 'contacto@marketandproducts.com';
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('contact-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const langNow = localStorage.getItem('mp-lang') || 'en';
      const msg = STRINGS[langNow] || STRINGS.en;

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const company = form.company.value.trim();
      const industry = form.industry.value;
      const message = form.message.value.trim();

      if (!name || !email || !industry || !message || !email.includes('@')) {
        if (statusEl) {
          statusEl.textContent = msg['contact-error'];
          statusEl.classList.remove('hidden', 'is-success');
          statusEl.classList.add('is-error');
        }
        return;
      }

      const industryLabel =
        form.industry.options[form.industry.selectedIndex]?.textContent || industry;
      const subject = encodeURIComponent(
        langNow === 'es' ? 'Consulta — Market and Products' : 'Inquiry — Market and Products'
      );
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : '',
          `Industry: ${industryLabel}`,
          '',
          message
        ]
          .filter(Boolean)
          .join('\n')
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      if (statusEl) {
        statusEl.textContent = msg['contact-success'];
        statusEl.classList.remove('hidden', 'is-error');
        statusEl.classList.add('is-success');
      }
    });
  }

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    const toggleBackToTop = () => {
      const show = window.scrollY > 200;
      backToTop.classList.toggle('is-visible', show);
      backToTop.setAttribute('aria-hidden', show ? 'false' : 'true');
      backToTop.tabIndex = show ? 0 : -1;
    };

    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.style.scrollBehavior = prev;
    });
  }

  const revealTargets = document.querySelectorAll(
    '.problem-card, .sector-card, .process-card, .capability-card, .product-card, .contact-card, .section-head'
  );

  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  const systemNodes = Array.from(document.querySelectorAll('.sys-box, .sys-core'));
  if (systemNodes.length) {
    let hot = 0;
    systemNodes[hot].classList.add('is-hot');
    window.setInterval(() => {
      systemNodes[hot].classList.remove('is-hot');
      hot = (hot + 1) % systemNodes.length;
      systemNodes[hot].classList.add('is-hot');
    }, 900);
  }

})();

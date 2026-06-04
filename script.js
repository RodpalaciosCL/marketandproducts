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
      'hero-title': 'Products that fit the market.<br>Built for your industry.',
      'hero-lead':
        'We build products aligned with real markets, tuned to sector workflows, regulations, and economics, not one-size-fits-all templates.',
      'hero-cta-products': 'Our products',
      'hero-cta': 'Explore industries',
      'sys-generic': 'Generic software',
      'sys-misalign': 'Misalignment',
      'sys-industry': 'Industry context',
      'sys-industry-small': 'Workflows · Compliance',
      'sys-core-title': 'Market and Products',
      'sys-core-small': 'Market-fit execution',
      'sys-adoption': 'Adoption',
      'sys-adoption-small': 'Operations · Delivery',
      'cap-label': 'Capabilities',
      'cap-title': 'Your market, fully mapped.',
      'cap-sub':
        'We combine strategy, domain context, and execution so product decisions remain aligned from discovery to rollout.',
      'cap1-title': 'Understands your market architecture.',
      'cap1-desc':
        'We model relationships across actors, workflows, constraints, and economics before implementation.',
      'cap2-title': 'Protects regulated workflows.',
      'cap2-desc':
        'Design and delivery account for compliance and auditability from day one, not as late patches.',
      'cap3-title': 'Strategizes before building.',
      'cap3-desc':
        'We run discovery to plan to execution loops so roadmap decisions are grounded in real buying logic.',
      'cap4-title': 'Executes complex delivery programs.',
      'cap4-desc':
        'From integration to product launch, we coordinate teams, tooling, and milestones around measurable outcomes.',
      'cap5-title': 'Runs isolated validation cycles.',
      'cap5-desc':
        'We test alternatives safely, compare outcomes, and ship only what improves adoption and performance.',
      'cap6-title': 'Delivers with speed and control.',
      'cap6-desc':
        'Fast iteration without losing clarity, ownership, or strategic direction at enterprise scale.',
      'prod-badge-analytics': 'Analytics',
      'prod-badge-ops': 'Ops',
      'prod-badge-mining': 'Mining',
      'prod-badge-pharma': 'Pharma',
      'prod-badge-security': 'Security',
      'prod-badge-education': 'Education',
      'prod-badge-markets': 'Markets',
      'prod-badge-exclusive': 'Exclusive',
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
      'prod-pharmatic-name': 'Pharmalytics',
      'prod-pharmatic-desc': 'Pharma workflows, pricing logic, and regulatory alignment for market access.',
      'prod-cyberx-name': 'CyberX',
      'prod-cyberx-desc': 'Cyber risk posture, controls, and compliance for regulated enterprises.',
      'prod-learningtogether-name': 'Learning Together',
      'prod-learningtogether-desc': 'Custom educational platform for children',
      'prod-marketmine-name': 'MarketMine',
      'prod-marketmine-desc': 'Market intelligence and deal flow for mining, metals, and commodities.',
      'prod-invenor-name': 'Invenor',
      'prod-invenor-desc': 'Inventory, procurement, and supply orchestration for industrial operations.',
      'prod-ogp-name': 'O.G.P.',
      'prod-ogp-desc': 'Exclusive Platform for Exclusive experiences',
      'product-flip-hint': 'Hover for details',
      'contact-title': 'Want to see our products?',
      'contact-label': 'Contact',
      'contact-sub':
        'Tell us about your market and industry, we’ll get back with relevant examples and next steps.',
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
      'contact-sending': 'Sending…',
      'contact-success': 'Message sent. Thank you!',
      'contact-send-error': 'Could not send right now. Please try again in a moment.',
      'contact-error': 'Please fill in all required fields with a valid email.',
      'contact-modal-title': 'Message sent',
      'contact-modal-body': 'Thanks! We received your message and will get back to you soon.',
      'contact-modal-close': 'Close',
      'footer-by': 'by',
      'footer-copy': '© 2024 Market and Products',
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
      'hero-title': 'Productos que encajan con el mercado.<br>Hechos para tu industria.',
      'hero-lead':
        'Construimos productos alineados al mercado real, adaptados a flujos del sector, normativa y economía, no plantillas genéricas.',
      'hero-cta-products': 'Nuestros productos',
      'hero-cta': 'Ver industrias',
      'sys-generic': 'Software genérico',
      'sys-misalign': 'Desalineación',
      'sys-industry': 'Contexto de industria',
      'sys-industry-small': 'Flujos · Cumplimiento',
      'sys-core-title': 'Market and Products',
      'sys-core-small': 'Ejecución market-fit',
      'sys-adoption': 'Adopción',
      'sys-adoption-small': 'Operaciones · Entrega',
      'cap-label': 'Capacidades',
      'cap-title': 'Tu mercado, mapeado por completo.',
      'cap-sub':
        'Combinamos estrategia, contexto de dominio y ejecución para que las decisiones de producto sigan alineadas de discovery a rollout.',
      'cap1-title': 'Entiende la arquitectura de tu mercado.',
      'cap1-desc':
        'Modelamos relaciones entre actores, flujos, restricciones y economía antes de implementar.',
      'cap2-title': 'Protege flujos regulados.',
      'cap2-desc':
        'Diseño y entrega contemplan cumplimiento y auditabilidad desde el día uno, no como parches tardíos.',
      'cap3-title': 'Estrategia antes de construir.',
      'cap3-desc':
        'Ciclos de discovery a plan a ejecución para que el roadmap refleje cómo compra el mercado.',
      'cap4-title': 'Ejecuta programas de entrega complejos.',
      'cap4-desc':
        'De integración a lanzamiento, coordinamos equipos, herramientas e hitos con resultados medibles.',
      'cap5-title': 'Ciclos de validación aislados.',
      'cap5-desc':
        'Probamos alternativas con seguridad, comparamos resultados y entregamos lo que mejora adopción y desempeño.',
      'cap6-title': 'Entrega con velocidad y control.',
      'cap6-desc':
        'Iteración rápida sin perder claridad, ownership ni dirección estratégica a escala enterprise.',
      'prod-badge-analytics': 'Analítica',
      'prod-badge-ops': 'Operaciones',
      'prod-badge-mining': 'Minería',
      'prod-badge-pharma': 'Pharma',
      'prod-badge-security': 'Seguridad',
      'prod-badge-education': 'Educación',
      'prod-badge-markets': 'Mercados',
      'prod-badge-exclusive': 'Exclusivo',
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
      'prod-pharmatic-name': 'Pharmalytics',
      'prod-pharmatic-desc': 'Flujos farmacéuticos, precios y alineación regulatoria para acceso al mercado.',
      'prod-cyberx-name': 'CyberX',
      'prod-cyberx-desc': 'Postura de ciberriesgo, controles y cumplimiento para empresas reguladas.',
      'prod-learningtogether-name': 'Learning Together',
      'prod-learningtogether-desc': 'Plataforma educativa customizada para niños',
      'prod-marketmine-name': 'MarketMine',
      'prod-marketmine-desc': 'Inteligencia de mercado y deal flow para minería, metales y commodities.',
      'prod-invenor-name': 'Invenor',
      'prod-invenor-desc': 'Inventario, compras y orquestación de abastecimiento para operaciones industriales.',
      'prod-ogp-name': 'O.G.P.',
      'prod-ogp-desc': 'Plataforma exclusiva para experiencias exclusivas',
      'product-flip-hint': 'Pasa el cursor para ver detalle',
      'contact-title': '¿Quieres ver nuestros productos?',
      'contact-label': 'Contacto',
      'contact-sub':
        'Cuéntanos tu mercado e industria, te respondemos con ejemplos relevantes y próximos pasos.',
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
      'contact-sending': 'Enviando…',
      'contact-success': 'Mensaje enviado. ¡Gracias!',
      'contact-send-error': 'No se pudo enviar ahora. Intenta de nuevo en un momento.',
      'contact-error': 'Completa los campos obligatorios con un email válido.',
      'contact-modal-title': 'Mensaje enviado',
      'contact-modal-body': '¡Gracias! Recibimos tu mensaje y te responderemos pronto.',
      'contact-modal-close': 'Cerrar',
      'footer-by': 'por',
      'footer-copy': '© 2024 Market and Products',
      'back-to-top': 'Volver arriba'
    }
  };

  function normalizeLang(code) {
    const value = (code || 'en').toLowerCase();
    return STRINGS[value] ? value : 'en';
  }

  let lang = normalizeLang(localStorage.getItem('mp-lang'));

  function applyLang(next) {
    lang = normalizeLang(next);
    localStorage.setItem('mp-lang', lang);
    document.documentElement.lang = lang;
    const table = STRINGS[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (table[key] != null) el.textContent = table[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (table[key] != null) el.innerHTML = table[key];
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

  window.addEventListener('pageshow', () => applyLang(lang));

  function jumpTo(hash) {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    if (!hash || hash === '#' || hash === '#home') {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const headerH = document.querySelector('.header')?.offsetHeight || 70;
        const top = el.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo(0, Math.max(0, top));
      }
    }

    root.style.scrollBehavior = prev;
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href) return;
      e.preventDefault();
      jumpTo(href);
    });
  });

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

  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('contact-status');
  const contactModal = document.getElementById('contact-modal');
  const submitBtn = form?.querySelector('.contact-submit');

  function getMsg() {
    return STRINGS[normalizeLang(localStorage.getItem('mp-lang'))] || STRINGS.en;
  }

  function setStatus(text, type) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.classList.remove('hidden', 'is-success', 'is-error');
    if (type) statusEl.classList.add(type === 'success' ? 'is-success' : 'is-error');
  }

  function openContactModal() {
    if (!contactModal) return;
    contactModal.hidden = false;
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const closeBtn = contactModal.querySelector('[data-close-modal]');
    closeBtn?.focus();
  }

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.hidden = true;
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  if (contactModal) {
    contactModal.querySelectorAll('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', closeContactModal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !contactModal.hidden) closeContactModal();
    });
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const msg = getMsg();
      const langNow = normalizeLang(localStorage.getItem('mp-lang'));

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const company = form.company.value.trim();
      const industry = form.industry.value;
      const message = form.message.value.trim();

      if (!name || !email || !industry || !message || !email.includes('@')) {
        setStatus(msg['contact-error'], 'error');
        return;
      }

      const industryLabel =
        form.industry.options[form.industry.selectedIndex]?.textContent || industry;

      const payload = new FormData();
      payload.append('name', name);
      payload.append('email', email);
      payload.append('company', company);
      payload.append('industry', industry);
      payload.append('industry_label', industryLabel);
      payload.append('message', message);
      payload.append('lang', langNow);
      payload.append('website', form.website?.value || '');

      submitBtn?.classList.add('is-loading');
      if (submitBtn) {
        const label = submitBtn.querySelector('[data-i18n="contact-submit"]');
        if (label) label.textContent = msg['contact-sending'];
      }
      setStatus(msg['contact-sending'], 'success');

      try {
        const res = await fetch('contact.php', {
          method: 'POST',
          body: payload,
          headers: { Accept: 'application/json' }
        });
        const data = await res.json().catch(() => ({}));

        if (!res.ok || !data.ok) {
          throw new Error(data.error || 'send_failed');
        }

        form.reset();
        setStatus('', '');
        statusEl?.classList.add('hidden');
        openContactModal();
      } catch {
        setStatus(msg['contact-send-error'], 'error');
      } finally {
        submitBtn?.classList.remove('is-loading');
        if (submitBtn) {
          const label = submitBtn.querySelector('[data-i18n="contact-submit"]');
          if (label) label.textContent = msg['contact-submit'];
        }
      }
    });
  }

  const backToTop = document.getElementById('back-to-top');
  const footerEl = document.querySelector('.footer');

  if (backToTop) {
    const baseBottom = 16;

    const updateBackToTop = () => {
      const show = window.scrollY > 200;
      backToTop.classList.toggle('is-visible', show);
      backToTop.setAttribute('aria-hidden', show ? 'false' : 'true');
      backToTop.tabIndex = show ? 0 : -1;

      if (footerEl) {
        const footerTop = footerEl.getBoundingClientRect().top;
        const overlap = window.innerHeight - footerTop;
        if (overlap > 0) {
          backToTop.style.bottom = `${overlap + baseBottom + 8}px`;
        } else {
          backToTop.style.bottom = `${baseBottom}px`;
        }
      }
    };

    updateBackToTop();
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    window.addEventListener('resize', updateBackToTop);

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      jumpTo('#home');
    });
  }

  const revealTargets = document.querySelectorAll(
    '.sector-card, .process-card, .capability-card, .product-card, .contact-card, .offline-card, .section-head'
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

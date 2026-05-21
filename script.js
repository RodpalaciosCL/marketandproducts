(function () {
  const STRINGS = {
    en: {
      'brand-name': 'Market and Products',
      'brand-tagline': 'Market-fit products',
      'nav-industries': 'Industries',
      'nav-approach': 'Approach',
      'nav-contact': 'Contact',
      'hero-eyebrow': 'We build products aligned with real markets',
      'hero-line1': 'Products that',
      'hero-line2': 'fit the market',
      'hero-line3': 'and your industry.',
      'hero-lead':
        'We dedicate ourselves to building products tuned to each sector — regulations, workflows, and economics included — not one-size-fits-all templates.',
      'hero-cta': 'Explore industries',
      'hero-cta2': 'Start a conversation',
      'stat-sectors': 'Core sectors',
      'stat-focus': 'Enterprise focus',
      'stat-region': 'Delivery',
      'industries-title': 'Industries we serve',
      'industries-sub': 'Deep domain context — from pit to patient, shelf to wellhead.',
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
      'approach-p1':
        'Every engagement starts with market fit: who pays, what decision they make, and which constraints are non-negotiable.',
      'approach-p2':
        'Then we ship — lean architecture, measurable outcomes, and products your teams actually adopt.',
      'approach-p3':
        'Three phases, one thread: understand the market, design the fit, deliver and learn in production.',
      'approach-cta': 'Talk to us about your product',
      'step1-title': 'Discover',
      'step1-desc': 'Industry, buyers, and regulatory landscape.',
      'step1-detail':
        'We map stakeholders, purchase triggers, and compliance boundaries before writing a single spec.',
      'step1-t1': 'Research',
      'step1-t2': 'ICP',
      'step1-t3': 'Compliance',
      'step1-phase': 'Phase 01',
      'step2-title': 'Design fit',
      'step2-desc': 'Product scope tied to market economics.',
      'step2-detail':
        'Scope, pricing logic, and milestones are anchored to how the market actually buys — not internal wishlists.',
      'step2-t1': 'Scope',
      'step2-t2': 'Economics',
      'step2-t3': 'Roadmap',
      'step2-phase': 'Phase 02',
      'step3-title': 'Build & evolve',
      'step3-desc': 'Ship, measure, iterate with domain experts.',
      'step3-detail':
        'We release in tight loops with instrumentation, adoption metrics, and domain experts validating every increment.',
      'step3-t1': 'Ship',
      'step3-t2': 'Metrics',
      'step3-t3': 'Iterate',
      'step3-phase': 'Phase 03',
      'step-cta': 'Market-fit lens',
      'contact-title': 'Want to see our products?',
      'contact-sub':
        'Tell us about your market and industry — we’ll get back with relevant examples and next steps.',
      'contact-name': 'Full name',
      'contact-email': 'Work email',
      'contact-company': 'Company',
      'contact-industry': 'Industry',
      'contact-industry-placeholder': 'Select…',
      'contact-industry-other': 'Other',
      'contact-message': 'What are you looking to build?',
      'contact-hint': 'We typically reply within 1–2 business days.',
      'contact-note': 'Market-fit discovery call',
      'contact-submit': 'Contact us',
      'contact-success': 'Thanks — your email app should open with the message ready to send.',
      'contact-error': 'Please fill in all required fields with a valid email.',
      'footer-by': 'by'
    },
    es: {
      'brand-name': 'Market and Products',
      'brand-tagline': 'Productos market-fit',
      'nav-industries': 'Industrias',
      'nav-approach': 'Enfoque',
      'nav-contact': 'Contacto',
      'hero-eyebrow': 'Construimos productos alineados al mercado real',
      'hero-line1': 'Productos que',
      'hero-line2': 'encajan con el mercado',
      'hero-line3': 'y con tu industria.',
      'hero-lead':
        'Nos dedicamos a construir productos adaptados a cada sector — normativa, flujos y economía incluidos — no plantillas genéricas.',
      'hero-cta': 'Ver industrias',
      'hero-cta2': 'Conversemos',
      'stat-sectors': 'Sectores clave',
      'stat-focus': 'Enfoque B2B',
      'stat-region': 'Alcance',
      'industries-title': 'Industrias que atendemos',
      'industries-sub': 'Contexto de dominio — de mina a paciente, de tienda a pozo.',
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
      'approach-p1':
        'Cada proyecto parte del market fit: quién paga, qué decisión toma y qué restricciones no se negocian.',
      'approach-p2':
        'Luego entregamos — arquitectura lean, resultados medibles y productos que tu equipo adopta.',
      'approach-p3':
        'Tres fases, un hilo: entender el mercado, diseñar el fit y aprender en producción.',
      'approach-cta': 'Conversemos sobre tu producto',
      'step1-title': 'Descubrir',
      'step1-desc': 'Industria, compradores y marco regulatorio.',
      'step1-detail':
        'Mapeamos actores, disparadores de compra y límites de cumplimiento antes de escribir una especificación.',
      'step1-t1': 'Research',
      'step1-t2': 'ICP',
      'step1-t3': 'Cumplimiento',
      'step1-phase': 'Fase 01',
      'step2-title': 'Diseñar el fit',
      'step2-desc': 'Alcance del producto atado a la economía del mercado.',
      'step2-detail':
        'Alcance, lógica de precio e hitos se anclan a cómo compra el mercado — no a listas internas.',
      'step2-t1': 'Alcance',
      'step2-t2': 'Economía',
      'step2-t3': 'Roadmap',
      'step2-phase': 'Fase 02',
      'step3-title': 'Construir y evolucionar',
      'step3-desc': 'Entregar, medir e iterar con expertos de dominio.',
      'step3-detail':
        'Liberamos en ciclos cortos con instrumentación, métricas de adopción y expertos validando cada incremento.',
      'step3-t1': 'Entrega',
      'step3-t2': 'Métricas',
      'step3-t3': 'Iterar',
      'step3-phase': 'Fase 03',
      'step-cta': 'Lente market-fit',
      'contact-title': '¿Quieres ver nuestros productos?',
      'contact-sub':
        'Cuéntanos tu mercado e industria — te respondemos con ejemplos relevantes y próximos pasos.',
      'contact-name': 'Nombre completo',
      'contact-email': 'Email corporativo',
      'contact-company': 'Empresa',
      'contact-industry': 'Industria',
      'contact-industry-placeholder': 'Seleccionar…',
      'contact-industry-other': 'Otra',
      'contact-message': '¿Qué producto o solución buscas construir?',
      'contact-hint': 'Solemos responder en 1–2 días hábiles.',
      'contact-note': 'Llamada de discovery market-fit',
      'contact-submit': 'Contactar',
      'contact-success': 'Gracias — se abrirá tu correo con el mensaje listo para enviar.',
      'contact-error': 'Completa los campos obligatorios con un email válido.',
      'footer-by': 'por'
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
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  applyLang(lang);

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
})();

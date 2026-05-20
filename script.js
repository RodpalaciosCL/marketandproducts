(function () {
  const STRINGS = {
    en: {
      'brand-tagline': 'Market-fit products',
      'nav-industries': 'Industries',
      'nav-approach': 'Approach',
      'nav-contact': 'Contact',
      'hero-eyebrow': 'We build products aligned with real markets',
      'hero-line1': 'Software and platforms that ',
      'hero-line2': 'fit your market',
      'hero-line3': ' and your industry.',
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
      'step1-title': 'Discover',
      'step1-desc': 'Industry, buyers, and regulatory landscape.',
      'step2-title': 'Design fit',
      'step2-desc': 'Product scope tied to market economics.',
      'step3-title': 'Build & evolve',
      'step3-desc': 'Ship, measure, iterate with domain experts.',
      'footer-by': 'by'
    },
    es: {
      'brand-tagline': 'Productos market-fit',
      'nav-industries': 'Industrias',
      'nav-approach': 'Enfoque',
      'nav-contact': 'Contacto',
      'hero-eyebrow': 'Construimos productos alineados al mercado real',
      'hero-line1': 'Software y plataformas que ',
      'hero-line2': 'encajan con tu mercado',
      'hero-line3': ' y con tu industria.',
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
      'step1-title': 'Descubrir',
      'step1-desc': 'Industria, compradores y marco regulatorio.',
      'step2-title': 'Diseñar el fit',
      'step2-desc': 'Alcance del producto atado a la economía del mercado.',
      'step3-title': 'Construir y evolucionar',
      'step3-desc': 'Entregar, medir e iterar con expertos de dominio.',
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
})();

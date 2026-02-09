// Estructura completa de proyectos con categorización y detalles
export default [
  // ECOSISTEMA AMPARO & COMPANY (Proyectos Destacados)
  {
    nombre: 'Amparo & Company',
    titulo: 'amparoandcompany.com',
    descripcion: 'Landing page interactiva que conecta y monitoriza todos los servicios del ecosistema. Visualización tipo hub, matriz de servicios, indicadores de estado y modal de ecosistema completo.',
    url: 'https://github.com/vigliom/amparoandcompany',
    preview: 'https://www.amparoandcompany.com',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'SVG'],
    tipo: 'ecosistema',
    badge: 'Landing Hub',
    destacado: true,
    logros: [
      'Renderizado dinámico de servicios y conexiones SVG animadas',
      'Ping automático y badges de estado en tiempo real',
      'Diseño responsive y modular'
    ],
    meta: 'PWA-ready'
  },
  {
    nombre: 'ValePorMil',
    titulo: 'ValePorMil',
    descripcion: 'Sistema completo para crear y gestionar vales digitales canjeables con integración de Google Calendar. Sistema de roles (admin/usuario) y persistencia client-side.',
    url: 'https://github.com/vigliom/ValePorMil',
    preview: 'https://canjearvales.amparoandcompany.com',
    stack: ['Vue 3', 'Vite', 'JavaScript', 'localStorage', 'Google Calendar API'],
    tipo: 'ecosistema',
    badge: 'Vales Digitales',
    destacado: false,
    logros: [
      'Sistema de roles completo (admin/user) sin backend',
      'Persistencia 100% client-side con localStorage',
      'Integración bidireccional con Google Calendar',
      'Generación dinámica de archivos .ics'
    ],
    meta: 'Client-side · PWA-ready'
  },
  {
    nombre: 'La Cocina de Amparo',
    titulo: 'La Cocina de Amparo',
    descripcion: 'Aplicación web de recetas con panel de administración integrado, sistema de backup/restore automático y persistencia innovadora usando GitHub Gists API como base de datos.',
    url: 'https://github.com/vigliom/LaCocinaDeAmparo',
    preview: 'https://recetas.amparoandcompany.com',
    stack: ['Vue 3', 'Express.js', 'Node.js', 'GitHub Gists API', 'Docker'],
    tipo: 'ecosistema',
    badge: 'Recetas Inteligente',
    destacado: false,
    logros: [
      'GitHub Gists como base de datos en producción',
      'Panel Admin integrado con CRUD completo',
      'Sistema de backup/restore con Base64',
      'Deployment con Docker en Fly.io/Render'
    ],
    meta: 'SPA · Gists Storage'
  },
  // OTROS PROYECTOS
  {
    nombre: 'Personalized Product Steps',
    titulo: 'Personalized Product Steps',
    descripcion: 'Generador de pasos personalizados para productos, con lógica dinámica y adaptable.',
    url: 'https://github.com/vigliom/personalized-product-steps',
    preview: null,
    stack: ['Vue', 'Node.js', 'MongoDB'],
    tipo: 'proyecto',
    badge: null,
    destacado: false,
    logros: [],
    meta: 'Open Source'
  }
];

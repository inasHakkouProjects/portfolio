export const personalInfo = {
    name: 'Inas Hakkou',
    firstName: 'Inas',
    lastName: 'Hakkou',
    role: 'Développeur Full Stack',
    email: 'inas.projects11@gmail.com',
    location: 'Bordeaux, France',
    bio: 'Passionné par le développement web moderne, les animations 3D et la création d\'expériences utilisateur immersives. Je combine créativité et expertise technique pour transformer des idées innovantes en réalités numériques.',
    stats: {
      experience: 2,
      projects: 24,
    },
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/inas-hakkou-4b7046295/',
      instgram: 'https://www.instagram.com/inas_hakkou/',
      facebook: 'https://www.facebook.com/inass.hakkou11/',
    }
  }
  
  export const skills = {
    frontend: [
      { name: 'Angular', level: 80 },
      { name: 'React', level: 60 },
      { name: 'Next.js', level: 60 },
      { name: 'TypeScript', level: 70 },
      { name: 'TailwindCSS', level: 60 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Three.js', level: 50 },
    ],
    backend: [
      { name: 'Symfony', level: 80 },
      { name: 'Symfony UX & Stimulus', level: 80 },
      { name: 'Node.js', level: 60 },
      {name: 'Django', level:60}
    ],
    BDD: [
      { name: 'Doctrine ORM', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'MariaDB', level: 82 },
    ],
    design: [
      { name: 'Figma', level: 85 },
      { name: 'Canva', level: 85 },
      { name: 'DaVinciResolve', level: 85 },
      { name: 'Blender', level: 75 },
      { name: 'Three.js', level: 50 },
    ],
    project: [
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Git/GitHub/GitLab', level: 95 },
      { name: 'Jira/Notion/Trello', level: 85 },
      { name: 'Documentation', level: 88 },
    ],
    tools: [
      { name: 'VS Code', level: 95 },
      { name: 'Cursor', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Nginx', level: 60 },
      { name: 'OVH Cloud', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 60 },
    ],
  }
  
  export const architecture = [
    {logo: '/logos/logo1.png',name: 'Simplicité Radicale', description: 'La complexité est inévitable, mais la confusion est un choix. Je privilégie toujours le code lisible et maintenable.'},
    {logo:'/logos/logo2.png', name: 'Performance First', description: 'Une interface magnifique ne sert à rien si elle est lente. L\'optimisation est au cœur de mon processus.'},
    {logo:'/logos/logo3.png', name: 'Design Intuitif', description: 'L\'utilisateur ne doit jamais se demander où cliquer. L\'UX guide chacune de mes décisions techniques.'},
    {logo:'/logos/logo4.png', name:'Architecture évolutive', description: 'Je construis des fondations solides capables de grandir avec votre entreprise, sans dette technique.'},
    {logo:'/logos/logo5.png', name:'Collaboration Transparente', description: 'La communication est la clé. Je travaille en partenariat étroit avec mes clients, sans jargon inutile.'},
    {logo:'/logos/logo6.png', name:'Apprentissage Continu', description:'La technologie évolue vite. Je consacre 20% de mon temps à la veille technologique pour rester à la pointe.'},
    {logo:'/logos/logo7.png', name:'Sécurité par Design', description:'La protection des données n\'est pas une option. J\'intègre les meilleures pratiques de sécurité dès la première ligne de code.'},
    {logo:'/logos/logo8.png', name:'Impact Positif', description:'Je choisis des projets qui apportent une réelle valeur ajoutée et respectent des principes éthiques.'}
  ]
  
  export const timeline = [
    // ✅ EXPERIENCES
    {
      type: 'experience',
      title: 'Développeuse Full-Stack – CDI',
      period: 'Depuis oct. 2025',
      org: 'Nexcellis',
      description:
        "Développement de plateformes SaaS from scratch en totale autonomie. Conception d’architecture, APIs REST sécurisées et base PostgreSQL. Full-Stack UI (dashboards/back-office). DevOps (Docker, CI/CD, déploiement OVH, Nginx). Collaboration directe métier et pilotage technique.",
      technologies:
        'Angular, Symfony, REST, Docker, Bootstrap, PostgreSQL, GitLab CI/CD, Nginx, React.js, MediaPipe, Node.js, NestJS',
      badge: 'Experience',
    },
    {
      type: 'experience',
      title: 'Développeuse Full-Stack PHP / Symfony – Stage',
      period: '03/2025 - 09/2025',
      org: 'Orange',
      description:
        "Développement d’une application web interne de gestion de formations e-learning. Conception UI/UX sous Figma et intégration responsive. Refonte vers une architecture modulaire avec Symfony UX. Optimisation perf & SQL, sécurisation des routes. Participation aux cadrages et démos produit.",
      technologies:
        'Figma, Symfony UX, Stimulus, JavaScript, AJAX, PHP 8, MariaDB, GitLab, Kubernetes, HeidiSQL, jQuery, Boosted',
      badge: 'Experience',
    },
    {
      type: 'experience',
      title: 'Développeuse Full-Stack Symfony / Angular – Stage',
      period: '05/2024 - 08/2024',
      org: 'TI3RS',
      description:
        "Développement d’interfaces Angular connectées à une API REST Symfony. Amélioration de l’engagement via un chatbot intelligent. Création et mise en ligne rapide d’un site vitrine événementiel.",
      technologies:
        'Bootstrap, TypeScript, Angular, Symfony, PHP, MySQL, Webflow, Airtable, Figma',
      badge: 'Experience',
    },
  
    // ✅ FREELANCE (on garde type=experience mais badge custom)
    {
      type: 'experience',
      title: 'Développeuse Frontend Angular – Application mobile web (Offres étudiantes)',
      period: '2024 - 2025',
      org: 'Freelance',
      description:
        "Conception UI/UX sur Figma (mobile-first). Développement Angular avec Angular Material et animations. Intégration d’APIs Django + gestion d’erreurs côté frontend. Tests fonctionnels des endpoints avec Postman.",
      technologies:
        'Angular, Angular Material, SCSS, REST, Django, Postman, Firebase, MySQL, Git/GitHub, Figma',
      badge: 'Freelance',
    },
    {
      type: 'experience',
      title: 'Développeuse Full-Stack Symfony – Site e-commerce (Fruits Bio Shop)',
      period: '2021 - 2022',
      org: 'Freelance',
      description:
        "Développement complet frontend + backend sous Symfony (MVC). Mise en place catalogue, panier, commandes et paiements Stripe. Intégration responsive & personnalisation UI. Versioning et documentation technique.",
      technologies: 'PHP, Symfony, SCSS, JavaScript, Bootstrap, AJAX, MySQL, Git/GitHub, Stripe',
      badge: 'Freelance',
    },
  
    // ✅ FORMATIONS
    {
      type: 'formation',
      title: 'Master Conception et Intégration Multimédia – Développement Web & Mobile',
      period: 'Université Lumière Lyon 2',
      org: 'Lyon, France',
      description:
        "Formation orientée développement web/mobile, conception d’expériences numériques et intégration multimédia.",
      badge: 'Formation',
    },
    {
      type: 'formation',
      title: 'Licence Sciences Mathématiques et Informatiques',
      period: 'Université Mohammed Premier',
      org: 'Oujda, Maroc',
      description:
        "Fondations solides en algorithmique, programmation, mathématiques et informatique.",
      badge: 'Formation',
    },
    {
      type: 'formation',
      title: 'Formation en Anglais',
      period: 'Centre American',
      org: 'Oujda, Maroc',
      description:
        "Renforcement des compétences linguistiques (anglais) et communication.",
      badge: 'Formation',
    },
  ] as const
  
  
  export const projects = [
    {
      id: 1,
      title: 'Application E-Commerce 3D',
      description: 'Plateforme e-commerce immersive avec visualisation 3D des produits, animations fluides et expérience utilisateur premium.',
      image: '/placeholder-project-1.jpg',
      technologies: ['Next.js', 'Three.js', 'Stripe', 'PostgreSQL'],
      category: 'web-immersif',
      link: 'https://example.com',
    },
    {
      id: 2,
      title: 'SaaS Dashboard Analytics',
      description: 'Tableau de bord analytique en temps réel avec graphiques interactifs, notifications push et gestion multi-utilisateurs.',
      image: '/placeholder-project-2.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      category: 'saas',
      link: 'https://example.com',
    },
    {
      id: 3,
      title: 'API REST Microservices',
      description: 'Architecture microservices scalable avec authentification JWT, rate limiting et monitoring avancé.',
      image: '/placeholder-project-3.jpg',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      category: 'backend',
      link: 'https://example.com',
    },
    {
      id: 4,
      title: 'Portfolio Artistique 3D',
      description: 'Portfolio artistique avec galerie 3D interactive, animations WebGL et expérience narrative immersive.',
      image: '/placeholder-project-4.jpg',
      technologies: ['Three.js', 'GSAP', 'React', 'WebGL'],
      category: 'web-immersif',
      link: 'https://example.com',
    },
    {
      id: 5,
      title: 'Plateforme SaaS CRM',
      description: 'CRM complet avec gestion de contacts, pipeline de ventes, reporting et intégrations tierces.',
      image: '/placeholder-project-5.jpg',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      category: 'saas',
      link: 'https://example.com',
    },
    {
      id: 6,
      title: 'Backend Architecture Scalable',
      description: 'Infrastructure backend haute performance avec cache distribué, queues de messages et monitoring.',
      image: '/placeholder-project-6.jpg',
      technologies: ['Node.js', 'Redis', 'RabbitMQ', 'Prometheus'],
      category: 'backend',
      link: 'https://example.com',
    },
  ]
  
  export const projectCategories = [
    { id: 'all', label: 'Tous' },
    { id: 'web-immersif', label: 'Web Immersif (3D)' },
    { id: 'saas', label: 'Application SaaS' },
    { id: 'backend', label: 'Architecture Backend' },
  ]
  
  
  
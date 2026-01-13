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
      subtitle:'',
      description: 'Plateforme e-commerce immersive avec visualisation 3D des produits, animations fluides et expérience utilisateur premium.',
      image: '/projects/pictures/e-cmmerce.png',
      video: 'https://res.cloudinary.com/drzzalwcm/video/upload/v1768223344/e-commerce-webSite_samzth.mp4',
      technologies: ['Next.js', 'React', 'Three.js', 'Stripe', 'PostgreSQL'],
      category: 'web-immersif',
      createdAt: '1 octobre 2025',
      projectType: 'Développement Full-Stack',
      year: 2025,
      technicalApproach: 'Ce projet a été conçu avec une attention particulière à la performance, au référencement et à l’expérience utilisateur. L’architecture repose sur des standards modernes du web afin d’assurer une navigation fluide et rapide. L’utilisation de composants réutilisables et d’une structure claire permet une application scalable, maintenable et facilement évolutive.'
      // link: 'https://example.com',
    },
    {
      id: 2,
      title: 'Application gestion des projets',
      subtitle:'',
      description: 'Application web dédiée à la gestion de projets, permettant de créer, organiser et suivre l’avancement des tâches en temps réel..',
      image: '/projects/pictures/gestion-project.png',
      video: 'https://res.cloudinary.com/drzzalwcm/video/upload/v1768223260/gestion-projet-webSite_gxatkw.mp4',
      technologies: ['Next.js', 'React', 'Three.js', 'Stripe', 'PostgreSQL'],
      category: 'web-immersif',
      createdAt: '28 aout 2025',
      projectType: 'Développement Full-Stack',
      year: 2025,
      technicalApproach: 'L’application repose sur une architecture modulaire orientée composants, favorisant la clarté du code et la maintenabilité. La gestion dynamique des états et des interactions utilisateur permet un suivi fluide des projets et des tâches. L’interface a été pensée pour offrir une expérience intuitive, performante et orientée productivité.'
      // link: 'https://example.com',
    },
    {
      id: 3,
      title: 'Application d’offre d’emploi pour étudiants (Restauration)',
      subtitle:'Prototype figma',
      description: 'Plateforme dédiée aux étudiants à la recherche d’emplois dans le secteur de la restauration.',
      image: '/projects/pictures/fiksi.png',
      video: 'https://res.cloudinary.com/drzzalwcm/video/upload/v1768223118/Job-Fiksi-app_qfowc3.mp4',
      technologies: ['Django', 'Angular', 'Figma','Bootstrap', 'MySQL'],
      category: 'saas',
      createdAt: '1 octobre 2024',
      projectType: 'Développement Frontend',
      year: 2024,
      technicalApproach: 'Ce projet met l’accent sur la simplicité d’utilisation et l’accessibilité. L’architecture permet une gestion fluide des offres et des candidatures tout en garantissant des performances optimales. L’interface, conçue en mobile-first, offre une expérience utilisateur claire et efficace pour les étudiants comme pour les recruteurs.'
      // link: 'https://example.com',
    },
    {
      id: 4,
      title: 'Site éducatif pour une école',
      subtitle:'',
      description: 'Site web éducatif conçu pour une école afin de présenter ses programmes, ses formations et ses actualités.',
      image: '/projects/pictures/education.png',
      video: 'https://res.cloudinary.com/drzzalwcm/video/upload/v1768223299/education-webSite_c6embj.mp4',
      technologies: ['Angular', 'Material-UI', 'Bootstrap'],
      category: 'web-immersif',
      createdAt: '15 Mai 2022',
      projectType: 'Développement Full-Stack',
      year: 2022,
      technicalApproach: 'Le site a été conçu avec une approche axée sur la performance, la lisibilité et l’accessibilité du contenu. L’architecture favorise une navigation intuitive et un chargement rapide des pages. Un design cohérent et des composants réutilisables assurent une expérience utilisateur fluide et une maintenance simplifiée.'
      // link: 'https://example.com',
    },
    {
      id: 5,
      title: 'Application de gestion de projets – Symfony / Twig',
      subtitle:'',
      description: 'Application web de gestion de projets permettant d’organiser les tâches, suivre leur avancement et structurer le travail d’une équipe au sein d’une interface claire et efficace.',
      image: '/projects/pictures/gestion-symfony.png',
      video: 'https://res.cloudinary.com/drzzalwcm/video/upload/v1768311497/gestion_project_symfony_ns0184.mp4',
      technologies: ['Symfony', 'Twig', 'Bootstrap', 'MySQL', 'Figma'],
      category: 'backend',
      createdAt: '01 février 2023',
      projectType: 'Développement Full-Stack',
      year: 2023,
      technicalApproach: 'Ce projet a été conçu autour d’une architecture backend robuste et structurée, basée sur Symfony. La séparation claire des responsabilités garantit une application maintenable et évolutive. L’utilisation de Twig pour le rendu des vues, combinée à une logique métier bien organisée, permet une interface performante, cohérente et adaptée à un usage professionnel.'
      // link: 'https://example.com',
    },
    {
      id: 6,
      title: 'Landing page – Plateforme de coaching en ligne (Angular)',
      subtitle:'',
      description: 'Landing page moderne conçue pour une plateforme de coaching en ligne, visant à présenter l’offre, les services et les bénéfices du coaching de manière claire et engageante.',
      image: '/projects/pictures/onligne-coaching-siteWeb.png',
      video: 'https://res.cloudinary.com/drzzalwcm/video/upload/v1768315686/enligne-courses-web_site_h3a10t.mp4',
      technologies: ['Angular', 'Material-UI', 'Bootstrap', 'Figma'],
      category: 'web-immersif',
      createdAt: '10 aout 2024',
      projectType: 'Développement Frontend',
      year: 2024,
      technicalApproach: 'Cette landing page a été développée avec une attention particulière portée à la performance, à la lisibilité et à la cohérence visuelle. L’architecture basée sur Angular permet une structuration claire des composants et une excellente maintenabilité.'
      // link: 'https://example.com',
    },
    // {
    //   id: 5,
    //   title: 'Plateforme SaaS CRM',
    //   description: 'CRM complet avec gestion de contacts, pipeline de ventes, reporting et intégrations tierces.',
    //   image: '/placeholder-project-5.jpg',
    //   technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    //   category: 'saas',
    //   link: 'https://example.com',
    // },
    // {
    //   id: 6,
    //   title: 'Backend Architecture Scalable',
    //   description: 'Infrastructure backend haute performance avec cache distribué, queues de messages et monitoring.',
    //   image: '/placeholder-project-6.jpg',
    //   technologies: ['Node.js', 'Redis', 'RabbitMQ', 'Prometheus'],
    //   category: 'backend',
    //   link: 'https://example.com',
    // },
  ]
  
  export const projectCategories = [
    { id: 'all', label: 'Tous' },
    { id: 'web-immersif', label: 'Web Immersif (3D)' },
    { id: 'saas', label: 'Application SaaS' },
    { id: 'backend', label: 'Architecture Backend' },
  ]
  
  
  
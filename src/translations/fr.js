const fr = {
  // Direction
  dir: 'ltr',
  lang: 'fr',
  fontFamily: "'Inter', system-ui, sans-serif",

  // Navbar
  nav: {
    home: 'Accueil',
    about: 'Notre Vision',
    products: 'Catégories',
    showroom: 'Bientôt',
    quality: 'Qualité',
    contact: 'Contact',
    contactBtn: 'Nous contacter',
  },

  // Hero
  hero: {
    badge: 'Fabrication Alimentaire de Confiance',
    titleLine1: 'Créateur de Doux',
    titleHighlight: 'Moments Matinaux',
    subtitle: 'Une entreprise de fabrication agroalimentaire développant des produits de petit-déjeuner de haute qualité, avec un goût chaleureux conçu pour chaque foyer.',
    cta1: 'Découvrir notre vision',
    cta2: 'Nous contacter',
    scrollHint: 'Défiler pour explorer',
  },

  // Jam Explosion Section
  explosion: {
    title: 'Goutez l\'',
    titleHighlight: 'Explosion',
    subtitle: 'Du cœur de la nature à une explosion de saveur pure. Découvrez la création de nos confitures signatures.',
  },

  // About / Vision
  about: {
    label: 'Notre Vision',
    titleLine1: 'Fabrication moderne,',
    titleLine2: 'Goût familial chaleureux.',
    p1: "AGRO MEL est une installation de fabrication dédiée à la création de produits de petit-déjeuner premium qui rassemblent les familles autour de la table.",
    p2: "Nous comblons le fossé entre l'excellence industrielle et la chaleur d'un repas fait maison. Notre usine utilise des technologies de pointe pour transformer des ingrédients naturels en produits emballés de haute qualité.",
    p3: "Chaque produit que nous développons est une promesse de qualité, de propreté et de goût authentique, conçu pour répondre aux besoins des foyers modernes.",
    stat1Label: 'Naturel',
    stat2Label: 'Produits',
    stat3Label: 'Contrôle Qualité',
    est: 'Bientôt Disponible',
  },

  // Features
  features: {
    label: 'Pourquoi Agro Mel',
    title: 'L\'excellence dans',
    titleHighlight: 'chaque produit',
    items: [
      { title: 'Qualité de Confiance', desc: 'Fabrication selon les normes internationales les plus strictes pour la sécurité et le goût.' },
      { title: 'Spécial Petit-Déjeuner', desc: 'Saveurs et textures spécialement développées pour une expérience matinale parfaite.' },
      { title: 'Ingrédients Sélectionnés', desc: 'Seuls les meilleurs ingrédients naturels entrent dans notre installation.' },
      { title: 'Production Propre', desc: 'Protocoles d\'hygiène rigoureux et lignes de production climatisées.' },
      { title: 'Emballage Moderne', desc: 'Emballage élégant et durable conçu pour préserver la fraîcheur.' },
      { title: 'Pour chaque Foyer', desc: 'Produits conçus pour être accessibles, sains et aimés par toutes les familles.' },
    ],
  },

  // Production Process
  process: {
    label: 'Notre Processus',
    title: 'De la Nature',
    titleHighlight: 'à Votre Table',
    steps: [
      { title: 'Approvisionnement', desc: 'Sélection d\'ingrédients naturels premium auprès de producteurs de confiance.' },
      { title: 'Transformation', desc: 'Utilisation de technologies avancées pour maintenir l\'intégrité nutritionnelle.' },
      { title: 'Contrôle', desc: 'Vérifications de qualité rigoureuses à chaque étape de la production.' },
      { title: 'Emballage', desc: 'Contenants scellés pour la fraîcheur, conçus pour votre foyer.' },
      { title: 'Livraison', desc: 'Logistique efficace pour apporter AGRO MEL dans votre cuisine.' },
    ],
  },

  // Product Categories
  showroom: {
    label: 'Catégories',
    title: 'Produits',
    titleHighlight: 'Bientôt',
    filterAll: 'Tous',
    cta: 'En savoir plus',
    products: [
      { name: 'Céréales du Matin', category: 'Petit-Déj', desc: 'Grains croustillants et nutritifs pour commencer la journée avec énergie.' },
      { name: 'Miel & Confitures', category: 'Sucré', desc: 'Douceur pure provenant des meilleurs vergers.' },
      { name: 'Produits Boulangers', category: 'Boulangerie', desc: 'Biscuits et pâtisseries au goût frais pour chaque maison.' },
      { name: 'Café Premium', category: 'Quotidien', desc: 'Mélanges riches et aromatiques pour votre rituel matinal.' },
      { name: 'Suppléments Laitiers', category: 'Quotidien', desc: 'Compléments de haute qualité pour un repas complet.' },
      { name: 'Snacks Sains', category: 'Petit-Déj', desc: 'Snacks légers et naturels pour les familles actives.' },
    ],
    categories: ['Tous', 'Petit-Déj', 'Sucré', 'Boulangerie', 'Quotidien'],
  },

  // Quality
  quality: {
    label: 'Excellence Assurée',
    title: 'Nos Standards de',
    titleHighlight: 'Qualité',
    description: "Chez AGRO MEL, nous pensons que la nourriture de qualité est un droit pour chaque foyer. Notre processus combine technologie et respect du goût naturel.",
    items: [
      { title: 'Hygiène Certifiée', desc: 'Systèmes de désinfection avancés assurant un environnement stérile.' },
      { title: 'Pureté des Ingrédients', desc: 'Tests stricts pour garantir l\'absence d\'additifs nocifs.' },
      { title: 'Traitement de Précision', desc: 'Lignes automatisées maintenant une valeur nutritionnelle constante.' },
      { title: 'Scellage Fraîcheur', desc: 'Emballage innovant pour prolonger la durée de conservation naturelle.' },
      { title: 'Tests Finaux', desc: 'Chaque lot est vérifié avant de quitter notre usine.' },
    ],
  },

  // Contact
  contact: {
    label: 'Rejoignez l\'Aventure',
    title: 'Préparez-vous pour le',
    titleHighlight: 'Lancement',
    description: 'Nous préparons actuellement notre première ligne de produits. Contactez-nous pour les opportunités de distribution.',
    cta1: 'Envoyer Message',
    cta2: 'Appelez-nous',
    form: {
      name: 'Nom Complet',
      email: 'Adresse E-mail',
      company: 'Entreprise (Optionnel)',
      message: 'Comment pouvons-nous vous aider ?',
      send: 'Envoyer la Demande',
    },
    info: {
      phone: '+213 (0) 555 123 456',
      email: 'hello@agromel.com',
      address: 'Zone Industrielle, Alger, Algérie',
    },
  },

  // Footer
  footer: {
    description: 'Une marque de fabrication alimentaire chaleureuse et propre, façonnant l\'avenir du petit-déjeuner familial.',
    productsTitle: 'Bientôt',
    companyTitle: 'Entreprise',
    contactTitle: 'Support',
    aboutFactory: 'La Vision',
    qualityStandards: 'Standards Qualité',
    distributors: 'Partenariat',
    contactUs: 'Contactez-nous',
    copyright: '© {year} AGRO MEL. Fait avec cœur pour chaque foyer.',
    productList: ['Céréales Petit-Déj', 'Confitures Naturelles', 'Biscuits & Gâteaux', 'Café Premium'],
  },
};

export default fr;

// src/constants/data.ts
export const workHistory = [
  {
    company: 'University of Arkansas',
    position: 'Research Assistant',
    logo: '/logos/uark-modified.png',
    period: '2024 - Present',
    location: 'Fayetteville, AR',
    description:
      'Researching under the mentorship of Dr. Khoa Luu as part of the Computer Vision and Image Understanding Lab. Co-authored a physics-informed domain adaptation network (NeurIPS 2025 submission) for aligning synthetic and real 2D material images. Created a synthetic dataset of 600K microscopy images across eight materials and 40 layer types. Improved thickness estimation error by 9.1 nm and detection precision by 30%. Achieved state-of-the-art flake layer classification accuracy of 93.9%.',
    technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Domain Adaptation', 'Dataset Creation', 'Computational Neuroscience', 'Vision Transformer', 'Variational Autoencoder', 'PyTorch'],
  },
  {
    company: 'Hidalga Technologies',
    position: 'Software Engineering Intern',
    logo: '/logos/hidalga.png',
    period: '2024 - 2025',
    location: 'Springdale, AR',
    description:
      'Developed a gradient boosting model with 87.6% accuracy on 30K+ cases to predict prior authorization outcomes, reducing human reviews by ≈30%. Piloted an automated document parsing and validation system using Azure OpenAI, tested on 250+ forms and reducing turnaround time by ~60%.',
    technologies: ['Python', 'Azure OpenAI', 'Machine Learning', 'Document Parsing', 'CatBoost', 'Pandas', 'Matplotlib', 'Laravel', 'PostgreSQL'],
  },
];

export const projectList = [
  {
    name: 'ReSearch',
    shortDescription: 'High-performance full-text and temporal search engine',
    year: '2025',
    description: 'High-performance search platform enabling rapid full-text and temporal queries across 50K timestamped webpages. Optimized query processing with vectorized TF-IDF scoring and precomputed indices, reducing latency by 78% and enabling median response times ≤ 400 ms.',
    link: 'https://github.com/Capstone-Temporal-Search-Engine',
    technologies: ['SvelteKit', 'AWS', 'Nginx', 'Python'],
    logo: '/logos/research.png',
  },
  {
    name: 'Grocify',
    shortDescription: 'AI app that turns recipes and meal images into ready-to-shop Walmart carts',
    year: '2025',
    description: 'Streamlit app automating grocery shopping by converting text recipes or meal images into prefilled Walmart carts. Leveraged ViT, Spoonacular API, and OpenAI GPT for precise ingredient extraction with average processing time ≤ 8 seconds.',
    link: 'https://github.com/sanpdy/Grocify',
    technologies: ['Streamlit', 'Python', 'LangChain', 'ViT', 'OpenAI'],
    logo: '/logos/grocify.png',
  },
  {
    name: 'VisionFlow',
    shortDescription: 'Image reconstruction from fMRI signals using ViT and VAE',
    year: '2024',
    description: 'Pipeline reconstructing images from predicted fMRI signals using Vision Transformers and Variational Autoencoders. Trained on COCO dataset, achieving 33% improvement in reconstruction accuracy.',
    link: 'https://github.com/sanpdy/VisionFlow',
    technologies: ['Python', 'Vision Transformer', 'Deep Learning'],
    logo: '/logos/visionflow.png',
  },
  {
    name: 'SFPD Crime Classification',
    shortDescription: 'Classifying crime incidents from SFPD data',
    year: '2024',
    description: 'Engineered spatio-temporal features from 800K+ SFPD crime reports to classify incidents across 39 categories. Trained a CatBoost model with stratified 5-fold validation achieving weighted F1 score of 0.2505, ranking top 7% on Kaggle leaderboard.',
    link: 'https://github.com/sanpdy/SanFranciscoCrimeClassification',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'CatBoost'],
    logo: '/logos/kaggle.png',
  },
  {
    name: 'Photon Laser Tag',
    shortDescription: 'Laser tag software interfacing with original hardware',
    year: '2023',
    description: 'Laser tag software emulating the original Photon Laser Tag system, interfacing directly with original hardware.',
    link: 'https://github.com/sanpdy/Photon-Laser-Tag',
    technologies: ['Python', 'PyQt6', 'Supabase'],
    logo: '/logos/photon.png',
  },
  {
    name: 'Shakespearean Text Generator',
    shortDescription: 'Text generator using TensorFlow LSTM model',
    year: '2022',
    description: 'Text generator using TensorFlow LSTM model trained on Shakespearean data with RMSprop optimizer and temperature-based sampling for controlled randomness.',
    link: 'https://github.com/sanpdy/ShakespeareBot',
    technologies: ['Python', 'TensorFlow', 'NumPy'],
    logo: '/logos/shakespeare.png',
  },
];

export interface ResearchPaper {
  id: number;
  title: string;
  authors: Array<{ name: string; me?: boolean }>;
  year: number;
  summary: string;
  pdfLink: string;
  arxivLink: string;
  status?: 'Published' | 'Under Review' | 'Accepted';
  conference?: string;
}

export const publications: ResearchPaper[] = [
    {
    id: 1,
    title: "TIMBRE: Time-aware Multimodal Vision-Brain Encoding",
    authors: [
      { name: "XB Nguyen" },
      { name: "S Pandey", me: true },
      { name: "S Kim" },
      { name: "H Jang" },
      { name: "AK Choudhary" },
      { name: "K Luu" },
    ],
    year: 2025,
    summary:"",
    pdfLink: "",
    arxivLink: "",
    status: "Under Review",
    conference: "CVPR 2026",
  },
    {
    id: 2,
    title: "QuPAINT: Physics-Aware Instruction Tuning Approach to Quantum Material Discovery",
    authors: [
      { name: "XB Nguyen" },
      { name: "HQ Nguyen" },
      { name: "S Pandey", me: true },
      { name: "T Faltermeier" },
      { name: "N Borys" },
      { name: "H Churchill" },
      { name: "K Luu" },
    ],
    year: 2025,
    summary:"",
    pdfLink: "",
    arxivLink: "",
    status: "Under Review",
    conference: "CVPR 2026",
  },
  {
    id: 3,
    title: "CLIFF: Continual Learning for Incremental Flake Features in 2D Material Identification",
    authors: [
      { name: "S Pandey", me: true },
      { name: "XB Nguyen" },
      { name: "N Borys" },
      { name: "H Churchill" },
      { name: "K Luu" },
    ],
    year: 2025,
    summary:
      "Presents CLIFF, a continual-learning framework for automated 2D flake layer classification that leverages material-specific prompts, embeddings, and delta heads with memory replay to reduce forgetting and improve accuracy across materials.",
    pdfLink: "https://arxiv.org/pdf/2508.17261",
    arxivLink: "https://arxiv.org/abs/2508.17261",
    status: "Accepted",
    conference: "NeurIPS 2025 Workshop",
  },
  {
    id: 4,
    title: "QMoE: A Quantum Mixture of Experts Framework for Scalable Quantum Neural Networks",
    authors: [
      { name: "HQ Nguyen" },
      { name: "XB Nguyen" },
      { name: "S Pandey", me: true },
      { name: "SU Khan" },
      { name: "I Safro" },
      { name: "K Luu" },
    ],
    year: 2025,
    summary:
      "Introduces QMoE, a scalable quantum neural network using multiple quantum experts and a learnable quantum router to improve classification performance over standard QNNs.",
    pdfLink: "https://arxiv.org/pdf/2507.05190",
    arxivLink: "https://arxiv.org/abs/2507.05190",
    status: "Accepted",
    conference: "IEEE Quantum Week Workshop",
  },
  {
    id: 5,
    title:
      "φ-Adapt: A Physics-Informed Adaptation Learning Approach to 2D Quantum Material Discovery",
    authors: [
      { name: "HQ Nguyen" },
      { name: "XB Nguyen" },
      { name: "S Pandey", me: true },
      { name: "T Faltermeier" },
      { name: "N Borys" },
      { name: "H Churchill" },
      { name: "K Luu" },
    ],
    year: 2025,
    summary:
      "Proposes Φ-Adapt, a physics-informed framework for discovering novel 2D quantum materials, combining adaptation learning with domain-specific quantum constraints.",
    pdfLink: "https://arxiv.org/pdf/2507.05184",
    arxivLink: "https://arxiv.org/abs/2507.05184",
    status: "Under Review",
    conference: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
  },
];


export const FAVORITE_GAMES = [
  {
    appid: 1086940,
    name: "Baldur's Gate 3",
    blurb: "Honor mode run will be complete.",
  },
  {
    appid: 1245620,
    name: "Elden Ring",
    blurb: "Beautiful, had to 100% it.",
  },
  {
    appid: 105600,
    name: "Terraria",
    blurb: "Dig, build, fight eldritch monster, repeat.",
  },
  {
    appid: 289070,
    name: "Sid Meier's Civilization VI",
    blurb: "One more turn.",
  },
  {
    appid: 1174180,
    name: "Red Dead Redemption 2",
    blurb: "Hey there, Mister!",
  },
  {
    appid: 2215430,
    name: "Ghost of Tsushima",
    blurb: "You have no honor. And you are a slave to it.",
  },
  {
    appid: 814380,
    name: "Sekiro: Shadows Die Twice",
    blurb: "Hesitation is Defeat.",
  },
];
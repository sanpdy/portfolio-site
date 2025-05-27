// src/constants/data.ts
export const workHistory = [
  {
    company: 'Hidalga Technologies',
    position: 'Software Engineering Intern',
    logo: '/logos/hidalga.png',
    period: '2024 - Present',
    location: 'Springdale, AR',
    description:
      'Developed a gradient boosting model with 87.6% accuracy on 30K+ cases to predict prior authorization outcomes, reducing human reviews by ≈30%. Piloted an automated document parsing and validation system using Azure OpenAI, tested on 250+ forms and reducing turnaround time by ~60%.',
    technologies: ['Python', 'Azure OpenAI', 'Machine Learning', 'Document Parsing', 'CatBoost', 'Pandas', 'Matplotlib', 'Laravel', 'PostgreSQL'],
  },
  {
    company: 'University of Arkansas CVIU Lab',
    position: 'Research Assistant',
    logo: '/logos/uark-modified.png',
    period: '2024 - Present',
    location: 'Fayetteville, AR',
    description:
      'Co-authored a physics-informed domain adaptation network (NeurIPS 2025 submission) for aligning synthetic and real 2D material images. Created a synthetic dataset of 600K microscopy images across eight materials and 40 layer types. Improved thickness estimation error by 9.1 nm and detection precision by 30%. Achieved state-of-the-art flake layer classification accuracy of 93.9%.',
    technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Domain Adaptation', 'Dataset Creation', 'Computational Neuroscience', 'Vision Transformer', 'Variational Autoencoder', 'PyTorch'],
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
  tldr: string;
  whyItMatters: string;
  pdfLink: string;
  visualsLink?: string | null;
}

export const researchDigest: ResearchPaper[] = [
  {
    id: 1,
    title: 'Zebrafish Activity Prediction Benchmark (ZAPBench)',
    tldr: 'ZAPBench introduces a forecasting benchmark based on a 4D light-sheet microscopy recording of over 70,000 whole-brain neural activity traces in larval zebrafish, enabling evaluation of models predicting future activity from past signals.',
    whyItMatters: 'Provides a unique vertebrate-scale dataset and benchmark to drive development of more accurate and generalizable whole-brain activity prediction models.',
    pdfLink: 'https://openreview.net/pdf?id=oCHsDpyawq',
    visualsLink: 'https://zapbench-release.storage.googleapis.com/landing.html',
  },
  {
    id: 2,
    title: 'Revisiting Your Memory: Reconstruction of Affect-Contextualized Memory via EEG-guided Audiovisual Generation',
    tldr: 'Introduces RecallAffectiveMemory, a novel task and dataset for reconstructing autobiographical memories through audio-visual generation guided by affect derived from EEG recordings, and proposes the RYM framework for synchronized generation.',
    whyItMatters: 'Advances affective computing by enabling personalized media creation driven by neural affect trajectories, opening applications in memory augmentation and neuro-driven content synthesis.',
    pdfLink: 'https://arxiv.org/pdf/2412.05296.pdf',
    visualsLink: null,
  },
  {
    id: 3,
    title: 'Large Brain Model for Learning Generic Representations with Tremendous EEG Data in BCI',
    tldr: 'Proposes Large EEG Models (LEMs) using unsupervised pre-training on diverse EEG datasets to learn universal signal representations, overcoming dataset-specific limitations and enabling fine-tuning for various BCI tasks.',
    whyItMatters: 'Brings the success of large-scale pre-trained models to EEG signal processing, promising more robust and generalizable BCI models across tasks.',
    pdfLink: 'https://arxiv.org/pdf/2405.18765.pdf',
    visualsLink: null,
  },
  {
    id: 4,
    title: 'MaskTerial: A Foundation Model for Automated 2D Material Flake Detection',
    tldr: 'Presents MaskTerial, an instance segmentation model pre-trained on synthetic microscopy images to accurately detect 2D material flakes with few-shot adaptation and uncertainty estimation.',
    whyItMatters: 'Automates and improves the accuracy of materials science imaging workflows, facilitating large-scale data collection and discovery of novel 2D materials.',
    pdfLink: 'https://arxiv.org/pdf/2412.09333.pdf',
    visualsLink: null,
  },
  {
    id: 5,
    title: 'NeuroClips: Towards High-fidelity and Smooth fMRI-to-Video Reconstruction',
    tldr: 'Introduces NeuroClips, a framework combining semantic and perception reconstructor modules with diffusion models to reconstruct smooth, high-fidelity videos from fMRI data, achieving significant improvements in SSIM and spatiotemporal metrics.',
    whyItMatters: 'Pushes the frontier of decoding continuous visual experiences from brain signals, enabling realistic video reconstruction for neuroscience and brain-computer interfaces.',
    pdfLink: 'https://arxiv.org/pdf/2410.19452.pdf',
    visualsLink: 'https://github.com/gongzix/NeuroClips',
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
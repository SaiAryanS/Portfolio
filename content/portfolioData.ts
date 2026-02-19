// ============================================================
// PORTFOLIO DATA — single source of truth
// Update this file to change all content across the site.
// ============================================================

export const portfolio = {
  // ── Identity ──────────────────────────────────────────────
  name: 'Sai Aryan Soma',
  title: 'Full-Stack & AI Engineer',
  headline: 'Building intelligent systems that ship.',
  about: `I'm a software engineer studying Computer Science at Woxsen University (2026 grad), with hands-on experience
building full-stack web applications and deploying machine learning models to production and edge hardware.
I care about performance, clean architecture, and building products that solve real problems — from
AI-powered tools to DevOps-automated pipelines.`,

  // ── Contact ───────────────────────────────────────────────
  email: 'aryanskoheda@gmail.com',
  phone: '+91 79899 64323',
  github: 'https://github.com/SaiAryanS',
  linkedin: 'https://www.linkedin.com/in/sai-aryan-soma-97a653351/',
  location: 'India',

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      title: 'CareerPilot — AI Resume Analyzer',
      description:
        'AI tool analyzing 100+ resumes/day with LLM-powered skill extraction and role-based match scoring. Reduced MongoDB query latency 40% via schema optimization. Auto-generates mock interview questions and structured PDF reports in under 5 seconds.',
      tech: ['TypeScript', 'Next.js', 'MongoDB', 'AI', 'PDF Generation'],
      github: 'https://github.com/SaiAryanS/CareerPilot-AI-Resume-Analyzer',
      live: null,
      period: 'Aug 2025 – Present',
      featured: true,
    },
    {
      title: 'AI Travel Planner',
      description:
        'Personalized AI itinerary generator with 7-second average response time using optimized Gemini API calls. Scored 95+ Lighthouse performance. Supports 50+ concurrent users with Express.js backend and intelligent API caching.',
      tech: ['React', 'Express.js', 'Gemini API', 'Tailwind CSS', 'Material UI'],
      github: 'https://github.com/SaiAryanS/Ai-Travel-Planner-App',
      live: null,
      period: 'Feb – Mar 2025',
      featured: true,
    },
    {
      title: 'Edge ML on STM32 Microcontroller',
      description:
        'Compressed a TensorFlow model 96% — from 8MB to 320KB — using quantized TFLite for embedded deployment. Achieved real-time inference in 50ms within 512KB RAM on STM32H7. Fully offline, zero cloud dependency.',
      tech: ['TensorFlow', 'TFLite', 'Python', 'STM32H7', 'Embedded C'],
      github: 'https://github.com/SaiAryanS',
      live: null,
      period: 'Feb – May 2025',
      featured: true,
    },
    {
      title: 'E-Commerce Platform + DevOps Pipeline',
      description:
        'Built a Jenkins CI/CD pipeline that cut deployment time from 15 min to 4 min. Containerized the full stack with Docker and implemented commit-SHA image versioning. 80% critical flow E2E coverage via Cypress with a 2-min rollback strategy.',
      tech: ['TypeScript', 'Next.js', 'Docker', 'Jenkins', 'Cypress', 'AWS'],
      github: 'https://github.com/SaiAryanS/E-Commerce-Website',
      live: null,
      period: 'Sep 2025',
      featured: true,
    },
    {
      title: 'Greyscale to Color — Deep Learning Colorization',
      description:
        'U-Net model with a pretrained ResNet34 encoder that automatically colorizes grayscale images. Achieves 24–28 dB PSNR and 0.80–0.85 SSIM. Supports mixed-precision (FP16) training for 2× speedup and ships with an interactive Gradio web demo for real-time inference.',
      tech: ['Python', 'PyTorch', 'ResNet34', 'U-Net', 'Gradio', 'CUDA'],
      github: 'https://github.com/SaiAryanS/Greyscale-to-Color',
      live: null,
      period: 'Nov 2025',
      featured: false,
    },
    {
      title: 'Chatbot with Local LLM',
      description:
        'Privacy-first RAG chatbot running Qwen 2.5 7B locally via LM Studio — zero cloud dependency. Uses Pinecone as the vector database for semantic retrieval, keeping all data on-device with full control over inference.',
      tech: ['Python', 'LM Studio', 'Qwen 2.5 7B', 'Pinecone', 'RAG'],
      github: 'https://github.com/SaiAryanS/Chabot-with-LocalLLM',
      live: null,
      period: 'Jan 2026',
      featured: false,
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'JSON'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'TFLite', 'Gemini API', 'Edge AI', 'STM32 Deployment'],
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Jenkins', 'Git', 'Minikube', 'AWS', 'Azure', 'CI/CD', 'Cypress'],
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      degree: 'B.Tech — Computer Science (CORE CSE)',
      institution: 'Woxsen University',
      location: 'Hyderabad, India',
      period: '2022 – 2026',
      grade: 'CGPA 8.2 / 10',
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Management Systems',
        'Computer Networks',
        'Machine Learning',
        'Embedded Systems',
      ],
    },
    {
      degree: 'Intermediate — MPC (Maths, Physics, Chemistry)',
      institution: 'Page Junior College',
      location: 'India',
      period: '2020 – 2022',
      grade: '87.4%',
      coursework: [],
    },
    {
      degree: 'Secondary School Certificate (Grade 10)',
      institution: "St Paul's High School",
      location: 'India',
      period: '2010 – 2020',
      grade: 'CGPA 10 / 10',
      coursework: [],
    },
  ],

  // ── Certifications ────────────────────────────────────────
  certifications: [
    { name: 'Generative AI for Everyone', issuer: 'DeepLearning.AI' },
    { name: 'Mathematics for ML: Linear Algebra', issuer: 'Imperial College London' },
    { name: 'Mathematics for ML: Multivariate Calculus', issuer: 'Imperial College London' },
    { name: 'Data Mining Methods', issuer: 'University of Colorado Boulder' },
    { name: 'Database Management Essentials', issuer: 'University of Colorado System' },
    { name: 'OS Fundamentals', issuer: 'Akamai Technologies' },
  ],

  // ── Achievements ──────────────────────────────────────────
  achievements: [
    'Top 10 — Inter-University Hackathon',
    'Class Representative — B.Tech CSE (CORE), 2023–2025',
    'Senior Executive — Utopia Esports Club, Woxsen University, 2024',
  ],
}

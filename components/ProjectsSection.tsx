'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aurane',
    period: 'Jan 2026',
    status: 'Active',
    category: 'Developer Tools',
    description: 'A modern domain-specific language for machine learning that transpiles to idiomatic PyTorch code. Features interactive REPL, watch mode, model inspection, and shape inference.',
    tech: ['Python', 'DSL', 'PyTorch', 'Compiler Design'],
    link: 'https://github.com/desenyon/aurane',
    pinned: true,
  },
  {
    title: 'Kinetic Fortress',
    period: 'Dec 2025',
    status: 'Active',
    category: 'Quantitative Finance',
    description: 'Regime-conditioned cross-sectional alpha engine with deterministic research pipeline and Lean execution. Built for reproducibility, inspection, and operational clarity.',
    tech: ['Python', 'QuantConnect', 'Lean', 'HMM', 'Ridge Regression'],
    link: 'https://github.com/desenyon/kineticfortress',
    metrics: 'Sharpe 1.49 · CAGR >80%',
  },
  {
    title: 'RefineLab',
    period: 'Nov 2025',
    status: 'Active',
    category: 'EdTech',
    description: 'AI-powered writing growth engine that analyzes essays, teaches skills, and tracks growth over time. Maintains strict academic integrity—provides feedback, never generates content.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Gemini AI', 'Recharts'],
    link: 'https://github.com/desenyon/refinelab',
  },
  {
    title: 'DivergentUnity',
    period: 'Nov 2025',
    status: 'Completed',
    category: 'AI/ML',
    description: 'AI-powered consensus building platform using Gemini to help people find common ground. Analyzes debates, extracts values, identifies agreement areas, and generates balanced compromises.',
    tech: ['FastAPI', 'Next.js', 'Gemini AI', 'SQLModel', 'TanStack Query'],
    link: 'https://github.com/desenyon/divergentunity',
  },
  {
    title: 'AllJobsAreEqual',
    period: 'Dec 2025',
    status: 'Completed',
    category: 'Full-Stack',
    description: 'Minimalist, inclusive hiring portal for fair-chance and disabled candidates. Built for hackathon speed with Next.js 14, TypeScript, and shadcn-style components.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    link: 'https://github.com/desenyon/alljobsareequal',
  },
  {
    title: 'OpenCare',
    period: 'Oct 2025',
    status: 'Completed',
    category: 'Full-Stack',
    description: 'AI platform simplifying Medi-Cal and Medicaid eligibility. Features NLP-driven eligibility engine and automated form filling. Won 3rd Place at LG Hacks.',
    tech: ['Next.js', 'TypeScript', 'AWS', 'DynamoDB', 'GPT-4'],
    link: 'https://github.com/desenyon/opencare',
    metrics: '3rd Place LG Hacks',
  },
  {
    title: 'FireGuard',
    period: 'Oct 2025',
    status: 'Completed',
    category: 'Mobile',
    description: 'California wildfire safety app using NASA FIRMS, CAL FIRE, and OpenWeatherMap data. Features Smoke Compass for navigation in smoke-filled areas and AI chatbot for fire-related questions.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Gemini AI', 'Google Maps'],
    link: 'https://github.com/desenyon/Fireguard',
  },
  {
    title: 'ResearchExplore',
    period: 'Oct 2025',
    status: 'Completed',
    category: 'AI/ML',
    description: 'AI-powered analytics tool that transforms CSV files and Google Sheets into interactive, real-time insights using Gemini AI for intelligent data analysis.',
    tech: ['TypeScript', 'Vite', 'Gemini AI', 'Recharts'],
    link: 'https://github.com/desenyon/ResearchExplore',
  },
  {
    title: 'Lucefact',
    period: 'Nov 2025',
    status: 'Completed',
    category: 'Developer Tools',
    description: 'Minimalist ML model introspection laboratory. Beautiful web app for analyzing model architectures across TensorFlow, PyTorch, ONNX, and scikit-learn formats.',
    tech: ['TypeScript', 'Vite', 'TensorFlow.js', 'ONNX'],
    link: 'https://github.com/desenyon/Lucefact',
  },
  {
    title: 'ResearchQuantize',
    period: 'Jul 2025',
    status: 'Completed',
    category: 'Developer Tools',
    description: 'CLI tool for aggregating and searching research papers from ArXiv, PubMed, and Semantic Scholar. Features parallel processing, GUI interface, and SQLite storage.',
    tech: ['Python', 'Textual', 'SQLite', 'Rich'],
    link: 'https://github.com/desenyon/ResearchQuantize',
  },
  {
    title: 'Rain',
    period: 'Jul 2025',
    status: 'Completed',
    category: 'Developer Tools',
    description: 'Python CLI displaying extensive system information in a beautiful, interactive terminal interface. Live monitoring, JSON export, and comprehensive hardware/network analysis.',
    tech: ['Python', 'Rich', 'psutil', 'Click'],
    link: 'https://github.com/desenyon/rain',
  },
  {
    title: 'Skin Cancer Detection',
    period: 'Jan - Mar 2025',
    status: 'Published',
    category: 'Deep Learning',
    description: 'Deep learning model for multi-class skin cancer classification achieving 91% accuracy. Won SYNOPSYS First Place in Computational Biology at SCVSEF and qualified for CSEF.',
    tech: ['Python', 'TensorFlow', 'Keras', 'ResNet50', 'OpenCV'],
    link: 'https://www.jsr.org/hs/index.php/path/article/view/6454',
    metrics: '91% Accuracy · 1st Place SCVSEF',
  },
  {
    title: 'RandomResearchAI',
    period: 'Jun 2023 - Present',
    status: 'Active',
    category: 'Technical Writing',
    description: 'AI/ML research publication platform with 15+ in-depth articles generating 18,000+ views. Top pieces: "SVC Model in Python" (4K views), "KNN Model in Python" (3K views).',
    tech: ['Technical Writing', 'Machine Learning', 'Research'],
    link: 'https://medium.com/@randomresearchai',
    metrics: '18K+ Views · 15+ Articles',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen pt-8 pb-20 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/30 font-mono text-[11px]">02</span>
            <div className="w-8 h-px bg-white/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">PROJECTS</h2>
          <p className="text-white/40 text-sm mt-4 uppercase tracking-wide">Quantitative strategies, AI systems, and published research</p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.pinned).map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-6 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm group"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono text-white/60 px-2 py-0.5 border border-white/20 rounded">FEATURED</span>
              <span className="text-white/40 text-xs font-mono">{project.category}</span>
            </div>
            <h3 className="text-2xl font-light text-white mb-2 group-hover:text-white/80 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/50 text-xs font-mono mb-4">{project.period}</p>
            <p className="text-white/60 text-sm mb-5 leading-relaxed max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag px-2.5 py-1 rounded text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 !py-2 !px-4 text-xs"
              >
                VIEW ON GITHUB →
              </a>
            )}
          </motion.div>
        ))}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.filter(p => !p.pinned).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card rounded-lg p-5 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-white/40 text-xs font-mono">{project.category}</span>
                  <h3 className="text-lg font-medium text-white group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-mono shrink-0 ${
                  project.status === 'Active' || project.status === 'Published'
                    ? 'status-active' 
                    : 'status-completed'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Period */}
              <p className="text-white/50 text-xs font-mono mb-3">{project.period}</p>

              {/* Description */}
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              {project.metrics && (
                <div className="text-white/60 text-xs font-mono mb-3 py-2 px-3 bg-white/[0.03] border border-white/[0.08] rounded inline-block">
                  {project.metrics}
                </div>
              )}

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag px-2 py-0.5 rounded text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors"
                >
                  View Project <span>→</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

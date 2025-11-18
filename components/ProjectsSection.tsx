'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'RefineLab',
    period: 'Nov 2025',
    status: 'Active',
    description: 'A production-ready writing growth engine that analyzes essays, teaches skills, tracks growth over time, and helps understand grading patterns—all while maintaining strict academic integrity. Features 10+ core capabilities including context-aware structure mapping, real-time writing skill analysis, and grade prediction.',
    tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini 2.0 Flash', 'NextAuth.js', 'Tesseract.js OCR'],
    link: 'https://refinelab.vercel.app',
    github: 'https://github.com/desenyon/refinelab',
  },
  {
    title: 'DivergentUnity',
    period: 'Nov 2025',
    status: 'Active',
    description: 'AI-powered consensus building platform that bridges divides through intelligent debate analysis. Uses Gemini AI to extract underlying values from opposing viewpoints, identifies common ground, and generates balanced compromise solutions. Won 1st Place for Best UI/UX at Sierra Hacks.',
    tech: ['Next.js 14', 'TypeScript', 'FastAPI', 'Python', 'SQLModel', 'Gemini 1.5 Flash', 'Recharts'],
    link: 'https://divergentunity.vercel.app',
    github: 'https://github.com/desenyon/divergentunity',
  },
  {
    title: 'OpenCare',
    period: 'Oct 2025',
    status: 'Active',
    description: 'AI-powered healthcare access platform that simplifies Medi-Cal and Medicaid eligibility, enrollment, and benefits discovery. Features NLP-driven eligibility engine, smart program matching, and automated form filling. Won 3rd Place ($200) at LG Hacks.',
    tech: ['Next.js', 'TypeScript', 'AWS Cognito', 'DynamoDB', 'Lambda', 'GPT-4', 'SHAP'],
    link: 'https://opencare.vercel.app',
    github: 'https://github.com/desenyon/opencare',
  },
  {
    title: 'FireGuard',
    period: 'Sep 2025',
    status: 'Completed',
    description: 'Real-time wildfire safety app for California using NASA FIRMS API, CAL FIRE, and OpenWeatherMap data. Features include danger radius alerts, novel "Smoke Compass" using air quality data to navigate smoke-filled areas, crowdsourced fire reporting, and Gemini-powered AI chatbot for fire safety questions.',
    tech: ['Flutter', 'Dart', 'Firebase', 'NASA FIRMS API', 'Gemini API', 'OpenWeatherMap'],
    github: 'https://github.com/desenyon/Fireguard',
  },
  {
    title: 'Skin Cancer Detection System',
    period: 'Jan 2025 - Mar 2025',
    status: 'Published',
    description: 'Deep learning model for multi-class skin cancer classification achieving 91% accuracy. Implemented data augmentation and transfer learning with ResNet50. Won SYNOPSYS First Place in Computational Biology at SCVSEF and qualified for California Science & Engineering Fair (CSEF).',
    tech: ['Python', 'TensorFlow', 'Keras', 'ResNet50', 'OpenCV', 'NumPy', 'Pandas'],
    link: 'https://www.jsr.org/hs/index.php/path/article/view/6454',
  },
  {
    title: 'Credit Card Fraud Detection System',
    period: 'Oct 2023 - Dec 2023',
    status: 'Completed',
    description: 'Machine learning system for detecting fraudulent credit card transactions using ensemble methods. Implemented Random Forest, XGBoost, and Neural Networks with SMOTE for handling imbalanced datasets. Achieved 99.2% accuracy with minimal false positives.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'SMOTE', 'Matplotlib'],
  },
  {
    title: 'RandomResearchAI',
    period: 'Jun 2023 - Present',
    status: 'Active',
    description: 'AI Research publication platform with 15+ technical articles on machine learning, computer vision, and AI systems. Articles have generated 13,000+ views, with top pieces on SVC Models (4K views) and KNN algorithms (3K views). Published in Journal of Student Research.',
    tech: ['Technical Writing', 'Research', 'Machine Learning', 'AI Education'],
    link: 'https://medium.com/@randomresearchai',
  },
];

export default function ProjectsSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-mono">
          <span className="text-white/40">*</span> Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm font-mono text-white/60 mb-3">
                  <span>{project.period}</span>
                  <span className="px-2 py-0.5 border border-white/20 rounded">
                    {project.status}
                  </span>
                </div>

                <div className="border border-white/10 p-6 hover:border-white/20 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>

                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border border-white/20 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.link || project.github) && (
                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono text-white/60 hover:text-white transition-colors"
                          onMouseEnter={() => setHoveredLink(project.link)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          Visit Website →
                          {hoveredLink === project.link && (
                            <motion.span
                              className="inline-block ml-1"
                              initial={{ x: 0 }}
                              animate={{ x: 4 }}
                              transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
                            >
                              →
                            </motion.span>
                          )}
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono text-white/60 hover:text-white transition-colors"
                          onMouseEnter={() => setHoveredLink(project.github)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          View Code →
                          {hoveredLink === project.github && (
                            <motion.span
                              className="inline-block ml-1"
                              initial={{ x: 0 }}
                              animate={{ x: 4 }}
                              transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
                            >
                              →
                            </motion.span>
                          )}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

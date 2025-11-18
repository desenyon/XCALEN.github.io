'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Chapter Leader',
    company: 'Hack Club',
    period: 'Nov 2025 - Present',
    status: 'Active',
    description: 'Leading a high school chapter of Hack Club, organizing workshops and hackathons to foster a community of student developers. Teaching web development, AI/ML fundamentals, and organizing project showcases. Building an inclusive environment for students to learn and create technology together.',
    tech: ['Leadership', 'Workshop Planning', 'Community Building', 'Mentorship'],
  },
  {
    title: 'Chief Technology Officer',
    company: 'Rooxts',
    period: 'Oct 2025 - Present',
    status: 'Active',
    description: 'Leading technical architecture and engineering for Rooxts, a platform connecting students with opportunities. Managing full-stack development, infrastructure design, and AI/ML integration. Overseeing product development cycles and coordinating with design and business teams.',
    tech: ['System Architecture', 'Full-Stack Development', 'Team Leadership', 'Product Management'],
    link: 'https://www.rooxts.com',
  },
  {
    title: 'Founder & Lead Engineer',
    company: 'Syntheon',
    period: 'Aug 2025 - Present',
    status: 'Active',
    description: 'Founded and building Syntheon, an AI-powered platform for edge computing solutions. Developing distributed systems architecture and implementing machine learning models optimized for edge devices. Focus on real-time inference and low-latency AI applications.',
    tech: ['Edge Computing', 'AI/ML', 'Distributed Systems', 'Python', 'TensorFlow'],
  },
  {
    title: 'Agentic AI Intern',
    company: 'RagaAI',
    period: 'Jun 2025 - Aug 2025',
    status: 'Completed',
    description: 'Developed autonomous AI agent systems for enterprise applications. Implemented RAG (Retrieval Augmented Generation) pipelines and agent orchestration frameworks. Worked on testing and validation frameworks for AI systems.',
    tech: ['LangChain', 'Vector Databases', 'RAG', 'Python', 'FastAPI'],
  },
  {
    title: 'Product Design & AI Engineer',
    company: 'Mythric',
    period: 'Mar 2025 - Jun 2025',
    status: 'Completed',
    description: 'Designed and implemented AI-powered features for Mythric\'s platform. Led product design initiatives and created user-centric AI experiences. Bridged the gap between design and engineering to deliver polished AI products.',
    tech: ['Product Design', 'AI Integration', 'User Experience', 'Prototyping'],
  },
];

export default function ExperienceSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-mono">
          <span className="text-white/40">*</span> Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm font-mono text-white/60 mb-3">
                  <span>{exp.period}</span>
                  <span className="px-2 py-0.5 border border-white/20 rounded">
                    {exp.status}
                  </span>
                </div>

                <div className="border border-white/10 p-6 hover:border-white/20 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-white/60 font-mono text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-white/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border border-white/20 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-white/60 hover:text-white transition-colors"
                      onMouseEnter={() => setHoveredLink(exp.link)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      Visit Website →
                      {hoveredLink === exp.link && (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

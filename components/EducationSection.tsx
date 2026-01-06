'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    title: 'High School',
    period: 'Aug 2024 — Jun 2027',
    status: 'Current',
    description: 'High School Junior. Focus areas: Computer Science, Mathematics, Spanish (Limited Working Proficiency).',
  },
  {
    title: 'Brown Pre-College Program',
    period: 'Completed',
    status: 'Completed',
    description: 'Completion Certificate. Academic enrichment in university-level coursework.',
  },
];

const awards = [
  {
    title: 'SCVSEF SYNOPSYS First Place Award',
    category: 'Computational Biology and Bioinformatics',
    period: 'Mar 2025',
    description: 'First place for AI-driven skin cancer detection research using deep learning and transfer learning.',
  },
  {
    title: 'CSEF Qualifier',
    category: 'California Science & Engineering Fair',
    period: 'Apr 2025',
    description: 'Qualified to present research at CSEF in Los Angeles, representing Santa Clara Valley—the most competitive region in California.',
  },
  {
    title: 'SCVSEF SYNOPSYS RRI Honorable Mention',
    category: 'Research Recognition',
    period: '2025',
    description: 'Honorable Mention for research quality and innovation.',
  },
  {
    title: 'LG Hacks 3rd Place',
    category: 'Hackathon',
    period: 'Oct 2025',
    description: 'OpenCare: AI platform simplifying healthcare access through intelligent eligibility matching.',
  },
  {
    title: 'World Language Department Excellence Award',
    category: 'Spanish',
    period: '2024',
    description: 'Recognition for academic excellence in Spanish language studies.',
  },
];

const certifications = [
  { title: 'Introduction to Model Context Protocol', issuer: 'Anthropic' },
  { title: 'Ask Questions to Make Data-Driven Decisions', issuer: 'Google' },
  { title: 'Prepare Data for Exploration', issuer: 'Google' },
  { title: 'Foundations: Data, Data, Everywhere', issuer: 'Google' },
];

const publications = [
  {
    title: 'How can Artificial Intelligence Techniques Effectively Enhance Credit Card Fraud Detection Systems?',
    venue: 'Journal of Student Research',
    link: 'https://www.jsr.org/hs/index.php/path/article/view/6454',
  },
];

export default function EducationSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" ref={ref} className="pt-8 pb-20 px-6 lg:px-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/30 font-mono text-[11px]">03</span>
            <div className="w-8 h-px bg-white/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">EDUCATION & RECOGNITION</h2>
        </motion.div>

        {/* Education */}
        <div className="space-y-4 mb-16">
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-4">Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card rounded-lg p-5"
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
                <span className={`px-2 py-1 rounded text-xs font-mono ${
                  edu.status === 'Current' ? 'status-active' : 'status-completed'
                }`}>
                  {edu.status}
                </span>
              </div>
              <p className="text-white/50 text-sm font-mono mb-2">{edu.period}</p>
              <p className="text-white/60 text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <div className="space-y-4 mb-16">
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-4">Awards & Honors</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="card rounded-lg p-5"
              >
                <p className="text-white/50 text-xs font-mono mb-2">{award.period}</p>
                <h4 className="text-base font-semibold text-white mb-1">{award.title}</h4>
                <p className="text-white/40 text-xs font-mono mb-2">{award.category}</p>
                <p className="text-white/60 text-sm">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="space-y-4 mb-16">
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-4">Publications</h3>
          {publications.map((pub, index) => (
            <motion.a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card rounded-lg p-5 block group"
            >
              <h4 className="text-base font-medium text-white group-hover:text-white/70 transition-colors mb-1">
                {pub.title}
              </h4>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white/50">{pub.venue}</span>
                <span className="text-white/40 font-mono text-xs">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="card rounded-lg p-4"
              >
                <h4 className="text-sm font-medium text-white mb-1">{cert.title}</h4>
                <p className="text-white/40 text-xs font-mono">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

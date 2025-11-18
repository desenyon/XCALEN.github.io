'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    title: 'Los Gatos High School',
    period: 'Aug 2024 — Jun 2028',
    status: 'Current',
    description: 'High School Junior focusing on Computer Science and Mathematics. Expected graduation 2028.',
    tags: ['Computer Science', 'Mathematics'],
  },
  {
    title: 'Brown Pre-College',
    period: 'Summer 2024',
    status: 'Completed',
    description: 'Intensive summer program in Entrepreneurship and Innovation.',
    tags: ['Entrepreneurship'],
  },
  {
    title: 'UC Berkeley Haas',
    period: 'Summer 2023',
    status: 'Completed',
    description: 'Business and entrepreneurship program at UC Berkeley Haas School of Business.',
    tags: ['Business'],
  },
];

const awards = [
  {
    title: 'Sierra Hacks 1st Best UI/UX Design',
    period: 'Nov 2025',
    description: 'DivergentUnity is an AI-driven consensus engine that turns polarized arguments into structured value-maps, shared goals, and workable compromise paths. It reframes conflict from "who\'s right" to "what each side needs," giving groups a fast, logic-based way to converge without losing their core principles.',
  },
  {
    title: 'LG Hacks 3rd Place',
    period: 'Oct 2025',
    description: 'OpenCare\'s mission is to simplify access to healthcare programs across the United States. We use AI to guide users through eligibility, applications, and forms, provide clear explanations, and connect people to local resources. Won $200.',
  },
  {
    title: 'CSEF Qualifier – California Science & Engineering Fair',
    period: 'Apr 2025',
    description: 'Qualified and presented research at the California Science and Engineering Fair (CSEF) in Los Angeles, representing Santa Clara Valley, the most competitive region in the state and one of the most in the world with over 1,000 top student researchers. Selected for excellence in biotechnology innovation, focusing on the early detection of skin cancer through machine learning–based image analysis.',
  },
  {
    title: 'SCVSEF SYNOPSYS First Place Award – Computational Biology and Bioinformatics',
    period: 'Mar 2025',
    description: 'First place in Computational Biology and Bioinformatics at Santa Clara Valley Science and Engineering Fair for AI-driven skin cancer detection research.',
  },
];

const certifications = [
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: 'Aug 2025',
  },
  {
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    date: 'Aug 2025',
  },
  {
    title: 'Academy Accreditation - Generative AI Fundamentals',
    issuer: 'Databricks',
    date: 'Jul 2025',
  },
];

export default function EducationSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-5xl">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
        </motion.div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-white/40">{edu.period}</span>
                <span className="text-white/40">*</span>
                <span className="text-white/40">{edu.status}</span>
              </div>

              <div className="border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="p-8 border-b border-white/10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{edu.title}</h3>
                </div>

                <div className="p-8 space-y-6">
                  <p className="text-white/60 leading-relaxed">{edu.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-white/50 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Awards & Recognition</h2>
        </motion.div>

        <div className="space-y-12">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-3 text-sm">
                <span className="text-white/40">{award.period}</span>
              </div>

              <div className="border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{award.title}</h3>
                  <p className="text-white/60 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
        </motion.div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="border border-white/10 hover:border-white/20 transition-colors duration-300 p-6"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-white/60">{cert.issuer}</p>
              <p className="text-sm text-white/40 mt-1">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

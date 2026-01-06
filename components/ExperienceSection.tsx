'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Independent Quantitative Researcher',
    company: 'QuantConnect',
    type: 'Seasonal',
    period: 'Dec 2025 - Present',
    location: 'Remote',
    status: 'Active',
    description: [
      'Ranked 8th out of 25 in the Open League leaderboard with the strategy TQQQ Kinetic Fortress',
      'Designed, implemented, and evaluated multiple end-to-end systematic equity strategies',
      'Achieved Sharpe ratios up to 1.49 and CAGR above 80%',
    ],
    tech: ['Python', 'Quantitative Finance', 'Systematic Trading', 'Backtesting'],
  },
  {
    title: 'AI Research Author',
    company: 'RandomResearchAI',
    type: 'Self-employed',
    period: 'Jun 2023 - Present',
    location: 'Remote',
    status: 'Active',
    description: [
      'Authored 15+ in-depth AI/ML articles, generating over 18,000 total views on Medium',
      'Top-performing pieces: "SVC Model in Python" (4K views), "KNN Model in Python" (3K views)',
      'Published research in Journal of Student Research',
    ],
    tech: ['Technical Writing', 'Machine Learning', 'Research', 'Python'],
    link: 'https://medium.com/@randomresearchai',
  },
  {
    title: 'Hack Club Chapter Leader',
    company: 'Hack Club',
    type: 'Contract',
    period: 'Nov 2025 - Present',
    location: 'Los Gatos High School',
    status: 'Active',
    description: [
      'Leading the Los Gatos High Hack Club chapter with 30+ active members',
      'Building a community where students learn coding, ship real projects, and explore AI',
      'Coordinate events, mentorship, and hands-on workshops for impactful products',
    ],
    tech: ['Leadership', 'Workshop Planning', 'Mentorship', 'Community Building'],
  },
  {
    title: 'Agentic AI Intern',
    company: 'RagaAI Inc',
    type: 'Internship',
    period: 'Jun 2025 - Aug 2025',
    location: 'Remote',
    status: 'Completed',
    description: [
      'Designed and deployed an AI agent that automates clinical trial eligibility screening',
      'Built modular workflows using retrieval-augmented generation (RAG) to parse complex inclusion/exclusion criteria',
      'Streamlined patient-trial matching for faster clinical research processes',
    ],
    tech: ['LangChain', 'RAG', 'Vector Databases', 'Python', 'FastAPI'],
  },
  {
    title: 'Student Intern',
    company: 'Los Gatos Chamber of Commerce',
    type: 'Internship',
    period: 'Oct 2024 - Apr 2025',
    location: 'Los Gatos, CA',
    status: 'Completed',
    description: [
      'Supported local business initiatives and coordinated community events',
      'Developed strategic outreach programs with cross-functional teams',
      'Gained experience in community development and organizational strategy',
    ],
    tech: ['Community Development', 'Event Planning', 'Strategic Outreach'],
  },
  {
    title: 'Intermediate Python Instructor',
    company: 'Steel City Codes',
    type: 'Volunteer',
    period: 'Aug 2024 - Nov 2024',
    location: 'Remote',
    status: 'Completed',
    description: [
      'Taught 30+ students core computer science concepts in Python',
      'Developed and delivered 10+ structured lesson plans integrating theory with hands-on coding',
    ],
    tech: ['Python', 'Teaching', 'Curriculum Development'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen pt-8 pb-20 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/30 font-mono text-[11px]">01</span>
            <div className="w-8 h-px bg-white/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">EXPERIENCE</h2>
          <p className="text-white/40 text-sm mt-4 uppercase tracking-wide">Quantitative research, AI systems, and technical leadership</p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card rounded-lg p-6 group"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/60 text-sm">{exp.company}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-white/40 text-sm">{exp.type}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded text-xs font-mono ${
                    exp.status === 'Active' ? 'status-active' : 'status-completed'
                  }`}>
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-xs text-white/50 font-mono mb-4">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-white/60 text-sm flex gap-2">
                    <span className="text-white/30">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span key={tech} className="tech-tag px-2 py-1 rounded text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-accent/70 hover:text-accent mt-4 transition-colors"
                >
                  View Publications
                  <span>→</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

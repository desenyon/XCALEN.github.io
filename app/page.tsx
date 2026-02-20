'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// ─── DATA ────────────────────────────────────────────────────────

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/desenyon', icon: 'gh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naitikpgupta/', icon: 'li' },
  { label: 'Medium', href: 'https://medium.com/@randomresearchai', icon: 'md' },
];

const navItems = [
  { key: '1', label: 'About', id: 'about' },
  { key: '2', label: 'Projects', id: 'projects' },
  { key: '3', label: 'Experience', id: 'experience' },
  { key: '4', label: 'Education', id: 'education' },
  { key: '5', label: 'Contact', id: 'contact' },
];

const projects = [
  {
    title: 'NetworkEngine',
    description: 'Lightweight Network Intrusion Detection System (NIDS) with signature-based detection and anomaly detection outputting to NDJSON.',
    tags: ['Python', 'Cybersecurity', 'NIDS'],
    link: 'https://github.com/desenyon/NetworkEngine',
    period: 'Feb 2026',
    featured: false,
  },
  {
    title: 'Sigma',
    description: 'AI-powered finance research agent. Natural language queries for market analysis, charts, and backtesting. Runs natively on macOS.',
    tags: ['Python', 'Agent', 'Finance', 'Research'],
    link: 'https://github.com/desenyon/sigma',
    period: 'Jan 2026',
    featured: false,
  },
  {
    title: 'Flux-RX',
    description: 'Financial analysis and visualization library. Publication-quality interactive charts, reports, and dashboards for any stock, ETF, or index.',
    tags: ['Python', 'Finance', 'Visualization'],
    link: 'https://github.com/desenyon/flux-rx',
    period: 'Jan 2026',
  },
  {
    title: 'Scope-RX',
    description: 'Comprehensive library for explaining and interpreting neural network predictions. Attribution methods, evaluation metrics, and visualization.',
    tags: ['Python', 'Neural Networks', 'XAI'],
    link: 'https://github.com/desenyon/scope-rx',
    period: 'Jan 2026',
    featured: true,
  },
  {
    title: 'Updraft-LM',
    description: 'A 117M parameter transformer built from scratch. Fundamental language model implementation with custom training pipeline.',
    tags: ['Python', 'LLM', 'Transformers'],
    link: 'https://github.com/desenyon/updraft-lm',
    period: 'Jan 2026',
  },
  {
    title: 'Kinetic Fortress',
    description: 'Regime-conditioned cross-sectional alpha engine. Deterministic research pipeline and LEAN execution. Sharpe 1.49, CAGR >80%.',
    tags: ['Python', 'QuantConnect', 'LEAN'],
    link: 'https://github.com/desenyon/kineticfortress',
    period: 'Dec 2025',
  },
  {
    title: 'Aurane',
    description: 'Domain-specific language for ML that transpiles to idiomatic PyTorch. Interactive REPL, watch mode, model inspection, shape inference.',
    tags: ['Python', 'DSL', 'Compiler'],
    link: 'https://github.com/desenyon/aurane',
    period: 'Jan 2026',
  },
  {
    title: 'QuantConnect Strategies',
    description: 'Collection of algorithmic trading strategies built for the QuantConnect platform. Systematic approaches to equity markets.',
    tags: ['Python', 'Algo Trading', 'LEAN'],
    link: 'https://github.com/desenyon/quantconnect-strategies',
    period: 'Jan 2026',
  },
  {
    title: 'World of Machine Learning',
    description: 'Interactive platform teaching students to build their first AI model end-to-end using real Kaggle datasets.',
    tags: ['TypeScript', 'Education', 'ML'],
    link: 'https://github.com/desenyon/worldofmachinelearning',
    period: 'Jan 2026',
  },
  {
    title: 'RefineLab',
    description: 'AI writing growth engine. Analyzes essays, teaches skills, tracks progress. Strict academic integrity -- feedback only, never generates content.',
    tags: ['Next.js', 'TypeScript', 'Gemini AI'],
    link: 'https://github.com/desenyon/refinelab',
    period: 'Nov 2025',
  },
  {
    title: 'DivergentUnity',
    description: 'AI consensus platform using Gemini. Analyzes debates, extracts values, identifies agreement, generates balanced compromises.',
    tags: ['FastAPI', 'Next.js', 'Gemini AI'],
    link: 'https://github.com/desenyon/divergentunity',
    period: 'Nov 2025',
  },
  {
    title: 'Lucefact',
    description: 'ML model introspection laboratory. Analyze architectures across TensorFlow, PyTorch, ONNX, and scikit-learn formats.',
    tags: ['TypeScript', 'TensorFlow.js', 'ONNX'],
    link: 'https://github.com/desenyon/Lucefact',
    period: 'Nov 2025',
  },
  {
    title: 'OpenCare',
    description: 'AI platform simplifying Medi-Cal and Medicaid eligibility. NLP-driven eligibility engine and automated form filling. 3rd Place LG Hacks.',
    tags: ['Next.js', 'AWS', 'GPT-4'],
    link: 'https://github.com/desenyon/opencare',
    period: 'Oct 2025',
  },
  {
    title: 'FireGuard',
    description: 'Wildfire safety app using NASA FIRMS, CAL FIRE, OpenWeatherMap. Smoke Compass navigation and AI chatbot. Congressional App Challenge recognition.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/desenyon/Fireguard',
    period: 'Oct 2025',
  },
  {
    title: 'ResearchQuantize',
    description: 'CLI tool for aggregating and searching research papers from ArXiv, PubMed, and Semantic Scholar. Parallel processing and SQLite storage.',
    tags: ['Python', 'Textual', 'SQLite'],
    link: 'https://github.com/desenyon/ResearchQuantize',
    period: 'Jul 2025',
  },
  {
    title: 'Skin Cancer Detection',
    description: 'Deep learning for multi-class skin cancer classification. 91% accuracy. 1st Place SCVSEF SYNOPSYS, CSEF qualifier. Published in JSR.',
    tags: ['Python', 'TensorFlow', 'ResNet50'],
    link: 'https://www.jsr.org/hs/index.php/path/article/view/6454',
    period: 'Jan - Mar 2025',
  },
];

const experiences = [
  {
    title: 'Founder',
    company: 'Saerin',
    period: 'Feb 2026 - Present',
    location: 'Remote',
    description: 'Building the AI & Finance Backbone. Check out our work at https://saerin.tech.',
    logo: '/saerin-logo.png',
  },
  {
    title: 'Founder',
    company: 'Sigma Financial Research',
    period: 'Jan 2026 - Present',
    location: 'California, Remote',
    description: 'Financial research agent that provides data-driven market intelligence, strategies, and backtesting. Building Sigma, an AI-powered finance research agent running natively on macOS.',
  },
  {
    title: 'Independent Quantitative Researcher',
    company: 'QuantConnect',
    period: 'Dec 2025 - Present',
    location: 'Remote',
    description: 'Ranked 8th out of 25 in the Open League leaderboard. Designed systematic equity strategies achieving Sharpe ratios up to 1.49 and CAGR above 80%.',
  },
  {
    title: 'AI Research Author',
    company: 'RandomResearchAI',
    period: 'Jun 2023 - Present',
    location: 'Remote',
    description: 'Authored 15+ in-depth AI/ML articles generating over 18,000 total views on Medium. Published research in Journal of Student Research.',
  },
  {
    title: 'Hack Club Chapter Leader',
    company: 'Hack Club',
    period: 'Nov 2025 - Present',
    location: 'Los Gatos, CA',
    description: 'Leading the chapter with 30+ active members. Community of students learning coding, shipping projects, and exploring AI.',
  },
  {
    title: 'Agentic AI Intern',
    company: 'RagaAI Inc',
    period: 'Jun 2025 - Aug 2025',
    location: 'Remote',
    description: 'Designed and deployed an AI agent automating clinical trial eligibility screening. Built modular workflows using retrieval-augmented generation.',
  },
  {
    title: 'Student Intern',
    company: 'Los Gatos Chamber of Commerce',
    period: 'Oct 2024 - Apr 2025',
    location: 'Los Gatos, CA',
    description: 'Supported local business initiatives and coordinated community events. Developed strategic outreach programs.',
  },
  {
    title: 'Intermediate Python Instructor',
    company: 'Steel City Codes',
    period: 'Aug 2024 - Nov 2024',
    location: 'Remote',
    description: 'Taught 30+ students core computer science concepts in Python. Developed and delivered 10+ structured lesson plans.',
  },
];

const education = [
  {
    title: 'High School',
    institution: 'Los Gatos High School',
    period: 'Aug 2024 - Jun 2027',
    location: 'Los Gatos, CA',
    description: 'Junior year. Focus: Computer Science, Mathematics, Spanish.',
  },
  {
    title: 'Brown Pre-College Program',
    institution: 'Brown University',
    period: 'Completed',
    location: 'Providence, RI',
    description: 'University-level coursework in Nueral Networks and Deep Learning.',
  },
];

const awards = [
  { title: 'SCVSEF SYNOPSYS First Place', detail: 'Computational Biology & Bioinformatics', period: 'Mar 2025' },
  { title: 'CSEF Qualifier', detail: 'California Science & Engineering Fair', period: 'Apr 2025' },
  { title: 'SCVSEF SYNOPSYS RRI Honorable Mention', detail: 'Research Recognition', period: '2025' },
  { title: 'LG Hacks 3rd Place', detail: 'Hackathon', period: 'Oct 2025' },
  { title: 'World Language Excellence Award', detail: 'Spanish', period: '2024' },
];

const certifications = [
  { title: 'Introduction to Model Context Protocol', issuer: 'Anthropic' },
  { title: 'Ask Questions to Make Data-Driven Decisions', issuer: 'Google' },
  { title: 'Prepare Data for Exploration', issuer: 'Google' },
  { title: 'Foundations: Data, Data, Everywhere', issuer: 'Google' },
];

const contactLinks = [
  { label: 'Saerin', value: 'saerin.tech', href: 'https://saerin.tech' },
  { label: 'Email', value: 'naitikpgupta@gmail.com', href: 'mailto:naitikpgupta@gmail.com' },
  { label: 'GitHub', value: 'github.com/desenyon', href: 'https://github.com/desenyon' },
  { label: 'LinkedIn', value: 'linkedin.com/in/naitikpgupta', href: 'https://linkedin.com/in/naitikpgupta' },
  { label: 'Medium', value: '@randomresearchai', href: 'https://medium.com/@randomresearchai' },
];

// ─── SOCIAL ICON COMPONENT ──────────────────────────────────────

function SocialIcon({ type }: { type: string }) {
  if (type === 'gh') return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
  if (type === 'li') return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

// ─── ANIMATION VARIANTS ─────────────────────────────────────────

const pageVariants = {
  initial: { opacity: 0, y: 16, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -8, filter: 'blur(4px)' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const cardHover = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, y: 0 },
  hover: { scale: 1.02, rotateX: 4, rotateY: -2, y: -2, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

// ─── PAGE CONTENT COMPONENTS ────────────────────────────────────

function AboutPage() {
  return (
    <motion.div
      key="about"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-[family-name:var(--font-space)] font-bold text-white leading-[1.1] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Making cool stuff in
        <br />
        <span className="text-[#38bdf8]">AI</span> and{' '}
        <span className="text-[#38bdf8]">Finance</span>.
      </motion.h2>

      <motion.div
        className="space-y-5 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-[15px] text-white/60 leading-[1.7]">
          I am Naitik Gupta, an AI Researcher and Full-Stack Engineer. Founder of Saerin & Sigma Financial Research.
        </p>
        <p className="text-[15px] text-white/60 leading-[1.7]">
          Multi-time Hackathon Winner and 1st Place at SCVSEF SYNOPSYS with CSEF qualification. My research in medical imaging and financial systems is published in the Journal of Student Research.
        </p>
        <p className="text-[15px] text-white/60 leading-[1.7]">
          I build systematic trading strategies on QuantConnect/LEAN and write about ML on Medium (15+ articles, 18k+ views). Over the summer, I interned at RagaAI building agentic RAG pipelines spanning local and cloud LLMs.
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        className="grid grid-cols-3 gap-4 mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        {[
          { num: '1st', label: 'SYNOPSYS Rank' },
          { num: '18K+', label: 'Medium Views' },
          { num: '3+', label: 'Hackathon Wins' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#141414] border border-white/[0.06] rounded-xl p-4 text-center">
            <div className="text-2xl font-[family-name:var(--font-space)] font-bold text-[#38bdf8]">{stat.num}</div>
            <div className="text-[11px] text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Quant Strategies Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-lg font-[family-name:var(--font-space)] font-semibold text-white mb-1">
          A Few Cool Quant Strategies I Made
        </h3>
        <p className="text-[12px] text-white/30 mb-5">All built on QuantConnect / LEAN</p>

        <div className="space-y-3">
          {[
            {
              name: 'TheOmniscientParadox',
              href: 'https://www.quantconnect.com/strategies/46/TheOmniscientParadox',
              description: 'Momentum-rotation system concentrating exposure in the strongest risk-adjusted trending ETF. Multi-horizon rate-of-change scaled by realized volatility.',
              metrics: { cagr: '73.38%', sharpe: '1.28', psr: '51.42', drawdown: '41%' },
              tags: ['Momentum', 'Rotation', 'Volatility Targeting'],
              live: true,
            },
            {
              name: 'Swimming Blue Salamander',
              href: 'https://www.quantconnect.com/u/naitik-gupta',
              description: 'High-conviction equity rotation strategy. Composite scoring with cross-sectional momentum and volatility filters across leveraged ETF universe.',
              metrics: { cagr: '66.40%', sharpe: '1.28', psr: '62.29', drawdown: '42.7%' },
              tags: ['Cross-Sectional', 'Equity', 'Leverage'],
              live: false,
            },
            {
              name: 'Ugly Fluorescent Orange Bull',
              href: 'https://www.quantconnect.com/u/naitik-gupta',
              description: 'Aggressive sector-rotation engine targeting regime-conditioned alpha. Deterministic pipeline with strict risk overlay and position sizing.',
              metrics: { cagr: '62.58%', sharpe: '1.16', psr: '50.13', drawdown: '56.4%' },
              tags: ['Sector Rotation', 'Regime', 'Alpha'],
              live: false,
            },
            {
              name: 'Pensive Apricot Rhinoceros',
              href: 'https://www.quantconnect.com/u/naitik-gupta',
              description: 'Trend-following with adaptive lookback. Ranks candidates by smoothed returns and allocates to the top risk-adjusted performer with cash fallback.',
              metrics: { cagr: '52.45%', sharpe: '1.06', psr: '36.16', drawdown: '51.3%' },
              tags: ['Trend Following', 'Adaptive', 'Equity'],
              live: false,
            },
            {
              name: 'Smooth Violet Fly',
              href: 'https://www.quantconnect.com/u/naitik-gupta',
              description: 'Volatility-weighted momentum strategy with RSI dampening. Rotates across leveraged sector ETFs with daily rebalancing and trend confirmation.',
              metrics: { cagr: '52.15%', sharpe: '1.03', psr: '38.81', drawdown: '55.9%' },
              tags: ['Volatility Weighted', 'RSI', 'Daily'],
              live: false,
            },
          ].map((strategy, i) => (
            <motion.a
              key={strategy.name}
              href={strategy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.4, ease: 'easeOut' as const }}
            >
              <motion.div
                className={`border rounded-xl p-5 transition-colors duration-200 relative overflow-hidden ${strategy.live
                  ? 'bg-[#141414] border-[#38bdf8]/15 hover:border-[#38bdf8]/35'
                  : 'bg-[#141414] border-white/[0.06] hover:border-white/[0.14]'
                  }`}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ y: -5, scale: 1.02, rotateX: 3, rotateY: -2, z: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
              >
                {/* Accent line for live */}
                {strategy.live && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-[#38bdf8]/25 group-hover:bg-[#38bdf8]/40 transition-colors" />
                )}

                {/* Header row */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    {strategy.live && (
                      <span className="relative flex h-1.5 w-1.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#38bdf8]"></span>
                      </span>
                    )}
                    <h4 className="text-[14px] font-semibold text-white">{strategy.name}</h4>
                    {strategy.live && (
                      <span className="text-[9px] text-[#38bdf8]/60 uppercase tracking-wider font-medium">Live</span>
                    )}
                  </div>
                  <svg className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>

                {/* Description */}
                <p className="text-[12px] text-white/35 leading-relaxed mb-4">
                  {strategy.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[
                    { value: strategy.metrics.cagr, label: 'CAGR', highlight: true },
                    { value: strategy.metrics.sharpe, label: 'Sharpe' },
                    { value: strategy.metrics.psr, label: 'PSR' },
                    { value: strategy.metrics.drawdown, label: 'Drawdown' },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className={`text-sm font-[family-name:var(--font-space)] font-bold ${'highlight' in m && m.highlight ? 'text-[#38bdf8]' : 'text-white/70'}`}>
                        {m.value}
                      </div>
                      <div className="text-[8px] text-white/25 uppercase tracking-widest mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {strategy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] text-white/25 bg-white/[0.03] border border-white/[0.04] rounded-md uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* View all link */}
        <motion.a
          href="https://www.quantconnect.com/u/naitik-gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-4 py-3 text-[12px] text-white/30 hover:text-white/50 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="uppercase tracking-wider">View all 16 backtests on QuantConnect</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

function ProjectsPage() {
  return (
    <motion.div
      key="projects"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        className="text-3xl font-[family-name:var(--font-space)] font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="text-sm text-white/40 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Cool stuff i've worked on
      </motion.p>

      <motion.div
        className="space-y-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        style={{ perspective: '1200px' }}
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={staggerItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="block"
          >
            <motion.div
              variants={cardHover}
              className={`border rounded-xl p-5 transition-colors duration-200 ${project.featured
                ? 'bg-[#141414] border-[#38bdf8]/20 hover:border-[#38bdf8]/40'
                : 'bg-[#141414] border-white/[0.06] hover:border-white/[0.14]'
                }`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  {project.featured && (
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8] shrink-0" />
                  )}
                  <h3 className={`text-[15px] font-semibold ${project.featured ? 'text-white' : 'text-white/90'}`}>
                    {project.title}
                  </h3>
                </div>
                <span className="text-[11px] text-white/30 shrink-0">{project.period}</span>
              </div>
              <p className="text-sm text-white/45 leading-relaxed mb-3 pl-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pl-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] text-white/40 bg-white/[0.04] border border-white/[0.06] rounded-md uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

function ExperiencePage() {
  return (
    <motion.div
      key="experience"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        className="text-3xl font-[family-name:var(--font-space)] font-bold text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="relative"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        style={{ perspective: '1200px' }}
      >
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/[0.06]" />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.title + exp.company}
              variants={staggerItem}
              className="relative pl-8"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-white/20 bg-[#0a0a0a]" />

              <motion.div
                className="bg-[#141414] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.14] transition-colors"
                whileHover={{ y: -3, scale: 1.01, rotateX: 2, rotateY: -1, z: 10 }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-[15px] font-semibold text-white">{exp.title}</h3>
                  <span className="text-[11px] text-white/30">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[12px] text-white/40">
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="w-5 h-5 rounded-md object-contain shrink-0" />
                  )}
                  <span>{exp.company}</span>
                  <span className="text-white/15">--</span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function EducationPage() {
  return (
    <motion.div
      key="education"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        className="text-3xl font-[family-name:var(--font-space)] font-bold text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="space-y-4 mb-14"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.title}
            variants={staggerItem}
            className="bg-[#141414] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.14] transition-colors"
          >
            <h3 className="text-[15px] font-semibold text-white mb-1">{edu.title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-[12px] text-white/40 mb-2">
              <span>{edu.institution}</span>
              <span className="text-white/15">--</span>
              <span>{edu.period}</span>
              <span className="text-white/15">--</span>
              <span>{edu.location}</span>
            </div>
            <p className="text-sm text-white/50">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Awards */}
      <motion.h3
        className="text-lg font-[family-name:var(--font-space)] font-semibold text-white mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Awards & Honors
      </motion.h3>
      <motion.div
        className="space-y-2 mb-14"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {awards.map((award) => (
          <motion.div
            key={award.title}
            variants={staggerItem}
            className="bg-[#141414] border border-white/[0.06] rounded-xl px-5 py-3.5 hover:border-white/[0.14] transition-colors flex items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-sm font-medium text-white">{award.title}</h4>
              <p className="text-[11px] text-white/35 mt-0.5">{award.detail}</p>
            </div>
            <span className="text-[11px] text-white/25 shrink-0">{award.period}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.h3
        className="text-lg font-[family-name:var(--font-space)] font-semibold text-white mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Certifications
      </motion.h3>
      <motion.div
        className="space-y-2"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={staggerItem}
            className="bg-[#141414] border border-white/[0.06] rounded-xl px-5 py-3.5 hover:border-white/[0.14] transition-colors"
          >
            <h4 className="text-sm font-medium text-white">{cert.title}</h4>
            <p className="text-[11px] text-white/35 mt-0.5">{cert.issuer}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div
      key="contact"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        className="text-3xl font-[family-name:var(--font-space)] font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-sm text-white/40 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Open to research collaborations and summer 2026 opportunities.
      </motion.p>

      <motion.div
        className="space-y-3 mb-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {contactLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            variants={staggerItem}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="block"
          >
            <motion.div
              variants={cardHover}
              className="bg-[#141414] border border-white/[0.06] rounded-xl px-5 py-4 hover:border-white/[0.14] transition-colors flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">{link.label}</p>
                <p className="text-sm text-white">{link.value}</p>
              </div>
              <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-3 bg-[#141414] border border-white/[0.06] rounded-xl px-5 py-4"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
        </span>
        <span className="text-sm text-white/50">Available for opportunities</span>
      </motion.div>
    </motion.div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────

export default function Home() {
  const [activePage, setActivePage] = useState('about');

  const navigate = useCallback((id: string) => {
    setActivePage(id);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const item = navItems.find((n) => n.key === e.key);
      if (item) navigate(item.id);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <AboutPage />;
      case 'projects': return <ProjectsPage />;
      case 'experience': return <ExperiencePage />;
      case 'education': return <EducationPage />;
      case 'contact': return <ContactPage />;
      default: return <AboutPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* ─── LEFT SIDEBAR: Profile ─── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col justify-between py-10 px-7 border-r border-white/[0.05] overflow-y-auto sidebar-scroll z-50 bg-[#0a0a0a]">
        {/* Background ambient spill */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-48 h-48 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, rgba(200,255,0,0.02) 40%, transparent 65%)',
              filter: 'blur(30px)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 -right-8 w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 60%)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        <div className="space-y-7 relative z-10">
          {/* Profile image with glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center gap-4"
          >
            {/* Glow behind avatar */}
            <motion.div
              className="absolute -inset-2 rounded-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(200,255,0,0.12) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/[0.1] ring-1 ring-[#38bdf8]/10 shrink-0">
              <Image
                src="/profile.jpeg"
                alt="Naitik Gupta"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <p className="text-[10px] text-white/25 leading-relaxed ml-2">
              Use keyboard<br />numbers to<br />navigate pages
            </p>
          </motion.div>

          {/* Name & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h1 className="text-lg font-[family-name:var(--font-space)] font-bold text-white">
              Naitik Gupta
            </h1>
            <p className="text-[13px] text-white/40 mt-1">
              HS Student | AI Researcher | (Aspiring) Quant Developer
            </p>
            {/* Accent underline */}
            <motion.div
              className="h-px mt-3 rounded-full"
              style={{ background: 'linear-gradient(90deg, rgba(200,255,0,0.3) 0%, rgba(200,255,0,0.05) 60%, transparent 100%)' }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <p className="text-[13px] text-white/45 leading-relaxed">
              Bay Area based. Working on AI, quantitative finance, and software engineering.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-1.5"
          >
            <h2 className="text-[10px] font-medium text-[#38bdf8]/40 uppercase tracking-widest mb-2.5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#38bdf8]/20" />
              Contact
            </h2>
            <a
              href="mailto:naitikpgupta@gmail.com"
              className="group flex items-center gap-2.5 px-3 py-2 -mx-3 rounded-lg hover:bg-white/[0.03] transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-[#38bdf8]/20 group-hover:bg-[#38bdf8]/[0.04] transition-colors">
                <svg className="w-3 h-3 text-white/30 group-hover:text-[#38bdf8]/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <span className="text-[12px] text-white/50 group-hover:text-white/80 transition-colors">naitikpgupta@gmail.com</span>
            </a>
            <a
              href="https://naitikg.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-3 py-2 -mx-3 rounded-lg hover:bg-white/[0.03] transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-[#38bdf8]/20 group-hover:bg-[#38bdf8]/[0.04] transition-colors">
                <svg className="w-3 h-3 text-white/30 group-hover:text-[#38bdf8]/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </span>
              <span className="text-[12px] text-white/50 group-hover:text-white/80 transition-colors">naitikg.me</span>
            </a>
            <a
              href="https://saerin.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-3 py-2 -mx-3 rounded-lg hover:bg-white/[0.03] transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-[#38bdf8]/20 group-hover:bg-[#38bdf8]/[0.04] transition-colors overflow-hidden">
                <img src="/saerin-logo.png" alt="Saerin" className="w-3.5 h-3.5 object-contain opacity-50 group-hover:opacity-90 transition-opacity" />
              </span>
              <span className="text-[12px] text-white/50 group-hover:text-white/80 transition-colors">saerin.tech</span>
            </a>
          </motion.div>

          {/* Skills section removed */}
        </div>

        {/* Social links at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-10"
        >
          {/* Separator with fade */}
          <div
            className="h-px mb-5"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)' }}
          />
          <div className="flex flex-col gap-2">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-11 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-white/25 hover:text-white/70 hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-200 group"
                aria-label={link.label}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.06, duration: 0.4 }}
              >
                {/* Hover glow */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(circle at left, rgba(56,189,248,0.1) 0%, transparent 70%)' }} />
                <div className="flex items-center gap-3">
                  <div className="text-white/40 group-hover:text-[#38bdf8] transition-colors"><SocialIcon type={link.icon} /></div>
                  <span className="text-xs font-medium tracking-wide text-white/60 group-hover:text-white transition-colors">{link.label}</span>
                </div>
                <svg className="w-3.5 h-3.5 text-white/10 group-hover:text-white/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </aside>

      {/* ─── MIDDLE NAV: Vertical ─── */}
      <nav className="hidden lg:flex fixed left-72 top-0 h-screen w-14 flex-col items-center justify-center border-r border-white/[0.05] z-50 bg-[#0a0a0a]">
        {/* Animated ambient glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-24 h-32 rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(200,255,0,0.08) 0%, rgba(200,255,0,0.03) 40%, transparent 70%)',
              filter: 'blur(16px)',
            }}
            animate={{
              y: ['-10%', '10%', '-10%'],
              opacity: [0.6, 1, 0.6],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-[25%] w-16 h-20 rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(200,255,0,0.05) 0%, transparent 60%)',
              filter: 'blur(12px)',
            }}
            animate={{
              y: ['8%', '-12%', '8%'],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>

        <div className="space-y-2 relative z-10">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/25 hover:text-white/50 hover:bg-white/[0.04]'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`${item.label} (${item.key})`}
              >
                <span className="text-[12px] font-[family-name:var(--font-space)] font-bold">
                  {item.key}
                </span>

                {/* Active glow behind button */}
                {isActive && (
                  <motion.span
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(200,255,0,0.12) 0%, transparent 70%)',
                      filter: 'blur(6px)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-2.5 py-1 text-[11px] text-white bg-[#1a1a1a] border border-white/[0.08] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {item.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -right-[7px] w-[3px] h-5 bg-[#38bdf8] rounded-l-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  >
                    {/* Glow spill from the indicator */}
                    <span
                      className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-8 rounded-full"
                      style={{
                        background: 'radial-gradient(ellipse at left center, rgba(200,255,0,0.15) 0%, transparent 70%)',
                        filter: 'blur(4px)',
                      }}
                    />
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* ─── MOBILE HEADER ─── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06] z-40 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/[0.08]">
              <Image
                src="/profile.jpeg"
                alt="Naitik Gupta"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-sm font-[family-name:var(--font-space)] font-bold text-white">Naitik Gupta</span>
          </div>
        </div>
      </div>

      {/* ─── MOBILE BOTTOM NAV ─── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/[0.06] z-40 px-2 py-2 flex justify-around">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${isActive ? 'text-[#38bdf8]' : 'text-white/30'
                }`}
            >
              <span className="text-[11px] font-bold">{item.key}</span>
              <span className="text-[9px]">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 lg:ml-[344px] min-h-screen relative">
        {/* Animated background -- subtle noise mesh */}
        <div className="fixed inset-0 lg:left-[344px] pointer-events-none overflow-hidden z-0" style={{ perspective: '1000px' }}>
          {/* Drifting orb A -- slow orbit top-right */}
          <motion.div
            className="absolute w-[900px] h-[900px] rounded-full opacity-[0.04]"
            style={{
              background: 'radial-gradient(circle, rgba(56,189,248,1) 0%, transparent 50%)',
              filter: 'blur(120px)',
            }}
            animate={{
              x: [80, -40, 80],
              y: [-60, 40, -60],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            initial={{ top: '-20%', right: '-25%' }}
          />
          {/* Drifting orb B -- slow orbit bottom-left */}
          <motion.div
            className="absolute w-[700px] h-[700px] rounded-full opacity-[0.035]"
            style={{
              background: 'radial-gradient(circle, rgba(56,189,248,1) 0%, transparent 50%)',
              filter: 'blur(110px)',
            }}
            animate={{
              x: [-30, 50, -30],
              y: [30, -50, 30],
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            initial={{ bottom: '-10%', left: '-15%' }}
          />
          {/* Drifting orb C -- warm tone, center wander */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.025]"
            style={{
              background: 'radial-gradient(circle, rgba(255,240,180,1) 0%, transparent 50%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: [20, -60, 40, 20],
              y: [-20, 30, -40, -20],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
            initial={{ top: '30%', left: '20%' }}
          />

          {/* 3D Wireframe Grid Element */}
          <motion.div
            className="absolute top-[20%] right-[10%] w-[600px] h-[600px] opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              rotateX: 60,
              rotateZ: -45,
            }}
            animate={{
              z: [0, 50, 0],
              rotateZ: [-45, -35, -45],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Fine grain noise overlay for texture */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        <div className="max-w-2xl mx-auto px-6 lg:px-10 pt-20 lg:pt-12 pb-24 relative z-10">
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>

          {/* Footer */}
          <motion.div
            className="mt-16 pt-6 border-t border-white/[0.04] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[11px] text-white/15">2026 Naitik Gupta</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

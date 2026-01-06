'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center px-6 lg:px-20 relative pt-8">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Keyboard hint - top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-4 right-8 flex items-center gap-2 text-[11px] text-white/50 font-mono"
      >
        <span>Press</span>
        <span className="kbd">1</span>
        <span className="text-white/30">—</span>
        <span className="kbd">4</span>
        <span>to navigate</span>
      </motion.div>
      
      <div className="max-w-3xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Mobile Header */}
          <div className="lg:hidden mb-8">
            <h1 className="text-sm font-medium text-white tracking-[0.15em]">
              NAITIK GUPTA
            </h1>
          </div>

          {/* Stats bar - moved up, bigger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-8 text-[13px] font-mono text-white/50 tracking-wide"
          >
            <span>1st @ SCVSEFA SYOPSYS </span>
            <span className="w-px h-4 bg-white/20" />
            <span>8TH QUANTCONNECT OPEN RANK</span>
            <span className="w-px h-4 bg-white/20" />
            <span>18K+ VIEWS ON MEDIUM</span>
          </motion.div>

          {/* Main Headline - Visibl style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight">
              EXPLORING THINGS LIKE:<br />
              <span className="text-white/50">QUANTITATIVE RESEARCH</span><br />
              <span className="text-white/50">& MACHINE LEARNING</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl uppercase tracking-wide"
          >
            Curious and self-driven high school junior focused on artificial intelligence, computational finance, and applied research. 
          </motion.p>

          {/* Buttons - Visibl style */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 pt-6"
          >
            <Link 
              href="/projects"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              VIEW PROJECTS
            </Link>
            <Link 
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              CONTACT →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

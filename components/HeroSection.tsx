'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-start justify-center px-6 lg:px-20 pt-12 pb-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Mobile Header (hidden on desktop) */}
          <div className="lg:hidden space-y-4 mb-12">
            <h1 className="text-5xl font-bold">naitik</h1>
            <p className="text-white/50 text-sm tracking-wider">16yr old HS Student + AI Researcher</p>
            <p className="text-white/40 text-sm tracking-wider">San Francisco Bay Area</p>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Tech Art */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex justify-center items-center py-2"
            >
              <div className="font-mono text-cyan-500/60 leading-tight">
                <pre className="text-xs md:text-sm text-center">
{`     ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
    ╱▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔╲
   ▏     ⚡  NEURAL  NETWORKS  ⚡              ▕
   ▏   ◈━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◈    ▕
   ▏     ▸ Machine Learning  ▸ Research      ▕
   ▏     ▸ AI Development    ▸ Innovation    ▕
   ▏   ◈━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◈    ▕
    ╲▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁╱
     ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿`}
                </pre>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed font-light"
            >
              Curious and self-driven high school junior with a strong interest in artificial intelligence and applied research. 
              I enjoy exploring complex problems, learning independently, and turning ideas into projects that have real users. 
              Experienced in leading student-driven initiatives, collaborating with mentors, and presenting technical work in competitive and academic environments.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              {[
                { value: '15+', label: 'Articles' },
                { value: '13K+', label: 'Views' },
                { value: '4+', label: 'Awards' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Tech Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {['Python', 'Machine Learning', 'Leadership', 'Communication', 'Research'].map((tech) => (
                <span key={tech} className="text-sm text-white/40 hover:text-white/60 transition-colors">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

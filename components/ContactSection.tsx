'use client';

import { motion } from 'framer-motion';

const contactLinks = [
  {
    label: 'Email',
    value: 'naitikpgupta@gmail.com',
    href: 'mailto:naitikpgupta@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/desenyon',
    href: 'https://github.com/desenyon',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/naitikpgupta',
    href: 'https://linkedin.com/in/naitikpgupta',
  },
  {
    label: 'Medium',
    value: '@randomresearchai',
    href: 'https://medium.com/@randomresearchai',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center pt-8 pb-20 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-3xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/30 font-mono text-[11px]">04</span>
            <div className="w-8 h-px bg-white/15" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">CONTACT</h2>
          <p className="text-white/40 text-sm mt-4 uppercase tracking-wide">Open to research collaborations and opportunities</p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card p-4 rounded-lg group flex items-center justify-between"
            >
              <div>
                <span className="text-white/40 text-xs font-mono uppercase tracking-wider">{link.label}</span>
                <p className="text-white group-hover:text-white/70 transition-colors text-sm">
                  {link.value}
                </p>
              </div>
              <span className="text-white/30 group-hover:text-white/50 transition-colors">→</span>
            </motion.a>
          ))}
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded card">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
            <span className="text-white/50 text-xs font-mono">
              Open to summer 2026 opportunities
            </span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/[0.06] text-center">
          <p className="text-white/30 text-xs font-mono">
            © {new Date().getFullYear()} Naitik Gupta
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 lg:px-20">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact</h2>

          <div className="space-y-8">
            {/* Email */}
            <div>
              <p className="text-sm text-white/40 mb-3">Email</p>
              <a
                href="mailto:naitikpgupta@gmail.com"
                className="text-2xl md:text-3xl text-white/60 hover:text-white transition-colors"
              >
                naitikpgupta@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="text-sm text-white/40 mb-3">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/naitikpgupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-white/60 hover:text-white transition-colors"
              >
                linkedin.com/in/naitikpgupta
              </a>
            </div>

            {/* GitHub */}
            <div>
              <p className="text-sm text-white/40 mb-3">GitHub</p>
              <a
                href="https://github.com/naitikpgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-white/60 hover:text-white transition-colors"
              >
                github.com/naitikpgupta
              </a>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="pt-12 border-t border-white/10"
          >
            <p className="text-lg md:text-xl text-white/40 italic">
              "Building the future, one system at a time."
            </p>
          </motion.div>

          {/* Footer */}
          <div className="pt-12 text-sm text-white/30">
            © 2025 Naitik Gupta
          </div>
        </motion.div>
      </div>
    </section>
  );
}

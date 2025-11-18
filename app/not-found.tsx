'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div>
            <h1 className="text-9xl font-bold text-white mb-8 font-jetbrains">
              404
            </h1>
            <div className="h-px w-32 bg-white/20 mb-8" />
            <p className="text-2xl text-white/50 mb-4">
              Page not found
            </p>
            <p className="text-base text-white/30">
              The page you're looking for doesn't exist.
            </p>
          </div>

          <Link href="/">
            <motion.button
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="text-white/50 hover:text-white transition-colors duration-300 text-base"
            >
              ← Back to home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-[9999] bg-black pointer-events-none"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-8">
          {/* Animated logo/text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: 1,
                ease: "easeInOut",
              }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center"
            >
              <span className="text-black font-bold text-3xl">N</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white text-xl font-light tracking-[0.3em]"
            >
              NAITIK GUPTA
            </motion.div>
          </motion.div>

          {/* Loading bar */}
          <div className="w-64 h-1 bg-white/10 overflow-hidden mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-white"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

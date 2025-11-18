'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white transform origin-left z-[9999]"
        style={{ scaleX }}
      />
      
      {/* Bottom corner indicator */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none hidden md:block">
        <div className="relative w-16 h-16">
          {/* Background circle */}
          <svg className="transform -rotate-90 w-16 h-16">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress
              }}
              strokeDasharray="175.93"
              strokeDashoffset="0"
            />
          </svg>
          
          {/* Percentage text */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-white text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.span>
              {scrollYProgress.get() && Math.round(scrollYProgress.get() * 100)}%
            </motion.span>
          </motion.div>
        </div>
      </div>
    </>
  );
}

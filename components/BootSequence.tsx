'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BootSequence() {
  const [lines, setLines] = useState<string[]>([]);
  
  const bootLines = [
    'INITIALIZING SYSTEM',
    'LOADING NEURAL NETWORKS',
    'MOUNTING AI CORES',
    'BOOT SEQUENCE COMPLETE',
  ];

  useEffect(() => {
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, index * 400);
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="max-w-2xl w-full px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-white/40 space-y-3"
        >
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm tracking-widest"
            >
              {line}
              {index === lines.length - 1 && (
                <span className="terminal-cursor ml-1">_</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

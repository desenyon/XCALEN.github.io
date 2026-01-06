'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

// Glitch text component
const GlitchText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}';
  
  useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      return;
    }
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, isActive]);
  
  return <span>{displayText}</span>;
};

// Animated counter
const Counter = ({ end, duration = 1000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}</span>;
};

export default function BootSequence({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);
  const [scanLine, setScanLine] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
    }));
    setParticles(newParticles);
  }, []);

  // Scan line animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 2) % 100);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Phase progression
  useEffect(() => {
    const timings = [0, 300, 800, 1400, 2000, 2400, 2800];
    
    timings.forEach((time, index) => {
      setTimeout(() => {
        setPhase(index);
        if (index === 3) setGlitchActive(true);
        if (index === 5) setGlitchActive(false);
      }, time);
    });

    // Complete animation
    setTimeout(() => {
      onComplete?.();
    }, 3200);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-[100] overflow-hidden"
        exit={{ 
          opacity: 0,
          scale: 1.1,
          filter: 'blur(20px)',
        }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Particle field */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                y: [0, -100],
              }}
              transition={{
                duration: particle.speed * 2,
                repeat: Infinity,
                delay: particle.id * 0.05,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ top: `${scanLine}%` }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />

        {/* Horizontal glitch lines */}
        {glitchActive && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-[1px] bg-white/20"
                style={{ top: `${20 + i * 15}%` }}
                animate={{
                  scaleX: [0, 1, 0],
                  x: [-100, 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.15,
                  repeat: 3,
                  delay: i * 0.05,
                }}
              />
            ))}
          </>
        )}

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 -m-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: phase >= 1 ? 1 : 0, 
                scale: 1,
                rotate: 360,
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                scale: { duration: 0.5 },
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            {/* Progress ring */}
            <motion.div
              className="absolute inset-0 -m-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray={440}
                  initial={{ strokeDashoffset: 440 }}
                  animate={{ strokeDashoffset: phase >= 2 ? 0 : 440 }}
                  transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                />
              </svg>
            </motion.div>

            {/* Center logo/text */}
            <div className="relative z-10 text-center">
              {/* Percentage */}
              <motion.div
                className="font-mono text-6xl md:text-8xl font-light tracking-tight text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: phase >= 2 ? 1 : 0, 
                  scale: 1,
                  filter: glitchActive ? 'blur(2px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.3 }}
              >
                {phase >= 2 && <Counter end={100} duration={1500} />}
                <span className="text-2xl md:text-4xl text-white/50">%</span>
              </motion.div>

              {/* Name reveal */}
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: phase >= 4 ? 'auto' : 0,
                  opacity: phase >= 4 ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.h1
                  className="text-xl md:text-2xl font-medium tracking-[0.3em] text-white"
                  initial={{ y: 30 }}
                  animate={{ y: phase >= 4 ? 0 : 30 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <GlitchText text="NAITIK GUPTA" isActive={phase === 4} />
                </motion.h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                className="mt-4 font-mono text-xs tracking-[0.2em] text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 5 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                SYSTEM INITIALIZED
              </motion.div>
            </div>

            {/* Corner brackets */}
            <motion.div
              className="absolute -inset-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 3 ? 1 : 0 }}
            >
              {/* Top left */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-white/30" />
              {/* Top right */}
              <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-white/30" />
              {/* Bottom left */}
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-white/30" />
              {/* Bottom right */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-white/30" />
            </motion.div>
          </div>
        </div>

        {/* Status text bottom */}
        <motion.div
          className="absolute bottom-12 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 space-y-2">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {phase < 3 && 'LOADING NEURAL INTERFACE'}
              {phase >= 3 && phase < 5 && 'ESTABLISHING CONNECTION'}
              {phase >= 5 && 'READY'}
            </motion.div>
            
            {/* Data streams */}
            <div className="flex justify-center gap-8 text-white/20">
              <span>LAT: 37.2295</span>
              <span>LONG: -121.9290</span>
              <span>SYS: ACTIVE</span>
            </div>
          </div>
        </motion.div>

        {/* Side data columns */}
        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/20 space-y-1 hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, x: 0 }}
        >
          {['CORE_01', 'CORE_02', 'CORE_03', 'CORE_04'].map((core, i) => (
            <div key={core} className="flex items-center gap-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-white"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              />
              <span>{core}</span>
              <span className="text-white/40">{phase >= 3 ? 'ONLINE' : 'INIT'}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="absolute right-8 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/20 space-y-1 text-right hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, x: 0 }}
        >
          <div>MEM: 16.384 GB</div>
          <div>CPU: QUANTUM</div>
          <div>GPU: NEURAL</div>
          <div>NET: MESH_V2</div>
        </motion.div>

        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

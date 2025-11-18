'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-6 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
          >
            <span className="text-black font-bold text-lg">N</span>
          </motion.div>
          <span className="text-white font-medium hidden md:block group-hover:text-white/70 transition-colors">Naitik Gupta</span>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-6 py-2.5 text-sm md:text-base text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Work
          </motion.a>
          <motion.a
            href="#research"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-6 py-2.5 text-sm md:text-base text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Research
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-8 py-2.5 md:py-3 text-sm md:text-base bg-white text-black hover:bg-white/90 transition-all rounded-full font-medium shadow-lg shadow-white/20"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
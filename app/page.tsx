'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import CustomCursor from '@/components/CustomCursor';
import TradingViewTicker from '@/components/TradingViewTicker';
import BootSequence from '@/components/BootSequence';

const navItems = [
  { href: '/', label: 'Home', num: '00', key: '0' },
  { href: '/experience', label: 'Experience', num: '01', key: '1' },
  { href: '/projects', label: 'Projects', num: '02', key: '2' },
  { href: '/education', label: 'Education', num: '03', key: '3' },
  { href: '/contact', label: 'Contact', num: '04', key: '4' },
];

// Session storage key to track if boot sequence has been shown
const BOOT_SHOWN_KEY = 'boot_sequence_shown';

export default function Home() {
  const router = useRouter();
  const [showBoot, setShowBoot] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if boot sequence should show (only on initial load)
  useEffect(() => {
    const hasShown = sessionStorage.getItem(BOOT_SHOWN_KEY);
    if (!hasShown) {
      setShowBoot(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem(BOOT_SHOWN_KEY, 'true');
    setShowBoot(false);
    setIsLoading(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      const item = navItems.find(nav => nav.key === e.key);
      if (item) {
        router.push(item.href);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <>
      {/* Boot Sequence - Epic Loading Animation */}
      <AnimatePresence>
        {showBoot && <BootSequence onComplete={handleBootComplete} />}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CustomCursor />

        {/* Fixed Sidebar - Visibl-inspired minimal */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-black/80 backdrop-blur-md z-50 hidden lg:flex flex-col justify-between py-12 px-8 border-r border-white/[0.06]">
          
          {/* Header */}
          <div className="space-y-10 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="group block">
                <h1 className="text-sm font-medium text-white tracking-[0.15em] hover:text-white/80 transition-colors">
                  NAITIK GUPTA
                </h1>
              </Link>
              
              <div className="mt-6 flex items-center gap-3 text-[11px] font-mono">
                <span className="text-white/50">SF, CA</span>
                <span className="text-white/20">|</span>
                <span className="text-white/50">STUDENT</span>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between py-2 transition-all duration-200 text-white/40 hover:text-white/70"
                >
                  <span className="text-[13px] tracking-wide">{item.label.toUpperCase()}</span>
                  <span className="text-[10px] font-mono text-white/30 group-hover:text-white/50">
                    {item.num}
                  </span>
                </Link>
              ))}
            </motion.nav>
          </div>

          {/* Bottom section */}
          <div className="space-y-6 relative z-10">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                href="https://github.com/desenyon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                href="https://www.linkedin.com/in/naitikpgupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                href="https://medium.com/@randomresearchai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </motion.a>
            </div>
            
            <div className="text-white/30 text-[10px] font-mono">
              © 2026 NAITIK GUPTA
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-h-screen lg:ml-64">
          <TradingViewTicker />
          <HeroSection />
        </main>

        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/[0.06] z-50">
          <nav className="flex justify-around py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-1 px-3 py-1 transition-colors text-white/40"
              >
                <span className="text-[10px] font-mono">{item.num}</span>
                <span className="text-[10px]">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}

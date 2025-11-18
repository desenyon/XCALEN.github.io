'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TradingViewTicker() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'NASDAQ:NVDA', title: 'NVIDIA' },
        { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
        { proName: 'NASDAQ:GOOGL', title: 'Google' },
        { proName: 'NASDAQ:TSLA', title: 'Tesla' },
        { proName: 'AMEX:SPY', title: 'S&P 500' },
        { proName: 'NASDAQ:QQQ', title: 'QQQ' },
      ],
      showSymbolLogo: false,
      isTransparent: true,
      displayMode: 'compact',
      colorTheme: 'dark',
      locale: 'en',
    });

    container.current.appendChild(script);

    return () => {
      // Safely clear the container
      if (container.current) {
        while (container.current.firstChild) {
          container.current.removeChild(container.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mb-8 lg:mb-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm">
          {/* Top gradient glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/15 to-transparent blur-sm" />
          
          {/* Bottom gradient glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/15 to-transparent blur-sm" />
          
          <div ref={container} className="tradingview-widget-container opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

'use client';

import { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const techStack = [
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'TypeScript', icon: '⚡', category: 'Languages' },
  { name: 'JavaScript', icon: '📜', category: 'Languages' },
  { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
  { name: 'PyTorch', icon: '🔥', category: 'AI/ML' },
  { name: 'Scikit-learn', icon: '📊', category: 'AI/ML' },
  { name: 'Next.js', icon: '▲', category: 'Frameworks' },
  { name: 'React', icon: '⚛️', category: 'Frameworks' },
  { name: 'FastAPI', icon: '⚡', category: 'Frameworks' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Firebase', icon: '🔥', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Vercel', icon: '▲', category: 'Cloud' },
  { name: 'OpenCV', icon: '👁️', category: 'AI/ML' },
  { name: 'LangChain', icon: '🔗', category: 'AI/ML' },
  { name: 'Prisma', icon: '🔷', category: 'Database' },
  { name: 'Tailwind', icon: '🎨', category: 'Frameworks' },
  { name: 'Git', icon: '🌿', category: 'DevOps' },
  { name: 'Gemini', icon: '✨', category: 'AI/ML' },
];

interface TechCardProps {
  tech: typeof techStack[0];
  index: number;
  mouseX: any;
  mouseY: any;
}

function TechCard({ tech, index, mouseX, mouseY }: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = mouseX.get() - centerX;
    const distanceY = mouseY.get() - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    // Magnetic pull effect
    if (distance < 200) {
      const force = (200 - distance) / 200;
      x.set(distanceX * force * 0.2);
      y.set(distanceY * force * 0.2);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02, duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="border border-white/10 bg-black/40 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 hover:border-white/30 hover:bg-white/5 cursor-pointer"
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: isHovered ? '0 0 40px rgba(255, 255, 255, 0.1)' : 'none',
          }}
        />
        
        <div className="relative z-10">
          <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
          <p className="text-xs text-white/40 font-mono">{tech.category}</p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
  );
}

export default function TechStackSphere() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const categories = Array.from(new Set(techStack.map(t => t.category)));
  const filteredTech = selectedCategory 
    ? techStack.filter(t => t.category === selectedCategory)
    : techStack;

  return (
    <section id="tech-stack" className="py-20 px-6" onMouseMove={handleMouseMove}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-mono">
              <span className="text-white/40">*</span> Tech Stack
            </h2>
            <p className="text-white/60 text-sm max-w-2xl">
              Technologies I work with daily. Hover over the cards to see the magnetic interaction effect.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 text-xs font-mono border rounded transition-colors ${
                  !selectedCategory 
                    ? 'border-white/40 text-white bg-white/5' 
                    : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-mono border rounded transition-colors ${
                    selectedCategory === category
                      ? 'border-white/40 text-white bg-white/5'
                      : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredTech.map((tech, index) => (
              <TechCard
                key={tech.name}
                tech={tech}
                index={index}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-12 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{techStack.length}</div>
              <div className="text-xs text-white/40 font-mono">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{categories.length}</div>
              <div className="text-xs text-white/40 font-mono">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8+</div>
              <div className="text-xs text-white/40 font-mono">Projects</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

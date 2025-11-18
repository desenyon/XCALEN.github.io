# Naitik Gupta - Next-Level Portfolio 🚀

An ultra-sophisticated, cinematic portfolio website featuring advanced animations, space-themed aesthetics, and world-class UI/UX design.

## 🌟 Advanced Features

### Visual Excellence
- **Space-Themed Hero Section**: Dynamic star field with 150+ animated particles, parallax nebula effects, and split-screen layout inspired by premium agency sites
- **Custom Cursor**: Sophisticated custom cursor with trailing effects, hover states, and click animations using Framer Motion
- **Glassmorphism Design**: Premium glass-effect cards with backdrop blur, gradient overlays, and hover glow effects
- **Cinematic Animations**: Every element features carefully crafted animations with custom easing curves `[0.16, 1, 0.3, 1]`
- **Noise Texture Overlay**: Subtle film grain effect for added texture and depth
- **Page Transitions**: Smooth loading states with animated logo and progress bar

### Interactive Elements
- **Timeline Experience Section**: Interactive vertical timeline with pulsing dots, gradient backgrounds, and hover effects
- **Micro-Interactions**: Every button, card, and link features sophisticated hover states and transitions
- **Scroll Animations**: useInView hooks trigger staggered animations as content enters viewport
- **Parallax Effects**: Mouse-following parallax on hero nebula elements
- **Floating Decorations**: Animated floating elements with rotation and scale transforms

### Premium Components

#### Hero Section
- Split-screen responsive layout
- 150 animated star particles with random durations
- 3 layered nebula effects with parallax
- Massive typography (220px+ on desktop)
- Service list with arrow indicators
- Floating badge elements
- Mobile-optimized stacked layout

#### Experience Section
- Interactive timeline with animated line
- 4 color-coded gradient cards
- Pulsing timeline dots on hover
- Stats cards (4+ roles, 2+ years, 15+ publications, 13K+ views)
- Staggered entry animations
- Glassmorphic design with corner accents

#### Research Section
- Animated rotating gradient background blobs
- 3-column publication grid
- Custom gradient overlays per card
- Awards section with emoji icons
- Massive stats display (13K+ views)
- Scale and lift hover effects

#### Education Section
- 3D rotate-in animations
- Icon-based cards with emoji
- Color-coded gradient backgrounds
- Floating decoration corners
- Hover scale and lift effects

#### Contact Section
- Dramatic pulsing gradient backgrounds
- Large-scale typography (9xl)
- Interactive cards with arrow indicators
- 3-column info grid
- Availability status indicator
- Enhanced hover states

#### Navigation
- Fixed glassmorphic navbar
- Scroll-based backdrop blur activation
- Animated logo with rotation on hover
- Smooth scroll-to-section links
- Responsive mobile layout

### Technical Architecture
- **Framework**: Next.js 16.0.3 with App Router & Turbopack
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with custom utilities
- **Animations**: Framer Motion (useScroll, useTransform, useSpring, motion components)
- **Hooks**: react-intersection-observer for viewport detection
- **Fonts**: Inter (sans), JetBrains Mono (mono) via next/font/google
- **State Management**: React hooks (useState, useEffect, useRef)

## 🎨 Design Philosophy

### Space & Minimalism
Inspired by premium sites like Astra and Eventis, the design balances futuristic space aesthetics with clean minimalism:
- Black background with strategic use of white space
- Subtle gradient accents (blue, purple, pink, cyan)
- High contrast for readability
- Generous spacing and breathing room

### Motion Design
Every animation serves a purpose:
- **Entrance animations**: Staggered reveals create visual hierarchy
- **Hover states**: Immediate feedback with scale, color, and glow changes
- **Scroll animations**: Progressive disclosure as user explores
- **Parallax effects**: Add depth and interactivity

### Glassmorphism
Premium glass effect throughout:
- `backdrop-blur-xl` for depth
- `bg-white/5` to `bg-white/10` for subtle backgrounds
- `border border-white/10` for definition
- Hover states increase opacity and blur

## 🚀 Performance Optimizations

- **Client-side rendering** with `'use client'` for interactive components
- **Hydration-aware** with mounted state to prevent mismatches
- **Session storage** for boot sequence (only shows once)
- **Optimized animations** with hardware-accelerated transforms
- **Lazy loading** with intersection observer
- **Smooth scroll** enabled globally

## 📱 Responsive Design

- **Mobile-first** approach with breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- **Flexible typography**: Scales from 16vw to 220px
- **Stacked layouts** on mobile, grid/split on desktop
- **Touch-optimized** interactions
- **Hidden custom cursor** on touch devices

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Key Dependencies

```json
{
  "next": "16.0.3",
  "react": "^19.0.0",
  "framer-motion": "^11.15.0",
  "react-intersection-observer": "^9.14.0",
  "tailwindcss": "^4.0.0"
}
```

## 🌐 Deployment

Optimized for:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

## ✨ Highlights

- 🎨 **1000+ lines** of sophisticated animation code
- 🌟 **150+ particles** in hero star field
- 🎯 **15+ sections** with unique animations
- 💎 **4 color themes** across experience cards
- 🚀 **Zero scrollbars** - hidden with CSS
- 🎬 **Cinematic transitions** throughout
- 🔥 **Custom cursor** with advanced interactions
- 🌌 **Space aesthetic** with nebula effects
- 📊 **Stats showcase** - 13K+ views, 15+ articles
- 🏆 **Awards section** with 4+ recognitions

## 🎓 Content

Based on Naitik Gupta's real achievements:
- CTO at Rooxts
- Founder of Syntheon (Edge AI)
- Agentic AI Intern at RagaAI
- 15+ AI/ML research articles
- 13K+ combined article views
- Brown University Pre-College Program
- UC Berkeley Haas Business Academy
- Multiple science fair awards

## 📄 License

© 2025 Naitik Gupta. All rights reserved.

---

Built with passion for next-level design and performance. 🚀✨


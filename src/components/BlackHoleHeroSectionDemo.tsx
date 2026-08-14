import { Download, Play, Pause } from 'lucide-react';
import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';

const BlackHoleHeroSection = lazy(() => import('./BlackHoleHeroSection').then(m => ({ default: m.BlackHoleHeroSection })));

const titleText = "Muhammad Mubashar Murtaza";
const letters = Array.from(titleText);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
  }),
};

const childVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 16, stiffness: 200 },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: "spring", damping: 16, stiffness: 200 },
  },
};

export function BlackHoleHeroSectionDemo() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax: Black hole moves slower than scrolling text
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = (
    <div className="flex h-full flex-col justify-center px-6 pt-28 sm:px-10 md:px-12 md:pt-0 text-white max-w-[34rem] relative z-10 min-h-[92svh] md:min-h-[720px] md:items-start items-start">
      <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 relative">
        <motion.div
          style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", marginBottom: "0.5rem" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span 
              variants={childVariants} 
              key={index}
              className="text-4xl md:text-6xl font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Junior Data Analyst</h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Transforming raw data into meaningful insights
        </p>
      
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white flex items-center gap-2"
          >
            Contact Me
          </a>
          <a
            href="/Muhammad_Mubashar_Murtaza_CV.docx"
            download
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white flex items-center gap-2"
          >
            <Download size={16} /> Download CV
          </a>
        </div>

        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          title="Toggle Background Animation"
        >
          {isPaused ? <Play size={20} /> : <Pause size={20} />}
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <section ref={containerRef} className="relative min-h-[100dvh] bg-black flex items-center pt-20 pb-10 overflow-hidden">
        {content}
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] overflow-hidden bg-black flex items-center">
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <BlackHoleHeroSection
            focus={[0.5, 0.5]}
            scrim="left"
            scrimStrength={1.0}
            steps={isMobile ? 60 : 80}
            resolution={isMobile ? 0.3 : 0.4}
            maxDpr={1.0}
            paused={isPaused}
            className="absolute inset-0 min-h-[100dvh]"
          />
        </Suspense>
      </motion.div>
      {content}
    </section>
  );
}

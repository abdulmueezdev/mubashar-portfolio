import { Download } from 'lucide-react';
import { useState, useEffect, lazy, Suspense } from 'react';

const BlackHoleHeroSection = lazy(() => import('./BlackHoleHeroSection').then(m => ({ default: m.BlackHoleHeroSection })));

export function BlackHoleHeroSectionDemo() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const content = (
    <div className="flex h-full flex-col justify-center px-6 md:px-12 text-white max-w-[34rem] relative z-10">
      <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Muhammad Mubashar Murtaza</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Junior Data Analyst</h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Transforming raw data into meaningful insights
        </p>
      
      <div className="flex flex-wrap gap-4">
        <a
          href="#portfolio"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
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
    </div>
  </div>
);

  if (isMobile) {
    return (
      <section className="relative min-h-screen bg-black flex items-center pt-20 pb-10">
        {content}
      </section>
    );
  }

  return (
    <Suspense fallback={<section className="relative min-h-screen bg-black flex items-center pt-20 pb-10">{content}</section>}>
      <BlackHoleHeroSection
        focus={[0.5, 0.5]}
        scrim="left"
        scrimStrength={1.0}
        steps={140}
        resolution={0.4}
        paused={false}
        className="relative min-h-screen"
      >
        {content}
      </BlackHoleHeroSection>
    </Suspense>
  );
}

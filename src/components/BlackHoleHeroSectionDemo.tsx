import { Download } from 'lucide-react';
import { BlackHoleHeroSection } from './BlackHoleHeroSection';

export function BlackHoleHeroSectionDemo() {
  return (
    <BlackHoleHeroSection
      focus={[0.5, 0.5]}
      scrim="left"
      className="relative min-h-screen"
    >
      <div className="flex h-full flex-col justify-center px-6 md:px-12 text-white max-w-[34rem]">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Muhammad Mubashar Murtaza</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">Junior Data Analyst</h2>
        <p className="text-lg md:text-xl text-white/80 mb-8">
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
    </BlackHoleHeroSection>
  );
}

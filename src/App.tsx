import { useEffect, lazy, Suspense } from 'react';
import { BlackHoleHeroSectionDemo } from './components/BlackHoleHeroSectionDemo';
import './index.css';

const Nav = lazy(() => import('./components/Nav').then(m => ({ default: m.Nav })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

function App() {
  useEffect(() => {
    if (window.innerWidth < 768) return;
    
    let lenisInstance: any = null;
    let gsapInstance: any = null;
    
    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([LenisModule, gsapModule, ScrollTriggerModule]) => {
      const Lenis = LenisModule.default;
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      if (gsapInstance) {
        gsapInstance.ticker.remove((time: any) => { lenisInstance?.raf(time * 1000); });
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Suspense fallback={<div className="h-20" />}>
        <Nav />
      </Suspense>
      <main>
        <BlackHoleHeroSectionDemo />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

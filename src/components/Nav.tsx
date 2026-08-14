import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    setIsShrunk(latest > 200);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 px-8 transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md' 
          : 'border-transparent bg-transparent'
      } ${isShrunk ? 'py-3' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          M.M.M.
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-[var(--color-text-secondary)]">
          {NAV_LINKS.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

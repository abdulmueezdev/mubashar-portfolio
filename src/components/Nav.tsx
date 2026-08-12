import React from 'react';
import { motion } from 'framer-motion';

export const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          M.M.M.
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-[var(--color-text-secondary)]">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

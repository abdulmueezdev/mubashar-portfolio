import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/siteData';
import { ArrowRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[100dvh] pt-32 pb-20 px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-[var(--color-text-secondary)] flex items-center gap-2 text-sm font-mono">
            <MapPin size={16} /> {SITE_DATA.profile.location}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 max-w-[15ch] leading-[1.1]">
            {SITE_DATA.profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8">
            {SITE_DATA.profile.title}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-auto">
            <a href="#contact" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
              Let's Talk <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="border border-[var(--color-border)] hover:bg-[var(--color-card)] px-6 py-3 rounded-full font-medium transition-colors">
              View Work
            </a>
          </div>
        </motion.div>

        {/* Bento Grid Sidebar Cards */}
        <div className="flex flex-col gap-6 md:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2.5rem] p-8 flex-1 flex flex-col justify-between"
          >
            <h3 className="text-sm font-mono text-[var(--color-text-secondary)]">Currently Studying</h3>
            <p className="text-lg font-medium mt-4">
              {SITE_DATA.education.degree}<br/>
              <span className="text-[var(--color-text-secondary)] text-sm">{SITE_DATA.education.university}</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2.5rem] p-8 flex-1 flex items-center justify-center relative overflow-hidden group cursor-pointer"
          >
            {/* Liquid glass effect simulation */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-bold tracking-tight text-center z-10">Data Storytelling<br/>& Analysis</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

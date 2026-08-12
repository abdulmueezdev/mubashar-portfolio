import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/siteData';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

export const About: React.FC = () => {
  const { education } = SITE_DATA;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="about" 
      className="py-24 px-8 border-t border-[var(--color-border)] bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">About & Education</h2>
          <div className="h-[1px] flex-1 bg-[var(--color-border)] ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Philosophy / Bio */}
          <div className="flex flex-col gap-6 text-[var(--color-text-secondary)] text-lg leading-relaxed">
            <p>
              I am a data analyst bridging the gap between raw numbers and actionable business insights. My focus is on data storytelling, where I transform complex datasets into clear, interactive visual narratives.
            </p>
            <p>
              With a strong foundation in Economics and Data Science, I understand not just *how* to process the data, but *why* it matters to the bottom line. 
            </p>
          </div>

          {/* Premium Education Card (Stitch-to-React) */}
          <div className="relative group">
            {/* Cyberpunk Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)] to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 overflow-hidden">
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-[var(--color-background)] rounded-2xl border border-[var(--color-border)]">
                  <GraduationCap className="text-[var(--color-accent)]" size={32} />
                </div>
                <div className="flex items-center gap-2 text-sm font-mono bg-[var(--color-background)] px-4 py-2 rounded-full border border-[var(--color-border)]">
                  <Calendar size={14} />
                  <span>{education.period}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 text-lg">{education.university}</p>

              <div className="flex items-center gap-2 mb-8 text-[var(--color-accent)] bg-[var(--color-accent)]/10 w-fit px-4 py-2 rounded-lg font-mono text-sm border border-[var(--color-accent)]/20">
                <Award size={16} />
                CGPA: {education.cgpa}
              </div>

              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
                  <BookOpen size={16} /> Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span 
                      key={idx} 
                      className="text-sm px-4 py-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-colors cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

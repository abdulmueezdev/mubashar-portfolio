import { motion } from 'framer-motion';
import { SITE_DATA } from '../data/siteData';

export const Projects = () => {
  const project = SITE_DATA.projects[0];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-[var(--color-primary)]"
      >
        Portfolio Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E85D04] opacity-5 rounded-bl-full pointer-events-none" />
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
              <p className="text-[var(--color-text-secondary)]">{project.subtitle}</p>
            </div>
            <div className="bg-[#E85D04] text-white px-3 py-1 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(232,93,4,0.3)]">
              {project.highlight}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {project.tech.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-[var(--color-background)] rounded-full text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                {tag}
              </span>
            ))}
          </div>

          {/* Mock Bar Chart Visualization */}
          <div className="mb-6 bg-[#1e1e1e] rounded-lg p-4 h-48 border border-gray-800 relative flex flex-col justify-end gap-2 group cursor-crosshair">
            <div className="absolute top-2 left-3 text-xs text-gray-500 font-mono">WPM Over Time</div>
            <div className="absolute top-2 right-3 text-xs text-[#E85D04] font-mono">plt.show()</div>
            
            <div className="flex items-end justify-between h-32 px-2 pb-1 border-b border-l border-gray-700">
              {/* Mock bars */}
              {[45, 52, 60, 58, 65, 72, 70, 78, 80, 84].map((height, i) => (
                <div key={i} className="w-full mx-0.5 group-hover:opacity-80 transition-opacity">
                  <div 
                    className="w-full bg-[#E85D04] rounded-t-sm" 
                    style={{ height: `${height}%`, opacity: 0.5 + (height / 170) }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between px-2 text-[10px] text-gray-600 font-mono">
              <span>Session 1</span>
              <span>Session 10</span>
            </div>
          </div>

          <ul className="space-y-3 relative z-10">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start text-[var(--color-text-secondary)] text-sm leading-relaxed">
                <span className="text-[#E85D04] mr-2 mt-1">▹</span>
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

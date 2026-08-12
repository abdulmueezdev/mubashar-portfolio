import { motion, type Variants } from 'framer-motion';
import { SITE_DATA } from '../data/siteData';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { type: "spring", stiffness: 100, damping: 12 } 
  }
};

export const Skills = () => {
  const { skills } = SITE_DATA;

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#18181B] text-gray-100 font-sans z-0">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-10" />
      
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3F3F46] [text-shadow:0_0_15px_rgba(37,99,235,0.4)]">
            SYSTEM.SKILLS
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-[#2563EB] shadow-[0_0_10px_#2563EB]" />
            <span className="font-mono text-sm text-[#2563EB] tracking-widest uppercase">Initializing modules...</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-[minmax(180px,auto)]"
        >
          {/* Languages - Spans 4 cols on large */}
          <motion.div 
            variants={item}
            className="md:col-span-3 lg:col-span-4 bg-[#18181B] border border-[#3F3F46] p-8 rounded-sm hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-xl font-bold mb-6 font-mono text-[#2563EB] uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-[#2563EB] shadow-[0_0_8px_#2563EB]"></span>
              Languages
            </h3>
            <ul className="space-y-4 font-mono text-sm md:text-base text-gray-400">
              {skills.languages.map((skill, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">/&gt;</span> 
                  <span className="group-hover:text-gray-200 transition-colors duration-300">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spreadsheet - Spans 4 cols */}
          <motion.div 
            variants={item}
            className="md:col-span-3 lg:col-span-4 bg-[#18181B] border border-[#3F3F46] p-8 rounded-sm hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-xl font-bold mb-6 font-mono text-[#2563EB] uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-[#2563EB] shadow-[0_0_8px_#2563EB]"></span>
              Spreadsheet
            </h3>
            <ul className="space-y-4 font-mono text-sm md:text-base text-gray-400">
              {skills.spreadsheet.map((skill, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">/&gt;</span> 
                  <span className="group-hover:text-gray-200 transition-colors duration-300">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools - Spans 5 cols */}
          <motion.div 
            variants={item}
            className="md:col-span-4 lg:col-span-5 bg-[#18181B] border border-[#3F3F46] p-8 rounded-sm hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-xl font-bold mb-6 font-mono text-[#2563EB] uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-[#2563EB] shadow-[0_0_8px_#2563EB]"></span>
              Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, idx) => (
                <span key={idx} className="px-4 py-2 border border-[#3F3F46] font-mono text-sm text-gray-400 group-hover:text-[#2563EB] group-hover:border-[#2563EB]/50 transition-colors duration-300 rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Other - Spans 3 cols */}
          <motion.div 
            variants={item}
            className="md:col-span-2 lg:col-span-3 bg-[#18181B] border border-[#3F3F46] p-8 rounded-sm hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-xl font-bold mb-6 font-mono text-[#2563EB] uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-[#2563EB] shadow-[0_0_8px_#2563EB]"></span>
              Other
            </h3>
            <ul className="space-y-4 font-mono text-sm md:text-base text-gray-400">
              {skills.other.map((skill, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#2563EB] mr-3 mt-1">/&gt;</span> 
                  <span className="group-hover:text-gray-200 transition-colors duration-300">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

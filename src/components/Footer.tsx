import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#0A0A0A] border-t border-[#262626] py-12 flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl md:text-5xl font-bold text-[#A3A3A3] tracking-wider">
        M.M.M.
      </div>
      
      <div className="flex items-center justify-center gap-6 mt-4">
        <a 
          href="https://www.linkedin.com/in/muhammad-mubashar-murtaza" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#A3A3A3] hover:text-[#E85D04] transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a href="mailto:mubasharmurtaza008@gmail.com"
           className="text-[#A3A3A3] hover:text-[#E85D04] transition-colors">
          <Mail size={20} />
        </a>
      </div>

      <div className="text-sm text-[#A3A3A3]">
        © 2026 Muhammad Mubashar Murtaza. All rights reserved.
      </div>
    </motion.footer>
  );
};

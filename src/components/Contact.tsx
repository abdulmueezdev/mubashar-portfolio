import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { SITE_DATA } from '../data/siteData';

export const Contact = () => {
  const { profile } = SITE_DATA;

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-[#FF5722]" />,
      title: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <Phone className="w-6 h-6 text-[#FF5722]" />,
      title: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: <Linkedin className="w-6 h-6 text-[#FF5722]" />,
      title: 'LinkedIn',
      value: 'muhammad-mubashar-murtaza',
      href: profile.linkedin,
      external: true,
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#FF5722]" />,
      title: 'Location',
      value: profile.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
      external: true,
    },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Initiate <span className="text-[var(--color-primary)]">Contact</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            href={method.href}
            target={method.external ? '_blank' : undefined}
            rel={method.external ? 'noopener noreferrer' : undefined}
            className="group flex items-center p-6 bg-[#141414] rounded-2xl border border-white/5 hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(232,93,4,0.3)]"
          >
            <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              {method.icon}
            </div>
            <div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider font-medium">
                {method.title}
              </p>
              <p className="text-lg font-semibold text-[var(--color-text-primary)]">
                {method.value}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

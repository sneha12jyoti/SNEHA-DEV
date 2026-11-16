import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../../data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-zinc-950/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                <span className="text-violet-400 font-mono font-bold text-xs">S</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                SNEHA<span className="text-violet-500">.</span>DEV
              </span>
            </div>
            <p className="text-zinc-400 text-sm font-light italic">
              "Designed and built with curiosity, creativity, and code."
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all hover:scale-105"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="py-8 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-mono text-zinc-400 hover:text-violet-300 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Tier: Copyright & Location */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>© {currentYear} K Sneha. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built for high-performance & responsive scale</span>
            <span>•</span>
            <span className="text-zinc-400">{personalData.location}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

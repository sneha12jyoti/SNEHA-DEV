import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Search } from 'lucide-react';
import { personalData } from '../../data/personal';

interface NavigationProps {
  onOpenCommandPalette: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Terminal', href: '#terminal', id: 'terminal' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex items-center justify-between pointer-events-none ${
          isScrolled ? 'py-1' : 'py-2'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-violet-500/40 transition-all duration-300 group shadow-lg shadow-black/40"
        >
          <div className="w-6 h-6 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-violet-400 font-mono font-bold text-xs">S</span>
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-violet-200 transition-colors">
            SNEHA<span className="text-violet-500">.</span>DEV
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-violet-600/20 border border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-violet-500/40 text-zinc-400 hover:text-white transition-all text-xs font-mono shadow-lg shadow-black/40"
            title="Search and shortcuts (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline px-1.5 py-0.5 text-[9px] bg-zinc-900 border border-white/10 rounded text-zinc-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Download Resume Button */}
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 font-mono text-xs font-semibold shadow-md shadow-white/10 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-zinc-950/80 backdrop-blur-xl border border-white/10 text-zinc-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-violet-500/30 p-6 shadow-2xl shadow-black/80"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-mono text-sm uppercase tracking-wider flex items-center justify-between transition-colors ${
                    activeSection === link.id
                      ? 'bg-violet-950/50 text-white border border-violet-500/30 font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                  )}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-zinc-950 font-mono text-sm font-semibold shadow-lg shadow-white/10"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  Terminal, 
  Briefcase, 
  Layers, 
  Award, 
  GraduationCap, 
  Mail, 
  Home, 
  User 
} from 'lucide-react';
import { personalData } from '../../data/personal';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Socials';
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const commands: CommandItem[] = useMemo(() => [
    {
      id: 'nav-home',
      title: 'Go to Home',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-zinc-400" />,
      action: () => scrollTo('hero'),
      shortcut: 'H'
    },
    {
      id: 'nav-about',
      title: 'Go to About Me',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-zinc-400" />,
      action: () => scrollTo('about'),
      shortcut: 'A'
    },
    {
      id: 'nav-experience',
      title: 'Go to Research & Experience',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-zinc-400" />,
      action: () => scrollTo('experience'),
      shortcut: 'E'
    },
    {
      id: 'nav-education',
      title: 'Go to Academic Background',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-zinc-400" />,
      action: () => scrollTo('education')
    },
    {
      id: 'nav-skills',
      title: 'Go to Tech Stack & Skills',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-zinc-400" />,
      action: () => scrollTo('skills'),
      shortcut: 'S'
    },
    {
      id: 'nav-projects',
      title: 'Go to Selected Work & Projects',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-violet-400" />,
      action: () => scrollTo('projects'),
      shortcut: 'P'
    },
    {
      id: 'nav-achievements',
      title: 'Go to Achievements & Problem Solving',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-amber-400" />,
      action: () => scrollTo('achievements')
    },
    {
      id: 'nav-terminal',
      title: 'Open Interactive Terminal',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('terminal'),
      shortcut: 'T'
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact Form',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-zinc-400" />,
      action: () => scrollTo('contact'),
      shortcut: 'C'
    },
    {
      id: 'act-resume',
      title: 'Download Resume (PDF)',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-violet-400" />,
      action: () => {
        onClose();
        window.open(personalData.resumeUrl, '_blank');
      }
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email Address to Clipboard',
      category: 'Actions',
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />,
      action: () => {
        navigator.clipboard.writeText(personalData.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    {
      id: 'social-github',
      title: 'Open GitHub Profile',
      category: 'Socials',
      icon: <ExternalLink className="w-4 h-4 text-zinc-400" />,
      action: () => {
        onClose();
        window.open(personalData.github, '_blank');
      }
    },
    {
      id: 'social-leetcode',
      title: 'Open LeetCode Profile (250+ solved)',
      category: 'Socials',
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose();
        if (personalData.leetcode) window.open(personalData.leetcode, '_blank');
      }
    },
    {
      id: 'social-gfg',
      title: 'Open GeeksforGeeks Profile (200+ solved)',
      category: 'Socials',
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        if (personalData.geeksforgeeks) window.open(personalData.geeksforgeeks, '_blank');
      }
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: <ExternalLink className="w-4 h-4 text-zinc-400" />,
      action: () => {
        onClose();
        window.open(personalData.linkedin, '_blank');
      }
    }
  ], [copied, onClose]);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      cmd => cmd.title.toLowerCase().includes(lower) || cmd.category.toLowerCase().includes(lower)
    );
  }, [commands, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-zinc-950 border border-violet-500/30 rounded-2xl shadow-2xl shadow-violet-950/40 overflow-hidden z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="w-5 h-5 text-violet-400" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-white placeholder-zinc-500 focus:outline-none text-sm font-sans"
              />
              <kbd className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-white/10 rounded">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="p-6 text-center text-zinc-500 text-sm font-mono">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm transition-colors ${
                      idx === selectedIndex
                        ? 'bg-violet-950/50 text-white border border-violet-500/30'
                        : 'text-zinc-300 hover:bg-zinc-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-md bg-zinc-900 border border-white/5">
                        {cmd.icon}
                      </div>
                      <span className="font-medium">{cmd.title}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        {cmd.category}
                      </span>
                      {cmd.shortcut && (
                        <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-white/10 rounded">
                          {cmd.shortcut}
                        </kbd>
                      )}
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Footer helper */}
            <div className="px-4 py-2.5 bg-zinc-900/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
              </div>
              <span>SNEHA.DEV Command Palette</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

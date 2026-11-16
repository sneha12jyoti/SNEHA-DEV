import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT');

  useEffect(() => {
    const statuses = [
      { at: 15, text: 'LOADING NEURAL RUNTIME...' },
      { at: 45, text: 'PARSING REPOSITORIES & METRICS...' },
      { at: 75, text: 'CALIBRATING 3D SPACE...' },
      { at: 95, text: 'SYSTEMS ONLINE' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentCap = Math.min(next, 100);

        const currentStatus = statuses.slice().reverse().find(s => currentCap >= s.at);
        if (currentStatus) {
          setStatusText(currentStatus.text);
        }

        return currentCap;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -30,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] select-none overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Center Branding */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.25)]">
            <span className="text-violet-400 font-mono font-bold text-lg">S</span>
          </div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400">
            PERSONAL PORTFOLIO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-2"
        >
          SNEHA<span className="text-violet-500">.</span>DEV
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm font-mono text-zinc-500 tracking-wider mb-8"
        >
          AI/ML ENGINEER & SOFTWARE DEVELOPER
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-80 flex flex-col gap-2">
          <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 px-0.5">
            <span className="tracking-widest">{statusText}</span>
            <span className="text-zinc-300 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

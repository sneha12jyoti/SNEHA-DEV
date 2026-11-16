import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  variant?: 'primary' | 'secondary' | 'ghost';
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  download,
  variant = 'primary',
  target,
  rel
}) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg group overflow-hidden select-none cursor-pointer text-sm sm:text-base';
  
  const variants = {
    primary: 'bg-white text-zinc-950 font-semibold px-6 py-3 hover:bg-zinc-100 shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]',
    secondary: 'bg-zinc-900/80 text-zinc-100 border border-white/10 px-6 py-3 hover:border-violet-500/40 hover:bg-zinc-900 hover:text-white',
    ghost: 'bg-transparent text-zinc-400 px-4 py-2 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
  };

  const content = (
    <motion.div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-violet-200 via-white to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
};

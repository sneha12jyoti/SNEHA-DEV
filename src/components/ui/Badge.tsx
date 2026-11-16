import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'violet' | 'cyan' | 'zinc' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'zinc',
  size = 'sm',
  className = ''
}) => {
  const variantStyles = {
    violet: 'bg-violet-950/40 text-violet-300 border-violet-700/30 hover:border-violet-500/50',
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-700/30 hover:border-cyan-500/50',
    zinc: 'bg-zinc-900/60 text-zinc-300 border-white/10 hover:border-white/20',
    outline: 'bg-transparent text-zinc-400 border-zinc-800 hover:text-zinc-200'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3.5 py-1.5'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono rounded-md border transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, Layers, Sparkles, Binary, Network, ShieldCheck, HeartPulse, HardDrive } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, index }) => {
  const isFeatured = project.featured;

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'explainable-moo-defect-prediction':
        return <Binary className="w-6 h-6 text-violet-400" />;
      case 'medibot':
        return <HeartPulse className="w-6 h-6 text-cyan-400" />;
      case 'power-systems-fault-diagnosis':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'snapclass-ai-attendance':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'mental-health-score':
        return <Sparkles className="w-6 h-6 text-fuchsia-400" />;
      case 'packet-analyzer':
        return <Network className="w-6 h-6 text-amber-400" />;
      default:
        return <HardDrive className="w-6 h-6 text-zinc-400" />;
    }
  };

  if (isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border border-violet-500/30 relative overflow-hidden group shadow-xl shadow-violet-950/20"
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-600/15 transition-all" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-violet-950/80 border border-violet-500/40 text-violet-300 font-semibold shadow-sm">
                FLAGSHIP RESEARCH PROJECT
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                {project.category}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-violet-300/80 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              {project.description}
            </p>

            {/* Highlights preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {project.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="zinc" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action column */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-56 justify-center">
            <button
              onClick={() => onOpenDetails(project)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 text-white font-mono text-xs font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-600/30 hover:shadow-[0_0_24px_rgba(139,92,246,0.5)] group/btn"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-violet-500/40 font-mono text-xs font-medium transition-colors"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between relative group"
    >
      <div>
        {/* Header with Icon and Category */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-violet-500/40 transition-colors">
            {getProjectIcon(project.id)}
          </div>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-zinc-900 border border-white/5 text-zinc-400">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-violet-200 transition-colors">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-mono text-zinc-500 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="zinc" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-white transition-colors"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-colors"
          title="View Source on GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

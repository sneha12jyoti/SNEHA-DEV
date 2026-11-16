import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers, BookOpen } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { Badge } from '../ui/Badge';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-violet-500/30 rounded-3xl shadow-2xl shadow-violet-950/50 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/10 bg-zinc-900/40">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-violet-950/80 border border-violet-500/40 text-violet-300">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                    Featured Research
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-sm font-mono mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Extended Abstract / Description */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Project Case Study & Overview</span>
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed font-light">
                {project.longDescription}
              </p>
            </div>

            {/* Architecture Details */}
            {project.architectureDetails && (
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Technical Architecture Breakdown</span>
                </h3>

                <p className="text-sm text-zinc-300 font-mono leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                  {project.architectureDetails.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {project.architectureDetails.keyModules.map((mod, i) => (
                    <div key={i} className="p-4 rounded-xl bg-zinc-900/80 border border-white/5">
                      <h4 className="text-sm font-display font-semibold text-white mb-1.5">
                        {mod.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {mod.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Key Engineering Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Technologies & Algorithms Utilized
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="violet" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-white/10 bg-zinc-900/40 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500">
              Verified Project Artifact
            </span>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-mono text-xs font-semibold hover:bg-zinc-100 transition-colors shadow-md shadow-white/10"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-mono text-xs font-semibold hover:bg-violet-500 transition-colors shadow-md shadow-violet-600/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { achievementsData } from '../../data/achievements';

export const AchievementsSection: React.FC = () => {
  const getIcon = (platform: string) => {
    if (platform.includes('LeetCode')) return <Code className="w-6 h-6 text-amber-400" />;
    if (platform.includes('GeeksforGeeks')) return <Terminal className="w-6 h-6 text-emerald-400" />;
    return <Github className="w-6 h-6 text-violet-400" />;
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="06"
          badge="ALGORITHMIC PROFICIENCY"
          title="PROBLEM SOLVING & ACHIEVEMENTS"
          subtitle="Dedicated practice solving competitive algorithmic problems and building robust foundational coding mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-violet-500/40 transition-colors">
                    {getIcon(item.platform)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-zinc-400">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-violet-300">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {item.platform}
                </h3>

                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-white transition-colors"
                  >
                    <span>{item.linkText || 'View Profile'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified Milestone
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

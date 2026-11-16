import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { educationData } from '../../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="02"
          badge="ACADEMIC BACKGROUND"
          title="EDUCATION"
          subtitle="A track record of academic consistency and disciplined rigor across foundational sciences and Computer Science."
        />

        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-6 md:pl-12 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-violet-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(139,92,246,0.6)]" />

              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-white/10 relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
                      {item.institution}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 font-semibold shadow-sm">
                      <Award className="w-3.5 h-3.5 text-violet-400" />
                      <span>{item.scoreType}: {item.score}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                  <span>{item.location}</span>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 border-t border-white/5 pt-4">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-sm font-light text-zinc-400 flex items-start gap-2">
                        <span className="text-cyan-400 font-mono text-xs mt-1">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

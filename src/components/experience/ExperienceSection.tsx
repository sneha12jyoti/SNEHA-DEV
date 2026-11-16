import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="03"
          badge="INSTITUTIONAL RESEARCH"
          title="RESEARCH & EXPERIENCE"
          subtitle="Applied computational research exploring deep learning models for mission-critical power systems."
        />

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-violet-950/60 border border-violet-500/40 text-violet-300">
                      National Institute of Technology
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs font-mono text-zinc-400">Research Fellowship</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 mt-2 text-zinc-400 text-sm font-mono">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Building2 className="w-4 h-4 text-violet-400" />
                      {exp.organization}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <MapPin className="w-4 h-4 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm font-mono text-cyan-300">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Content Bullets */}
              <div className="py-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  CORE RESEARCH INVESTIGATION & RESPONSIBILITIES
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/40 border border-white/5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-light text-zinc-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Methodologies */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-2">Core Tech:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <Badge key={sIdx} variant="zinc" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
                >
                  <span>Explore Associated Research Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

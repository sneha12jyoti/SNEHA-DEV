import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { certificationsData } from '../../data/certifications';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="07"
          badge="CONTINUOUS EDUCATION"
          title="CERTIFICATIONS & LEARNING"
          subtitle="Specialized coursework completed under leading educators in computer science and artificial intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-violet-500/40 transition-colors">
                    <Award className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-cyan-300">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {cert.year}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-violet-400 block mb-1">
                  Instructor / Academy: {cert.issuer}
                </span>

                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {cert.title}
                </h3>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Key Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <Badge key={sIdx} variant="zinc" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Completion
                </span>
                <span>Specialized Curriculum</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

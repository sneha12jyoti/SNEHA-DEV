import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Server, 
  Layout, 
  Database, 
  Wrench, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillCategories } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-fuchsia-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-400" />;
      default: return <Terminal className="w-5 h-5 text-zinc-400" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map(c => ({ id: c.category, label: c.category }))
  ];

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="04"
          badge="TECHNICAL COMPETENCIES"
          title="MY TECH STACK"
          subtitle="Proficiencies across systems programming, machine learning toolchains, and full-stack software development."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-violet-600 text-white font-semibold shadow-[0_0_16px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900/80 text-zinc-400 border border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-base">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {cat.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 hover:border-violet-500/50 hover:bg-violet-950/20 text-xs font-mono text-zinc-200 transition-all flex items-center gap-2 group cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60 group-hover:bg-cyan-400 transition-colors" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-violet-400" />
                  Verified Skill
                </span>
                <span>Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

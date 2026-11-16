import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Rocket, CheckCircle2, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalData } from '../../data/personal';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: 'Computer Science Undergraduate',
      description: 'Pursuing B.Tech in CSE at NIST University, Berhampur with an academic record of 9.2 CGPA and solid core foundations.'
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-violet-400" />,
      title: 'AI/ML & Software Development',
      description: 'Bridging algorithmic intelligence, deep learning architectures (CNN/LSTM), and modern web stacks into production-grade tools.'
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      title: 'Research and Project Experience',
      description: 'Conducted research at NIT Jamshedpur on power-system fault diagnosis; author of explainable multi-objective metaheuristic systems.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="01"
          badge="BIOGRAPHY & CORE FOCUS"
          title="A LITTLE ABOUT ME"
          subtitle="Engineering intelligent systems at the intersection of mathematical theory, machine learning, and scalable software design."
        />

        {/* Top: Portrait + Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10">
          
          {/* Left: Editorial Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-md h-full min-h-[380px] rounded-3xl glass-card border border-violet-500/30 p-3 relative overflow-hidden group shadow-xl shadow-violet-950/20 flex flex-col justify-between">
              {/* Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Portrait Image Container */}
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden bg-zinc-900">
                {!imgError ? (
                  <img
                    src={personalData.avatarUrl || '/profile.jpg'}
                    alt={personalData.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-900 text-zinc-500">
                    <BrainCircuit className="w-16 h-16 text-violet-400 mb-3" />
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                      SNEHA.DEV
                    </span>
                  </div>
                )}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SNEHA.DEV</span>
                </div>
              </div>

              {/* Bottom Card Footer Info */}
              <div className="relative z-10 px-3 py-3 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {personalData.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-violet-400" />
                    {personalData.location}
                  </p>
                </div>

                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-violet-950/60 border border-violet-500/40 text-violet-300">
                  9.2 CGPA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative"
          >
            <div className="space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
              <p className="text-white font-normal text-xl sm:text-2xl leading-snug">
                "I'm <span className="text-violet-400 font-medium">K Sneha</span>, a Computer Science and Engineering undergraduate at NIST University, Berhampur. I enjoy exploring the intersection of <span className="text-cyan-300 font-medium">Artificial Intelligence</span>, <span className="text-violet-300 font-medium">Machine Learning</span>, and <span className="text-zinc-100 font-medium">Software Engineering</span>."
              </p>

              <p className="text-zinc-400">
                "My interests include developing intelligent applications, experimenting with machine learning algorithms, solving challenging programming problems, and building full-stack applications."
              </p>

              <p className="text-zinc-400">
                "I believe in learning by building, understanding the technology behind solutions, and continuously improving my engineering skills."
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NIST University, Berhampur (2023–2027)</span>
              </div>
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
              >
                <span>View Research Trajectory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom: Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-display font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                <Sparkles className="w-3 h-3 text-violet-400" />
                <span>Core Pillar 0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Code, 
  BrainCircuit,
  MapPin
} from 'lucide-react';
import { personalData } from '../../data/personal';
import { MagneticButton } from '../ui/MagneticButton';
import { HeroNeuralCanvas } from '../3d/HeroNeuralCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-violet-500/30 text-xs font-mono text-zinc-300 mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-400">Available for Opportunities</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-violet-400" />
                {personalData.location}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">SNEHA</span>
                <span className="text-violet-500">.</span>
              </h1>
            </motion.div>

            {/* Secondary Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300 uppercase leading-snug"
            >
              I BUILD INTELLIGENT SYSTEMS AND MEANINGFUL DIGITAL EXPERIENCES.
            </motion.h2>

            {/* Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light"
            >
              "I'm a Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning, software engineering, and building practical solutions to real-world problems."
            </motion.p>

            {/* Role Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-xs sm:text-sm font-mono text-zinc-200 hover:border-violet-500/40 transition-colors">
                <BrainCircuit className="w-4 h-4 text-violet-400" />
                <span>AI/ML Engineer</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-xs sm:text-sm font-mono text-zinc-200 hover:border-cyan-500/40 transition-colors">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Software Developer</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-xs sm:text-sm font-mono text-zinc-200 hover:border-violet-500/40 transition-colors">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>Problem Solver</span>
              </div>
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full"
            >
              <MagneticButton
                variant="primary"
                href="#projects"
                className="w-full sm:w-auto"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                href={personalData.resumeUrl}
                download
                target="_blank"
                className="w-full sm:w-auto"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </MagneticButton>

              {/* Social Icons */}
              <div className="flex items-center gap-2 sm:ml-2 mt-2 sm:mt-0">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all hover:scale-105"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Neural Network Simulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full max-w-lg aspect-square relative rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl shadow-violet-950/20 group">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-[11px] font-mono text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>3D NEURAL TOPOLOGY</span>
              </div>
              <div className="absolute bottom-4 right-4 z-10 text-[10px] font-mono text-zinc-500">
                INTERACTIVE / MOVE CURSOR
              </div>

              <HeroNeuralCanvas />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = ['All', 'AI / ML', 'Research', 'Full Stack', 'Java / Systems'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  // Separate featured project from regular grid
  const featuredProject = projectsData.find(p => p.featured);
  const showFeaturedInBanner = activeFilter === 'All' || (featuredProject && featuredProject.category === activeFilter);
  const gridProjects = showFeaturedInBanner
    ? filteredProjects.filter(p => !p.featured)
    : filteredProjects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <SectionHeading
          number="05"
          badge="PORTFOLIO HIGHLIGHTS"
          title="SELECTED WORK"
          subtitle="Building practical solutions through intelligent systems, research, and software engineering."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-violet-600 text-white font-semibold shadow-[0_0_16px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900/80 text-zinc-400 border border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Project Showcase */}
        {showFeaturedInBanner && featuredProject && (
          <div className="mb-8">
            <ProjectCard
              project={featuredProject}
              onOpenDetails={setSelectedProject}
              index={0}
            />
          </div>
        )}

        {/* Grid of Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
              index={idx + 1}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

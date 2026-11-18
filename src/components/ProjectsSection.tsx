'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'systems'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category.includes(filter);
  });

  const categories = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'ai', label: 'AI & Agents', count: PROJECTS.filter((p) => p.category.includes('ai')).length },
    { id: 'web', label: 'Full Stack & Web', count: PROJECTS.filter((p) => p.category.includes('web')).length },
    { id: 'systems', label: 'Systems & Hackathons', count: PROJECTS.filter((p) => p.category.includes('systems')).length },
  ];

  const getColorClasses = (color: Project['color']) => {
    switch (color) {
      case 'yellow':
        return {
          border: 'hover:border-assiko-yellow/70',
          glow: 'group-hover:shadow-spark-yellow',
          badge: 'text-assiko-yellow bg-assiko-yellow/10 border-assiko-yellow/30',
          accent: 'text-assiko-yellow',
        };
      case 'mint':
        return {
          border: 'hover:border-assiko-mint/70',
          glow: 'group-hover:shadow-spark-mint',
          badge: 'text-assiko-mint bg-assiko-mint/10 border-assiko-mint/30',
          accent: 'text-assiko-mint',
        };
      case 'orange':
        return {
          border: 'hover:border-assiko-orange/70',
          glow: 'group-hover:shadow-spark-orange',
          badge: 'text-assiko-orange bg-assiko-orange/10 border-assiko-orange/30',
          accent: 'text-assiko-orange',
        };
      case 'cyan':
        return {
          border: 'hover:border-assiko-cyan/70',
          glow: 'group-hover:shadow-[0_0_25px_-3px_rgba(0,229,255,0.35)]',
          badge: 'text-assiko-cyan bg-assiko-cyan/10 border-assiko-cyan/30',
          accent: 'text-assiko-cyan',
        };
      case 'purple':
      default:
        return {
          border: 'hover:border-assiko-violet/70',
          glow: 'group-hover:shadow-spark-purple',
          badge: 'text-assiko-violet bg-assiko-violet/10 border-assiko-violet/30',
          accent: 'text-assiko-violet',
        };
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-assiko-yellow uppercase mb-2">
          [ 02 // Engineering Showcase ]
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Featured Projects & Architectures.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3 font-sans">
          Production-grade applications featuring autonomous multi-agent pipelines, real-time market data streaming, and offline-first edge computer vision.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-assiko-yellow via-assiko-mint to-assiko-orange rounded-full mt-4" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              filter === cat.id
                ? 'bg-assiko-yellow text-black font-extrabold shadow-spark-yellow scale-105'
                : 'bg-assiko-card hover:bg-assiko-subtle text-slate-300 border border-assiko-border'
            }`}
          >
            <span>{cat.label}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                filter === cat.id ? 'bg-black/20 text-black' : 'bg-assiko-dark text-slate-400'
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const styles = getColorClasses(project.color);
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group bg-assiko-card border border-assiko-border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${styles.border} ${styles.glow} shadow-card-glow relative overflow-hidden`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${styles.badge}`}
                    >
                      {project.metrics || 'Production Architecture'}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-assiko-yellow bg-assiko-yellow/10 px-2 py-0.5 rounded border border-assiko-yellow/30 font-bold">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-2 group-hover:text-assiko-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Tech Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.badges.slice(0, 4).map((b, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-assiko-dark text-slate-300 border border-assiko-border/60"
                      >
                        {b}
                      </span>
                    ))}
                    {project.badges.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-assiko-dark text-slate-400">
                        +{project.badges.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-assiko-border/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-assiko-yellow transition-colors hover:underline"
                  >
                    <span>Deep Dive Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-assiko-dark hover:bg-assiko-yellow text-slate-300 hover:text-black transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-assiko-dark hover:bg-assiko-subtle text-slate-300 hover:text-white border border-assiko-border/60 transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

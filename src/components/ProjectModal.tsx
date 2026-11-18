'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, AlertCircle, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[88vh] bg-assiko-card border border-assiko-subtle rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-assiko-dark border-b border-assiko-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-assiko-yellow/15 border border-assiko-yellow/30 flex items-center justify-center text-assiko-yellow flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg tracking-tight truncate">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-assiko-subtle transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
            {/* Subtitle & Badges */}
            <div>
              <p className="text-sm font-medium text-assiko-yellow/90 mb-3 leading-relaxed">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-assiko-dark text-slate-200 border border-assiko-border shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Solution Callouts */}
            <div className="space-y-3.5 p-4 rounded-xl bg-assiko-dark/80 border border-assiko-border">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <AlertCircle className="w-4 h-4 text-assiko-orange" />
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-assiko-orange">
                    The Problem
                  </h4>
                </div>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm pl-6">
                  {project.problem}
                </p>
              </div>

              <div className="pt-3 border-t border-assiko-border/60">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-assiko-mint" />
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-assiko-mint">
                    The Solution
                  </h4>
                </div>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm pl-6">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technical Architecture */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider text-assiko-cyan flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-assiko-cyan animate-pulse" />
                Key Technical Architecture
              </h4>
              <ul className="space-y-2.5 pl-1">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 leading-relaxed text-xs sm:text-sm">
                    <span className="text-assiko-yellow font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="px-6 py-4 bg-assiko-dark border-t border-assiko-border flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-400">
              {project.metrics ? `⚡ ${project.metrics}` : 'Production Grade Architecture'}
            </span>

            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-assiko-yellow hover:bg-[#ffe633] text-black text-xs font-bold shadow-spark-yellow transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                  <span>Live App</span>
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-assiko-card hover:bg-assiko-subtle text-slate-200 hover:text-white text-xs font-semibold border border-assiko-border transition-all"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

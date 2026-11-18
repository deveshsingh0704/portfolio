'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-assiko-border bg-assiko-bg/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-assiko-yellow text-black font-display font-extrabold flex items-center justify-center text-xs">
              DS
            </div>
            <span className="font-display font-extrabold text-white text-sm">Devesh Singh</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span>© {new Date().getFullYear()} All Rights Reserved. Built with Next.js & Framer Motion.</span>
        </div>

        {/* Center Quick Nav */}
        <div className="flex items-center gap-6 font-semibold uppercase tracking-wider text-[11px]">
          <a href="#about" className="hover:text-assiko-yellow transition-colors">About</a>
          <a href="#projects" className="hover:text-assiko-yellow transition-colors">Projects</a>
          <a href="#experience" className="hover:text-assiko-yellow transition-colors">Experience</a>
          <button onClick={onOpenResume} className="hover:text-assiko-yellow transition-colors flex items-center gap-1">
            Resume <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Right Handles & Scroll Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-assiko-card hover:bg-assiko-subtle text-slate-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-assiko-card hover:bg-assiko-subtle text-slate-300 hover:text-assiko-yellow transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-assiko-card hover:bg-assiko-subtle text-slate-300 hover:text-assiko-mint transition-colors"
            title="LeetCode"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-assiko-yellow text-black hover:bg-[#ffe633] transition-all hover:scale-110 active:scale-95 shadow-spark-yellow ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

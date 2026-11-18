'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, ExternalLink, Github, Linkedin, Code2, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const stats = [
    { label: 'Google Hackathon', val: '1st Place', color: 'text-assiko-yellow' },
    { label: 'Summer of Bitcoin', val: '2x Selectee', color: 'text-assiko-orange' },
    { label: 'Open Source PRs', val: '6 Merged', color: 'text-assiko-mint' },
    { label: 'LeetCode Solved', val: '300+', color: 'text-assiko-cyan' },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Assiko Ambient Glowing Flares */}
      <div className="absolute top-10 left-1/4 w-[28rem] h-[28rem] bg-assiko-yellow/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[32rem] h-[32rem] bg-assiko-purple/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 left-10 w-[30rem] h-[30rem] bg-assiko-mint/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-assiko-card/90 border border-assiko-border text-xs font-mono text-slate-300 shadow-sm mb-6 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-assiko-mint opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-assiko-mint" />
          </span>
          <span className="text-white font-medium">B.Tech CS @ Polaris School of Technology</span>
          <span className="text-slate-500">•</span>
          <span className="text-assiko-yellow flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Bengaluru
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl leading-[1.08] mb-6"
        >
          Engineering{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-assiko-yellow via-[#fff066] to-assiko-orange">
            Autonomous AI
          </span>{' '}
          & High-Impact Systems.
        </motion.h1>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-sans"
        >
          Product-minded software developer specializing in{' '}
          <strong className="text-white font-semibold">LangGraph AI agent workflows</strong>,{' '}
          <strong className="text-white font-semibold">real-time WebSocket market streams</strong>, and production-grade full-stack web applications.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider bg-assiko-yellow hover:bg-[#ffe633] text-black shadow-spark-yellow transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Explore Projects</span>
          </a>

          <a
            href={PERSONAL_INFO.resumeDriveView}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-assiko-card hover:bg-assiko-subtle text-slate-200 hover:text-white border border-assiko-border hover:border-assiko-yellow/50 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-assiko-yellow">Drive Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={PERSONAL_INFO.resumeDriveDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-assiko-dark hover:bg-assiko-card border border-assiko-border shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4 text-assiko-mint" />
            <span>Download CV</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-assiko-card/60 transition-all"
          >
            <Eye className="w-4 h-4 text-assiko-purple" />
            <span>Preview CV</span>
          </button>
        </motion.div>

        {/* Highlight Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl p-4 sm:p-6 rounded-2xl bg-assiko-card/70 border border-assiko-border backdrop-blur-xl shadow-2xl mb-8"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-3 text-center">
              <span className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight ${stat.color}`}>
                {stat.val}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Social Proof Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-6 text-sm text-slate-400 pt-2"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-slate-500">Connect:</span>
          
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-assiko-yellow transition-colors group"
          >
            <Linkedin className="w-4 h-4 text-assiko-yellow group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-assiko-mint transition-colors group"
          >
            <Code2 className="w-4 h-4 text-assiko-mint group-hover:scale-110 transition-transform" />
            <span>LeetCode</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12">
          <a href="#about" className="text-slate-500 hover:text-assiko-yellow transition-colors animate-bounce inline-block">
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

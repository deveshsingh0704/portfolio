'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, GraduationCap, Building2, Code } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function AboutSection() {
  const pillars = [
    {
      icon: Bot,
      title: 'Agentic Workflows',
      desc: 'Orchestrating stateful multi-agent systems via LangGraph, tool calling, memory checkpoints, and prompt chaining.',
      color: 'border-assiko-yellow/40 hover:border-assiko-yellow text-assiko-yellow bg-assiko-yellow/10',
    },
    {
      icon: Zap,
      title: 'Real-Time Streaming',
      desc: 'Designing sub-second WebSocket pipelines, financial tick dashboards, and low-latency API architectures.',
      color: 'border-assiko-cyan/40 hover:border-assiko-cyan text-assiko-cyan bg-assiko-cyan/10',
    },
    {
      icon: Globe,
      title: 'Product Engineering',
      desc: 'Translating Figma design systems into pixel-perfect, accessible Next.js interfaces that scale smoothly.',
      color: 'border-assiko-mint/40 hover:border-assiko-mint text-assiko-mint bg-assiko-mint/10',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-assiko-yellow uppercase mb-2">
          [ 01 // Background & Philosophy ]
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Product-Minded Engineer with a Bias for Execution.
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-assiko-yellow via-assiko-mint to-assiko-orange rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Narrative Box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-assiko-card border border-assiko-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-card-glow relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-assiko-yellow/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-sans relative z-10">
            <p>
              I’m a Computer Science engineer at{' '}
              <strong className="text-white font-semibold">Polaris School of Technology</strong> in Bengaluru, building at the intersection of{' '}
              <span className="text-assiko-yellow font-medium">autonomous AI workflows</span> and{' '}
              <span className="text-assiko-mint font-medium">resilient distributed systems</span>.
            </p>
            <p>
              During my engineering internship at <strong className="text-white font-semibold">Absolutely.ai</strong>, I owned frontend component architecture, converted complex Figma design systems into production-ready AGEN8 interfaces, and integrated frontend workflows directly with backend APIs.
            </p>
            <p>
              In open source, I actively contribute to <strong className="text-white font-semibold">Flotilla</strong> (merging 6 pull requests across dashboard layering and onboarding UX) and was twice selected for the prestigious global <strong className="text-white font-semibold">Summer of Bitcoin Developer Track</strong> (2024 & 2025).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-assiko-border/80">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-assiko-dark border border-assiko-border/60">
              <GraduationCap className="w-5 h-5 text-assiko-yellow flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Education</h4>
                <p className="text-xs text-slate-400 mt-0.5">B.Tech in CS (2024–2028)</p>
                <p className="text-xs font-mono text-assiko-mint">CGPA: 8.42 / 10</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-assiko-dark border border-assiko-border/60">
              <Building2 className="w-5 h-5 text-assiko-mint flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">Location</h4>
                <p className="text-xs text-slate-400 mt-0.5">{PERSONAL_INFO.location}</p>
                <p className="text-xs font-mono text-assiko-yellow">Open to Global Relocation / Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Engineering Pillars */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-assiko-card border border-assiko-border hover:border-assiko-subtle rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] shadow-card-glow group"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white tracking-tight group-hover:text-assiko-yellow transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-1">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

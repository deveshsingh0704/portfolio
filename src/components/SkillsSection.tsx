'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Database } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

export default function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Cpu;
      case 1:
        return Layout;
      case 2:
        return Server;
      case 3:
      default:
        return Database;
    }
  };

  const getThemeColors = (color: string) => {
    switch (color) {
      case 'yellow':
        return {
          header: 'text-assiko-yellow',
          bar: 'bg-assiko-yellow',
          badge: 'bg-assiko-yellow/10 border-assiko-yellow/30 text-assiko-yellow',
        };
      case 'mint':
        return {
          header: 'text-assiko-mint',
          bar: 'bg-assiko-mint',
          badge: 'bg-assiko-mint/10 border-assiko-mint/30 text-assiko-mint',
        };
      case 'cyan':
        return {
          header: 'text-assiko-cyan',
          bar: 'bg-assiko-cyan',
          badge: 'bg-assiko-cyan/10 border-assiko-cyan/30 text-assiko-cyan',
        };
      case 'orange':
      default:
        return {
          header: 'text-assiko-orange',
          bar: 'bg-assiko-orange',
          badge: 'bg-assiko-orange/10 border-assiko-orange/30 text-assiko-orange',
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-assiko-yellow uppercase mb-2">
          [ 04 // Capabilities & Stack ]
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Technical Skills & Ecosystem.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3 font-sans">
          A granular breakdown of the frameworks, agent orchestration libraries, streaming protocols, and cloud platforms I leverage.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-assiko-yellow via-assiko-mint to-assiko-orange rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = getCategoryIcon(idx);
          const colors = getThemeColors(cat.color);

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-assiko-card border border-assiko-border hover:border-assiko-subtle rounded-2xl p-6 sm:p-8 shadow-card-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colors.badge}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-display font-extrabold text-xl ${colors.header} tracking-tight`}>
                    {cat.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">{cat.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-assiko-dark rounded-full overflow-hidden border border-assiko-border/50">
                      <div
                        className={`h-full ${colors.bar} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

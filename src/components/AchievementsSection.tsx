'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2, ExternalLink, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolioData';

export default function AchievementsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Trophy;
      case 1:
        return Award;
      case 2:
      default:
        return Code2;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-assiko-yellow uppercase mb-2">
          [ 05 // Honors & Recognition ]
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Validated Milestones & Awards.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3 font-sans">
          Competitive hackathon championships, international developer fellowship screening selections, and continuous problem-solving mastery.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-assiko-yellow via-assiko-mint to-assiko-orange rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ACHIEVEMENTS.map((ach, idx) => {
          const Icon = getIcon(idx);
          const isYellow = ach.color === 'yellow';
          const isOrange = ach.color === 'orange';

          const borderStyle = isYellow
            ? 'hover:border-assiko-yellow/70 shadow-spark-yellow/20'
            : isOrange
            ? 'hover:border-assiko-orange/70 shadow-spark-orange/20'
            : 'hover:border-assiko-mint/70 shadow-spark-mint/20';

          const iconColor = isYellow
            ? 'text-assiko-yellow bg-assiko-yellow/10 border-assiko-yellow/30'
            : isOrange
            ? 'text-assiko-orange bg-assiko-orange/10 border-assiko-orange/30'
            : 'text-assiko-mint bg-assiko-mint/10 border-assiko-mint/30';

          const metricColor = isYellow ? 'text-assiko-yellow' : isOrange ? 'text-assiko-orange' : 'text-assiko-mint';

          return (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-assiko-card border border-assiko-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-card-glow ${borderStyle} group relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`font-display font-extrabold text-lg ${metricColor}`}>
                    {ach.metrics}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {ach.organization}
                </span>

                <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-3 group-hover:text-assiko-yellow transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {ach.link && (
                <div className="pt-6 mt-6 border-t border-assiko-border/60">
                  <a
                    href={ach.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-assiko-yellow hover:underline"
                  >
                    <span>{ach.link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

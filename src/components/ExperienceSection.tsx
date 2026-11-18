'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GitPullRequest, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-assiko-yellow uppercase mb-2">
          [ 03 // Career & Contributions ]
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Work Experience & Open Source.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3 font-sans">
          Proven history of converting product specifications into production-grade features, collaborating with distributed teams, and merging high-impact code.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-assiko-yellow via-assiko-mint to-assiko-orange rounded-full mt-4" />
      </div>

      <div className="relative pl-4 sm:pl-8 border-l-2 border-assiko-border max-w-4xl mx-auto space-y-12">
        {EXPERIENCES.map((exp, idx) => {
          const isYellow = exp.color === 'yellow';
          const isMint = exp.color === 'mint';
          const isOrange = exp.color === 'orange';

          const dotColor = isYellow
            ? 'bg-assiko-yellow shadow-spark-yellow'
            : isMint
            ? 'bg-assiko-mint shadow-spark-mint'
            : 'bg-assiko-orange shadow-spark-orange';

          const badgeColor = isYellow
            ? 'text-assiko-yellow bg-assiko-yellow/10 border-assiko-yellow/30'
            : isMint
            ? 'text-assiko-mint bg-assiko-mint/10 border-assiko-mint/30'
            : 'text-assiko-orange bg-assiko-orange/10 border-assiko-orange/30';

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Connector Dot */}
              <div
                className={`absolute -left-[25px] sm:-left-[41px] top-6 w-4 h-4 rounded-full border-4 border-assiko-bg ${dotColor} transition-transform group-hover:scale-125`}
              />

              <div className="bg-assiko-card border border-assiko-border group-hover:border-assiko-subtle rounded-2xl p-6 sm:p-8 shadow-card-glow transition-all duration-300">
                {/* Top Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${badgeColor}`}>
                      {exp.badge}
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight mt-2">
                      {exp.role}{' '}
                      <span className="text-assiko-yellow font-medium">@ {exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <Calendar className="w-3.5 h-3.5 text-assiko-yellow" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-assiko-mint" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-assiko-mint flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-semibold">{h.title}:</strong> {h.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-assiko-border/60">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-assiko-dark text-slate-300 border border-assiko-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

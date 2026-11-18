'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Sparkles, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerSparkCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.1 },
      colors: ['#ffde00', '#00ffa2', '#ff652f', '#00e5ff', '#8b5cf6'],
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-assiko-bg/90 backdrop-blur-xl border-b border-assiko-border/80 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-assiko-yellow via-assiko-mint to-assiko-purple p-[1.5px] shadow-lg shadow-assiko-yellow/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-assiko-bg rounded-[10px] flex items-center justify-center font-display font-extrabold text-sm tracking-tighter text-white">
                  DS
                </div>
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-assiko-yellow animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-assiko-yellow" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-tight text-white group-hover:text-assiko-yellow transition-colors">
                Devesh Singh
              </span>
              <span className="text-[10px] font-mono text-assiko-mint flex items-center gap-1.5 font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-assiko-mint animate-pulse" />
                Available For Hire
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-assiko-yellow transition-colors relative py-1 text-xs tracking-wider uppercase font-semibold text-slate-300 hover:scale-105"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#terminal"
              className="flex items-center gap-1.5 text-assiko-cyan font-mono text-xs bg-assiko-cyan/10 hover:bg-assiko-cyan/20 px-3 py-1 rounded-full border border-assiko-cyan/30 transition-all hover:scale-105"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Spark Celebration FX Button */}
            <button
              onClick={triggerSparkCelebration}
              className="hidden sm:flex items-center justify-center p-2 rounded-xl bg-assiko-card hover:bg-assiko-subtle border border-assiko-border text-assiko-yellow hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="Launch Pyrotechnic Sparks!"
              aria-label="Spark fireworks"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-assiko-card hover:bg-assiko-subtle text-slate-200 border border-assiko-border hover:border-assiko-yellow/60 transition-all shadow-sm group hover:scale-[1.02] active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-assiko-yellow group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-assiko-yellow" />
            </button>

            {/* Get in Touch CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold bg-assiko-yellow hover:bg-[#ffe633] text-black shadow-spark-yellow transition-all hover:scale-105 active:scale-95"
            >
              <span>Get in Touch</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-assiko-card text-slate-300 hover:text-white border border-assiko-border focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden bg-assiko-bg/95 backdrop-blur-2xl border-b border-assiko-border p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-assiko-card text-sm font-semibold transition-colors uppercase tracking-wider text-xs"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#terminal"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl bg-assiko-cyan/10 text-assiko-cyan border border-assiko-cyan/30 text-xs font-mono flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Interactive CLI
                </span>
                <span>run</span>
              </a>

              <div className="pt-2 border-t border-assiko-border flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-assiko-card hover:bg-assiko-subtle text-assiko-yellow border border-assiko-border text-xs font-semibold flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" /> View Resume (Google Drive)
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

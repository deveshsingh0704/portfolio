'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      colors: ['#ffde00', '#00ffa2', '#ff652f'],
    });

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'Opportunity / Collaboration'}`
    )}&body=${encodeURIComponent(
      `Hi Devesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-assiko-yellow uppercase mb-2">
          [ 07 // Direct Communication ]
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Let’s Build Something Exceptional.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-sans">
          I’m currently open to Software Engineering Internships, AI / Full-Stack Roles, and innovative collaborations.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-assiko-yellow via-assiko-mint to-assiko-orange rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="bg-assiko-card border border-assiko-border hover:border-assiko-yellow/60 rounded-2xl p-6 transition-all duration-300 shadow-card-glow group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-assiko-yellow/15 border border-assiko-yellow/30 flex items-center justify-center text-assiko-yellow">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">Direct Email</h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white font-mono text-xs sm:text-sm font-semibold hover:text-assiko-yellow transition-colors block mt-0.5 truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-assiko-dark hover:bg-assiko-subtle text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-assiko-mint" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedType === 'email' && (
              <p className="text-[11px] font-mono text-assiko-mint mt-1">✓ Copied email to clipboard!</p>
            )}
          </div>

          {/* Phone Card */}
          <div className="bg-assiko-card border border-assiko-border hover:border-assiko-mint/60 rounded-2xl p-6 transition-all duration-300 shadow-card-glow group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-assiko-mint/15 border border-assiko-mint/30 flex items-center justify-center text-assiko-mint">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">Phone / WhatsApp</h4>
                  <a
                    href="tel:+919110127769"
                    className="text-white font-mono text-xs sm:text-sm font-semibold hover:text-assiko-mint transition-colors block mt-0.5"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-assiko-dark hover:bg-assiko-subtle text-slate-400 hover:text-white transition-colors"
                title="Copy Phone Number"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-assiko-mint" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedType === 'phone' && (
              <p className="text-[11px] font-mono text-assiko-mint mt-1">✓ Copied phone to clipboard!</p>
            )}
          </div>

          {/* Location Card */}
          <div className="bg-assiko-card border border-assiko-border rounded-2xl p-6 shadow-card-glow flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-assiko-orange/15 border border-assiko-orange/30 flex items-center justify-center text-assiko-orange flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">Location Base</h4>
              <p className="text-white font-semibold text-xs sm:text-sm mt-0.5">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Right Message Composer */}
        <div className="lg:col-span-7 bg-assiko-card border border-assiko-border rounded-2xl p-6 sm:p-8 shadow-card-glow">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-assiko-yellow" />
            <h3 className="font-display font-extrabold text-lg text-white">Send a Direct Message</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Submitting pre-formats an email directly in your default mail application.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-assiko-dark border border-assiko-border text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-assiko-yellow transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-assiko-dark border border-assiko-border text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-assiko-yellow transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineer Internship / Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-assiko-dark border border-assiko-border text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-assiko-yellow transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Devesh, I came across your portfolio and wanted to discuss..."
                className="w-full px-4 py-3 rounded-xl bg-assiko-dark border border-assiko-border text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-assiko-yellow transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-assiko-yellow hover:bg-[#ffe633] text-black font-display font-extrabold text-sm uppercase tracking-wider shadow-spark-yellow flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Dispatch Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface TerminalSectionProps {
  onOpenResume: () => void;
}

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export default function TerminalSection({ onOpenResume }: TerminalSectionProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-assiko-yellow font-bold">Antigravity Shell v2.4.0 [Session Active]</p>
          <p>Type <span className="text-assiko-mint font-semibold">help</span> to list available commands or click the shortcut chips below.</p>
        </div>
      ),
    },
  ]);

  const outputContainerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTo({
        top: outputContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [history]);

  const executeCmd = (commandStr: string) => {
    const rawCmd = commandStr.trim().toLowerCase();
    if (!rawCmd) return;

    let outputContent: React.ReactNode = null;

    switch (rawCmd) {
      case 'help':
        outputContent = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <div className="text-white font-bold mb-1">Available System Commands:</div>
            <div><span className="text-assiko-yellow font-semibold">about</span>        - Background and education</div>
            <div><span className="text-assiko-yellow font-semibold">skills</span>       - Key technology stack & tools</div>
            <div><span className="text-assiko-yellow font-semibold">projects</span>     - Core engineering applications</div>
            <div><span className="text-assiko-yellow font-semibold">experience</span>   - Internships & open-source PRs</div>
            <div><span className="text-assiko-yellow font-semibold">achievements</span> - Hackathons & global selections</div>
            <div><span className="text-assiko-yellow font-semibold">contact</span>      - Reach out directly (Email/WhatsApp)</div>
            <div><span className="text-assiko-yellow font-semibold">resume</span>       - View & download resume from Google Drive</div>
            <div><span className="text-assiko-yellow font-semibold">sudo hire</span>    - Fast-track recruiter action</div>
            <div><span className="text-assiko-yellow font-semibold">clear</span>        - Clear terminal console</div>
          </div>
        );
        break;

      case 'about':
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-white font-bold">Devesh Singh — Software Engineer</p>
            <p>B.Tech CS @ Polaris School of Technology, Bengaluru (CGPA: 8.42).</p>
            <p>Specializing in LangGraph AI Agent orchestration, real-time WebSocket market streams, and responsive full-stack apps.</p>
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><strong className="text-assiko-yellow">AI Agents:</strong> LangGraph, LangChain, Gemini API, Groq Whisper & Llama, RAG</p>
            <p><strong className="text-assiko-mint">Frontend:</strong> React 19/18, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion</p>
            <p><strong className="text-assiko-cyan">Backend:</strong> Node.js, Express, FastAPI, WebSockets, REST APIs, Twilio API</p>
            <p><strong className="text-assiko-orange">Data:</strong> MongoDB, Firebase Firestore, SQLite Vector, OpenCV</p>
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>1. <strong className="text-assiko-yellow">MeetMind:</strong> AI Meeting Assistant with Groq Whisper & Llama 3</p>
            <p>2. <strong className="text-assiko-mint">Voice AI Todo:</strong> Conversational agent using LangGraph StateGraph & Gemini</p>
            <p>3. <strong className="text-assiko-cyan">Stock Tracker:</strong> Sub-second WebSocket live tick streaming via Finnhub</p>
            <p>4. <strong className="text-assiko-orange">AEGIS Safety:</strong> 1st place Google Hackathon winner with Twilio SOS dispatch</p>
            <p>5. <strong className="text-white">JalDrishti:</strong> DWLR telemetry analytics pipeline for Ministry of Jal Shakti</p>
          </div>
        );
        break;

      case 'experience':
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>• <strong className="text-white">Absolutely.ai</strong> - Front End Developer Intern (Figma to production AGEN8)</p>
            <p>• <strong className="text-white">Flotilla</strong> - Open Source Contributor (6 merged PRs)</p>
            <p>• <strong className="text-white">Summer of Bitcoin</strong> - Two-time Global Developer Track Selection (2024 & 2025)</p>
          </div>
        );
        break;

      case 'achievements':
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>🏆 <strong className="text-assiko-yellow">1st Place Winner:</strong> AEGIS Google Collab Hackathon</p>
            <p>🌟 <strong className="text-assiko-orange">Two-Time Global Selectee:</strong> Summer of Bitcoin Fellowship</p>
            <p>⚡ <strong className="text-assiko-mint">300+ Problems:</strong> Solved on LeetCode</p>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-assiko-yellow underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <a href="tel:+919110127769" className="text-assiko-mint underline">{PERSONAL_INFO.phone}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" className="text-assiko-cyan underline">github.com/deveshsingh0704</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-assiko-orange underline">linkedin.com/in/devesh-singh-542483318</a></p>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        outputContent = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-assiko-mint font-semibold">Opening interactive resume preview...</p>
            <p>
              • <a href={PERSONAL_INFO.resumeDriveView} target="_blank" rel="noopener noreferrer" className="text-assiko-yellow underline font-semibold">Open Google Drive Link ↗</a>
              <span className="mx-2 text-slate-500">|</span>
              • <a href={PERSONAL_INFO.resumeDriveDownload} target="_blank" rel="noopener noreferrer" className="text-assiko-cyan underline font-semibold">Direct Download PDF ⬇</a>
            </p>
          </div>
        );
        break;

      case 'sudo hire':
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ffde00', '#00ffa2', '#ff652f'],
        });
        outputContent = (
          <div className="p-3 rounded-xl bg-assiko-mint/10 border border-assiko-mint/30 text-assiko-mint text-xs">
            <p className="font-bold text-sm">🎉 RECRUITER ACCESS UNLOCKED!</p>
            <p>Devesh Singh is ready to deliver impact on your engineering team. Routing to contact form...</p>
          </div>
        );
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputContent = (
          <p className="text-assiko-orange text-xs">
            Command not recognized: &quot;{commandStr}&quot;. Type <span className="text-assiko-yellow font-semibold">help</span> to list valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { cmd: commandStr, output: outputContent }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCmd(inputVal);
  };

  const chips = ['help', 'projects', 'skills', 'experience', 'resume', 'sudo hire', 'clear'];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-assiko-yellow uppercase mb-2">
          [ 06 // Interactive Shell ]
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Developer CLI Console.
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-sans">
          Prefer command-line interfaces? Query the live portfolio runtime right from your keyboard.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-assiko-yellow via-assiko-mint to-assiko-orange rounded-full mt-4" />
      </div>

      {/* Terminal Window */}
      <div className="bg-black/95 border border-assiko-subtle rounded-2xl shadow-2xl overflow-hidden font-mono text-sm backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="px-5 py-3.5 bg-assiko-dark border-b border-assiko-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs text-slate-400 font-mono ml-2">devesh@portfolio: ~</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-assiko-mint">
            <span className="w-2 h-2 rounded-full bg-assiko-mint animate-pulse" />
            <span>bash 5.2</span>
          </div>
        </div>

        {/* Command Output Log */}
        <div
          ref={outputContainerRef}
          className="p-5 sm:p-6 min-h-[300px] max-h-[420px] overflow-y-auto space-y-4"
        >
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-assiko-yellow font-bold">devesh@system:~$</span>
                <span className="text-white font-semibold">{entry.cmd}</span>
              </div>
              <div className="pl-4">{entry.output}</div>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-2.5 bg-assiko-card/70 border-t border-assiko-border/60 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-slate-400 font-mono">Quick:</span>
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => executeCmd(chip)}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-assiko-dark hover:bg-assiko-subtle text-slate-300 hover:text-assiko-yellow border border-assiko-border/60 transition-all hover:scale-105 active:scale-95"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <form onSubmit={handleFormSubmit} className="p-4 bg-assiko-dark border-t border-assiko-border flex items-center gap-3">
          <span className="text-assiko-yellow font-bold text-xs">devesh@system:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-white text-xs sm:text-sm font-mono focus:outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-assiko-yellow text-black hover:bg-[#ffe633] transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

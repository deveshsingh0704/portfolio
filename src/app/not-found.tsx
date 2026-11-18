import Link from 'next/link';
import { Home, ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-assiko-bg text-slate-100 flex flex-col items-center justify-center p-6 text-center relative z-10 selection:bg-assiko-yellow selection:text-black">
      <div className="max-w-md w-full bg-assiko-card/80 border border-assiko-border rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-assiko-yellow/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-assiko-mint/10 rounded-full blur-3xl" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-assiko-yellow/10 text-assiko-yellow text-xs font-mono mb-6 border border-assiko-yellow/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>Error 404 // Route Not Found</span>
        </div>

        <h1 className="text-6xl font-display font-extrabold text-white mb-2 tracking-tight">
          4<span className="text-assiko-yellow">0</span>4
        </h1>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The page or asset you are looking for does not exist in this sector of Devesh Singh&apos;s portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-assiko-yellow hover:bg-[#ffe633] text-black shadow-spark-yellow transition-all hover:scale-105 active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-assiko-subtle/50 hover:bg-assiko-subtle text-slate-300 border border-assiko-border transition-all hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

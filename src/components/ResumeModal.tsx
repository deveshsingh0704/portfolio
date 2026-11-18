'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[88vh] bg-assiko-card border border-assiko-subtle rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-5 py-3.5 bg-assiko-dark border-b border-assiko-border flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-assiko-yellow/15 border border-assiko-yellow/30 flex items-center justify-center text-assiko-yellow flex-shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <h3 className="font-display font-bold text-white text-sm sm:text-base tracking-tight truncate">
                    Devesh_Singh_Resume.pdf
                  </h3>
                  <p className="text-[11px] font-mono text-assiko-mint flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-assiko-mint animate-pulse" />
                    Verified Live Google Drive Document
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <a
                  href={PERSONAL_INFO.resumeDriveView}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-assiko-dark hover:bg-assiko-subtle text-slate-300 hover:text-white text-xs font-semibold border border-assiko-border hover:border-assiko-yellow/50 transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-assiko-yellow" />
                  <span>Open in Drive</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumeDriveDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-assiko-yellow hover:bg-[#ffe633] text-black text-xs font-bold shadow-spark-yellow transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-black" />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-assiko-subtle transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Preview */}
            <div className="flex-1 bg-black p-1 sm:p-2 relative">
              <iframe
                src={PERSONAL_INFO.resumeDrivePreview}
                className="w-full h-full rounded-xl border-0 bg-black"
                title="Devesh Singh Resume Preview"
                allow="autoplay"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import TerminalSection from '@/components/TerminalSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import ProjectModal from '@/components/ProjectModal';
import { Project } from '@/data/portfolioData';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-assiko-bg text-slate-100 relative selection:bg-assiko-yellow selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects Grid & Deep Dives */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* Career & Open Source Timeline */}
      <ExperienceSection />

      {/* Technical Capabilities & Stack */}
      <SkillsSection />

      {/* Honors & Milestones */}
      <AchievementsSection />

      {/* Interactive Developer Terminal */}
      <TerminalSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Contact & Inquiry Composer */}
      <ContactSection />

      {/* Global Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

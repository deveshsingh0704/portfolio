import type { Metadata } from 'next';
import './globals.css';
import SparkCanvas from '@/components/SparkCanvas';

export const metadata: Metadata = {
  title: 'Devesh Singh | Software Engineer & AI Systems Developer',
  description:
    'Portfolio of Devesh Singh — Product-minded software developer building full-stack applications, LangGraph autonomous AI agents, and high-frequency real-time systems.',
  keywords: [
    'Devesh Singh',
    'Software Engineer',
    'AI Systems Developer',
    'LangGraph',
    'Autonomous Agents',
    'Next.js',
    'React',
    'Bengaluru',
    'Polaris School of Technology',
  ],
  authors: [{ name: 'Devesh Singh' }],
  openGraph: {
    title: 'Devesh Singh | Software Engineer & AI Systems Developer',
    description: 'Product-minded developer specializing in autonomous AI automation and real-time distributed systems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-assiko-bg text-slate-100 font-sans antialiased selection:bg-assiko-yellow selection:text-black overflow-x-hidden relative min-h-screen">
        {/* Assiko-Inspired Interactive Pyrotechnic Particle Canvas */}
        <SparkCanvas />
        {children}
      </body>
    </html>
  );
}

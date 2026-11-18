'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity?: number;
}

const SPARK_COLORS = [
  '#ffde00', // Assiko signature yellow
  '#00ffa2', // Assiko neon mint
  '#ff652f', // Assiko fire coral
  '#00e5ff', // Assiko cyan
  '#8b5cf6', // Assiko violet
  '#ffffff', // Bright white spark core
];

export default function SparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const ambientStars: { x: number; y: number; size: number; baseAlpha: number; speed: number; phase: number }[] = [];

    // Create ambient background stars
    const starCount = Math.floor(width / 25);
    for (let i = 0; i < starCount; i++) {
      ambientStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        baseAlpha: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const spawnSpark = (x: number, y: number, count = 3, isBurst = false) => {
      for (let i = 0; i < count; i++) {
        const speed = isBurst ? Math.random() * 6 + 2 : Math.random() * 2.5 + 0.5;
        const angle = isBurst ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 2;
        const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: isBurst ? Math.random() * 3 + 1.5 : Math.random() * 2 + 1,
          color,
          alpha: 1,
          decay: isBurst ? Math.random() * 0.02 + 0.015 : Math.random() * 0.04 + 0.02,
          gravity: isBurst ? 0.08 : 0.02,
        });
      }
    };

    let lastMouseX = -100;
    let lastMouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastMouseX, e.clientY - lastMouseY);
      if (dist > 8) {
        spawnSpark(e.clientX, e.clientY, 2, false);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    const handleClick = (e: MouseEvent) => {
      spawnSpark(e.clientX, e.clientY, 24, true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    let time = 0;

    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, width, height);

      // Render ambient twinkling stars
      for (let i = 0; i < ambientStars.length; i++) {
        const star = ambientStars[i];
        const alpha = star.baseAlpha + Math.sin(time * star.speed * 20 + star.phase) * 0.25;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, alpha))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render and update pyrotechnic spark particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.gravity) {
          p.vy += p.gravity;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}

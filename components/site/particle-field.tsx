"use client";

import { useEffect, useRef } from "react";

interface ParticleFieldProps { className?: string; count?: number; }

export function ParticleField({ className = "", count = 60 }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !parent || !context) return;

    let frame = 0;
    let particles: Array<{ x: number; y: number; size: number; alpha: number; drift: number }> = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parent.offsetWidth * ratio;
      canvas.height = parent.offsetHeight * ratio;
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: count }, () => {
        const progress = Math.random();
        return {
          x: parent.offsetWidth * (0.02 + progress * 0.34) + (Math.random() - 0.5) * 34,
          y: parent.offsetHeight * (0.98 - progress * 0.62) + (Math.random() - 0.5) * 36,
          size: 0.7 + Math.random() * 2.1,
          alpha: 0.2 + Math.random() * 0.7,
          drift: (Math.random() - 0.5) * 0.08 + 0.02,
        };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, parent.offsetWidth, parent.offsetHeight);
      for (const particle of particles) {
        particle.y -= particle.drift;
        particle.x += particle.drift * 0.18;
        if (particle.y < parent.offsetHeight * 0.3) particle.y = parent.offsetHeight;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(151, 197, 11, ${particle.alpha})`;
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, [count]);

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />;
}

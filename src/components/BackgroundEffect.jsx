import { useEffect, useState } from 'react';

export default function BackgroundEffect() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle radial cursor spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 dark:opacity-25 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
        }}
      />

      {/* Ambient glowing orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 dark:bg-indigo-600/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/10 dark:bg-cyan-600/15 rounded-full blur-[110px] animate-pulse-slow delay-2000" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/80 dark:block hidden" />
    </div>
  );
}

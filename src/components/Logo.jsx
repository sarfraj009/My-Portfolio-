export default function Logo({ size = 'default', className = '', withGlow = true }) {
  // Size mapping
  const sizeMap = {
    sm: 'w-8 h-8',
    default: 'w-11 h-11',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const selectedSize = sizeMap[size] || sizeMap.default;

  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      {/* Ambient background glow */}
      {withGlow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 opacity-40 blur-md group-hover:opacity-75 group-hover:blur-lg transition-all duration-300 pointer-events-none" />
      )}

      {/* SVG Emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${selectedSize} relative z-10 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 filter drop-shadow-md select-none`}
        aria-label="Sarapharaj Ansari SA Logo"
      >
        <defs>
          {/* Badge Background Gradient */}
          <linearGradient id="saLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          {/* Border Gradient */}
          <linearGradient id="saLogoBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          {/* Glyph 1 Gradient (S) */}
          <linearGradient id="saLogoS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Glyph 2 Gradient (A) */}
          <linearGradient id="saLogoA" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="55%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          {/* Subtle Drop Shadow */}
          <filter id="saLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#6366f1" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Outer Squircle Container */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="24"
          fill="url(#saLogoBg)"
          stroke="url(#saLogoBorder)"
          strokeWidth="2.5"
        />

        {/* Corner Tech Accents */}
        <circle cx="20" cy="20" r="1.5" fill="#818cf8" opacity="0.75" />
        <circle cx="80" cy="80" r="1.5" fill="#22d3ee" opacity="0.75" />

        {/* 'S' Monogram Path */}
        <path
          d="M 40 31 C 33 27 23 28 20 35 C 17 44 41 45 40 56 C 39 64 29 69 19 66"
          fill="none"
          stroke="url(#saLogoS)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#saLogoGlow)"
        />

        {/* 'A' Monogram Path */}
        <path
          d="M 47 68 L 64 27 L 81 68"
          fill="none"
          stroke="url(#saLogoA)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#saLogoGlow)"
        />

        {/* 'A' Crossbar */}
        <path
          d="M 53 53 L 75 53"
          fill="none"
          stroke="url(#saLogoS)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        {/* Glowing Tech Dot at Apex of A */}
        <circle cx="64" cy="21" r="3" fill="#22d3ee" />
        <circle cx="64" cy="21" r="6" fill="#22d3ee" opacity="0.3" />
      </svg>
    </div>
  );
}

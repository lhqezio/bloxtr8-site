export default function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 32"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Dark mode: bright chrome */}
        <linearGradient id="logo-metal-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="25%" stopColor="#d4d4d8" />
          <stop offset="50%" stopColor="#fafafa" />
          <stop offset="75%" stopColor="#a1a1aa" />
          <stop offset="100%" stopColor="#52525b" />
        </linearGradient>
        <linearGradient id="logo-fill-dark" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#e4e4e7" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.08" />
        </linearGradient>
        {/* Light mode: darker gunmetal */}
        <linearGradient id="logo-metal-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="25%" stopColor="#71717a" />
          <stop offset="50%" stopColor="#a1a1aa" />
          <stop offset="75%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
        <linearGradient id="logo-fill-light" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#71717a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3f3f46" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      {/* Light mode rings */}
      <g className="dark:hidden">
        <circle cx="10" cy="9" r="7" fill="url(#logo-fill-light)" stroke="url(#logo-metal-light)" strokeWidth="2" />
        <circle cx="10" cy="23" r="7" fill="url(#logo-fill-light)" stroke="url(#logo-metal-light)" strokeWidth="2" />
      </g>
      {/* Dark mode rings */}
      <g className="hidden dark:block">
        <circle cx="10" cy="9" r="7" fill="url(#logo-fill-dark)" stroke="url(#logo-metal-dark)" strokeWidth="2" />
        <circle cx="10" cy="23" r="7" fill="url(#logo-fill-dark)" stroke="url(#logo-metal-dark)" strokeWidth="2" />
      </g>
    </svg>
  );
}

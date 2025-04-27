// app/components/Hero/WaveBackground.tsx
'use client';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <svg 
        viewBox="0 0 1200 800" 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C150,300 350,100 500,200 C650,300 750,500 900,400 C1050,300 1200,500 1200,400 L1200,800 L0,800 Z"
          fill="url(#gradient)"
          className="animate-wave motion-reduce:animate-none"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
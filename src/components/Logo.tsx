import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 38 : 30;

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight text-white select-none ${className}`}>
      {/* Dynamic Red Book Icon matching the original Job Xpress insignia */}
      <div 
        className="relative flex items-center justify-center shrink-0" 
        style={{ width: iconSize, height: iconSize }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(239,68,68,0.4)]"
        >
          {/* Shadow/under layer */}
          <path
            d="M16 58L42 86C46 82 56 76 72 82L88 44C70 40 54 44 48 48L24 24L16 58Z"
            fill="#0f111a"
            opacity="0.9"
          />
          {/* Main open book / wings in vibrant red */}
          <path
            d="M28 14L15 54L38 84C50 74 62 76 75 80L88 35C74 31 60 33 51 39L28 14Z"
            fill="url(#redGrad)"
          />
          <path
            d="M51 39C60 33 74 31 88 35L75 80C62 76 50 74 38 84C42 66 46 51 51 39Z"
            fill="#dc2626"
          />
          <defs>
            <linearGradient id="redGrad" x1="15" y1="14" x2="88" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f87171" />
              <stop offset="0.6" stopColor="#ef4444" />
              <stop offset="1" stopColor="#b91c1c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight text-slate-100 font-extrabold font-sans">
          <span>JOB</span>
          <span className="text-red-500 ml-1">Xpress</span>
        </div>
      </div>
    </div>
  );
};


import React from 'react';

interface FloralProps {
  className?: string;
  color?: string;
}

export const FloralCorner: React.FC<FloralProps> = ({ className = "", color = "#5A6B54" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* Main vine in elegant eucalyptus */}
      <path d="M10 190 Q60 140 100 100 T190 10" stroke="#52796F" strokeWidth="2.5" />
      <path d="M12 188 Q61 139 101 99 T191 9" stroke="#9CE2D3" strokeWidth="0.8" opacity="0.6" />
      
      {/* Offshoot vines & leaves */}
      {/* Sage Green leaves */}
      <path d="M60 140 C50 150 40 145 35 130 C45 130 55 135 60 140 Z" fill="#8FA88B" stroke="#52796F" strokeWidth="1" />
      <path d="M100 100 C90 110 80 105 75 90 C85 90 95 95 100 100 Z" fill="#8FA88B" stroke="#52796F" strokeWidth="1" />
      <path d="M140 60 C130 70 120 65 115 50 C125 50 135 55 140 60 Z" fill="#8FA88B" stroke="#52796F" strokeWidth="1" />
      
      {/* Mint Green leaves for freshness and contrast */}
      <path d="M30 170 C20 175 15 165 20 155 C28 155 33 162 30 170 Z" fill="#9CE2D3" stroke="#52796F" strokeWidth="1" />
      <path d="M165 45 C155 50 150 40 155 30 C163 30 168 37 165 45 Z" fill="#9CE2D3" stroke="#52796F" strokeWidth="1" />
      <path d="M80 110 C70 115 65 105 70 95 C78 95 83 102 80 110 Z" fill="#9CE2D3" stroke="#52796F" strokeWidth="1" />

      {/* Emerald Green leaves for depth */}
      <path d="M60 140 C70 130 80 135 85 150 C75 150 65 145 60 140 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1" />
      <path d="M100 100 C110 90 120 95 125 110 C115 110 105 105 100 100 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1" />
      <path d="M140 60 C150 50 160 55 165 70 C155 70 145 65 140 60 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1" />

      {/* High-quality Gold details & berries */}
      <circle cx="50" cy="145" r="4.5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.75" />
      <circle cx="110" cy="95" r="4.5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.75" />
      <circle cx="150" cy="55" r="4.5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.75" />
      
      <circle cx="70" cy="125" r="3" fill="#C5A059" />
      <circle cx="130" cy="75" r="3" fill="#C5A059" />
      <circle cx="170" cy="25" r="3" fill="#D4AF37" />
      
      {/* Ivory roses with gold core details */}
      <g transform="translate(100, 100)">
        <path d="M0 -15 C5 -10 5 -5 0 0 C-5 -5 -5 -10 0 -15 Z" fill="#FFFDD0" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <path d="M15 0 C10 5 5 5 0 0 C5 -5 10 -5 15 0 Z" fill="#FFFDD0" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <path d="M0 15 C-5 10 -5 5 0 0 C5 5 5 10 0 15 Z" fill="#FFFDD0" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <path d="M-15 0 C-10 -5 -5 -5 0 0 C-5 5 -10 5 -15 0 Z" fill="#FFFDD0" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="5" fill="#D4AF37" stroke="#FFFDD0" strokeWidth="1" />
      </g>
      
      <g transform="translate(160, 40) scale(0.7)">
        <path d="M0 -15 C5 -10 5 -5 0 0 C-5 -5 -5 -10 0 -15 Z" fill="#FAF9F6" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <path d="M15 0 C10 5 5 5 0 0 C5 -5 10 -5 15 0 Z" fill="#FAF9F6" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <path d="M0 15 C-5 10 -5 5 0 0 C5 5 5 10 0 15 Z" fill="#FAF9F6" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <path d="M-15 0 C-10 -5 -5 -5 0 0 C-5 5 -10 5 -15 0 Z" fill="#FAF9F6" opacity="0.95" stroke="#C5A059" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="1" />
      </g>
    </g>
  </svg>
);

export const FloralBouquet: React.FC<FloralProps> = ({ className = "", color = "#5A6B54" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* Central bouquet stems tied together */}
      <path d="M50 110 L60 70" stroke="#52796F" strokeWidth="2.5" />
      <path d="M60 110 L58 70" stroke="#52796F" strokeWidth="2" />
      <path d="M70 108 L56 70" stroke="#52796F" strokeWidth="2" />
      
      {/* Ribbon tie in beautiful Gold */}
      <rect x="50" y="84" width="18" height="8" rx="3" fill="#D4AF37" stroke="#C5A059" strokeWidth="0.5" />
      <path d="M52 92 Q42 106 32 102" stroke="#D4AF37" strokeWidth="2" />
      <path d="M66 92 Q76 106 86 102" stroke="#D4AF37" strokeWidth="2" />

      {/* Leaf sprays branching out */}
      {/* Olive/Sage Green Spray */}
      <path d="M58 70 Q40 40 30 20" stroke="#52796F" strokeWidth="1.5" />
      <path d="M30 20 C22 25 18 20 20 10 C28 10 32 15 30 20 Z" fill="#8FA88B" stroke="#52796F" strokeWidth="1" />
      <path d="M38 35 C32 40 28 35 28 28 C34 25 38 30 38 35 Z" fill="#8FA88B" stroke="#52796F" strokeWidth="1" />
      
      {/* Emerald Green Spray */}
      <path d="M58 70 Q80 40 90 20" stroke="#1B4332" strokeWidth="1.5" />
      <path d="M90 20 C98 25 102 20 100 10 C92 10 88 15 90 20 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1" />
      <path d="M82 35 C88 40 92 35 92 28 C86 25 82 30 82 35 Z" fill="#2D6A4F" stroke="#1B4332" strokeWidth="1" />
      
      {/* Mint Green branch for freshness */}
      <path d="M58 70 Q25 55 15 35" stroke="#52796F" strokeWidth="1" />
      <path d="M15 35 C8 40 5 32 10 25 C18 25 20 30 15 35 Z" fill="#9CE2D3" stroke="#52796F" strokeWidth="0.8" />
      <path d="M25 45 C18 48 15 42 18 36 C24 35 26 40 25 45 Z" fill="#9CE2D3" stroke="#52796F" strokeWidth="0.8" />

      {/* Central Eucalyptus stems */}
      <path d="M58 70 L58 25" stroke="#52796F" strokeWidth="2" />
      {/* Jade/Eucalyptus green round leaves */}
      <circle cx="58" cy="55" r="8.5" fill="#40916C" stroke="#2D6A4F" strokeWidth="1" />
      <circle cx="49" cy="40" r="9.5" fill="#40916C" stroke="#2D6A4F" strokeWidth="1" />
      <circle cx="67" cy="30" r="7.5" fill="#40916C" stroke="#2D6A4F" strokeWidth="1" />
      <circle cx="58" cy="18" r="6.5" fill="#9CAF88" stroke="#52796F" strokeWidth="1" />

      {/* Gold Berries / Accent sprigs */}
      <path d="M58 70 Q75 60 85 45" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="85" cy="45" r="4" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.5" />
      <circle cx="78" cy="52" r="3.5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.5" />
      <circle cx="71" cy="58" r="3" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.5" />
      
      <path d="M58 70 Q41 60 30 45" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="30" cy="45" r="4" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.5" />
      <circle cx="37" cy="52" r="3.5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="0.5" />

      {/* Central Elegant Ivory & White Blossoms */}
      <g transform="translate(58, 60)">
        <circle cx="0" cy="0" r="15" fill="#FFFDD0" stroke="#C5A059" strokeWidth="1" />
        <circle cx="0" cy="0" r="5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="1" />
        {/* Rose petals detail */}
        <path d="M-8 -6 C-12 0 -6 10 0 4" stroke="#C5A059" strokeWidth="1" />
        <path d="M8 6 C12 0 6 -10 0 -4" stroke="#C5A059" strokeWidth="1" />
      </g>
      
      <g transform="translate(38, 52) scale(0.75)">
        <circle cx="0" cy="0" r="14" fill="#FAF9F6" stroke="#C5A059" strokeWidth="1" />
        <circle cx="0" cy="0" r="4.5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="1" />
      </g>
      <g transform="translate(78, 52) scale(0.75)">
        <circle cx="0" cy="0" r="14" fill="#FAF9F6" stroke="#C5A059" strokeWidth="1" />
        <circle cx="0" cy="0" r="4.5" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="1" />
      </g>
    </g>
  </svg>
);

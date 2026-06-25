
import React from 'react';

interface PhraseProps {
  text: string;
  className?: string;
}

const Phrase: React.FC<PhraseProps> = ({ text, className = "" }) => {
  return (
    <div className={`px-10 text-center ${className}`}>
      {/* Elegant Leaf Ornament Divider */}
      <div className="flex items-center justify-center space-x-4 mb-6 opacity-80">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#586B54]">
          <path d="M12 2C14 6 16 9 14 13 C12 17 8 18 6 14 C4 10 6 6 12 2 Z" fill="#8FA88B" />
          <path d="M12 2C10 6 8 9 10 13 C12 17 16 18 18 14 C20 10 18 6 12 2 Z" fill="#D4AF37" opacity="0.5" />
        </svg>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
      </div>

      <p className="font-serif italic text-lg md:text-xl leading-relaxed text-[#1B4332] px-4">
        {text}
      </p>

      <div className="flex items-center justify-center space-x-4 mt-6 opacity-80">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#586B54] transform rotate-180">
          <path d="M12 2C14 6 16 9 14 13 C12 17 8 18 6 14 C4 10 6 6 12 2 Z" fill="#8FA88B" />
          <path d="M12 2C10 6 8 9 10 13 C12 17 16 18 18 14 C20 10 18 6 12 2 Z" fill="#D4AF37" opacity="0.5" />
        </svg>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
      </div>
    </div>
  );
};

export default Phrase;

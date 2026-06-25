
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 text-center bg-[#FDFBF7] relative">
      <div className="max-w-xs mx-auto space-y-8">
        <h4 className="font-script text-5xl text-[#C5A059] leading-tight">
          Ever & Flor
        </h4>
        
        <p className="font-serif italic text-2xl text-[#2D6A4F] tracking-wide animate-pulse">
          ¡Te esperamos...!
        </p>
        
        <div className="flex justify-center space-x-4 opacity-40">
           <span className="h-px w-8 bg-[#D4AF37] self-center"></span>
           <span className="text-sm font-sans tracking-widest font-bold text-[#C5A059]">2026</span>
           <span className="h-px w-8 bg-[#D4AF37] self-center"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

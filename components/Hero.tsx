
import React from 'react';
import { FloralBouquet } from './FloralDecor';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 px-6 text-center overflow-hidden">
      <div className="relative z-10 animate-[fadeInUp_1.5s_ease-out]">
        <div className="flex justify-center mb-6 opacity-85">
           <svg width="70" height="35" viewBox="0 0 60 30" fill="none" stroke="#D4AF37" strokeWidth="1.5">
              <circle cx="20" cy="15" r="12" stroke="#2D6A4F" />
              <circle cx="40" cy="15" r="12" stroke="#D4AF37" />
              <path d="M26 15 Q30 11 34 15 T42 15" stroke="#C5A059" strokeWidth="1" />
           </svg>
        </div>

        <p className="font-sans font-bold text-[#586B54] text-xs uppercase tracking-[0.3em] mb-4">
          ¡Nos casamos!
        </p>
        
        <h1 className="font-script text-8xl md:text-9xl text-[#C5A059] mb-8 leading-[0.8] drop-shadow-sm select-none">
          Ever <br />
          <span className="font-serif italic text-3xl md:text-4xl text-[#586B54] my-2 block">&</span> 
          Flor
        </h1>

        <div className="relative inline-block mt-4 mb-12 group">
          <div className="absolute inset-0 bg-[#9BB299]/20 rounded-full scale-105 blur-md opacity-40"></div>
          {/* Double elegant border */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full border-4 border-[#D4AF37] p-2 bg-white shadow-2xl overflow-hidden float-animation">
            <div className="w-full h-full rounded-full border-2 border-[#2D6A4F] overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dcnynnstm/image/upload/v1782354595/03_jrgasv.png" 
                alt="Ever & Flor"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
            </div>
          </div>
          {/* Floral Decoration Overlay */}
          <div className="absolute -bottom-8 -right-8 w-36 h-36 opacity-95 pointer-events-none drop-shadow-xl">
            <FloralBouquet className="w-full h-full transform rotate-12" />
          </div>
        </div>

        {/* Padres Blessing Section */}
        <div className="max-w-md mx-auto mt-8 p-6 bg-[#F4F7F4]/50 border border-[#9BB299]/30 rounded-[30px] space-y-6">
          <p className="font-serif italic text-[#586B54] text-base">
            Con la bendición de Dios y de nuestros Padres:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-center text-[#4A4A4A] font-serif">
            <div className="space-y-1 border-t sm:border-t-0 sm:border-r border-[#9BB299]/20 pt-4 sm:pt-0">
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Padres del Novio</p>
              <p className="text-sm font-semibold text-[#1B4332]">Pedro Quispe Contreras</p>
              <p className="text-sm font-semibold text-[#1B4332]">Benedicta Valer Ayquipa</p>
            </div>
            
            <div className="space-y-1 border-t sm:border-t-0 pt-4 sm:pt-0">
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Padres de la Novia</p>
              <p className="text-sm font-semibold text-[#1B4332]">Tomas Ccorisoncco Vargas</p>
              <p className="text-sm font-semibold text-[#1B4332]">Victoria Arohuillca Huamán</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

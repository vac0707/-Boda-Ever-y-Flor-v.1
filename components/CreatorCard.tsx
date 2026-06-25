import React from 'react';

const CreatorCard: React.FC = () => {
  // Configured automatic message for WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Hola VAC Creativo, vi su increíble trabajo en la invitación de Ever y Flor y me gustaría solicitar información y cotización sobre sus invitaciones virtuales y servicios de diseño gráfico en general. ✨"
  );
  const whatsappLink = `https://wa.me/51932350348?text=${whatsappMessage}`;
  const tiktokLink = "https://www.tiktok.com/@vaccreative";
  const facebookLink = "https://www.facebook.com/VAC.Creativo";
  const youtubeLink = "https://www.youtube.com/@VACCreative";

  return (
    <div className="px-6 pb-12 pt-4">
      {/* Translucent Glassmorphic Card (Glass effect with glowing celestial/light-blue borders) */}
      <div 
        className="relative max-w-sm mx-auto p-6 rounded-[28px] bg-white/20 backdrop-blur-xl border border-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:border-cyan-400/60 transition-all duration-500 overflow-hidden text-center group"
        style={{
          boxShadow: '0 8px 32px 0 rgba(155, 178, 153, 0.08), 0 0 20px rgba(34, 211, 238, 0.15)',
        }}
      >
        {/* Subtle decorative background light-blue/cyan glow */}
        <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-cyan-400/10 blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500 pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-emerald-400/10 blur-2xl group-hover:bg-cyan-300/15 transition-all duration-500 pointer-events-none" />
        
        {/* Sparkle details in top right corner */}
        <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-80 transition-all duration-500 pointer-events-none">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="8.46" y2="8.46"></line>
            <line x1="15.54" y1="15.54" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="8.46" y2="15.54"></line>
            <line x1="15.54" y1="8.46" x2="19.78" y2="4.22"></line>
          </svg>
        </div>

        {/* Content Header */}
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">Diseñado con amor por</p>
          <h4 className="font-sans font-bold text-lg tracking-[0.15em] text-[#1B4332] group-hover:text-cyan-800 transition-colors duration-300">
            VAC CREATIVO
          </h4>
        </div>

        {/* Specialty Statement */}
        <p className="font-serif text-xs italic text-[#586B54] mt-3 mb-6 max-w-[280px] mx-auto leading-relaxed">
          &ldquo;Invitaciones virtuales y diseño gráfico en general&rdquo;
        </p>

        {/* Dynamic Social Networks Ring Buttons */}
        <div className="flex justify-center items-center gap-3">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Escríbenos por WhatsApp"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/70 border border-emerald-200 text-emerald-600 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-200/50 active:scale-95 cursor-pointer"
          >
            {/* Custom WhatsApp SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href={tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Síguenos en TikTok"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/70 border border-gray-200 text-slate-800 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white hover:border-black hover:shadow-lg hover:shadow-slate-300/50 active:scale-95 cursor-pointer"
          >
            {/* Custom TikTok Style Musical SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13"/>
              <circle cx="6" cy="18" r="3"/>
              <circle cx="18" cy="16" r="3"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Síguenos en Facebook"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/70 border border-blue-200 text-blue-600 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-200/50 active:scale-95 cursor-pointer"
          >
            {/* Custom Facebook SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Suscríbete en YouTube"
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/70 border border-red-200 text-red-600 shadow-sm transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-lg hover:shadow-red-200/50 active:scale-95 cursor-pointer"
          >
            {/* Custom YouTube SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          </a>
        </div>
        
        {/* Subtle decorative glow line on bottom */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto mt-5" />
      </div>
    </div>
  );
};

export default CreatorCard;

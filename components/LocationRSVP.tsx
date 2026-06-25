
import React, { useState, useEffect } from 'react';

interface LocationRSVPProps {
  guestName?: string;
}

const LocationRSVP: React.FC<LocationRSVPProps> = ({ guestName = '' }) => {
  const [formData, setFormData] = useState({
    attendance: 'Sí asistiré',
    fullName: guestName,
    phone: '',
    guests: '1'
  });

  useEffect(() => {
    if (guestName) {
      setFormData(prev => ({ ...prev, fullName: guestName }));
    }
  }, [guestName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getWhatsAppLink = () => {
    const phoneNumber = "51992926738"; 
    const message = encodeURIComponent(
      `¡Hola Ever y Flor! 👋\n\n` +
      `Quiero confirmar mi asistencia a su boda:\n\n` +
      `📌 *Confirmación:* ${formData.attendance}\n` +
      `👤 *Nombre:* ${formData.fullName}\n` +
      `📱 *Celular:* ${formData.phone}\n` +
      `👨‍👩‍👧‍👦 *Personas:* ${formData.guests}\n\n` +
      `¡Muchas gracias!`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section className="px-6 py-20 text-center bg-white space-y-16">
      <div className="space-y-8">
        <div className="flex justify-center items-center space-x-4 opacity-75">
           <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="#2D6A4F">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
           </svg>
           <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
        </div>
        
        <h3 className="font-serif text-4xl text-[#2D6A4F]">Ceremonia & Recepción</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-lg mx-auto">
          <div className="space-y-2">
            <p className="font-sans font-bold text-[#C5A059] tracking-widest text-xs uppercase">¿CUÁNDO?</p>
            <p className="text-2xl font-serif font-bold text-[#1B4332]">Sábado 04 de Julio del 2026</p>
            <p className="text-xl font-serif text-[#586B54]">10:00 a.m.</p>
          </div>

          <div className="space-y-4">
            <p className="font-sans font-bold text-[#C5A059] tracking-widest text-xs uppercase">¿DÓNDE?</p>
            <div className="font-serif text-lg leading-relaxed px-4 text-[#4A4A4A]">
              <p className="font-bold text-[#1B4332]">Calle Santa Rosa</p>
              <p className="text-[#586B54]">Local MILENIUM N° 101</p>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/p1dFTnqh9SCryiuLA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#2D6A4F] text-white px-8 py-3 rounded-full font-sans text-xs tracking-[0.2em] font-bold hover:bg-[#1B4332] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>VER UBICACIÓN</span>
            </a>
          </div>
        </div>
      </div>

      {/* Padrinos de Honor Section */}
      <div className="max-w-md mx-auto p-8 bg-[#F4F7F4]/40 border border-[#9BB299]/30 rounded-[35px] shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-4 -translate-y-4">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
          </svg>
        </div>
        <h4 className="font-serif text-2xl text-[#2D6A4F] mb-6 font-semibold">Padrinos de Honor</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center font-serif text-[#4A4A4A]">
          <div className="space-y-1">
            <p className="font-sans text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">Padrino</p>
            <p className="text-base font-bold text-[#1B4332]">Juan Pablo Peralta Huamán</p>
          </div>
          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#9BB299]/20 pt-4 sm:pt-0">
            <p className="font-sans text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">Madrina</p>
            <p className="text-base font-bold text-[#1B4332]">Maribel Carrión Sauñe</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FBFDFB] p-8 md:p-10 rounded-[35px] border border-[#9BB299]/30 shadow-md space-y-8 max-w-lg mx-auto relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none">
           <svg viewBox="0 0 100 100" fill="#D4AF37"><path d="M50 0 L100 50 L50 100 L0 50 Z" /></svg>
        </div>

        <div className="text-center space-y-2">
          <h3 className="font-serif text-3xl text-[#2D6A4F] font-bold">Confirmación de Asistencia</h3>
          <p className="font-sans text-xs text-[#586B54] italic leading-relaxed">
            Tu presencia es nuestro mejor regalo. <br />
            Por favor confirma antes del 20 de junio de 2026.
          </p>
        </div>

        <form className="space-y-5 font-sans" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold ml-1">¿Asistirás?</label>
            <select 
              name="attendance"
              value={formData.attendance}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#9BB299]/40 rounded-xl px-4 py-3 text-[#1B4332] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all appearance-none cursor-pointer"
            >
              <option value="Sí asistiré">Sí, asistiré con gusto</option>
              <option value="No podré asistir">Lamentablemente no podré asistir</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold ml-1">Nombres Completos</label>
            <input 
              type="text"
              name="fullName"
              placeholder="Ej. Juan Pérez"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#9BB299]/40 rounded-xl px-4 py-3 text-[#1B4332] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all placeholder:text-[#9BB299]/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold ml-1">Celular</label>
              <input 
                type="tel"
                name="phone"
                placeholder="999 999 999"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#9BB299]/40 rounded-xl px-4 py-3 text-[#1B4332] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all placeholder:text-[#9BB299]/40"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold ml-1">N° de Personas</label>
              <select 
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#9BB299]/40 rounded-xl px-4 py-3 text-[#1B4332] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all appearance-none cursor-pointer"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-sans font-bold hover:scale-[1.02] transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              <span>Confirmar por WhatsApp</span>
            </a>
          </div>
        </form>

        <p className="text-[10px] text-center text-[#586B54] mt-4 opacity-75">
          * Al hacer clic serás redirigido a WhatsApp con un mensaje pre-llenado con tus datos.
        </p>
      </div>
    </section>
  );
};

export default LocationRSVP;

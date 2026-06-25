
import React, { useState } from 'react';
import Hero from './components/Hero';
import Phrase from './components/Phrase';
import CountdownCalendar from './components/CountdownCalendar';
import PhotoCarousel from './components/PhotoCarousel';
import MusicPlayer from './components/MusicPlayer';
import LocationRSVP from './components/LocationRSVP';
import DressCode from './components/DressCode';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import Petals from './components/Petals';
import SplashScreen from './components/SplashScreen';
import { FloralCorner } from './components/FloralDecor';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');

  const handleEnter = (name: string) => {
    setGuestName(name);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37]/30 selection:text-[#1B4332] md:py-12 flex justify-center items-start">
      {!isOpen && <SplashScreen onEnter={handleEnter} />}
      
      {/* Solo renderizamos el contenido si está abierto para forzar el autoplay en el MusicPlayer al montarse con interacción */}
      {isOpen && (
        <>
          <MusicPlayer autoPlay={true} />
          <Petals />
          
          <main className="w-full max-w-2xl bg-white shadow-2xl relative md:rounded-[40px] overflow-hidden animate-[fadeIn_1.5s_ease-out]">
            {/* Top-Left Decorative SVG */}
            <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none z-0 opacity-30 -translate-x-12 -translate-y-12 rotate-45">
              <FloralCorner color="#586B54" />
            </div>

            <Hero />
            
            <Reveal>
              <Phrase 
                text="“Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.” — Mateo 19:6" 
                className="mt-12 mb-16"
              />
            </Reveal>

            <Reveal>
              <CountdownCalendar targetDate="2026-07-04T10:00:00" />
            </Reveal>

            <Reveal className="py-16">
              <PhotoCarousel />
            </Reveal>

            <Reveal>
              <LocationRSVP guestName={guestName} />
            </Reveal>

            <Reveal>
              <DressCode />
            </Reveal>

            <Reveal>
              <Footer />
            </Reveal>

            {/* Bottom-Right Decorative SVG */}
            <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none z-0 opacity-30 translate-x-12 translate-y-12 rotate-[225deg]">
              <FloralCorner color="#D4AF37" />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default App;

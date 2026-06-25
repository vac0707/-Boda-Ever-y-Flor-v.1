
import React, { useState, useEffect } from 'react';

interface CountdownCalendarProps {
  targetDate: string;
}

const CountdownCalendar: React.FC<CountdownCalendarProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Calendar logic for Julio 2026
  // July 1 2026 is a Wednesday (3rd day of the week, index 2 when Monday is 0)
  // Weeks start on Monday (L) per requirement
  // L M M J V S D
  //     1 2 3 4 5
  // 6 7 8 9 10 11 12 ...
  const daysInJuly = 31;
  const startOffset = 2; // Monday(0), Tuesday(1), Wednesday(2) -> July 1st is Wednesday
  const calendarCells = Array.from({ length: daysInJuly + startOffset }, (_, i) => i < startOffset ? null : i - startOffset + 1);

  return (
    <section className="bg-[#EBF2EE] py-16 px-6 relative overflow-hidden">
      {/* Decorative background element - elegant gold pattern */}
      <div className="absolute top-0 right-0 opacity-15 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg width="200" height="200" viewBox="0 0 100 100">
           <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#D4AF37" />
        </svg>
      </div>

      <div className="text-center mb-12">
        <h3 className="font-serif text-2xl text-[#2D6A4F] mb-8 uppercase tracking-widest font-semibold">Faltan Solo...</h3>
        <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
          {[
            { label: 'Días', value: timeLeft.days },
            { label: 'Hrs', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Seg', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl py-4 shadow-md border border-[#9BB299]/20 transition-all hover:shadow-lg">
              <div className="text-3xl font-bold text-[#C5A059]">{item.value}</div>
              <div className="text-[10px] uppercase tracking-tighter text-[#586B54] font-bold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl max-w-sm mx-auto border border-[#9BB299]/30">
        <h4 className="font-serif text-xl font-bold text-[#C5A059] mb-4 text-center">Julio 2026</h4>
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-sans">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, idx) => (
            <div key={idx} className="font-bold text-[#586B54] pb-2">{day}</div>
          ))}
          {calendarCells.map((day, idx) => (
            <div 
              key={idx} 
              className={`py-2 rounded-full flex items-center justify-center transition-all ${
                day === 4 
                ? 'bg-[#2D6A4F] text-white font-bold scale-110 shadow-lg ring-4 ring-[#D4AF37]/40' 
                : day ? 'text-[#4A4A4A] hover:bg-[#EBF2EE]/50 cursor-default' : 'opacity-0'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[#2D6A4F] font-serif font-bold italic">
          Sábado, 04 de Julio
        </p>
      </div>
    </section>
  );
};

export default CountdownCalendar;

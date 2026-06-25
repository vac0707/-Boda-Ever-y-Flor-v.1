
import React, { useMemo } from 'react';

const Petals: React.FC = () => {
  const petalCount = 18;
  const items = useMemo(() => {
    return Array.from({ length: petalCount }).map((_, i) => {
      const rand = Math.random();
      let type: 'leaf' | 'petal' | 'gold' = 'leaf';
      let fill = '#8FA88B'; // Default sage
      
      if (rand < 0.45) {
        type = 'leaf';
        const leafRand = Math.random();
        if (leafRand < 0.3) {
          fill = '#8FA88B'; // Sage green
        } else if (leafRand < 0.6) {
          fill = '#9CE2D3'; // Mint green
        } else if (leafRand < 0.85) {
          fill = '#52796F'; // Eucalyptus green
        } else {
          fill = '#2D6A4F'; // Emerald green
        }
      } else if (rand < 0.75) {
        type = 'petal';
        fill = Math.random() > 0.5 ? '#FAF9F6' : '#FFFDD0'; // Soft white or cream petal
      } else {
        type = 'gold';
        fill = '#D4AF37'; // Golden spark
      }

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${8 + Math.random() * 14}s`,
        delay: `${Math.random() * 8}s`,
        size: `${12 + Math.random() * 16}px`,
        type,
        fill,
        rotation: `${Math.random() * 360}deg`
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="petal"
          style={{
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
            transform: `rotate(${item.rotation})`
          }}
        >
          {item.type === 'leaf' ? (
            // A realistic leaf shape
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill={item.fill} opacity="0.7">
              <path d="M12 2 C16 6 18 11 16 16 C14 20 10 21 8 17 C6 13 8 7 12 2 Z" />
            </svg>
          ) : item.type === 'petal' ? (
            // Soft organic flower petal shape
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill={item.fill} opacity="0.8">
              <path d="M12,21 C8,19.5 5,16.5 5,12 C5,7 9,3 12,3 C15,3 19,7 19,12 C19,16.5 16,19.5 12,21 Z" />
            </svg>
          ) : (
            // Shiny gold star or bubble sparkle
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="none" stroke={item.fill} strokeWidth="1.5" opacity="0.6">
              <circle cx="12" cy="12" r="5" fill="#D4AF37" opacity="0.3" />
              <path d="M12 2 L12 22 M2 12 L22 12" strokeWidth="0.8" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Petals;

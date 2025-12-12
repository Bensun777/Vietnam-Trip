import React, { useRef, useEffect } from 'react';
import { TripDay } from '../types';
import { motion } from 'framer-motion';

interface DaySelectorProps {
  days: TripDay[];
  selectedDayIndex: number;
  onSelectDay: (index: number) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ days, selectedDayIndex, onSelectDay }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const selectedElement = scrollRef.current.children[selectedDayIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedDayIndex]);

  return (
    <div className="sticky top-0 z-20 pt-2 pb-4">
      {/* Background container to create the sticky effect while keeping the cards popping out */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl shadow-sm border-b border-rose-100/50" />
      
      <div className="relative max-w-3xl mx-auto">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto px-4 gap-3 no-scrollbar snap-x py-1"
        >
          {days.map((day, index) => {
            const isSelected = index === selectedDayIndex;
            return (
              <motion.button
                key={index}
                onClick={() => onSelectDay(index)}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  scale: isSelected ? 1.05 : 1,
                  y: isSelected ? -2 : 0
                }}
                className={`
                  flex-shrink-0 snap-center
                  flex flex-col items-center justify-center
                  w-[4.5rem] h-20 rounded-2xl transition-colors duration-300 border-2
                  ${isSelected 
                    ? 'bg-rose-500 text-white border-rose-500 shadow-rose-200 shadow-lg' 
                    : 'bg-white text-gray-400 border-gray-100 hover:border-rose-200 hover:text-rose-400'
                  }
                `}
              >
                <span className={`text-xs font-medium mb-0.5 ${isSelected ? 'text-rose-100' : 'text-gray-400'}`}>
                  {day.dayOfWeek}
                </span>
                <span className="text-lg font-bold tracking-tight">
                  {day.date}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DaySelector;
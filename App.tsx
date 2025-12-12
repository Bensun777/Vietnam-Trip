import React, { useState } from 'react';
import { ITINERARY_DATA } from './constants';
import DaySelector from './components/DaySelector';
import TimelineItem from './components/TimelineItem';
import { Plane, Map } from 'lucide-react';

function App() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentDay = ITINERARY_DATA[selectedDayIndex];

  return (
    <div className="min-h-screen bg-[#FFF0F0] pb-safe">
      {/* Header Image/Banner - Warm Red Gradient */}
      <div className="bg-gradient-to-br from-rose-500 via-red-500 to-orange-400 text-white pt-10 pb-8 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-15 rotate-12 mix-blend-overlay">
          <Plane size={140} />
        </div>
        <div className="absolute -bottom-4 -left-4 p-8 opacity-10 -rotate-12 mix-blend-overlay">
          <Map size={120} />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 tracking-tight drop-shadow-sm">越南之旅 🇻🇳</h1>
          <div className="flex items-center gap-2 text-rose-50">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/20">
              2025/26 跨年
            </span>
            <p className="text-sm font-medium opacity-90">Dec 31 - Jan 05</p>
          </div>
        </div>
      </div>

      {/* Day Navigation */}
      <div className="-mt-10 pt-4 relative z-20">
        <DaySelector 
          days={ITINERARY_DATA} 
          selectedDayIndex={selectedDayIndex} 
          onSelectDay={setSelectedDayIndex} 
        />
      </div>

      {/* Timeline Content - Wider layout (approx 60% on desktop) */}
      <div className="max-w-3xl mx-auto px-5 py-8">
        <div className="flex items-end justify-between mb-8 px-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              Day {selectedDayIndex + 1} 
              <span className="text-rose-500 text-lg">.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {currentDay.location}
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-rose-100 text-rose-600 rounded-full">
            {currentDay.events.length} 個行程
          </span>
        </div>

        <div className="relative">
          {currentDay.events.map((event, index) => (
            <TimelineItem 
              key={`${selectedDayIndex}-${event.id}`} 
              event={event} 
              index={index}
              isLast={index === currentDay.events.length - 1} 
            />
          ))}

          {/* Empty State / End of day */}
          {currentDay.events.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-rose-100 shadow-sm mx-4">
              <div className="text-4xl mb-4">🛌</div>
              <p className="text-gray-500 font-medium">今天沒有特別安排行程<br/>好好放鬆享受吧！</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-xs">
        <p>Vietnam Trip 2025 • Designed for Mobile</p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { TripEvent } from '../types';
import { getIconForType, getColorForType } from '../constants';
import { MapPin, ExternalLink, Banknote, AlertCircle, Navigation, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  event: TripEvent;
  isLast: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast, index }) => {
  const hasAction = event.locationUrl || (event.links && event.links.length > 0);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.08 
      }}
      className="relative pl-6 pb-10 last:pb-0 group"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 to-transparent group-hover:from-rose-200 transition-colors" />
      )}
      
      {/* Time Label (Floating Left) - Desktop only logic could go here, but keeping mobile friendly */}
      
      {/* Timeline Dot */}
      <div className={`
        absolute left-0 top-0 w-10 h-10 rounded-full border-4 border-[#FFF0F0] shadow-md z-10 
        flex items-center justify-center transition-transform duration-300 group-hover:scale-110
        ${getColorForType(event.type).bg} ${getColorForType(event.type).text}
      `}>
        {getIconForType(event.type)}
      </div>

      {/* Content Card */}
      <motion.div 
        whileHover={{ y: -2 }}
        className={`
          ml-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent
          overflow-hidden relative
        `}
      >
        {/* Left Color Bar Accent */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${getColorForType(event.type).bar}`} />

        <div className="p-5">
          {/* Header: Time & Type */}
          <div className="flex justify-between items-center mb-2 pl-2">
            <div className="flex items-center gap-1.5 text-gray-500 font-medium text-sm">
              <Clock size={14} className="text-gray-400" />
              {event.time}
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${getColorForType(event.type).badge}`}>
              {event.type}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 pl-2 leading-tight">
            {event.title}
          </h3>
          
          {/* Description */}
          {event.description && (
            <p className="text-gray-600 text-sm mb-4 pl-2 leading-relaxed opacity-90">
              {event.description}
            </p>
          )}

          {/* Details Section */}
          <div className="space-y-3 pl-2">
            {/* Cost */}
            {event.cost && (
              <div className="flex items-center gap-2 text-sm bg-orange-50 px-3 py-2 rounded-lg w-fit text-orange-700 border border-orange-100">
                <Banknote size={16} />
                <span className="font-semibold">{event.cost}</span>
              </div>
            )}

            {/* Notes */}
            {event.notes && event.notes.length > 0 && (
              <div className="bg-yellow-50/80 p-3 rounded-xl border border-yellow-100/50">
                <div className="flex items-center gap-2 text-xs font-bold text-yellow-700 mb-1.5">
                  <AlertCircle size={14} />
                  <span>貼心提醒</span>
                </div>
                <ul className="list-none space-y-1">
                  {event.notes.map((note, idx) => (
                    <li key={idx} className="text-xs text-yellow-800 flex items-start gap-1.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-yellow-400 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Action Footer - Transport & Map Info */}
        {hasAction && (
          <div className="bg-gray-50/80 border-t border-gray-100 px-5 py-3 flex flex-wrap gap-2 items-center">
            {event.locationUrl && (
              <a 
                href={event.locationUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-bold hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-colors shadow-sm"
              >
                <MapPin size={14} className="text-rose-500" />
                Google Maps 導航
              </a>
            )}
            
            {event.links && event.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors shadow-sm shadow-teal-100"
              >
                <ExternalLink size={14} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
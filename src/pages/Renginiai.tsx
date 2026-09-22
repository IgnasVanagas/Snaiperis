import React from 'react';
import { Link, useLocation } from 'wouter';
import { eventsData } from '../data/events';
import { Calendar, MapPin, Trophy, ArrowRight, Flame, CheckCircle2 } from 'lucide-react';

interface RenginiaiProps {
  onOpenRegister: () => void;
}

export const Renginiai: React.FC<RenginiaiProps> = ({ onOpenRegister }) => {
  const [location] = useLocation();

  // Find if a specific event is requested
  const activeEvent = eventsData.tournaments.find(e => 
    location.includes(e.id) || location.replace(/\/$/, '').endsWith(e.id)
  );
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight max-w-3xl mx-auto">
          Akademijos renginiai
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Tarptautiniai krepšinio turnyrai, įgūdžių stovyklos ir šeimos sporto šventės.
        </p>
      </section>

      {/* Selected Event Spotlight */}
      {activeEvent && (
        <section className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-snaiperis-red/40 shadow-xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                  {activeEvent.title}
                </h2>
                <div className="text-xs font-semibold text-snaiperis-red mt-1">
                  {activeEvent.subtitle}
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Calendar className="w-3.5 h-3.5 text-snaiperis-red" />
                <span>{activeEvent.date}</span>
              </div>
            </div>

            <div className="aspect-video max-h-80 w-full rounded-2xl overflow-hidden bg-slate-100">
              <img 
                src={activeEvent.image} 
                alt={activeEvent.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                }}
              />
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {activeEvent.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-snaiperis-red mr-1.5" />
                <span>{activeEvent.location}</span>
              </div>
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-7 py-3 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Registruotis į šį renginį</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            {activeEvent ? 'Visi akademijos renginiai ir turnyrai' : 'Turnyrai ir programos'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {eventsData.tournaments.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-snaiperis-red/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-snaiperis-gold" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-snaiperis-red transition-colors">
                      {event.title}
                    </h3>
                    <div className="text-xs font-semibold text-snaiperis-red mt-1">
                      {event.subtitle}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-snaiperis-red shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenRegister}
                  className="w-full py-3 bg-slate-900 hover:bg-snaiperis-red text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Flame className="w-3.5 h-3.5 text-snaiperis-gold" />
                  <span>Dalyvauti renginyje</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { useLocation } from 'wouter';
import { eventsData } from '../data/events';
import { Calendar, Clock, Check, Users, Flame, ShieldCheck, MapPin } from 'lucide-react';

interface StovyklosProps {
  onOpenRegister: () => void;
}

export const Stovyklos: React.FC<StovyklosProps> = ({ onOpenRegister }) => {
  const [location] = useLocation();

  const activeCamp = eventsData.camps.find(c => 
    location.includes(c.slug) || location.includes(c.id) || location.replace(/\/$/, '').endsWith(c.slug)
  );
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight max-w-3xl mx-auto">
          KA „Snaiperis“ stovyklos
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Aktyvios atostogos, krepšinio įgūdžių tobulinimas, nauji draugai ir profesionalūs treneriai.
        </p>
      </section>

      {/* Selected Camp Spotlight */}
      {activeCamp && (
        <section className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-snaiperis-red/40 shadow-xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                  {activeCamp.title}
                </h2>
                <div className="text-xs font-semibold text-snaiperis-red mt-1">
                  {activeCamp.target} • {activeCamp.hours}
                </div>
              </div>
              <div className="text-2xl font-black text-snaiperis-red">
                {activeCamp.price}
              </div>
            </div>

            <div className="aspect-video max-h-80 w-full rounded-2xl overflow-hidden bg-slate-100">
              <img 
                src={activeCamp.image} 
                alt={activeCamp.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                }}
              />
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {activeCamp.description}
            </p>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2.5">
              <div className="text-xs font-bold text-slate-900">Kas įskaičiuota į stovyklos kainą:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCamp.activities.map((act, i) => (
                  <div key={i} className="flex items-center text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-8 py-3.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Flame className="w-4 h-4 text-snaiperis-gold" />
                <span>Rezervuoti vietą stovykloje</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Two Camp Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            {activeCamp ? 'Visos akademijos stovyklos' : 'Stovyklų pasirinkimas'}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {eventsData.camps.map(camp => (
            <div
              key={camp.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video max-h-72 overflow-hidden bg-slate-900">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-snaiperis-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {camp.target}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {camp.hours}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                      {camp.title}
                    </h2>
                    <span className="text-xl font-black text-snaiperis-red">
                      {camp.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {camp.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Į kainą įskaičiuota:
                    </div>
                    {camp.activities.map((act, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={onOpenRegister}
                  className="w-full py-3.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Flame className="w-4 h-4 text-snaiperis-gold" />
                  <span>Rezervuoti vietą stovykloje</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

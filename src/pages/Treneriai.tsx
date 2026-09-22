import React, { useState } from 'react';
import { coaches, Coach } from '../data/coaches';
import { Phone, Mail, Search, ChevronRight } from 'lucide-react';

interface TreneriaiProps {
  onSelectCoach: (coach: Coach) => void;
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const Treneriai: React.FC<TreneriaiProps> = ({ onSelectCoach, onOpenRegister }) => {
  const [search, setSearch] = useState('');

  const filteredCoaches = coaches.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
          Akademijos treneriai
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          22 kvalifikuoti krepšinio treneriai ir pedagogai, ugdantys Kauno jaunuosius talentus.
        </p>

        {/* Minimalist Search Bar */}
        <div className="max-w-md mx-auto pt-2 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Ieškoti pagal vardą ar pareigas..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200/80 rounded-2xl text-xs sm:text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
          />
        </div>
      </section>

      {/* Clean Coaches Roster Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCoaches.map(coach => (
            <div
              key={coach.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:border-snaiperis-red/40 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div 
                  className="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => onSelectCoach(coach)}
                >
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center">
                      Peržiūrėti profilį <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 
                    onClick={() => onSelectCoach(coach)}
                    className="font-bold text-slate-900 text-lg group-hover:text-snaiperis-red transition-colors cursor-pointer"
                  >
                    {coach.name}
                  </h3>
                  <div className="text-xs font-semibold text-snaiperis-red">
                    {coach.role}
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed pt-1">
                    {coach.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="border-t border-slate-100 pt-3 space-y-1.5 text-xs text-slate-600">
                  <a 
                    href={`tel:${coach.phone.replace(/\s+/g, '')}`} 
                    className="flex items-center hover:text-snaiperis-red font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-slate-400 group-hover:text-snaiperis-red" />
                    <span>{coach.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${coach.email}`} 
                    className="flex items-center hover:text-snaiperis-red transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 mr-2 text-slate-400 group-hover:text-snaiperis-red" />
                    <span className="truncate">{coach.email}</span>
                  </a>
                </div>

                <button
                  onClick={() => onSelectCoach(coach)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-snaiperis-red hover:text-white text-slate-800 font-semibold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Profilis & Treniruotės</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

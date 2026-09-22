import React, { useState } from 'react';
import { Link } from 'wouter';
import { teams } from '../data/teams';
import { Users, MapPin, ChevronRight } from 'lucide-react';

interface KomandosProps {
  onOpenRegister: () => void;
}

export const Komandos: React.FC<KomandosProps> = ({ onOpenRegister }) => {
  const [selectedYear, setSelectedYear] = useState<string>('Visi');

  const years = ['Visi', '2013', '2012', '2011', '2010', '2009'];

  const filteredTeams = selectedYear === 'Visi' 
    ? teams 
    : teams.filter(t => t.year === selectedYear);

  return (
    <div className="pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
          KA „Snaiperis“ komandos
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Akademijos reprezentacinės komandos, besivaržančios Moksleivių krepšinio lygoje (MKL) ir KKML.
        </p>

        {/* Year Selector */}
        <div className="flex flex-wrap justify-center gap-2 pt-3">
          {years.map(y => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedYear === y
                  ? 'bg-snaiperis-red text-white shadow-sm'
                  : 'bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {y === 'Visi' ? 'Visos kartos' : `${y} m. karta`}
            </button>
          ))}
        </div>
      </section>

      {/* Teams Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map(team => (
            <Link
              key={team.id}
              href={`/komandos/${team.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:border-snaiperis-red/40 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img 
                    src={team.image} 
                    alt={team.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                    }}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-snaiperis-red text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {team.year} m.
                    </span>
                    <span className="bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {team.division}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-snaiperis-red transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {team.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                      <span><strong>Treneris:</strong> {team.coach}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                      <span className="truncate">{team.hall}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 text-xs font-bold text-snaiperis-red">
                <span>Sudėtis ir tvarkaraštis</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

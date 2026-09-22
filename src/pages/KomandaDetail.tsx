import React from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import { teams } from '../data/teams';
import { coaches } from '../data/coaches';
import { Users, MapPin, Calendar, Trophy, ArrowLeft, Phone, Mail, Flame, ChevronRight } from 'lucide-react';

interface KomandaDetailProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const KomandaDetail: React.FC<KomandaDetailProps> = ({ onOpenRegister }) => {
  const [, params] = useRoute('/komandos/:slug*');
  const [location] = useLocation();

  const rawSlug = (params as any)?.['slug*'] || (params as any)?.slug || location.split('/').filter(Boolean).pop();
  const slug = rawSlug ? decodeURIComponent(rawSlug.replace(/\/$/, '')) : '';

  const team = teams.find(t => t.slug === slug) || teams[0];
  const matchedCoach = coaches.find(c => 
    c.name.toLowerCase().includes(team.coach.toLowerCase()) || 
    team.coach.toLowerCase().includes(c.name.toLowerCase())
  );

  return (
    <div className="pt-28 pb-16 space-y-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        <Link 
          href="/komandos" 
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-snaiperis-red transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Atgal į visas komandas</span>
        </Link>

        {/* Team Banner */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card">
          <div className="relative aspect-video max-h-80 w-full bg-slate-900">
            <img 
              src={team.image} 
              alt={team.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black font-display text-white">
                {team.name}
              </h1>
              <div className="flex gap-2 text-xs">
                <span className="bg-snaiperis-red px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {team.year} m. gim.
                </span>
                <span className="bg-white/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {team.division}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">Apie komandą</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {team.description}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">Treniruočių informacija</h3>
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-snaiperis-red shrink-0" />
                    <span>{team.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-2 text-snaiperis-red shrink-0" />
                    <span>{team.hall}</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-3.5 h-3.5 mr-2 text-snaiperis-red shrink-0" />
                    <span>MKL (Moksleivių krepšinio lyga) ir KKML</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenRegister(team.hall, team.coach)}
                className="px-5 py-2.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Registruotis į peržiūrą</span>
              </button>
            </div>

            {/* Coach card */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Vyriausiasis treneris
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                  <img 
                    src={matchedCoach?.image || 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png'} 
                    alt={team.coach}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{team.coach}</h4>
                  <div className="text-xs text-slate-500">{matchedCoach?.role || 'Treneris'}</div>
                  {matchedCoach && (
                    <Link 
                      href={`/treneriai/${matchedCoach.slug}`}
                      className="text-[11px] font-bold text-snaiperis-red hover:underline inline-flex items-center mt-1"
                    >
                      <span>Trenerio profilis</span>
                      <ChevronRight className="w-3 h-3 ml-0.5" />
                    </Link>
                  )}
                </div>
              </div>

              {matchedCoach && (
                <div className="pt-2 border-t border-slate-200 space-y-1 text-xs">
                  <a 
                    href={`tel:${matchedCoach.phone.replace(/\s+/g, '')}`}
                    className="flex items-center text-slate-700 hover:text-snaiperis-red font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-snaiperis-red" />
                    <span>{matchedCoach.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${matchedCoach.email}`}
                    className="flex items-center text-slate-700 hover:text-snaiperis-red"
                  >
                    <Mail className="w-3.5 h-3.5 mr-1.5 text-snaiperis-red" />
                    <span className="truncate">{matchedCoach.email}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

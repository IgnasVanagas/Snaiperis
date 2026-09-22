import React from 'react';
import { Link, useRoute } from 'wouter';
import { coaches, Coach } from '../data/coaches';
import { locations } from '../data/locations';
import { teams } from '../data/teams';
import { Phone, Mail, MapPin, Calendar, Users, Trophy, ArrowLeft, ArrowRight, Flame } from 'lucide-react';

interface TrenerisDetailProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const TrenerisDetail: React.FC<TrenerisDetailProps> = ({ onOpenRegister }) => {
  const [, params] = useRoute('/treneriai/:slug');
  const slug = params?.slug ? params.slug.replace(/\/$/, '') : '';

  const coach = coaches.find(c => c.slug === slug) || coaches[0];

  // Find gyms where this coach conducts training
  const coachGyms = locations.flatMap(loc => 
    loc.gyms
      .filter(g => g.coach.toLowerCase().includes(coach.name.toLowerCase()) || coach.name.toLowerCase().includes(g.coach.toLowerCase()))
      .map(g => ({ ...g, district: loc.district }))
  );

  // Find teams coached by this coach
  const coachTeams = teams.filter(t => 
    t.coach.toLowerCase().includes(coach.name.toLowerCase()) || coach.name.toLowerCase().includes(t.coach.toLowerCase())
  );

  // Other coaches for recommendation
  const otherCoaches = coaches.filter(c => c.id !== coach.id).slice(0, 4);

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Breadcrumb navigation */}
        <Link 
          href="/treneriai" 
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-snaiperis-red transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Atgal į visus trenerius</span>
        </Link>

        {/* Coach Main Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Photo Column */}
          <div className="md:col-span-5 relative bg-slate-100 min-h-[340px] sm:min-h-[420px]">
            <img 
              src={coach.image} 
              alt={coach.name} 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
              }}
            />
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
                  {coach.name}
                </h1>
                <div className="text-sm font-semibold text-snaiperis-red mt-1">
                  {coach.role}
                </div>
              </div>

              {/* Direct contacts */}
              <div className="flex flex-wrap gap-3 pt-2">
                {coach.phone && (
                  <a 
                    href={`tel:${coach.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-snaiperis-red border border-slate-200/80 text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-snaiperis-red" />
                    <span>{coach.phone}</span>
                  </a>
                )}
                {coach.email && (
                  <a 
                    href={`mailto:${coach.email}`}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-snaiperis-red border border-slate-200/80 text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-snaiperis-red" />
                    <span>{coach.email}</span>
                  </a>
                )}
              </div>

              {/* Bio */}
              <div className="pt-2">
                <h2 className="text-sm font-bold text-slate-900 mb-1.5">Apie trenerį</h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenRegister(undefined, coach.name)}
                className="w-full sm:w-auto px-7 py-3 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Registruotis pas šį trenerį</span>
              </button>
            </div>
          </div>
        </div>

        {/* Training Gyms & Schedules */}
        {coachGyms.length > 0 && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 tracking-tight">
                Treniruočių salės ir tvarkaraščiai
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Salės, kuriose treniruotes veda {coach.name}:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coachGyms.map((gym, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-snaiperis-red">{gym.district}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{gym.years.join(', ')} m.</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{gym.name}</h3>
                    <div className="text-xs text-slate-500 flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                      <span className="truncate">{gym.address}</span>
                    </div>
                    <div className="text-xs text-slate-600 pt-1">
                      <span className="text-slate-400">Grupės:</span> <strong>{gym.years.join(', ')} m.</strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`tel:${gym.phone.replace(/\s+/g, '')}`}
                      className="text-xs font-semibold text-slate-600 hover:text-snaiperis-red flex items-center"
                    >
                      <Phone className="w-3 h-3 mr-1 text-snaiperis-red" />
                      <span>{gym.phone}</span>
                    </a>
                    <button
                      onClick={() => onOpenRegister(gym.name, coach.name)}
                      className="text-xs font-bold text-snaiperis-red hover:underline"
                    >
                      Registruotis
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Coached Teams */}
        {coachTeams.length > 0 && (
          <section className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 tracking-tight">
                Reprezentacinės komandos
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                {coach.name} treniruojamos KA „Snaiperis“ komandos:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coachTeams.map(team => (
                <Link
                  key={team.id}
                  href={`/komandos/${team.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:border-snaiperis-red/40 transition-all flex flex-col justify-between group"
                >
                  <div className="aspect-video relative bg-slate-900 overflow-hidden">
                    <img 
                      src={team.image} 
                      alt={team.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-snaiperis-red text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {team.year} m. • {team.division}
                    </div>
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-snaiperis-red transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                  <div className="p-4 pt-0 text-xs font-bold text-snaiperis-red flex items-center justify-between">
                    <span>Komandos puslapis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other coaches */}
        <section className="pt-8 border-t border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Kiti akademijos treneriai
            </h2>
            <Link 
              href="/treneriai"
              className="text-xs font-bold text-snaiperis-red hover:underline flex items-center space-x-1"
            >
              <span>Visi 22 treneriai</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherCoaches.map(c => (
              <Link
                key={c.id}
                href={`/treneriai/${c.slug}`}
                className="bg-white rounded-2xl p-3 border border-slate-200/80 hover:border-snaiperis-red/40 transition-all group flex items-center space-x-3 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={c.image} 
                    alt={c.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 truncate group-hover:text-snaiperis-red transition-colors">
                    {c.name}
                  </h3>
                  <div className="text-[10px] text-slate-500 truncate">{c.role}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

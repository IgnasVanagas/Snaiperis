import React from 'react';
import { useLocation } from 'wouter';
import { eventsData } from '../data/events';
import { Baby, Trophy, Sparkles, CheckCircle2, Flame, Heart, Target, Zap, Calendar } from 'lucide-react';

interface DarzelinukaiProps {
  onOpenRegister: () => void;
}

export const Darzelinukai: React.FC<DarzelinukaiProps> = ({ onOpenRegister }) => {
  const [location] = useLocation();

  const activeEvent = eventsData.kindergarten.find(k => 
    location.includes(k.slug) || location.includes(k.id) || location.replace(/\/$/, '').endsWith(k.slug)
  );
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight max-w-3xl mx-auto">
          Darželinukų krepšinio programa
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Pirmieji žingsniai krepšinio aikštelėje per džiaugsmą, judėjimą, koordinaciją ir meilę aktyviam gyvenimo būdui.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenRegister}
            className="px-8 py-3.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center space-x-2"
          >
            <Flame className="w-4 h-4 text-snaiperis-gold" />
            <span>Registruoti darželinuką į treniruotes</span>
          </button>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pritaikyta įranga</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Žemesni krepšiai ir lengvesni 3–5 dydžio kamuoliai, kad vaikas lengvai pasiektų krepšį ir patirtų sėkmės džiaugsmą nuo pirmos minutės.
            </p>
          </div>

          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Koordinacija ir vikrumas</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fizinio pasirengimo, pusiausvyros, bėgimo ir šuolio lavinimas per linksmus judriuosius žaidimus ir estafečių trasas.
            </p>
          </div>

          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-100 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pozityvi atmosfera</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Skatome kiekvieną vaiką, mokome komandinio bendravimo, disciplinos ir nuoširdžios pagarbos draugams.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Kindergarten Event Spotlight */}
      {activeEvent && (
        <section className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-snaiperis-red/40 shadow-xl p-6 sm:p-10 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                {activeEvent.title}
              </h2>
              <div className="text-xs font-semibold text-snaiperis-red mt-1">
                Tradicinis KA „Snaiperis“ darželinukų renginys
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

            <div className="pt-2 flex justify-end">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-8 py-3.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Flame className="w-4 h-4 text-snaiperis-gold" />
                <span>Registruoti vaiką į treniruotes</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3 Traditional Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
            {activeEvent ? 'Visos šventės mažiausiems krepšininkams' : 'Šventės mažiausiems mūsų krepšininkams'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {eventsData.kindergarten.map((k, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={k.image}
                    alt={k.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                    }}
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                    {k.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {k.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <div className="bg-[#0a0b0e] text-white rounded-3xl p-8 sm:p-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black font-display">
            Norite, kad jūsų darželinukas išbandytų krepšinį?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Pirmoji bandomoji treniruotė – nemokama. Ateikite, susipažinkite su treneriu ir leiskite vaikui pajusti judėjimo džiaugsmą.
          </p>
          <button
            onClick={onOpenRegister}
            className="px-8 py-3.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center space-x-2"
          >
            <Flame className="w-4 h-4 text-snaiperis-gold" />
            <span>Registruotis nemokamai</span>
          </button>
        </div>
      </section>
    </div>
  );
};

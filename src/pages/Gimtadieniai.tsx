import React from 'react';
import { Link } from 'wouter';
import { Sparkles, Check, ArrowLeft, Phone, Mail, Flame, Trophy } from 'lucide-react';
import { academyData } from '../data/academyData';

interface GimtadieniaiProps {
  onOpenRegister: () => void;
}

export const Gimtadieniai: React.FC<GimtadieniaiProps> = ({ onOpenRegister }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <Link 
          href="/tevams" 
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-snaiperis-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Atgal į tėvų portalą</span>
        </Link>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Krepšinio gimtadienis
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm">
            Nepamirštama šventė su profesionaliu krepšinio treneriu, linksmais žaidimais ir rungtynėmis Kaune.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {academyData.birthdays.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${
                idx === 1
                  ? 'bg-snaiperis-dark text-white border-snaiperis-red/30 shadow-xl relative'
                  : 'bg-white text-slate-900 border-slate-200 shadow-sm'
              }`}
            >
              {idx === 1 && (
                <span className="absolute -top-3 right-8 bg-snaiperis-red text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Populiariausias
                </span>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-display">
                    {pkg.title}
                  </h3>
                  <div className={`text-xs font-semibold ${idx === 1 ? 'text-amber-200' : 'text-slate-500'}`}>
                    {pkg.duration} • {pkg.kids}
                  </div>
                </div>

                <div className={`text-3xl sm:text-4xl font-black font-display ${idx === 1 ? 'text-white' : 'text-snaiperis-red'}`}>
                  {pkg.price}
                </div>

                <div className="pt-4 border-t border-slate-200/20 space-y-2.5">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm">
                      <Check className={`w-4 h-4 mr-2 shrink-0 ${idx === 1 ? 'text-snaiperis-gold' : 'text-emerald-500'}`} />
                      <span className={idx === 1 ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8">
                <a
                  href="tel:+37067246656"
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                    idx === 1
                      ? 'bg-snaiperis-red hover:bg-snaiperis-red-600 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-snaiperis-red text-white'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Rezervuoti (+370 672 46 656)</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* What to bring */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Papildoma informacija tėveliams:</h4>
          <p>• Galite atsinešti savo tortą, užkandžius ir gėrimus.</p>
          <p>• Visiems vaikams būtina turėti švarią sportinę avalynę bėgiojimui salėje.</p>
          <p>• Laikas derinamas iš anksto pagal pageidaujamą salę ir datą.</p>
        </div>
      </div>
    </div>
  );
};

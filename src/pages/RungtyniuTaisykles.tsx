import React from 'react';
import { Link } from 'wouter';
import { Shield, ArrowLeft, Heart, Users, ThumbsUp, AlertCircle } from 'lucide-react';
import { academyData } from '../data/academyData';

export const RungtyniuTaisykles: React.FC = () => {
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

        <div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Rungtynių stebėjimo taisyklės
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Mums svarbiausia – vaikų džiaugsmas, emocinis saugumas ir pagarbus elgesys aikštelėje bei tribūnose.
          </p>
        </div>

        {/* Rules Cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
            {academyData.spectatorRules.map((rule, idx) => (
              <div key={idx} className="flex items-start space-x-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="w-7 h-7 rounded-xl bg-red-50 text-snaiperis-red font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-slate-700 pt-0.5">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-snaiperis-dark text-white rounded-3xl p-6 sm:p-8 space-y-3 border border-white/10">
          <h3 className="text-lg sm:text-xl font-bold">Mes čia dėl vaikų, o ne dėl rezultato</h3>
          <div className="flex items-center space-x-2 text-snaiperis-gold font-medium text-xs">
            <ThumbsUp className="w-4 h-4" />
            <span>Snaiperio bendruomenės pagarba</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pergalės ateina ir praeina, o pasitikėjimas savimi, pagarba varžovui ir meilė sportui lieka visam gyvenimui. Palaikykime savo vaikus plojimais po kiekvieno epizodo!
          </p>
        </div>
      </div>
    </div>
  );
};

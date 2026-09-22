import React from 'react';
import { academyData } from '../data/academyData';
import { Shield, CheckCircle2 } from 'lucide-react';

export const ElgesioTaisykles: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Elgesio taisyklės
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            KA „Snaiperis“ siekia ne tik ugdyti sportinį meistriškumą, bet ir formuoti brandžią, atsakingą bei mandagią asmenybę. Šių taisyklių laikymasis privalomas kiekvienam akademijos nariui.
          </p>
        </div>

        <div className="space-y-6">
          {academyData.conductRules.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4"
            >
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center">
                <span className="w-7 h-7 rounded-xl bg-red-50 text-snaiperis-red font-bold text-xs flex items-center justify-center mr-3 shrink-0">
                  {idx + 1}
                </span>
                <span>{section.category}</span>
              </h2>

              <ul className="space-y-2.5 pl-10 text-xs sm:text-sm text-slate-600">
                {section.rules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

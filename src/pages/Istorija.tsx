import React from 'react';
import { academyData } from '../data/academyData';
import { Trophy, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export const Istorija: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight max-w-3xl mx-auto">
          Akademijos istorija
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Per daugiau nei 20 metų KA „Snaiperis“ išaugo į vieną didžiausių ir labiausiai pripažintų krepšinio organizacijų Kaune.
        </p>
      </section>

      {/* Interactive Timeline */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-8 ml-4 sm:ml-8">
          {academyData.milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-snaiperis-red border-2 border-white shadow-sm group-hover:scale-125 transition-transform"></div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                    {m.title}
                  </h3>
                  <span className="bg-red-50 text-snaiperis-red text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {m.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured archive video */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-snaiperis-dark text-white rounded-3xl p-6 sm:p-10 text-center space-y-5 border border-white/10">
          <Trophy className="w-10 h-10 text-snaiperis-gold mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black font-display">
            Kartu kurkime savo istoriją
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Kiekviena karta, kiekviena treniruotė ir kiekviena pergalė įrašo naują puslapį į KA „Snaiperis“ metraštį.
          </p>
          <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/OnL1ypjS7pc" 
              title="KA Snaiperis Istorija"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

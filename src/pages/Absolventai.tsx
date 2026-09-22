import React from 'react';
import { ArrowLeft, GraduationCap, Heart, Trophy } from 'lucide-react';
import { Link } from 'wouter';

export const Absolventai: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-snaiperis-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Atgal į pradžią</span>
        </Link>

        <div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Akademijos absolventai
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Per daugiau nei du dešimtmečius akademiją baigė šimtai sportininkų, tapusių profesionaliais krepšininkais, treneriais, teisėjais bei sėkmingais savo sričių profesionalais.
          </p>
        </div>

        {/* 2000 Generation Spotlight */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Gim. 2000 m. auklėtinių karta</h2>
              <div className="text-xs font-semibold text-snaiperis-red mt-0.5">Auksinė karta</div>
            </div>
          </div>

          <blockquote className="border-l-4 border-snaiperis-red pl-4 italic text-slate-700 text-xs sm:text-sm leading-relaxed my-4">
            „Džiaugiuosi ir didžiuojuosi, kad man teko garbė ir galimybė dirbti su šia puikia karta (gim. 2000 m.). Mums pavyko įgyvendinti visus užsibrėžtus tikslus, pavyko mums išlikti stipriai kaip komandai, taip pat atlaikėme įvairius sunkumus ir iškovojome skambių pergalių tiek Lietuvoje, tiek užsienyje. Šie vaikinai įrodė, kad darbas ir charakteris nugali viską.“
          </blockquote>

          <p className="text-xs text-slate-500 leading-relaxed">
            Dalis šios kartos žaidėjų sėkmingai tęsia krepšininko karjerą RKL ir NKL lygose, kiti baigė universitetus ir šiandien patys veda treniruotes jaunajai kartai.
          </p>
        </div>
      </div>
    </div>
  );
};

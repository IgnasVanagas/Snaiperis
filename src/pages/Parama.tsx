import React, { useState } from 'react';
import { HeartHandshake, Copy, Check, Gift, ArrowRight, Video, ExternalLink } from 'lucide-react';
import { academyData } from '../data/academyData';

export const Parama: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const support = academyData.supportGPM;

  const copyCode = () => {
    navigator.clipboard.writeText(support.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
            Skirkite 1,2% GPM
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Kiekvienas dirbantis Lietuvos pilietis gali skirti 1,2% nuo sumokėto pajamų mokesčio. Tai Jums nieko nekainuoja, o akademijos vaikams padeda augti ir tobulėti.
          </p>
        </div>

        {/* Big Highlight Bus Goal Card */}
        <div className="bg-snaiperis-dark text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-white/10 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
              Padėkite mums įsigyti Akademijos autobusą
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {support.purpose}
            </p>
          </div>

          {/* Requisites box */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-xs text-slate-400 block uppercase tracking-wider mb-1">
                Gavėjo identifikacinis numeris (kodas):
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-black text-snaiperis-gold">
                {support.code}
              </div>
              <span className="text-xs text-slate-400 block mt-1">
                Mokesčio dalies paskirtis: <strong>{support.title}</strong>
              </span>
            </div>

            <div className="flex sm:justify-end">
              <button
                onClick={copyCode}
                className={`px-5 py-3 rounded-xl font-bold text-xs flex items-center space-x-2 transition-all ${
                  copied ? 'bg-emerald-500 text-white' : 'bg-snaiperis-red hover:bg-snaiperis-red-600 text-white shadow-sm'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Kodas nukopijuotas!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Kopijuoti kodą ({support.code})</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-400">
            * Prašymą skirti paramą per EDS sistemą galima pateikti iki <strong>{support.deadline}</strong>.
          </div>
        </div>

        {/* Prizes for supporters */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-snaiperis-gold flex items-center justify-center font-bold">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">Prizai rėmėjams!</h3>
              <div className="text-xs text-snaiperis-red font-semibold mt-0.5">Dovana kiekvienam skyrusiam paramą</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Visiems, skyrusiems 1,2% paramą KA „Snaiperis“, dovanojame oficialią akademijos atributiką – sirgalių marškinėlius, „Snapback“ kepures ar suvenyrus. Pateikite deklaracijos kopiją atsiimant dovaną.
          </p>
        </div>

        {/* Video guide */}
        <div className="bg-snaiperis-dark rounded-3xl p-6 sm:p-8 text-white text-center space-y-4 border border-white/10">
          <h3 className="text-lg sm:text-xl font-bold">Instrukcija: Kaip skirti paramą per EDS</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Prisijunkite prie VMI Elektroninio deklaravimo sistemos (EDS) ir nurodykite KA „Snaiperis“ kodą 300062828.
          </p>
          <div className="aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/OnL1ypjS7pc" 
              title="KA Snaiperis Parama"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

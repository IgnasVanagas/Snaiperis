import React from 'react';
import { Link } from 'wouter';
import { CreditCard, HeartHandshake, Shield, Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';

export const Tevams: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight max-w-3xl mx-auto">
          Tėvų portalas
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Visa aktuali informacija tėveliams – mokėjimai, NVŠ kompensacija, rungtynių stebėjimo taisyklės ir krepšinio gimtadieniai.
        </p>
      </section>

      {/* 4 Cards Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Mokėjimų informacija */}
          <Link
            href="/mokejimu-informacija"
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-snaiperis-red/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                Mokėjimų informacija & Rekvizitai
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Banko sąskaitos numeris (IBAN), mokėjimo paskirties pavyzdys, terminai ir šeimos nuolaidos.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-bold text-snaiperis-red">
              <span>Peržiūrėti rekvizitus</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: NVŠ Krepšelis */}
          <Link
            href="/neformalaus-ugdymo-krepselis"
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-snaiperis-red/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                Neformalaus ugdymo krepšelis (NVŠ)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                15–50 € mėnesinė savivaldybės kompensacija treniruotėms Kauno mieste ir rajone.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-bold text-snaiperis-red">
              <span>Instrukcija kaip gauti NVŠ</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Rungtynių stebėjimo taisyklės */}
          <Link
            href="/rungtyniu-stebejimo-taisykles"
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-snaiperis-red/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                Rungtynių stebėjimo taisyklės
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tėvelių elgesio kultūra tribūnose – pozityvus palaikymas, pagarba teisėjams ir vaikų emocinis saugumas.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-bold text-snaiperis-red">
              <span>Skaityti taisykles</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Gimtadieniai */}
          <Link
            href="/gimtadieniai"
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-snaiperis-red/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                Krepšinio gimtadienis
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Švęskite vaiko gimtadienį krepšinio aikštelėje su treneriu, estafetėmis ir linksmybėmis.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-bold text-snaiperis-red">
              <span>Gimtadienių paketai nuo 100 €</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Quick contacts for parents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">Kilo klausimų dėl mokėjimų ar treniruočių?</h3>
            <p className="text-xs sm:text-sm text-slate-500">Mūsų administracija pasiruošusi Jums padėti kiekvieną darbo dieną.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="tel:+37067246656" className="flex items-center space-x-1.5 px-4 py-2.5 bg-white text-slate-900 font-semibold rounded-full text-xs border border-slate-200 hover:border-snaiperis-red/40 shadow-sm transition-colors">
              <Phone className="w-3.5 h-3.5 text-snaiperis-red" />
              <span>+370 672 46 656</span>
            </a>
            <a href="mailto:info@kasnaiperis.lt" className="flex items-center space-x-1.5 px-4 py-2.5 bg-slate-900 text-white font-semibold rounded-full text-xs hover:bg-snaiperis-red transition-colors">
              <Mail className="w-3.5 h-3.5 text-snaiperis-gold" />
              <span>info@kasnaiperis.lt</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

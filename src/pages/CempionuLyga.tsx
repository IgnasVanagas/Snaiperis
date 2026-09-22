import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Trophy, FileText, ArrowRight, ShieldCheck, Award, Calendar, Users } from 'lucide-react';
import { eventsData } from '../data/events';

interface CempionuLygaProps {
  onOpenRegister: () => void;
}

export const CempionuLyga: React.FC<CempionuLygaProps> = ({ onOpenRegister }) => {
  const [location, setLocation] = useLocation();

  // Detect division from URL if present (e.g. /cempionu_lyga/u8 or /cempionu-lyga/u9)
  const getInitialDivision = (): 'u8' | 'u9' | 'u12' => {
    if (location.includes('u9')) return 'u9';
    if (location.includes('u12') || location.includes('u11')) return 'u12';
    return 'u8';
  };

  const [selectedDiv, setSelectedDiv] = useState<'u8' | 'u9' | 'u12'>(getInitialDivision);

  useEffect(() => {
    if (location.includes('u9')) setSelectedDiv('u9');
    else if (location.includes('u12') || location.includes('u11')) setSelectedDiv('u12');
    else if (location.includes('u8')) setSelectedDiv('u8');
  }, [location]);

  const handleSelectDiv = (divId: 'u8' | 'u9' | 'u12') => {
    setSelectedDiv(divId);
    setLocation(`/cempionu_lyga/${divId}`);
  };

  const league = eventsData.championsLeague;
  const currentDiv = league.divisions.find(d => d.id === selectedDiv) || league.divisions[0];

  const regulations = {
    u8: {
      birth: '2017 m. ir jaunesni berniukai',
      director: 'Pirmenybių vyr. teisėjas Edgaras Bartuševičius',
      timeframe: 'Pirmenybės vykdomos spalio – gegužės mėnesiais. Rungtynes komandos privalo sužaisti nurodytą savaitę pagal tvarkaraštį.',
      rules: 'Žaidžiami 4 kėliniai po 8 minutes. Žaidžiama prie žemesnių (2.60 m) krepšių su 5 dydžio kamuoliais. Visi žaidėjai privalo gauti lygų žaidimo laiką.',
      awards: '1–3 vietas iškovojusios komandos apdovanojamos taurėmis, o žaidėjai – medaliais. Kiekvienos komandos naudingiausias žaidėjas (MVP) gauna asmeninį prizą.'
    },
    u9: {
      birth: '2016 m. ir jaunesni berniukai',
      director: 'Pirmenybių vyr. teisėjas Edgaras Bartuševičius',
      timeframe: 'Pirmenybės vykdomos spalio – gegužės mėnesiais.',
      rules: 'Žaidžiami 4 kėliniai po 8 minutes. Žaidžiama 4x4 arba 5x5 per visą aikštelę, skatinamas greitas kamuolio perdavimas ir aktyvi gynyba.',
      awards: 'Čempionato nugalėtojų taurė, sidabro ir bronzos medaliai, asmeniniai apdovanojimai simboliniam penketukui.'
    },
    u12: {
      birth: '2013–2015 m. gimimo berniukai (U11 / U12)',
      director: 'Pirmenybių vyr. teisėjas Edgaras Bartuševičius',
      timeframe: 'Pirmenybės vykdomos spalio – gegužės mėnesiais su finalinio ketverto kulminacija.',
      rules: 'Pilnos 5x5 FIBA / MKL taisyklės su standartinio aukščio (3.05 m) krepšiais ir 6 arba 7 dydžio kamuoliais. Rungtynėms vadovauja licencijuoti teisėjai ir sekretoriatas.',
      awards: 'Didžioji Čempionų Lygos taurė, čempionų žiedai / medaliai, finalo MVP statulėlė ir rėmėjų dovanos.'
    }
  };

  const currentReg = regulations[selectedDiv];

  return (
    <div className="pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight max-w-3xl mx-auto">
          Čempionų Lyga
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {league.description}
        </p>

        <div className="pt-2">
          <Link
            href="/cempionu-lyga/taisykles"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-snaiperis-red hover:text-snaiperis-red-700 bg-red-50 px-4 py-2 rounded-full transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Skaityti oficialias varžybų taisykles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Division Selector & Details */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-5">
            {league.divisions.map(d => (
              <button
                key={d.id}
                onClick={() => handleSelectDiv(d.id as any)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center space-x-1.5 ${
                  selectedDiv === d.id
                    ? 'bg-snaiperis-red text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>{d.name} ({d.age})</span>
              </button>
            ))}
          </div>

          {/* Division Details */}
          <div className="space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-2xl font-bold font-display text-slate-900">
                {currentDiv.name} – {currentDiv.age}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentDiv.format}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50/80 border border-slate-200/60 p-5 rounded-2xl flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-snaiperis-red flex items-center justify-center font-black text-lg">
                  {currentDiv.teamsCount}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Dalyvaujančių komandų</div>
                  <div className="text-xs text-slate-500">Iš visų akademijos sporto salių</div>
                </div>
              </div>

              <div className="bg-slate-50/80 border border-slate-200/60 p-5 rounded-2xl flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg">
                  ★
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Apdovanojimai & Medaliai</div>
                  <div className="text-xs text-slate-500">Kiekvienas dalyvis apdovanojamas medaliu</div>
                </div>
              </div>
            </div>

            {/* Official Tournament Regulations Accordion / Content Box */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-snaiperis-red" />
                <span>Oficialūs {currentDiv.name} nuostatai ir tvarka</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">Dalyviai:</div>
                  <div className="text-slate-600">{currentReg.birth}</div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">Vadovavimas:</div>
                  <div className="text-slate-600">{currentReg.director}</div>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <div className="font-bold text-slate-900">Vieta ir laikas:</div>
                  <div className="text-slate-600">{currentReg.timeframe}</div>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <div className="font-bold text-slate-900">Taisyklės ir inventorius:</div>
                  <div className="text-slate-600">{currentReg.rules}</div>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <div className="font-bold text-slate-900">Apdovanojimai:</div>
                  <div className="text-slate-600">{currentReg.awards}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Visi KA „Snaiperis“ auklėtiniai automatiškai įtraukiami į Čempionų Lygos rungtynes.
              </div>
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-7 py-3 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 shrink-0"
              >
                Registruotis į treniruotes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Video Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="space-y-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
            Akimirkos iš Čempionų Lygos
          </h2>
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/OnL1ypjS7pc" 
              title="KA Snaiperis Čempionų Lyga"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

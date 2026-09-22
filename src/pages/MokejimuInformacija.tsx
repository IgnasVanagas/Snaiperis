import React, { useState } from 'react';
import { CreditCard, Copy, Check, AlertCircle, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { academyData } from '../data/academyData';

export const MokejimuInformacija: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const p = academyData.payments;

  const copyIban = () => {
    navigator.clipboard.writeText(p.iban.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
        <div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Mokėjimų informacija
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Kiekvieną mėnesį Jums bus atsiųsta el. sąskaita už vaiko lankytas krepšinio treniruotes. Sąskaitą prašome apmokėti iki paskutinės einamojo mėnesio dienos.
          </p>
        </div>

        {/* Bank Requisites Card */}
        <div className="bg-snaiperis-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-snaiperis-red flex items-center justify-center font-bold">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Banko rekvizitai</div>
                <div className="text-sm sm:text-base font-bold text-white">{p.receiver}</div>
              </div>
            </div>
            <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-slate-300">
              {p.bank}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Gavėjo pavadinimas:</span>
              <span className="font-bold text-sm text-white">{p.receiver}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Įmonės kodas:</span>
              <span className="font-bold text-sm text-white font-mono">{p.companyCode}</span>
            </div>
          </div>

          {/* Copyable IBAN */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                Banko sąskaitos numeris (IBAN):
              </span>
              <span className="text-lg sm:text-xl font-mono font-black text-snaiperis-gold tracking-wider">
                {p.iban}
              </span>
            </div>
            <button
              onClick={copyIban}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all shrink-0 ${
                copied ? 'bg-emerald-500 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Nukopijuota!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-snaiperis-red" />
                  <span>Kopijuoti IBAN</span>
                </>
              )}
            </button>
          </div>

          {/* Payment reference example */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs space-y-1">
            <span className="font-bold text-amber-400 uppercase tracking-wider block">
              Mokėjimo paskirties pavyzdys:
            </span>
            <div className="font-mono text-white text-xs sm:text-sm bg-black/40 p-2.5 rounded-lg border border-white/5">
              {p.purposeExample}
            </div>
            <span className="text-[11px] text-slate-300 block pt-1">
              * Būtinai nurodykite vaiko vardą, pavardę, salę ir sąskaitos numerį, kad mokėjimas būtų automatiškai užskaitytas sistemoje.
            </span>
          </div>
        </div>

        {/* Terms & Rules */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Mokėjimo tvarka ir sąlygos
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {p.terms.map((term, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-red-50 text-snaiperis-red font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{term}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

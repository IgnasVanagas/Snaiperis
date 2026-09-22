import React from 'react';
import { Link } from 'wouter';
import { HeartHandshake, CheckCircle2, AlertCircle, ArrowLeft, Mail, Phone, FileText } from 'lucide-react';

export const Krepselis: React.FC = () => {
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
            Neformalaus ugdymo krepšelis (NVŠ)
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            VšĮ Krepšinio Akademija „Snaiperis“ yra akredituota neformalaus ugdymo įstaiga, suteikianti galimybę pasinaudoti NVŠ krepšeliu.
          </p>
        </div>

        {/* Subsidy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900">
                15 € <span className="text-sm font-semibold text-slate-500">/ mėn.</span>
              </div>
              <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                1–8 klasėms
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Vaikams su specialiaisiais ugdymosi poreikiais (SUP) kompensuojama <strong>30 € / mėn.</strong>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900">
                25 € <span className="text-sm font-semibold text-slate-500">/ mėn.</span>
              </div>
              <span className="bg-red-50 text-snaiperis-red text-xs font-bold px-3 py-1 rounded-full border border-red-100">
                9–12 klasėms
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Vaikams su specialiaisiais ugdymosi poreikiais (SUP) kompensuojama <strong>50 € / mėn.</strong>
            </p>
          </div>
        </div>

        {/* Key rules */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Svarbiausios NVŠ taisyklės</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Tik bendrojo ugdymo mokiniams:</strong> NVŠ taikomas 1–12 klasių mokiniams.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Tik vienas būrelis:</strong> NVŠ lėšomis gali būti kompensuojamas tik <strong>vienas</strong> pasirinktas vaiko lankomas neformalus užsiėmimas.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Galioja:</strong> Kauno miesto ir Kauno rajono savivaldybėse.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Automatinis sumažinimas:</strong> Patvirtinus sutartį savivaldybės registre, sąskaita Jums bus atsiunčiama jau su pritaikyta nuolaida.</span>
            </li>
          </ul>
        </div>

        {/* Contract signing */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-snaiperis-red" />
            Kaip pasirašyti NVŠ sutartį?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Sutartys pasirašomos mokslo metų pradžioje arba prisijungus prie grupės. Sutartis galima pasirašyti el. būdu arba pateikti pasirašytus egzempliorius treneriui arba atsiųsti el. paštu <strong>info@kasnaiperis.lt</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Sparkles, Trophy, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export const GarbesAleja: React.FC = () => {
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
            Garbės alėja
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Žmonės, savo darbu, talentu ir atsidavimu sukūrę KA „Snaiperis“ bendruomenę ir įkvėpę šimtus jaunųjų sportininkų.
          </p>
        </div>

        {/* Story 1: Martynas Balevičius */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-snaiperis-gold flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Martynas Balevičius</h2>
              <div className="text-xs font-semibold text-snaiperis-red mt-0.5">Metraštininkas & Kūrėjas</div>
            </div>
          </div>

          <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3 pt-2">
            <p>
              „Pirmoji mano pažintis su Kauno Krepšinio Akademija „Snaiperis“ įvyko 2012–2013 metų sezone. Simboliška, jog naujų metų pradžią pažymėjęs video reportažas apie šventinį krepšinio turnyrą, atvertė ir naują lapą mano kūrybinėje veikloje. Tai buvo tik pirmasis vėliau sekusių gausybės video siužetų, atspindinčių akademijos augimą, vaikų šypsenas ir krepšinio aistrą.“
            </p>
            <p>
              „Buvimas šios organizacijos dalimi leido pamatyti, su kokia meile treneriai dirba su vaikais, kaip krepšinis tampa gyvenimo mokykla, formuojančia charakterį ir ištvermę.“
            </p>
          </div>
        </div>

        {/* Story 2: Europos čempionė Viltė Peleckytė */}
        <div className="bg-snaiperis-dark text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-snaiperis-red text-white flex items-center justify-center font-bold">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">Viltė Peleckytė</h2>
              <div className="text-xs font-semibold text-snaiperis-gold mt-0.5">Europos Čempionė</div>
            </div>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Viltė Peleckytė savo krepšinio kelią pradėjo KA „Snaiperis“ salėse treniruodamasi kartu su berniukais. Čia įgytas kietas charakteris, greitis ir metimo technika leido jai užkopti į pačią Europos krepšinio viršūnę ir tapti Lietuvos rinktinės lydere!
          </p>
        </div>
      </div>
    </div>
  );
};

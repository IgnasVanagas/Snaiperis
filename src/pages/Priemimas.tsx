import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Phone, 
  Flame, 
  CheckCircle2,
  Calendar,
  X
} from 'lucide-react';
import { locations } from '../data/locations';
import { coaches } from '../data/coaches';

interface PriemimasProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const Priemimas: React.FC<PriemimasProps> = ({ onOpenRegister }) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Visi');
  const [selectedYear, setSelectedYear] = useState<string>('Visi');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allGyms = locations.flatMap(d => d.gyms.map(g => ({ ...g, district: d.district })));

  const filteredGyms = allGyms.filter(g => {
    const matchesDistrict = selectedDistrict === 'Visi' || g.district === selectedDistrict;
    const matchesYear = selectedYear === 'Visi' || g.years.includes(selectedYear);
    const matchesQuery = !searchQuery || 
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      g.address.toLowerCase().includes(searchQuery.toLowerCase()) || 
      g.coach.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesYear && matchesQuery;
  });

  const birthYears = ['Visi', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
  const districts = ['Visi', ...locations.map(d => d.district)];

  const hasActiveFilters = selectedDistrict !== 'Visi' || selectedYear !== 'Visi' || searchQuery.length > 0;

  return (
    <div className="pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight max-w-3xl mx-auto">
          Treniruočių salės ir registracija
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Krepšinio treniruotės Kaune ir rajone vaikams nuo 4 iki 18 metų. Pirmoji bandomoji treniruotė – nemokama.
        </p>

        {/* Minimalist Trust Badges */}
        <div className="pt-2 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs font-medium text-slate-600">
          <span className="inline-flex items-center space-x-1.5 bg-slate-100/80 px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-snaiperis-red" />
            <span>Nemokama pirmoji treniruotė</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-slate-100/80 px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-snaiperis-red" />
            <span>NVŠ kompensacija (15–50 €/mėn.)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-slate-100/80 px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-snaiperis-red" />
            <span>Virš 15 sporto bazių Kaune</span>
          </span>
        </div>
      </section>

      {/* Streamlined Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Ieškoti salės, adreso ar trenerio..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Birth Year Select */}
            <div className="md:col-span-3">
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
              >
                {birthYears.map(y => (
                  <option key={y} value={y}>{y === 'Visi' ? 'Visi gimimo metai' : `${y} m. gimimas`}</option>
                ))}
              </select>
            </div>

            {/* District Select */}
            <div className="md:col-span-3">
              <select
                value={selectedDistrict}
                onChange={e => setSelectedDistrict(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
              >
                {districts.map(d => (
                  <option key={d} value={d}>{d === 'Visi' ? 'Visi mikrorajonai' : d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* District Pills Quick Filter */}
          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100">
            {districts.map(d => (
              <button
                key={d}
                onClick={() => setSelectedDistrict(d)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedDistrict === d
                    ? 'bg-snaiperis-red text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <div className="font-bold text-slate-400 uppercase tracking-wider">
            Rasta salių: <span className="text-slate-900">{filteredGyms.length}</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={() => {
                setSelectedDistrict('Visi');
                setSelectedYear('Visi');
                setSearchQuery('');
              }}
              className="font-semibold text-snaiperis-red hover:underline"
            >
              Išvalyti visus filtrus
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGyms.map((gym, idx) => {
            const matchedCoach = coaches.find(c => c.name.toLowerCase().includes(gym.coach.toLowerCase()));
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:border-snaiperis-red/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-snaiperis-red uppercase tracking-wider">
                      {gym.district}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {gym.years.join(', ')} m.
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {gym.name}
                    </h3>
                    <div className="flex items-start text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0 mt-0.5" />
                      <span>{gym.address}</span>
                    </div>
                  </div>

                  {/* Coach info */}
                  <div className="pt-3 border-t border-slate-100 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <img 
                        src={matchedCoach?.image || 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png'} 
                        alt={gym.coach} 
                        className="w-full h-full object-cover object-top" 
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{gym.coach}</div>
                      <a 
                        href={`tel:${gym.phone.replace(/\s+/g, '')}`} 
                        className="text-xs text-slate-600 hover:text-snaiperis-red flex items-center font-medium"
                      >
                        <Phone className="w-3 h-3 mr-1 text-snaiperis-red" />
                        <span>{gym.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenRegister(gym.name, gym.coach)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-snaiperis-red text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>Registruotis į šią salę</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* First Training Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Ką atsinešti į pirmąją bandomąją treniruotę?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-600">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">1. Sportinė apranga</span>
              Patogūs šortai ir marškinėliai
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">2. Sportiniai bateliai</span>
              Švari, salei skirta avalynė
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">3. Gertuvė</span>
              Vanduo atsigaivinimui
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">4. Gera nuotaika</span>
              Noras sportuoti ir tobulėti
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

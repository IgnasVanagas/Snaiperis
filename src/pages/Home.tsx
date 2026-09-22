import React, { useState } from 'react';
import { Link } from 'wouter';
import { 
  Trophy, 
  Users, 
  MapPin, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  Phone
} from 'lucide-react';
import { locations } from '../data/locations';
import { coaches, Coach } from '../data/coaches';
import { newsArticles } from '../data/news';
import { merchandise, Product } from '../data/merchandise';

interface HomeProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
  onSelectCoach: (coach: Coach) => void;
  onSelectProduct: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenRegister, onSelectCoach, onSelectProduct }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('Centras');

  const activeGyms = locations.find(d => d.district === selectedDistrict)?.gyms || [];
  const latestNews = newsArticles.slice(0, 3);
  const featuredCoaches = coaches.slice(0, 6);
  const featuredMerch = merchandise.slice(0, 4);

  return (
    <div className="space-y-0 text-slate-800">
      {/* 1. HERO SECTION — Bright, Spacious, Clean 2026 Editorial Athletic Aesthetic */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
        {/* Subtle Warm Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-snaiperis-red/[0.04] blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-8">
          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-slate-950 leading-[1.08] max-w-4xl mx-auto">
            Aukime kartu aikštelėje ir gyvenime
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Vaikų ir jaunimo krepšinio akademija Kaune nuo 2004 metų. 22 kvalifikuoti pedagogai, virš 15 sporto bazių ir oficialios MKL rinktinės.
          </p>

          {/* Clean Call-to-Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={() => onOpenRegister()}
              className="w-full sm:w-auto px-8 py-3.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
            >
              <Flame className="w-4 h-4 text-snaiperis-gold" />
              <span>Registruotis į nemokamą treniruotę</span>
            </button>

            <a
              href="#gym-finder"
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-full transition-colors border border-slate-200 flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4 text-snaiperis-red" />
              <span>Rasti artimiausią salę</span>
            </a>
          </div>

          {/* Inspiring Hero Visual Banner */}
          <div className="pt-6 max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9] sm:aspect-[21/9]">
              <img
                src="https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis.jpg"
                alt="KA Snaiperis čempionai ir auklėtiniai"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 w-full text-white text-left">
                  <div>
                    <div className="text-base sm:text-xl font-bold font-display">Čempionų dvasia, draugystė ir pagarba sportui</div>
                  </div>
                  <div className="text-xs bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full font-medium">
                    Kauno miestas ir rajonas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Metrics Strip */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900">20+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Metų patirtis</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-snaiperis-red">1000+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Auklėtinių Kaune</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900">22</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Treneriai pedagogai</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-snaiperis-red">15+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Sporto bazių Kaune</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PROGRAMS — Clean, Spacious 4-Column Layout */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
              Krepšinis kiekvienam amžiaus tarpsniui
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Kryptingas meistriškumo ir charakterio ugdymas nuo 4 iki 18 metų.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Program 1 */}
            <Link 
              href="/darzelinukai" 
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                  Darželinukai
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pirmieji krepšinio įgūdžiai, koordinacija ir linksmi judrieji žaidimai su žemesniais krepšiais 4–7 metų vaikams.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-snaiperis-red">
                <span>Plačiau apie programą</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Program 2 */}
            <Link 
              href="/cempionu-lyga" 
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                  Čempionų lyga
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Vidinis akademijos čempionatas U8–U11 moksleiviams, kur vaikai įgyja pirmosios oficialių varžybų patirties.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-snaiperis-red">
                <span>Tvarkaraštis ir taisyklės</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Program 3 */}
            <Link 
              href="/komandos" 
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                  MKL Rinktinės
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  10 reprezentacinių 2009–2017 m. komandų, besivaržančių Moksleivių krepšinio lygoje ir tarptautiniuose turnyruose.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-snaiperis-red">
                <span>Visos 10 rinktinių</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Program 4 */}
            <Link 
              href="/stovyklos" 
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors">
                  Vasaros stovyklos
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dieninė krepšinio stovykla Kaune bei išvažiuojamosios stovyklos su nakvyne gamtoje vasaros atostogų metu.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-snaiperis-red">
                <span>Pamainos ir rezervacija</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GYM FINDER — Sleek, Clean, Modern Directory */}
      <section id="gym-finder" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 tracking-tight">
                Treniruočių salės ir tvarkaraščiai
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Pasirinkite savo mikrorajoną ir raskite artimiausią krepšinio salę.
              </p>
            </div>
            <Link 
              href="/priemimas" 
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-snaiperis-red hover:text-snaiperis-red-700 transition-colors shrink-0"
            >
              <span>Visi 15+ salių tvarkaraščiai</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* District Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {locations.map(d => (
              <button
                key={d.district}
                onClick={() => setSelectedDistrict(d.district)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedDistrict === d.district
                    ? 'bg-snaiperis-red text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {d.district}
              </button>
            ))}
          </div>

          {/* Gym list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeGyms.map((gym, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:border-snaiperis-red/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">{gym.name}</h3>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-snaiperis-red">{selectedDistrict}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{gym.years.join(', ')} m.</span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                    <span className="truncate">{gym.address}</span>
                  </div>
                  <div className="text-xs text-slate-600 pt-1">
                    <span className="text-slate-400">Treneris:</span> <strong className="text-slate-800">{gym.coach}</strong>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`tel:${gym.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-semibold text-slate-600 hover:text-snaiperis-red flex items-center"
                  >
                    <Phone className="w-3 h-3 mr-1 text-snaiperis-red" />
                    <span>{gym.phone}</span>
                  </a>
                  <button
                    onClick={() => onOpenRegister(gym.name, gym.coach)}
                    className="px-4 py-1.5 bg-slate-900 hover:bg-snaiperis-red text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Registruotis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACADEMY VALUES — Clean 3 Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
              Kodėl tėveliai renkasi KA „Snaiperis“?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-8 rounded-3xl bg-slate-50/70 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Pritaikyta metodika</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mažiesiems naudojame žemesnius krepšius ir lengvesnius kamuolius, kad vaikas jaustų sėkmės džiaugsmą nuo pat pirmos treniruotės.
              </p>
            </div>

            <div className="space-y-3 p-8 rounded-3xl bg-slate-50/70 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Emocinis saugumas</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Akademijoje ugdome pagarbą varžovams, teisėjams ir komandos draugams. Rungtynėse skatiname pozityvų tėvelių palaikymą.
              </p>
            </div>

            <div className="space-y-3 p-8 rounded-3xl bg-slate-50/70 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">NVŠ kompensacija</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Akredituota neformalaus ugdymo įstaiga: savivaldybės krepšelis sumažina mėnesinį mokestį 15–50 € kiekvienam 1–12 klasių mokiniui.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COACHES SPOTLIGHT — Minimalist Clean Roster */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 tracking-tight">
                Mūsų treneriai
              </h2>
            </div>
            <Link 
              href="/treneriai" 
              className="text-xs font-bold text-snaiperis-red hover:text-snaiperis-red-700 flex items-center space-x-1"
            >
              <span>Visi 22 treneriai</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredCoaches.map(coach => (
              <div
                key={coach.id}
                onClick={() => onSelectCoach(coach)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-snaiperis-red/40 transition-all cursor-pointer group flex flex-col justify-between shadow-sm"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
                    }}
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-snaiperis-red transition-colors line-clamp-1">
                    {coach.name}
                  </h3>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{coach.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LATEST NEWS — Clean 3-Card Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 tracking-tight">
                Naujausi įvykiai ir rezultatai
              </h2>
            </div>
            <Link 
              href="/naujienos" 
              className="text-xs font-bold text-snaiperis-red hover:text-snaiperis-red-700 flex items-center space-x-1"
            >
              <span>Visos naujienos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {latestNews.map(news => (
              <Link 
                key={news.id} 
                href={`/naujienos/${news.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-snaiperis-red/40 hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <span className="absolute top-3 left-3 z-10 bg-snaiperis-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {news.category}
                  </span>
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                    }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-snaiperis-red transition-colors leading-snug line-clamp-2">
                      {news.title}
                    </h3>
                    <div className="text-[11px] text-slate-400 font-medium mt-1.5">{news.date}</div>
                  </div>
                  <div className="text-xs font-bold text-snaiperis-red flex items-center pt-2">
                    <span>Skaityti straipsnį</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MERCHANDISE STRIP */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 tracking-tight">
                Oficiali Snaiperio atributika
              </h2>
            </div>
            <Link
              href="/atributika"
              className="text-xs font-bold text-snaiperis-red hover:text-snaiperis-red-700 flex items-center space-x-1"
            >
              <span>Visi produktai</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {featuredMerch.map(item => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-snaiperis-red/40 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-50 p-4 flex items-center justify-center mb-3">
                  <img src={item.image} alt={item.name} className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1 group-hover:text-snaiperis-red transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-black text-snaiperis-red mt-1">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LUXURY CTA BANNER — Rounded Card Container */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="bg-[#0a0b0e] text-white rounded-3xl p-8 sm:p-14 text-center space-y-5 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
                Norite išbandyti krepšinį?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Pirmoji bandomoji treniruotė akademijoje yra visiškai nemokama. Ateikite, pabendraukite su treneriu ir pajuskite krepšinio džiaugsmą.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenRegister()}
                  className="px-8 py-3.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-xl active:scale-95 inline-flex items-center space-x-2"
                >
                  <Flame className="w-4 h-4 text-snaiperis-gold" />
                  <span>Registruotis nemokamai</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PARTNERS */}
      <section className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-6">
            Akademijos partneriai ir rėmėjai
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Kauno miesto savivaldybė</span>
            <span>•</span>
            <span>Moksleivių krepšinio lyga (MKL)</span>
            <span>•</span>
            <span>KKML</span>
            <span>•</span>
            <span>BaskEUball</span>
            <span>•</span>
            <span>Lietuvos krepšinio federacija</span>
          </div>
        </div>
      </section>
    </div>
  );
};

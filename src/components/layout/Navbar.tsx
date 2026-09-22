import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { 
  Phone, 
  Mail, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Trophy, 
  Users, 
  Sparkles, 
  Flame
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenRegister }) => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Single, Ultra-Clean Unified Modern Navbar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5' : 'bg-white/90 backdrop-blur-md border-b border-slate-100/80 py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Standalone Logo — enlarged, clean, no side text */}
          <Link href="/" className="flex items-center group py-0.5" title="Krepšinio Akademija Snaiperis">
            <img 
              src="/logo.png" 
              alt="Krepšinio Akademija Snaiperis" 
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3 font-medium text-sm text-slate-700">
            <Link 
              href="/priemimas" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-snaiperis-red hover:bg-slate-50 ${
                location.startsWith('/priemimas') ? 'text-snaiperis-red font-bold' : ''
              }`}
            >
              Priėmimas
            </Link>

            {/* Programos dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('programos')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl transition-colors hover:text-snaiperis-red hover:bg-slate-50 ${
                  location.startsWith('/darzelinukai') || location.startsWith('/cempionu-lyga') || location.startsWith('/komandos') || location.startsWith('/stovyklos')
                    ? 'text-snaiperis-red font-bold'
                    : ''
                }`}
              >
                <span>Programos</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'programos' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'programos' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1 animate-fade-in z-50">
                  <Link href="/darzelinukai" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Darželinukai (4–7 m.)</div>
                    <div className="text-[11px] text-slate-500">Pirmieji žingsniai krepšinyje</div>
                  </Link>
                  <Link href="/cempionu-lyga" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Čempionų lyga (U8–U11)</div>
                    <div className="text-[11px] text-slate-500">Vidinis akademijos čempionatas</div>
                  </Link>
                  <Link href="/komandos" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">MKL Rinktinės</div>
                    <div className="text-[11px] text-slate-500">Reprezentacinės komandos (10)</div>
                  </Link>
                  <Link href="/stovyklos" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Vasaros stovyklos</div>
                    <div className="text-[11px] text-slate-500">Dieninės ir išvažiuojamosios</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Akademija dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('akademija')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl transition-colors hover:text-snaiperis-red hover:bg-slate-50 ${
                  location.startsWith('/akademija') || location === '/istorija' || location === '/treneriai' || location === '/elgesio-taisykles' || location === '/garbes-aleja' || location === '/absolventai' || location === '/atributika'
                    ? 'text-snaiperis-red font-bold'
                    : ''
                }`}
              >
                <span>Akademija</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'akademija' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'akademija' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1 animate-fade-in z-50">
                  <Link href="/treneriai" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Trenerių komanda</div>
                    <div className="text-[11px] text-slate-500">22 pedagogai Kaune</div>
                  </Link>
                  <Link href="/istorija" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Istorija ir vertybės</div>
                    <div className="text-[11px] text-slate-500">Nuo 2004 m.</div>
                  </Link>
                  <Link href="/garbes-aleja" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Garbės alėja</div>
                    <div className="text-[11px] text-slate-500">Išskirtiniai pasiekimai</div>
                  </Link>
                  <Link href="/absolventai" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Absolventai</div>
                    <div className="text-[11px] text-slate-500">LKL ir rinktinių žaidėjai</div>
                  </Link>
                  <Link href="/elgesio-taisykles" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Elgesio taisyklės</div>
                    <div className="text-[11px] text-slate-500">Pagarba ir disciplina</div>
                  </Link>
                  <Link href="/atributika" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="text-xs font-bold text-slate-900 hover:text-snaiperis-red">Parduotuvė</div>
                    <div className="text-[11px] text-slate-500">Oficiali Snaiperio apranga</div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/naujienos" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-snaiperis-red hover:bg-slate-50 ${
                location.startsWith('/naujienos') ? 'text-snaiperis-red font-bold' : ''
              }`}
            >
              Naujienos
            </Link>

            <Link 
              href="/tevams" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-snaiperis-red hover:bg-slate-50 ${
                location.startsWith('/tevams') || location.startsWith('/mokejimu') || location.startsWith('/neformalaus') ? 'text-snaiperis-red font-bold' : ''
              }`}
            >
              Tėvams
            </Link>

            <Link 
              href="/kontaktai" 
              className={`px-3 py-2 rounded-xl transition-colors hover:text-snaiperis-red hover:bg-slate-50 ${
                location === '/kontaktai' ? 'text-snaiperis-red font-bold' : ''
              }`}
            >
              Kontaktai
            </Link>
          </div>

          {/* Right Action CTA & Search Button */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Ieškoti svetainėje (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenRegister}
              className="hidden sm:inline-flex items-center space-x-1.5 px-5 py-2.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-sm active:scale-95"
            >
              <Flame className="w-3.5 h-3.5 text-snaiperis-gold" />
              <span>Registruotis</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] z-50 bg-white border-t border-slate-100 p-6 overflow-y-auto animate-fade-in flex flex-col justify-between max-h-[calc(100vh-56px)]">
          <div className="space-y-4">
            <div className="pb-3 border-b border-slate-100">
              <button
                onClick={onOpenRegister}
                className="w-full py-3 bg-snaiperis-red text-white font-bold rounded-xl flex items-center justify-center space-x-2 text-xs uppercase tracking-wider"
              >
                <Flame className="w-4 h-4" />
                <span>Naujokų priėmimas 2026/2027</span>
              </button>
            </div>

            <div className="space-y-1 text-sm font-semibold text-slate-800">
              <Link href="/" className="block py-2.5 px-3 rounded-xl hover:bg-slate-50 hover:text-snaiperis-red">
                Titulinis
              </Link>
              <Link href="/priemimas" className="block py-2.5 px-3 rounded-xl hover:bg-slate-50 hover:text-snaiperis-red">
                Priėmimas & Salės
              </Link>

              {/* Akademija Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'akademija' ? null : 'akademija')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50"
                >
                  <span>Akademija</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'akademija' ? 'rotate-90 text-snaiperis-red' : ''}`} />
                </button>
                {mobileExpandedSection === 'akademija' && (
                  <div className="pl-6 space-y-1 text-xs text-slate-600 font-normal border-l-2 border-snaiperis-red/20 ml-4 my-1">
                    <Link href="/istorija" className="block py-1.5 hover:text-snaiperis-red">Istorija</Link>
                    <Link href="/treneriai" className="block py-1.5 hover:text-snaiperis-red">Treneriai (22)</Link>
                    <Link href="/elgesio-taisykles" className="block py-1.5 hover:text-snaiperis-red">Elgesio taisyklės</Link>
                    <Link href="/garbes-aleja" className="block py-1.5 hover:text-snaiperis-red">Garbės alėja</Link>
                    <Link href="/absolventai" className="block py-1.5 hover:text-snaiperis-red">Absolventai</Link>
                    <Link href="/atributika" className="block py-1.5 hover:text-snaiperis-red">Atributika</Link>
                  </div>
                )}
              </div>

              <Link href="/naujienos" className="block py-2.5 px-3 rounded-xl hover:bg-slate-50 hover:text-snaiperis-red">
                Naujienos
              </Link>
              {/* Programos Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'programos' ? null : 'programos')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50"
                >
                  <span>Programos</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'programos' ? 'rotate-90 text-snaiperis-red' : ''}`} />
                </button>
                {mobileExpandedSection === 'programos' && (
                  <div className="pl-6 space-y-1 text-xs text-slate-600 font-normal border-l-2 border-snaiperis-red/20 ml-4 my-1">
                    <Link href="/darzelinukai" className="block py-1.5 hover:text-snaiperis-red">Darželinukai (4–7 m.)</Link>
                    <Link href="/cempionu-lyga" className="block py-1.5 hover:text-snaiperis-red">Čempionų lyga (U8–U11)</Link>
                    <Link href="/komandos" className="block py-1.5 hover:text-snaiperis-red">MKL Rinktinės</Link>
                    <Link href="/stovyklos" className="block py-1.5 hover:text-snaiperis-red">Vasaros stovyklos</Link>
                  </div>
                )}
              </div>

              {/* Tėvams Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'tevams' ? null : 'tevams')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50"
                >
                  <span>Tėvams</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'tevams' ? 'rotate-90 text-snaiperis-red' : ''}`} />
                </button>
                {mobileExpandedSection === 'tevams' && (
                  <div className="pl-6 space-y-1 text-xs text-slate-600 font-normal border-l-2 border-snaiperis-red/20 ml-4 my-1">
                    <Link href="/tevams" className="block py-1.5 hover:text-snaiperis-red font-semibold">Tėvų portalas</Link>
                    <Link href="/mokejimu-informacija" className="block py-1.5 hover:text-snaiperis-red">Mokėjimų informacija & IBAN</Link>
                    <Link href="/neformalaus-ugdymo-krepselis" className="block py-1.5 hover:text-snaiperis-red">NVŠ krepšelis</Link>
                    <Link href="/rungtyniu-stebejimo-taisykles" className="block py-1.5 hover:text-snaiperis-red">Rungtynių stebėjimo taisyklės</Link>
                    <Link href="/gimtadieniai" className="block py-1.5 hover:text-snaiperis-red">Gimtadieniai aikštelėje</Link>
                  </div>
                )}
              </div>

              <Link href="/d-u-k" className="block py-2.5 px-3 rounded-xl hover:bg-slate-50 hover:text-snaiperis-red">
                D.U.K.
              </Link>
              <Link href="/parama" className="block py-2.5 px-3 rounded-xl hover:bg-slate-50 text-snaiperis-gold font-bold">
                1,2% GPM Parama
              </Link>
              <Link href="/kontaktai" className="block py-2.5 px-3 rounded-xl hover:bg-slate-50 hover:text-snaiperis-red">
                Kontaktai & Žemėlapis
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <div className="font-semibold text-slate-700">+370 672 46 656</div>
            <div>info@kasnaiperis.lt</div>
          </div>
        </div>
      )}
    </header>
  );
};

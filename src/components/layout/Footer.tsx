import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Flame } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  return (
    <footer className="bg-[#0a0b0e] text-slate-400 pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group" title="Krepšinio Akademija Snaiperis">
              <img 
                src="/logo.png" 
                alt="KA Snaiperis" 
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Vaikų ir jaunimo krepšinio akademija Kaune nuo 2004 metų. Profesionalios treniruotės, pagarba sportui ir bendruomeniškumas nuo 4 metų amžiaus.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-slate-400">
              <a href="https://www.facebook.com/kasnaiperis/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-snaiperis-red hover:text-white flex items-center justify-center transition-all" title="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/kasnaiperis/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-snaiperis-red hover:text-white flex items-center justify-center transition-all" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.youtube.com/user/SnaiperisTV" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-snaiperis-red hover:text-white flex items-center justify-center transition-all" title="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Akademija */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-snaiperis-red mr-2"></span>
              Akademija
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/istorija" className="hover:text-white transition-colors">Istorija</Link></li>
              <li><Link href="/treneriai" className="hover:text-white transition-colors">Treneriai (22)</Link></li>
              <li><Link href="/komandos" className="hover:text-white transition-colors">Rinktinės</Link></li>
              <li><Link href="/garbes-aleja" className="hover:text-white transition-colors">Garbės alėja</Link></li>
              <li><Link href="/absolventai" className="hover:text-white transition-colors">Absolventai</Link></li>
              <li><Link href="/elgesio-taisykles" className="hover:text-white transition-colors">Elgesio kodeksas</Link></li>
              <li><Link href="/atributika" className="hover:text-white transition-colors">Parduotuvė & Atributika</Link></li>
            </ul>
          </div>

          {/* Col 3: Programos */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-snaiperis-red mr-2"></span>
              Programos
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/priemimas" className="hover:text-white transition-colors font-semibold text-white">Priėmimas & Salės</Link></li>
              <li><Link href="/darzelinukai" className="hover:text-white transition-colors">Darželinukai (4–7 m.)</Link></li>
              <li><Link href="/cempionu-lyga" className="hover:text-white transition-colors">Čempionų lyga (U8–U11)</Link></li>
              <li><Link href="/stovyklos" className="hover:text-white transition-colors">Vasaros stovyklos</Link></li>
              <li><Link href="/renginiai/s-stonkus-cup" className="hover:text-white transition-colors">S. Stonkus Cup</Link></li>
              <li><Link href="/renginiai/igudziu-treniruotes" className="hover:text-white transition-colors">Įgūdžių treniruotės</Link></li>
              <li><Link href="/gimtadieniai" className="hover:text-white transition-colors">Gimtadieniai aikštelėje</Link></li>
            </ul>
          </div>

          {/* Col 4: Tėvams */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-snaiperis-red mr-2"></span>
              Tėvams
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/tevams" className="hover:text-white transition-colors">Tėvų portalas</Link></li>
              <li><Link href="/mokejimu-informacija" className="hover:text-white transition-colors">Mokėjimų informacija & IBAN</Link></li>
              <li><Link href="/neformalaus-ugdymo-krepselis" className="hover:text-white transition-colors">NVŠ krepšelis</Link></li>
              <li><Link href="/rungtyniu-stebejimo-taisykles" className="hover:text-white transition-colors">Rungtynių stebėjimo taisyklės</Link></li>
              <li><Link href="/d-u-k" className="hover:text-white transition-colors">D.U.K.</Link></li>
              <li><Link href="/karjera" className="hover:text-white transition-colors">Karjera</Link></li>
              <li><Link href="/parama" className="hover:text-white transition-colors text-snaiperis-gold font-bold">1,2% GPM Parama</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Krepšinio Akademija „Snaiperis“. Visos teisės saugomos.
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-snaiperis-red" />
              Kaunas
            </span>
            <a href="tel:+37067246656" className="hover:text-white transition-colors">
              +370 672 46 656
            </a>
            <a href="mailto:info@kasnaiperis.lt" className="hover:text-white transition-colors">
              info@kasnaiperis.lt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

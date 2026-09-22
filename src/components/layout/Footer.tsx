import React from 'react';
import { Link } from 'wouter';
import { ArrowUpRight, Camera, Mail, MapPin, Phone, Play } from 'lucide-react';

interface FooterProps { onOpenRegister: () => void; }
const footerGroups = [
  { title: 'Akademija', links: [['Istorija ir vertybės', '/istorija'], ['Mūsų treneriai', '/treneriai'], ['MKL rinktinės', '/komandos'], ['Garbės alėja', '/garbes-aleja'], ['Absolventai', '/absolventai'], ['Elgesio taisyklės', '/elgesio-taisykles'], ['Oficiali atributika', '/atributika'], ['Naujienos', '/naujienos'], ['Straipsniai', '/straipsniai']] },
  { title: 'Atraskite savo krepšinį', links: [['Treniruotės ir salės', '/priemimas'], ['Darželinukai · 4–7 m.', '/darzelinukai'], ['Čempionų lyga', '/cempionu-lyga'], ['Vasaros stovyklos', '/stovyklos'], ['S. Stonkus Cup', '/renginiai/s-stonkus-cup'], ['Įgūdžių treniruotės', '/renginiai/igudziu-treniruotes'], ['Gimtadieniai aikštelėje', '/gimtadieniai']] },
  { title: 'Naudinga tėvams', links: [['Informacija tėvams', '/tevams'], ['Mokėjimų informacija', '/mokejimu-informacija'], ['NVŠ kompensacija', '/neformalaus-ugdymo-krepselis'], ['Rungtynių stebėjimo taisyklės', '/rungtyniu-stebejimo-taisykles'], ['Klausimai ir atsakymai', '/d-u-k'], ['Karjera akademijoje', '/karjera'], ['Skirkite 1,2 % paramą', '/parama']] },
];
export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => <footer className="site-footer"><div className="site-container">
  <div className="footer-grid"><div className="footer-brand"><Link href="/" aria-label="Snaiperis – pradžia"><img src="/logo.png" alt="Krepšinio akademija Snaiperis" width="186" height="76" /></Link><p>Auginame krepšininkus ir asmenybes nuo 2004 metų. Vaikų ir jaunimo krepšinio akademija Kaune ir rajone.</p><div className="footer-socials"><a href="https://www.facebook.com/kasnaiperis/" aria-label="Facebook" target="_blank" rel="noreferrer"><span aria-hidden="true" className="text-base font-bold">f</span></a><a href="https://www.instagram.com/kasnaiperis/" aria-label="Instagram" target="_blank" rel="noreferrer"><Camera size={15} /></a><a href="https://www.youtube.com/user/SnaiperisTV" aria-label="YouTube" target="_blank" rel="noreferrer"><Play size={15} /></a></div></div>
    {footerGroups.map(group => <div key={group.title}><h3>{group.title}</h3><ul>{group.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>)}
  </div>
  <div className="footer-contact"><a href="tel:+37067246656"><Phone size={14} />+370 672 46 656</a><a href="mailto:info@kasnaiperis.lt"><Mail size={14} />info@kasnaiperis.lt</a><Link href="/kontaktai"><MapPin size={14} />Kaunas, Lietuva <ArrowUpRight size={13} /></Link></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} Krepšinio akademija „Snaiperis“. Visos teisės saugomos.</span><button onClick={onOpenRegister} className="text-link">Jūsų pirmoji treniruotė <ArrowUpRight size={13} /></button></div>
</div></footer>;



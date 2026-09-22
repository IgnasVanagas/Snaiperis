import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, ChevronDown, Menu, Phone, Search, X } from 'lucide-react';

interface NavbarProps { onOpenSearch: () => void; onOpenRegister: () => void; }
const groups = [
  { label: 'Programos', links: [['Darželinukai · 4–7 m.', '/darzelinukai'], ['Čempionų lyga · U8–U11', '/cempionu-lyga'], ['MKL rinktinės', '/komandos'], ['Vasaros stovyklos', '/stovyklos'], ['Renginiai ir turnyrai', '/renginiai']] },
  { label: 'Akademija', links: [['Mūsų treneriai', '/treneriai'], ['Istorija ir vertybės', '/istorija'], ['Garbės alėja', '/garbes-aleja'], ['Absolventai', '/absolventai'], ['Elgesio taisyklės', '/elgesio-taisykles'], ['Oficiali atributika', '/atributika']] },
  { label: 'Tėvams', links: [['Informacija tėvams', '/tevams'], ['Mokėjimų informacija', '/mokejimu-informacija'], ['NVŠ krepšelis', '/neformalaus-ugdymo-krepselis'], ['Rungtynių stebėjimo taisyklės', '/rungtyniu-stebejimo-taisykles'], ['Gimtadieniai aikštelėje', '/gimtadieniai'], ['Dažniausi klausimai', '/d-u-k']] },
];
export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenRegister }) => {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setMobileOpen(false); setActiveGroup(null); }, [location]);
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMobileOpen(false); setActiveGroup(null); }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); onOpenSearch(); }
    };
    const outside = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) setActiveGroup(null); };
    document.addEventListener('keydown', keydown); document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', keydown); document.removeEventListener('pointerdown', outside); };
  }, [onOpenSearch]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow; document.body.style.overflow = 'hidden';
    const onResize = () => { if (window.innerWidth >= 1100) setMobileOpen(false); };
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a[href],button,summary') || []).filter(el => el.getClientRects().length > 0);
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener('resize', onResize); document.addEventListener('keydown', trapFocus);
    return () => { document.body.style.overflow = previous; window.removeEventListener('resize', onResize); document.removeEventListener('keydown', trapFocus); menuButtonRef.current?.focus(); };
  }, [mobileOpen]);
  const register = () => { setMobileOpen(false); onOpenRegister(); };
  return <header className="site-header" ref={headerRef}>
    <a className="skip-link" href="#main-content">Pereiti prie turinio</a>
    <nav className="site-container nav-bar" aria-label="Pagrindinis meniu">
      <Link href="/" className="brand-link" aria-label="Snaiperis – pradžia"><img src="/logo.png" alt="Krepšinio akademija Snaiperis" width="186" height="76" /></Link>
      <div className="desktop-nav"><Link className="nav-link" href="/priemimas" aria-current={location === '/priemimas' ? 'page' : undefined}>Treniruotės</Link>
        {groups.slice(0, 2).map(group => <div className="nav-group" key={group.label} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setActiveGroup(null); }}><button className="nav-link" aria-expanded={activeGroup === group.label} aria-controls={`nav-${group.label}`} onClick={() => setActiveGroup(activeGroup === group.label ? null : group.label)}>{group.label}<ChevronDown size={12} /></button>{activeGroup === group.label && <div className="nav-dropdown" id={`nav-${group.label}`}>{group.links.map(([label, href]) => <Link key={href} href={href} onClick={() => setActiveGroup(null)}>{label}<ArrowUpRight size={14} /></Link>)}</div>}</div>)}
        <Link className="nav-link" href="/naujienos" aria-current={location === '/naujienos' ? 'page' : undefined}>Naujienos</Link><Link className="nav-link" href="/tevams" aria-current={location === '/tevams' ? 'page' : undefined}>Tėvams</Link><Link className="nav-link" href="/kontaktai" aria-current={location === '/kontaktai' ? 'page' : undefined}>Kontaktai</Link>
      </div>
      <div className="nav-actions"><button className="icon-button nav-search" onClick={() => { setMobileOpen(false); onOpenSearch(); }} aria-label="Ieškoti svetainėje" title="Ieškoti (Ctrl+K)"><Search size={18} /></button><button onClick={register} className="button-primary nav-cta">Nemokama treniruotė <ArrowUpRight size={16} /></button><button ref={menuButtonRef} className="icon-button mobile-toggle" aria-label={mobileOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
    </nav>
    {mobileOpen && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobilusis meniu"><button className="mobile-search" onClick={() => { setMobileOpen(false); onOpenSearch(); }}><Search size={17} /> Ieškoti svetainėje</button><Link href="/" onClick={() => setMobileOpen(false)}>Pradžia</Link><Link href="/priemimas">Treniruotės ir salės</Link>{groups.map(group => <details key={group.label}><summary>{group.label}<ChevronDown size={16} /></summary><div>{group.links.map(([label, href]) => <Link href={href} key={href} onClick={() => setMobileOpen(false)}>{label}</Link>)}</div></details>)}<Link href="/naujienos">Naujienos</Link><Link href="/parama">1,2 % parama</Link><Link href="/kontaktai">Kontaktai</Link><button onClick={register} className="button-primary">Išbandyti nemokamai <ArrowUpRight size={17} /></button><a className="mobile-phone" href="tel:+37067246656"><Phone size={16} /> +370 672 46 656</a></nav>}
  </header>;
};


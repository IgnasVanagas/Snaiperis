import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Trophy, FileText, ArrowRight, ArrowUpRight, ShieldCheck, Check, Phone } from 'lucide-react';
import { eventsData } from '../data/events';

interface CempionuLygaProps {
  onOpenRegister: () => void;
}

export const CempionuLyga: React.FC<CempionuLygaProps> = ({ onOpenRegister }) => {
  const [location, setLocation] = useLocation();

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
      timeframe: 'Pirmenybės vykdomos spalio – gegužės mėnesiais pagal nustatytą tvarkaraštį.',
      rules: '4 kėliniai po 8 minutes. Žemesni (2.60 m) krepšiai, 5 dydžio kamuoliai. Lygus žaidimo laikas visiems.',
      awards: '1–3 vietų komandoms – taurės ir medaliai. Kiekvienos komandos MVP žaidėjui – asmeninis prizas.'
    },
    u9: {
      birth: '2016 m. ir jaunesni berniukai',
      director: 'Pirmenybių vyr. teisėjas Edgaras Bartuševičius',
      timeframe: 'Pirmenybės vykdomos spalio – gegužės mėnesiais.',
      rules: '4 kėliniai po 8 minutes per visą aikštelę, skatinamas greitas kamuolio perdavimas ir aktyvi gynyba.',
      awards: 'Čempionato nugalėtojų taurė, sidabro ir bronzos medaliai, asmeniniai apdovanojimai simboliniam penketukui.'
    },
    u12: {
      birth: '2013–2015 m. gimimo berniukai (U11 / U12)',
      director: 'Pirmenybių vyr. teisėjas Edgaras Bartuševičius',
      timeframe: 'Pirmenybės vykdomos spalio – gegužės mėnesiais su finalinio ketverto kulminacija.',
      rules: 'Pilnos 5x5 FIBA / MKL taisyklės su standartiniais (3.05 m) krepšiais ir 6 arba 7 dydžio kamuoliais.',
      awards: 'Didžioji Čempionų Lygos taurė, čempionų medaliai, finalo MVP statulėlė ir rėmėjų dovanos.'
    }
  };

  const currentReg = regulations[selectedDiv];

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Vidinis akademijos čempionatas · U8–U12</span>
          <h1>Pirmoji komanda.<br /><span>Pirmosios pergalės.</span></h1>
          <p className="page-header-desc">
            {league.description}
          </p>
          <div className="hero-actions">
            <Link href="/cempionu-lyga/taisykles" className="button-primary">
              Oficialios taisyklės <ArrowUpRight size={17} />
            </Link>
            <button onClick={onOpenRegister} className="text-link">
              Registruotis į treniruotes <ArrowRight size={16} />
            </button>
          </div>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Dalyvauja visos akademijos salių komandos
            <span /> Lygus žaidimo laikas visiems vaikams
            <span /> Medaliai kiekvienam dalyviui
          </div>
        </div>
      </header>

      {/* Division Tabs & Regulations */}
      <section className="site-container pb-16">
        <div className="filter-tabs" style={{ marginBottom: '32px' }}>
          {league.divisions.map(d => (
            <button
              key={d.id}
              aria-pressed={selectedDiv === d.id}
              onClick={() => handleSelectDiv(d.id as any)}
              className="filter-tab"
              style={{ fontSize: '12px', padding: '10px 20px' }}
            >
              {d.name} ({d.age})
            </button>
          ))}
        </div>

        <div className="editorial-card" style={{ padding: '36px' }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[var(--line)]">
            <div>
              <span className="eyebrow"><span className="status-dot" /> Diviziono formatas</span>
              <h2 style={{ marginTop: '8px' }}>{currentDiv.name} · {currentDiv.age}</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>{currentDiv.format}</p>
            </div>
            <button onClick={onOpenRegister} className="button-primary">
              Registruotis į komandą <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="editorial-card-warm" style={{ padding: '20px' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Dalyvaujančios komandos</span>
              <div style={{ fontSize: '32px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, marginTop: '4px' }}>
                {currentDiv.teamsCount} <span style={{ fontSize: '14px', color: 'var(--muted)' }}>komandų</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>Iš visų akademijos sporto salių Kaune ir rajone</p>
            </div>

            <div className="editorial-card-warm" style={{ padding: '20px' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Apdovanojimai</span>
              <div style={{ fontSize: '32px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, marginTop: '4px', color: 'var(--red)' }}>
                100 % <span style={{ fontSize: '14px', color: 'var(--muted)' }}>medaliai</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>Kiekvienas dalyvis sezono pabaigoje apdovanojamas medaliu</p>
            </div>
          </div>

          {/* Regulations Grid */}
          <div style={{ marginTop: '28px', borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '18px' }}>Oficialūs nuostatai ir tvarka</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div>
                <span style={{ color: 'var(--muted)', display: 'block', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Dalyviai</span>
                <p style={{ fontWeight: 500, color: 'var(--ink)' }}>{currentReg.birth}</p>
              </div>
              <div>
                <span style={{ color: 'var(--muted)', display: 'block', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Vyriausiasis teisėjas</span>
                <p style={{ fontWeight: 500, color: 'var(--ink)' }}>{currentReg.director}</p>
              </div>
              <div className="md:col-span-2">
                <span style={{ color: 'var(--muted)', display: 'block', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Laikas ir tvarkaraštis</span>
                <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>{currentReg.timeframe}</p>
              </div>
              <div className="md:col-span-2">
                <span style={{ color: 'var(--muted)', display: 'block', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Taisyklės ir inventorius</span>
                <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>{currentReg.rules}</p>
              </div>
              <div className="md:col-span-2">
                <span style={{ color: 'var(--muted)', display: 'block', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Apdovanojimai</span>
                <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>{currentReg.awards}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="site-container pb-16">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Aikštelės jaudulys</span>
            <h2>Čempionų Lygos akimirkos.</h2>
          </div>
          <p>Pamatykite, kaip mūsų jaunieji krepšininkai kovoja, palaiko vieni kitus ir džiaugiasi pergalėmis.</p>
        </div>

        <div style={{ aspectRatio: '16/9', maxHeight: '520px', width: '100%', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line)', background: '#232a26' }}>
          <iframe 
            style={{ width: '100%', height: '100%', border: '0' }}
            src="https://www.youtube.com/embed/OnL1ypjS7pc" 
            title="KA Snaiperis Čempionų Lyga"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Prisijunkite prie lygos</span>
              <h2>Kiekvienas vaikas<br />gali žaisti krepšinį.</h2>
              <p>Visi KA „Snaiperis“ auklėtiniai turi galimybę atstovauti savo salės komandai Čempionų Lygoje.</p>
            </div>
            <div className="closing-actions">
              <button onClick={onOpenRegister} className="button-light">
                Išbandyti nemokamai <ArrowUpRight size={18} />
              </button>
              <a href="tel:+37067246656">
                <Phone size={15} /> +370 672 46 656
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

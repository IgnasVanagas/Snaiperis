import React, { useState } from 'react';
import { Link } from 'wouter';
import { teams } from '../data/teams';
import { Users, MapPin, ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react';

interface KomandosProps {
  onOpenRegister: () => void;
}

export const Komandos: React.FC<KomandosProps> = ({ onOpenRegister }) => {
  const [selectedYear, setSelectedYear] = useState<string>('Visi');

  const years = ['Visi', '2013', '2012', '2011', '2010', '2009'];

  const filteredTeams = selectedYear === 'Visi' 
    ? teams 
    : teams.filter(t => t.year === selectedYear);

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> MKL ir KKML rinktinės · 2009–2017 m. kartos</span>
          <h1>Daugiau ryžto.<br /><span>Aukštesni tikslai.</span></h1>
          <p className="page-header-desc">
            10 reprezentacinių KA „Snaiperis“ komandų, kryptingas meistriškumo ugdymas ir varžybos stipriausiose Lietuvos bei tarptautinėse moksleivių krepšinio lygose.
          </p>
          <div className="hero-actions">
            <button onClick={onOpenRegister} className="button-primary">
              Registruotis į peržiūrą <ArrowUpRight size={17} />
            </button>
            <Link href="/priemimas" className="text-link">
              Rasti treniruočių salę <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Licencijuoti treneriai
            <span /> Moksleivių krepšinio lyga (MKL)
            <span /> Tarptautiniai turnyrai Europoje
          </div>
        </div>
      </header>

      {/* Generation Filter Tabs */}
      <section className="site-container pb-8">
        <div className="filter-tabs">
          {years.map(y => (
            <button
              key={y}
              aria-pressed={selectedYear === y}
              onClick={() => setSelectedYear(y)}
              className="filter-tab"
            >
              {y === 'Visi' ? 'Visos kartos' : `${y} m. karta`}
            </button>
          ))}
        </div>

        <div className="text-xs mt-6 mb-4" style={{ color: 'var(--muted)' }}>
          Rasta komandų: <strong style={{ color: 'var(--ink)' }}>{filteredTeams.length}</strong>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="site-container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map(team => (
            <Link
              key={team.id}
              href={`/komandos/${team.slug}`}
              className="news-card"
              style={{
                background: '#fff',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative', background: '#e7e8df' }}>
                <img 
                  src={team.image} 
                  alt={team.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .45s' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                  }}
                />
                <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '6px' }}>
                  <span className="tag-badge tag-badge-red">{team.year} m.</span>
                  <span className="tag-badge" style={{ background: '#202320eb', color: '#fff' }}>{team.division}</span>
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '20px', lineHeight: '1.3', marginBottom: '8px' }}>
                  {team.name}
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '18px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {team.description}
                </p>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: 'auto', display: 'grid', gap: '8px', fontSize: '11px', color: 'var(--muted)' }}>
                  <div className="flex items-center gap-2">
                    <Users size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
                    <span>Treneris: <strong style={{ color: 'var(--ink)' }}>{team.coach}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                    <span className="truncate">{team.hall}</span>
                  </div>
                </div>

                <span className="news-read" style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>
                  Sudėtis ir tvarkaraštis <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Atranka į komandas</span>
              <h2>Nori atstovauti<br />Snaiperio rinktinei?</h2>
              <p>Mūsų treneriai kviečia talentingus ir motyvuotus žaidėjus į peržiūras bei meistriškumo stovyklas.</p>
            </div>
            <div className="closing-actions">
              <button onClick={onOpenRegister} className="button-light">
                Užsiregistruoti <ArrowUpRight size={18} />
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

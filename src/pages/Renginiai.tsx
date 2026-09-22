import React from 'react';
import { useLocation } from 'wouter';
import { eventsData } from '../data/events';
import { Calendar, MapPin, ArrowUpRight, Check, Phone } from 'lucide-react';

interface RenginiaiProps {
  onOpenRegister: () => void;
}

export const Renginiai: React.FC<RenginiaiProps> = ({ onOpenRegister }) => {
  const [location] = useLocation();

  const activeEvent = eventsData.tournaments.find(e => 
    location.includes(e.id) || location.replace(/\/$/, '').endsWith(e.id)
  );

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Turnyrai ir stovyklos · Kaunas · Tarptautiniai renginiai</span>
          <h1>Akademijos renginiai ir<br /><span>krepšinio šventės.</span></h1>
          <p className="page-header-desc">
            Tarptautinis S. Stonkui atminti turnyras, individualių įgūdžių tobulinimo stovyklos ir šeimos sporto šventės, vienijančios visą bendruomenę.
          </p>
          <div className="hero-actions">
            <button onClick={onOpenRegister} className="button-primary">
              Registruotis į renginį <ArrowUpRight size={17} />
            </button>
          </div>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> FIBA licencijuoti teisėjai
            <span /> Komandos iš Lietuvos ir užsienio
            <span /> Apdovanojimai ir rėmėjų prizai
          </div>
        </div>
      </header>

      {/* Selected Event Spotlight */}
      {activeEvent && (
        <section className="site-container pb-16">
          <div className="editorial-card" style={{ padding: '36px' }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[var(--line)]">
              <div>
                <span className="eyebrow"><span className="status-dot" /> Pasirinktas renginys</span>
                <h2 style={{ marginTop: '8px' }}>{activeEvent.title}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="tag-badge tag-badge-red">{activeEvent.subtitle}</span>
                  <span className="tag-badge">{activeEvent.date}</span>
                </div>
              </div>
              <button onClick={onOpenRegister} className="button-primary">
                Dalyvauti renginyje <ArrowUpRight size={17} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 items-center">
              <div style={{ aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden', background: '#e7e8df' }}>
                <img 
                  src={activeEvent.image} 
                  alt={activeEvent.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                  }}
                />
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9' }}>
                  {activeEvent.description}
                </p>
                <div className="flex items-center gap-2 text-xs mt-4" style={{ color: 'var(--muted)' }}>
                  <MapPin size={15} style={{ color: 'var(--red)' }} />
                  <span>{activeEvent.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="site-container pb-20">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Tradicijos ir varžybos</span>
            <h2>{activeEvent ? 'Visi akademijos turnyrai' : 'Didieji akademijos renginiai'}</h2>
          </div>
          <p>Varžybų patirtis – svarbi žaidėjo tobulėjimo dalis, ugdanti charakterį ir komandinę dvasią.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventsData.tournaments.map(event => (
            <div
              key={event.id}
              className="editorial-card"
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#232a26' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                  }}
                />
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span className="tag-badge" style={{ background: '#202320eb', color: '#fff' }}>
                    <Calendar size={11} style={{ marginRight: '4px' }} />
                    {event.date}
                  </span>
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span className="tag-badge tag-badge-red" style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>
                  {event.subtitle}
                </span>
                <h3 style={{ fontSize: '20px', lineHeight: '1.3', marginBottom: '10px' }}>
                  {event.title}
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '18px' }}>
                  {event.description}
                </p>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '14px', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--muted)', marginBottom: '16px' }}>
                  <MapPin size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
                  <span className="truncate">{event.location}</span>
                </div>

                <button
                  onClick={onOpenRegister}
                  className="button-primary"
                  style={{ width: '100%', minHeight: '44px', padding: '10px 16px', fontSize: '11px' }}
                >
                  Dalyvauti renginyje <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Šeimos ir sporto šventė</span>
              <h2>Kviečiame dalyvauti<br />kartu su visa šeima.</h2>
              <p>Mūsų renginiai – tai ne tik krepšinis, bet ir bendruomenės susitikimas, džiaugsmas ir palaikymas.</p>
            </div>
            <div className="closing-actions">
              <button onClick={onOpenRegister} className="button-light">
                Susisiekti dėl renginių <ArrowUpRight size={18} />
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

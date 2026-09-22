import React from 'react';
import { useLocation } from 'wouter';
import { eventsData } from '../data/events';
import { Check, ArrowUpRight, Phone } from 'lucide-react';

interface StovyklosProps {
  onOpenRegister: () => void;
}

export const Stovyklos: React.FC<StovyklosProps> = ({ onOpenRegister }) => {
  const [location] = useLocation();

  const activeCamp = eventsData.camps.find(c => 
    location.includes(c.slug) || location.includes(c.id) || location.replace(/\/$/, '').endsWith(c.slug)
  );

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Vasaros atostogos · Dieninės ir su nakvyne</span>
          <h1>Aktyvi vasara.<br /><span>Tikra draugystė.</span></h1>
          <p className="page-header-desc">
            Dieninės krepšinio stovyklos Kauno mieste ir išvažiuojamosios stovyklos su nakvyne gamtoje. Krepšinis, nauji draugai, maudynės ir nepamirštamos patirtys.
          </p>
          <div className="hero-actions">
            <button onClick={onOpenRegister} className="button-primary">
              Rezervuoti vietą stovykloje <ArrowUpRight size={17} />
            </button>
          </div>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Dieninės ir išvažiuojamosios pamainos
            <span /> Maitinimas įskaičiuotas į kainą
            <span /> Oficiali stovyklos atributika dovanų
          </div>
        </div>
      </header>

      {/* Selected Camp Spotlight */}
      {activeCamp && (
        <section className="site-container pb-16">
          <div className="editorial-card" style={{ padding: '36px' }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[var(--line)]">
              <div>
                <span className="eyebrow"><span className="status-dot" /> Pasirinkta pamaina</span>
                <h2 style={{ marginTop: '8px' }}>{activeCamp.title}</h2>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <span className="tag-badge tag-badge-red">{activeCamp.target}</span>
                  <span className="tag-badge">{activeCamp.hours}</span>
                </div>
              </div>
              <div style={{ fontSize: '32px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: 'var(--red)' }}>
                {activeCamp.price}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 items-center">
              <div style={{ aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden', background: '#e7e8df' }}>
                <img 
                  src={activeCamp.image} 
                  alt={activeCamp.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                  }}
                />
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9' }}>
                  {activeCamp.description}
                </p>
                <div className="editorial-card-warm" style={{ padding: '20px', marginTop: '20px' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: '10px' }}>
                    Į kainą įskaičiuota:
                  </span>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {activeCamp.activities.map((act, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <button onClick={onOpenRegister} className="button-primary">
                    Rezervuoti vietą šioje stovykloje <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Two Camp Options */}
      <section className="site-container pb-20">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Vasaros programos</span>
            <h2>{activeCamp ? 'Visos akademijos stovyklos' : 'Pasirinkite stovyklos tipą'}</h2>
          </div>
          <p>Kiekvienam vaikui pagal amžių, patirtį ir šeimos planus – Kauno salėse arba su nakvyne gamtoje.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {eventsData.camps.map(camp => (
            <div
              key={camp.id}
              className="editorial-card"
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#232a26' }}>
                <img
                  src={camp.image}
                  alt={camp.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                  }}
                />
                <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px' }}>
                  <span className="tag-badge tag-badge-red">{camp.target}</span>
                  <span className="tag-badge" style={{ background: '#202320eb', color: '#fff' }}>{camp.hours}</span>
                </div>
              </div>

              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 style={{ fontSize: '24px', lineHeight: '1.25' }}>
                    {camp.title}
                  </h3>
                  <span style={{ fontSize: '24px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: 'var(--red)', whiteSpace: 'nowrap' }}>
                    {camp.price}
                  </span>
                </div>

                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.85', marginBlock: '14px 20px' }}>
                  {camp.description}
                </p>

                <div className="editorial-card-warm" style={{ padding: '20px', marginTop: 'auto', marginBottom: '24px' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: '10px' }}>
                    Į kainą įskaičiuota:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {camp.activities.map((act, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenRegister}
                  className="button-primary"
                  style={{ width: '100%' }}
                >
                  Rezervuoti vietą stovykloje <ArrowUpRight size={17} />
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
              <span className="eyebrow">Vietų skaičius ribotas</span>
              <h2>Planuokite vasarą<br />iš anksto kartu su mumis.</h2>
              <p>Stovyklų vietų skaičius grupėse yra ribotas, kad kiekvienas vaikas gautų individualų trenerių dėmesį.</p>
            </div>
            <div className="closing-actions">
              <button onClick={onOpenRegister} className="button-light">
                Rezervuoti vietą <ArrowUpRight size={18} />
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

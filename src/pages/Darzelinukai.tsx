import React from 'react';
import { Link, useLocation } from 'wouter';
import { eventsData } from '../data/events';
import { Check, ArrowUpRight, ArrowRight, Target, Zap, Heart, Phone } from 'lucide-react';

interface DarzelinukaiProps {
  onOpenRegister: () => void;
}

export const Darzelinukai: React.FC<DarzelinukaiProps> = ({ onOpenRegister }) => {
  const [location] = useLocation();

  const activeEvent = eventsData.kindergarten.find(k => 
    location.includes(k.slug) || location.includes(k.id) || location.replace(/\/$/, '').endsWith(k.slug)
  );

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Programa · 4–7 metų vaikams</span>
          <h1>Maži žingsniai.<br /><span>Dideli atradimai.</span></h1>
          <p className="page-header-desc">
            Pirmieji krepšinio įgūdžiai, judrieji žaidimai, koordinacija ir džiaugsmas judėti. Mažesni kamuoliai, žemesni krepšiai ir pozityvi, padrąsinanti aplinka.
          </p>
          <div className="hero-actions">
            <button className="button-primary" onClick={onOpenRegister}>
              Registruoti darželinuką <ArrowUpRight size={18} />
            </button>
            <Link href="/priemimas" className="text-link">
              Rasti salę arčiau namų <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Pirmoji treniruotė nemokama
            <span /> Pritaikyti 3–5 dydžio kamuoliai
          </div>
        </div>
      </header>

      {/* Program Pillars */}
      <section className="site-container pb-16">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Mūsų metodika</span>
            <h2>Kodėl darželinukai<br />mėgsta Snaiperį?</h2>
          </div>
          <p>Treniruotes kuriame pagal vaiko raidą ir poreikius – per džiaugsmą, saugumą ir sėkmės patirtį.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="editorial-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: '#eeeee7', display: 'grid', placeItems: 'center', color: 'var(--red)', marginBottom: '18px' }}>
              <Target size={22} />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>01</span>
            <h3 style={{ fontSize: '19px', marginTop: '10px', marginBottom: '8px' }}>Pritaikyta įranga</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8' }}>
              Žemesni krepšiai ir lengvesni 3–5 dydžio kamuoliai, kad vaikas lengvai pasiektų lanką ir patirtų sėkmės džiaugsmą nuo pirmos minutės.
            </p>
          </div>

          <div className="editorial-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: '#eeeee7', display: 'grid', placeItems: 'center', color: 'var(--red)', marginBottom: '18px' }}>
              <Zap size={22} />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>02</span>
            <h3 style={{ fontSize: '19px', marginTop: '10px', marginBottom: '8px' }}>Koordinacija ir vikrumas</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8' }}>
              Fizinio pasirengimo, pusiausvyros, bėgimo ir šuolio lavinimas per linksmus judriuosius žaidimus ir estafečių trasas.
            </p>
          </div>

          <div className="editorial-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: '#eeeee7', display: 'grid', placeItems: 'center', color: 'var(--red)', marginBottom: '18px' }}>
              <Heart size={22} />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>03</span>
            <h3 style={{ fontSize: '19px', marginTop: '10px', marginBottom: '8px' }}>Pozityvi atmosfera</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8' }}>
              Padrąsiname kiekvieną vaiką, mokome komandinio bendravimo, disciplinos ir nuoširdžios pagarbos draugams.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Kindergarten Event Spotlight */}
      {activeEvent && (
        <section className="site-container pb-16">
          <div className="editorial-card" style={{ padding: '36px' }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[var(--line)]">
              <div>
                <span className="eyebrow"><span className="status-dot" /> Tradicinis renginys</span>
                <h2 style={{ marginTop: '8px' }}>{activeEvent.title}</h2>
              </div>
              <button onClick={onOpenRegister} className="button-primary">
                Dalyvauti renginyje <ArrowUpRight size={17} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 items-center">
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', borderRadius: '4px', background: '#e7e8df' }}>
                <img 
                  src={activeEvent.image} 
                  alt={activeEvent.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/young-players.jpg';
                  }}
                />
              </div>
              <div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9' }}>
                  {activeEvent.description}
                </p>
                <div className="hero-reassurance" style={{ marginTop: '20px' }}>
                  <Check size={15} /> Skirta visiems akademijos darželinukams
                  <span /> Diplomai ir medaliai kiekvienam
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Kindergarten Events */}
      <section className="section-space" style={{ background: '#eeefe8', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="site-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Šventės ir turnyrai</span>
              <h2>Šventės mažiausiems<br />mūsų krepšininkams.</h2>
            </div>
            <p>Sezono metu organizuojame tris dideles krepšinio šventes, kuriose kiekvienas vaikas pasijunta čempionu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.kindergarten.map((k, idx) => (
              <article key={idx} className="news-card">
                <div className="news-image">
                  <img
                    src={k.image}
                    alt={k.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/young-players.jpg';
                    }}
                  />
                </div>
                <div className="news-meta">
                  <span>Tradicinė šventė</span>
                  <time>Sezonas 2026–2027</time>
                </div>
                <h3>{k.title}</h3>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '16px' }}>
                  {k.description}
                </p>
                <button onClick={onOpenRegister} className="text-link" style={{ marginTop: 'auto', textAlign: 'left' }}>
                  Sužinoti daugiau <ArrowUpRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Pirmas metimas – jūsų</span>
              <h2>Norite, kad darželinukas<br />išbandytų krepšinį?</h2>
              <p>Pirmoji treniruotė – nemokama. Ateikite susipažinti su treneriu, pajusti kamuolio ritmą ir atrasti savo komandą.</p>
            </div>
            <div className="closing-actions">
              <button onClick={onOpenRegister} className="button-light">
                Registruotis nemokamai <ArrowUpRight size={18} />
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

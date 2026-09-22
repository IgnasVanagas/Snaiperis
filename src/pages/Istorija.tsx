import React from 'react';
import { academyData } from '../data/academyData';
import { ArrowUpRight, Phone, Check } from 'lucide-react';
import { Link } from 'wouter';

export const Istorija: React.FC = () => {
  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Mūsų kelias · Kaunas · Nuo 2004 metų</span>
          <h1>Daugiau nei du dešimtmečiai<br /><span>meilės krepšiniui.</span></h1>
          <p className="page-header-desc">
            Nuo kelių entuziastingų trenerių ir pirmosios salės iki vienos didžiausių, labiausiai vertinamų ir moderniausių vaikų bei jaunimo krepšinio organizacijų Kaune.
          </p>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Įkurta 2004 m. Kaune
            <span /> Virš 1 000 auklėtinių kasmet
            <span /> RKL, NKL ir LKL žaidėjai
          </div>
        </div>
        <div className="site-container stats-strip" style={{ marginTop: '40px' }}>
          {[
            ['20+', 'metų auginame asmenybes'],
            ['1 000+', 'vaikų mūsų bendruomenėje'],
            ['22', 'treneriai ir pedagogai'],
            ['15+', 'sporto salių arčiau namų']
          ].map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}<span>.</span></strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Interactive Milestones Timeline */}
      <section className="site-container pb-20">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Svarbiausi etapai</span>
            <h2>Akademijos metraštis.</h2>
          </div>
          <p>Kiekvieni metai atneša naujų iššūkių, pergalių ir išaugina naują krepšinio mylėtojų kartą.</p>
        </div>

        <div style={{ position: 'relative', borderLeft: '1px solid var(--line)', paddingLeft: '32px', marginLeft: '16px', display: 'grid', gap: '32px' }}>
          {academyData.milestones.map((m, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              {/* Dot */}
              <div 
                style={{ 
                  position: 'absolute', 
                  left: '-37px', 
                  top: '16px', 
                  width: '9px', 
                  height: '9px', 
                  borderRadius: '50%', 
                  background: 'var(--red)', 
                  outline: '4px solid var(--paper)' 
                }} 
              />

              <div className="editorial-card" style={{ padding: '24px 28px' }}>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 style={{ fontSize: '18px', margin: 0 }}>
                    {m.title}
                  </h3>
                  <span className="tag-badge tag-badge-red" style={{ fontSize: '11px', padding: '4px 10px' }}>
                    {m.year}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8', margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Archive Video in Dark Editorial Card */}
      <section className="site-container pb-20">
        <div className="editorial-card-dark" style={{ padding: '48px 36px' }}>
          <div className="court-lines" aria-hidden="true" />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '680px', margin: '0 auto 32px' }}>
            <span className="eyebrow" style={{ color: '#ffdfd8', justifyContent: 'center' }}>Dokumentika</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', marginTop: '12px' }}>Kartu kurkime savo istoriją.</h2>
            <p style={{ color: '#ffe6df', fontSize: '13px', lineHeight: '1.9', marginTop: '12px' }}>
              Kiekviena karta, kiekviena treniruotė ir kiekviena pergalė įrašo naują puslapį į KA „Snaiperis“ metraštį.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1, aspectRatio: '16/9', maxWidth: '820px', margin: '0 auto', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}>
            <iframe 
              style={{ width: '100%', height: '100%', border: '0' }}
              src="https://www.youtube.com/embed/OnL1ypjS7pc" 
              title="KA Snaiperis Istorija"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Aukime kartu</span>
              <h2>Tapkite Snaiperio<br />istorijos dalimi.</h2>
              <p>Kviečiame vaikus ir jaunuolius prisijungti prie mūsų didelės krepšinio šeimos Kaune.</p>
            </div>
            <div className="closing-actions">
              <Link href="/priemimas" className="button-light">
                Rasti treniruočių salę <ArrowUpRight size={18} />
              </Link>
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

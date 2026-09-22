import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { academyData } from '../data/academyData';

interface GimtadieniaiProps {
  onOpenRegister: () => void;
}

export const Gimtadieniai: React.FC<GimtadieniaiProps> = () => {
  return (
    <div className="subpage">
      <div className="site-container" style={{ paddingTop: '124px', paddingBottom: '70px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link href="/tevams" className="text-link" style={{ fontSize: '12px' }}>
            <ArrowLeft size={16} /> Tėvų portalas
          </Link>
        </div>

        <header className="page-header" style={{ paddingTop: '0', marginBottom: '48px' }}>
          <div className="page-header-content">
            <span className="eyebrow"><span className="status-dot" /> Šventės aikštelėje · Aktyvu ir linksma</span>
            <h1>Krepšinio gimtadienis.<br /><span>Nepamirštama šventė vaikams.</span></h1>
            <p className="page-header-desc">
              Švęskite vaiko gimtadienį krepšinio aikštelėje su profesionaliu akademijos treneriu! Estafetės, metimų konkursai, draugiškos rungtynės ir diplomai visiems svečiams.
            </p>
            <div className="hero-reassurance" style={{ marginTop: '22px' }}>
              <Check size={15} /> Profesionalus treneris ir visa krepšinio įranga
              <span /> Galite atsinešti savo tortą ir vaišes
              <span /> Salės įvairiuose Kauno mikrorajonuose
            </div>
          </div>
        </header>

        <div className="space-y-8" style={{ maxWidth: '880px' }}>
          {/* 2 Birthday Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academyData.birthdays.map((pkg, idx) => (
              <div
                key={idx}
                className={idx === 1 ? 'editorial-card-dark' : 'editorial-card'}
                style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                {idx === 1 && <div className="court-lines" aria-hidden="true" />}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={idx === 1 ? 'tag-badge' : 'tag-badge tag-badge-red'} style={idx === 1 ? { background: 'rgba(255,255,255,0.15)', color: '#fff' } : {}}>
                      {pkg.duration}
                    </span>
                    {idx === 1 && (
                      <span className="tag-badge tag-badge-red">Populiariausias</span>
                    )}
                  </div>

                  <h2 style={{ fontSize: '24px', marginBlock: '8px 4px', color: idx === 1 ? '#fff' : 'var(--ink)' }}>
                    {pkg.title}
                  </h2>
                  <span style={{ fontSize: '12px', color: idx === 1 ? '#ffdfd8' : 'var(--muted)' }}>
                    {pkg.kids}
                  </span>

                  <div style={{ fontSize: '38px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, marginBlock: '16px 20px', color: idx === 1 ? '#fff' : 'var(--red)' }}>
                    {pkg.price}
                  </div>

                  <div style={{ borderTop: idx === 1 ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--line)', paddingTop: '18px', display: 'grid', gap: '10px' }}>
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm" style={{ color: idx === 1 ? '#ffe6df' : 'var(--muted)', lineHeight: '1.6' }}>
                        <Check size={15} style={{ color: 'var(--red)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ position: 'relative', zIndex: 1, marginTop: '28px' }}>
                  <a
                    href="tel:+37067246656"
                    className={idx === 1 ? 'button-light' : 'button-primary'}
                    style={{ width: '100%', minHeight: '48px', textDecoration: 'none' }}
                  >
                    <Phone size={15} /> Rezervuoti laiką
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Useful Notes */}
          <article className="editorial-card-warm" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>Svarbi informacija tėveliams:</h3>
            <div style={{ display: 'grid', gap: '8px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8' }}>
              <div>• Galite atsinešti savo tortą, užkandžius ir gaiviuosius gėrimus.</div>
              <div>• Visiems šventės dalyviams būtina turėti švarią sportinę salės avalynę.</div>
              <div>• Laikas ir konkreti salė derinami iš anksto pagal Jūsų pasirinktą datą.</div>
            </div>
          </article>
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Švęskime kartu</span>
              <h2>Turite klausimų<br />dėl gimtadienio šventės?</h2>
              <p>Paskambinkite ir suderinsime patogiausią laiką, salę bei trenerį.</p>
            </div>
            <div className="closing-actions">
              <a href="tel:+37067246656" className="button-light">
                <Phone size={15} /> +370 672 46 656
              </a>
              <Link href="/priemimas">
                Visos salės <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

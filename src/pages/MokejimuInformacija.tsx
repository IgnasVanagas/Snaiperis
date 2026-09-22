import React, { useState } from 'react';
import { Copy, Check, ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { academyData } from '../data/academyData';

export const MokejimuInformacija: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const p = academyData.payments;

  const copyIban = () => {
    navigator.clipboard.writeText(p.iban.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
            <span className="eyebrow"><span className="status-dot" /> Finansai ir rekvizitai · Mėnesiniai mokesčiai</span>
            <h1>Mokėjimų informacija.<br /><span>Aiškus ir patogus atsiskaitymas.</span></h1>
            <p className="page-header-desc">
              Kiekvieną mėnesį el. paštu gausite sąskaitą faktūrą už vaiko lankytas treniruotes. Sąskaitas prašome apmokėti iki paskutinės einamojo mėnesio dienos.
            </p>
          </div>
        </header>

        <div className="space-y-8" style={{ maxWidth: '880px' }}>
          {/* Bank Requisites Dark Card */}
          <div className="editorial-card-dark" style={{ padding: '36px' }}>
            <div className="court-lines" aria-hidden="true" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="eyebrow" style={{ color: '#ffdfd8' }}>Oficialūs rekvizitai</span>
                  <h2 style={{ fontSize: '22px', marginTop: '6px', color: '#fff' }}>{p.receiver}</h2>
                </div>
                <span className="tag-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px' }}>
                  {p.bank}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs" style={{ color: '#ffe6df' }}>
                <div>
                  <span style={{ color: '#d4dbd0', display: 'block', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '10px' }}>
                    Gavėjo pavadinimas:
                  </span>
                  <strong style={{ fontSize: '14px', color: '#fff' }}>{p.receiver}</strong>
                </div>
                <div>
                  <span style={{ color: '#d4dbd0', display: 'block', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '10px' }}>
                    Įmonės kodas:
                  </span>
                  <strong style={{ fontSize: '14px', color: '#fff', fontFamily: 'monospace' }}>{p.companyCode}</strong>
                </div>
              </div>

              {/* IBAN Copy Box */}
              <div style={{ background: 'rgba(255, 255, 255, 0.07)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '4px', padding: '20px', marginTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div>
                  <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', color: '#d4dbd0', display: 'block', marginBottom: '4px' }}>
                    Banko sąskaitos numeris (IBAN):
                  </span>
                  <div style={{ fontSize: '22px', fontFamily: 'monospace', fontWeight: 600, color: '#fff', letterSpacing: '.04em' }}>
                    {p.iban}
                  </div>
                </div>

                <button
                  onClick={copyIban}
                  className="button-light"
                  style={{ gap: '8px', minHeight: '42px', padding: '10px 18px', fontSize: '11px' }}
                >
                  {copied ? <Check size={15} style={{ color: 'var(--red)' }} /> : <Copy size={15} />}
                  <span>{copied ? 'IBAN nukopijuotas!' : 'Kopijuoti IBAN'}</span>
                </button>
              </div>

              {/* Payment Purpose Example */}
              <div style={{ marginTop: '20px', padding: '18px', background: 'rgba(20, 34, 24, 0.4)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', color: '#ffdfd8', display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                  Mokėjimo paskirties pavyzdys:
                </span>
                <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#fff', background: 'rgba(0,0,0,0.3)', padding: '10px 14px', borderRadius: '3px' }}>
                  {p.purposeExample}
                </div>
                <span style={{ fontSize: '11px', color: '#d4dbd0', display: 'block', marginTop: '8px', lineHeight: '1.6' }}>
                  * Nurodykite vaiko vardą, pavardę, salę ir sąskaitos numerį, kad mokėjimas būtų automatiškai susietas su Jūsų paskyra.
                </span>
              </div>
            </div>
          </div>

          {/* Terms & Rules */}
          <article className="editorial-card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Mokėjimo tvarka ir sąlygos</h2>
            <div style={{ display: 'grid', gap: '14px' }}>
              {p.terms.map((term, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                  <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600, flexShrink: 0, marginTop: '2px' }}>
                    0{i + 1}
                  </span>
                  <span>{term}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Pagalba tėveliams</span>
              <h2>Turite klausimų<br />dėl sąskaitos ar NVŠ?</h2>
              <p>Mūsų buhalterija ir administracija mielai atsakys į visus Jums kylančius klausimus.</p>
            </div>
            <div className="closing-actions">
              <a href="tel:+37067246656" className="button-light">
                <Phone size={15} /> +370 672 46 656
              </a>
              <a href="mailto:info@kasnaiperis.lt">
                info@kasnaiperis.lt
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

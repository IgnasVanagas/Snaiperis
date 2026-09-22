import React, { useState } from 'react';
import { Copy, Check, Gift, ArrowUpRight, Phone, ExternalLink } from 'lucide-react';
import { academyData } from '../data/academyData';
import { Link } from 'wouter';

export const Parama: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const support = academyData.supportGPM;

  const copyCode = () => {
    navigator.clipboard.writeText(support.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> 1,2 % GPM parama · Jums nekainuoja nieko</span>
          <h1>Skirkite 1,2 % GPM.<br /><span>Padėkite įsigyti Akademijos autobusą.</span></h1>
          <p className="page-header-desc">
            Kiekvienas dirbantis Lietuvos pilietis gali skirti 1,2 % nuo jau sumokėto pajamų mokesčio. Jums tai nieko nekainuoja, o akademijos vaikams padeda saugiai ir patogiai keliauti į MKL bei tarptautines rungtynes.
          </p>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Pateikiama internetu per kelias minutes
            <span /> Terminas iki {support.deadline}
            <span /> Dovana kiekvienam paramos davėjui
          </div>
        </div>
      </header>

      {/* Main Bus Goal Highlight Card */}
      <section className="site-container pb-16">
        <div className="editorial-card-dark" style={{ padding: '42px 36px', maxWidth: '880px' }}>
          <div className="court-lines" aria-hidden="true" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow" style={{ color: '#ffdfd8' }}>Didysis tikslas</span>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 34px)', marginTop: '8px', color: '#fff' }}>
              Padėkite mums įsigyti Akademijos autobusą
            </h2>
            <p style={{ color: '#ffe6df', fontSize: '14px', lineHeight: '1.9', marginTop: '12px', maxWidth: '680px' }}>
              {support.purpose}
            </p>

            <div style={{ background: 'rgba(255, 255, 255, 0.07)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '4px', padding: '24px', marginTop: '28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.06em', color: '#d4dbd0', display: 'block', marginBottom: '4px' }}>
                  Gavėjo identifikacinis numeris (kodas):
                </span>
                <div style={{ fontSize: '32px', fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: '.02em', color: '#fff' }}>
                  {support.code}
                </div>
                <span style={{ fontSize: '12px', color: '#b3bcb0', display: 'block', marginTop: '2px' }}>
                  Paskirtis: <strong>{support.title}</strong>
                </span>
              </div>

              <button
                onClick={copyCode}
                className="button-light"
                style={{ gap: '10px', minHeight: '46px', padding: '12px 20px', fontSize: '12px' }}
              >
                {copied ? <Check size={16} style={{ color: 'var(--red)' }} /> : <Copy size={16} />}
                <span>{copied ? 'Kodas nukopijuotas!' : `Kopijuoti kodą (${support.code})`}</span>
              </button>
            </div>

            <div style={{ marginTop: '16px', fontSize: '11px', color: '#b3bcb0' }}>
              * Prašymą skirti paramą per Elektroninio deklaravimo sistemą (EDS) galima pateikti iki <strong>{support.deadline}</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* Supporter Gifts */}
      <section className="site-container pb-16">
        <div style={{ maxWidth: '880px' }}>
          <div className="editorial-card" style={{ padding: '32px' }}>
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[var(--line)]">
              <div style={{ width: '46px', height: '46px', borderRadius: '4px', background: '#eeeee7', display: 'grid', placeItems: 'center', color: 'var(--red)', flexShrink: 0 }}>
                <Gift size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: '20px', margin: 0 }}>Dovana kiekvienam rėmėjui!</h2>
                <span style={{ fontSize: '12px', color: 'var(--red)', fontWeight: 600 }}>Akademijos atributika dovanų</span>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.9', margin: 0 }}>
              Visiems tėveliams ir draugams, skyrusiems 1,2 % paramą KA „Snaiperis“, dovanojame oficialią akademijos atributiką – sirgalių marškinėlius, „Snapback“ kepuraitę arba suvenyrą. Pateikite EDS paraiškos patvirtinimo kopiją savo grupės treneriui ir atsiimkite dovaną.
            </p>
          </div>
        </div>
      </section>

      {/* EDS Video Guide */}
      <section className="site-container pb-20">
        <div className="editorial-card" style={{ padding: '36px', maxWidth: '880px' }}>
          <div className="section-heading" style={{ marginBottom: '24px' }}>
            <div>
              <span className="eyebrow">Žingsnis po žingsnio</span>
              <h2 style={{ fontSize: '24px' }}>Kaip skirti 1,2 % per EDS?</h2>
            </div>
            <a 
              href="https://deklaravimas.vmi.lt" 
              target="_blank" 
              rel="noreferrer" 
              className="text-link"
            >
              Atidaryti VMI EDS <ExternalLink size={14} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            {[
              { num: '01', title: 'Prisijunkite prie EDS', desc: 'Apsilankykite deklaravimas.vmi.lt per el. bankininkystę.' },
              { num: '02', title: 'Pasirinkite formą FR0512', desc: 'Skiltyje „Pildyti formą“ pasirinkite „Prašymas skirti paramą“.' },
              { num: '03', title: 'Įrašykite kodą 300062828', desc: 'Gavėjo laukelyje nurodykite KA Snaiperis kodą 300062828.' },
              { num: '04', title: 'Pateikite prašymą', desc: 'Paspauskite „Pateikti deklaraciją“ ir parama bus įskaityta.' }
            ].map(step => (
              <div key={step.num} className="editorial-card-warm" style={{ padding: '18px' }}>
                <span style={{ fontSize: '13px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>{step.num}</span>
                <h4 style={{ fontSize: '14px', marginBlock: '8px 4px', fontWeight: 600 }}>{step.title}</h4>
                <p style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line)', background: '#232a26' }}>
            <iframe 
              style={{ width: '100%', height: '100%', border: '0' }}
              src="https://www.youtube.com/embed/OnL1ypjS7pc" 
              title="KA Snaiperis Parama"
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
              <span className="eyebrow">Ačiū už palaikymą</span>
              <h2>Kiekvienas indėlis<br />padeda mūsų vaikams augti.</h2>
              <p>Dėkojame visiems tėveliams, treneriams ir draugams, palaikantiems KA „Snaiperis“ bendruomenę.</p>
            </div>
            <div className="closing-actions">
              <a href="https://deklaravimas.vmi.lt" target="_blank" rel="noreferrer" className="button-light">
                Pildyti per EDS <ExternalLink size={16} />
              </a>
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

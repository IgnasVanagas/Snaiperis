import React from 'react';
import { ArrowLeft, GraduationCap, ArrowUpRight, Phone } from 'lucide-react';
import { Link } from 'wouter';

export const Absolventai: React.FC = () => {
  return (
    <div className="subpage">
      <div className="site-container" style={{ paddingTop: '124px', paddingBottom: '70px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link href="/" className="text-link" style={{ fontSize: '12px' }}>
            <ArrowLeft size={16} /> Pradžia
          </Link>
        </div>

        <header className="page-header" style={{ paddingTop: '0', marginBottom: '48px' }}>
          <div className="page-header-content">
            <span className="eyebrow"><span className="status-dot" /> Mūsų pasididžiavimas · Kartų tęstinumas</span>
            <h1>Akademijos absolventai.<br /><span>Asmenybės aikštelėje ir gyvenime.</span></h1>
            <p className="page-header-desc">
              Per daugiau nei du dešimtmečius akademiją baigė šimtai sportininkų, tapusių profesionaliais krepšininkais, treneriais, teisėjais bei sėkmingais savo sričių profesionalais.
            </p>
          </div>
        </header>

        {/* 2000 Generation Spotlight */}
        <div style={{ maxWidth: '880px', marginBottom: '48px' }}>
          <article className="editorial-card" style={{ padding: '36px' }}>
            <div className="flex items-center gap-4 pb-4 border-b border-[var(--line)]">
              <div style={{ width: '46px', height: '46px', borderRadius: '4px', background: '#eeeee7', display: 'grid', placeItems: 'center', color: 'var(--red)', flexShrink: 0 }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', margin: 0 }}>Gim. 2000 m. auklėtinių karta</h2>
                <span style={{ fontSize: '12px', color: 'var(--red)', fontWeight: 600 }}>Auksinė akademijos karta</span>
              </div>
            </div>

            <blockquote style={{ borderLeft: '2px solid var(--red)', paddingLeft: '20px', fontStyle: 'italic', color: 'var(--ink)', fontSize: '14px', lineHeight: '1.9', marginBlock: '20px' }}>
              „Džiaugiuosi ir didžiuojuosi, kad man teko garbė ir galimybė dirbti su šia puikia karta (gim. 2000 m.). Mums pavyko įgyvendinti visus užsibrėžtus tikslus, pavyko mums išlikti stipriai kaip komandai, taip pat atlaikėme įvairius sunkumus ir iškovojome skambių pergalių tiek Lietuvoje, tiek užsienyje. Šie vaikinai įrodė, kad darbas ir charakteris nugali viską.“
            </blockquote>

            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8', margin: 0 }}>
              Dalis šios kartos žaidėjų sėkmingai tęsia krepšininko karjerą RKL, NKL ir LKL lygose, kiti baigė universitetus ir šiandien patys veda treniruotes jaunajai akademijos kartai.
            </p>
          </article>
        </div>

        {/* Alumni Paths Grid */}
        <div style={{ maxWidth: '880px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="editorial-card" style={{ padding: '24px' }}>
              <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>01</span>
              <h3 style={{ fontSize: '18px', marginTop: '10px', marginBottom: '8px' }}>Profesionalus krepšinis</h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>
                Žaidėjai Lietuvos krepšinio lygose (LKL, NKL, RKL) ir universitetų komandose JAV bei Europoje.
              </p>
            </div>

            <div className="editorial-card" style={{ padding: '24px' }}>
              <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>02</span>
              <h3 style={{ fontSize: '18px', marginTop: '10px', marginBottom: '8px' }}>Treneriai ir teisėjai</h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>
                Absolventai, pasirinkę sporto pedagogikos kelią ir dabar patys ugdantys būsimuosius čempionus.
              </p>
            </div>

            <div className="editorial-card" style={{ padding: '24px' }}>
              <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>03</span>
              <h3 style={{ fontSize: '18px', marginTop: '10px', marginBottom: '8px' }}>Lyderystė gyvenime</h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>
                Disciplina, atkaklumas ir komandinis darbas padeda siekti karjeros viršūnių versle, moksle ir technologijose.
              </p>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Aukime kartu</span>
              <h2>Kiekviena kelionė<br />prasideda nuo pirmo žingsnio.</h2>
              <p>Padėkite savo vaikui atrasti sporto džiaugsmą ir draugus visam gyvenimui.</p>
            </div>
            <div className="closing-actions">
              <Link href="/priemimas" className="button-light">
                Registruotis į treniruotę <ArrowUpRight size={18} />
              </Link>
              <a href="tel:+37067246656">
                <Phone size={15} /> +370 672 46 656
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

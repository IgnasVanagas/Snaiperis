import React from 'react';
import { ArrowLeft, Check, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { academyData } from '../data/academyData';

export const RungtyniuTaisykles: React.FC = () => {
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
            <span className="eyebrow"><span className="status-dot" /> Kultūra tribūnose · Pozityvus palaikymas</span>
            <h1>Rungtynių stebėjimo taisyklės.<br /><span>Aikštelėje svarbiausia – vaikai.</span></h1>
            <p className="page-header-desc">
              Mums svarbiausia – vaikų džiaugsmas, emocinis saugumas ir pagarbus elgesys aikštelėje bei tribūnose. Tėvelių pozityvus palaikymas formuoja pasitikėjimą savimi ir meilę krepšiniui.
            </p>
          </div>
        </header>

        <div className="space-y-8" style={{ maxWidth: '880px' }}>
          {/* Rules List */}
          <article className="editorial-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Tėvelių ir žiūrovų elgesio principai</h2>
            <div style={{ display: 'grid', gap: '16px' }}>
              {academyData.spectatorRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm" style={{ color: 'var(--muted)', lineHeight: '1.75' }}>
                  <span style={{ fontSize: '13px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600, flexShrink: 0, marginTop: '2px' }}>
                    0{idx + 1}
                  </span>
                  <span style={{ color: 'var(--ink)' }}>{rule}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Core Philosophy Dark Card */}
          <article className="editorial-card-dark" style={{ padding: '36px' }}>
            <div className="court-lines" aria-hidden="true" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="eyebrow" style={{ color: '#ffdfd8' }}>Snaiperio bendruomenės pagarba</span>
              <h2 style={{ fontSize: '24px', marginTop: '10px', color: '#fff' }}>
                Mes čia dėl vaikų, o ne dėl rezultato.
              </h2>
              <p style={{ fontSize: '14px', color: '#ffe6df', lineHeight: '1.9', marginTop: '14px' }}>
                Pergalės ateina ir praeina, o pasitikėjimas savimi, pagarba varžovui ir meilė sportui lieka visam gyvenimui. Palaikykime savo vaikus plojimais po kiekvieno epizodo – tiek po taiklaus metimo, tiek po drąsaus bandymo!
              </p>
            </div>
          </article>
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Kartu kuriame kultūrą</span>
              <h2>Palaikykime vieni kitus<br />kiekvienose rungtynėse.</h2>
              <p>Ačiū tėveliams, kurie savo šypsenomis ir palaikymu kuria geriausią atmosferą salėse.</p>
            </div>
            <div className="closing-actions">
              <Link href="/cempionu-lyga" className="button-light">
                Čempionų Lyga <ArrowUpRight size={18} />
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

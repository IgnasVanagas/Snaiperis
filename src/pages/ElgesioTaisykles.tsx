import React from 'react';
import { academyData } from '../data/academyData';
import { ArrowLeft, Check, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

export const ElgesioTaisykles: React.FC = () => {
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
            <span className="eyebrow"><span className="status-dot" /> Vertybės ir kultūra · Pagarba aikštelėje</span>
            <h1>Elgesio taisyklės.<br /><span>Pagarba. Atsakomybė. Vienybė.</span></h1>
            <p className="page-header-desc">
              KA „Snaiperis“ siekia ne tik ugdyti sportinį meistriškumą, bet ir formuoti brandžią, atsakingą bei mandagią asmenybę. Šių taisyklių laikymasis privalomas kiekvienam akademijos nariui.
            </p>
          </div>
        </header>

        <div className="space-y-6" style={{ maxWidth: '880px' }}>
          {academyData.conductRules.map((section, idx) => (
            <article key={idx} className="editorial-card" style={{ padding: '32px' }}>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--line)]">
                <span style={{ fontSize: '14px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                  0{idx + 1}
                </span>
                <h2 style={{ fontSize: '20px', margin: 0 }}>
                  {section.category}
                </h2>
              </div>

              <ul style={{ display: 'grid', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {section.rules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                    <Check size={16} style={{ color: 'var(--red)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Vertybės svarbiausia</span>
              <h2>Krepšinis – tai komanda,<br />o komanda – tai pasitikėjimas.</h2>
              <p>Mokomės palaikyti vieni kitus tiek po taiklaus metimo, tiek po klaidos.</p>
            </div>
            <div className="closing-actions">
              <Link href="/priemimas" className="button-light">
                Treniruočių salės <ArrowUpRight size={18} />
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

import React from 'react';
import { Link } from 'wouter';
import { ArrowUpRight, Phone, Mail, Check } from 'lucide-react';

const parentSections = [
  {
    number: '01',
    category: 'Finansai ir rekvizitai',
    title: 'Mokėjimų informacija & IBAN',
    description: 'Banko sąskaitos numeris (IBAN), mokėjimo paskirties pavyzdys, terminai, šeimos nuolaidos ir sąskaitų tvarka.',
    href: '/mokejimu-informacija'
  },
  {
    number: '02',
    category: 'Savivaldybės parama',
    title: 'Neformalaus ugdymo krepšelis (NVŠ)',
    description: '15–50 € mėnesinė savivaldybės kompensacija treniruotėms Kauno mieste ir rajone. Kaip pasinaudoti lengvata.',
    href: '/neformalaus-ugdymo-krepselis'
  },
  {
    number: '03',
    category: 'Kultūra ir vertybės',
    title: 'Rungtynių stebėjimo taisyklės',
    description: 'Tėvelių elgesio kultūra tribūnose – pozityvus vaikų palaikymas, pagarba teisėjams ir emocinis saugumas.',
    href: '/rungtyniu-stebejimo-taisykles'
  },
  {
    number: '04',
    category: 'Šventės aikštelėje',
    title: 'Krepšinio gimtadieniai',
    description: 'Nepamirštama krepšinio šventė su treneriu, estafetėmis, metimų konkursais ir dovanomis jubiliatui.',
    href: '/gimtadieniai'
  }
];

export const Tevams: React.FC = () => {
  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Tėvams ramiau · Viskas vienoje vietoje</span>
          <h1>Tėvų portalas.<br /><span>Svarbiausia informacija šeimai.</span></h1>
          <p className="page-header-desc">
            Visa aktuali informacija akademijos auklėtinių tėveliams – mokėjimų rekvizitai, NVŠ kompensacija, pagarbus rungtynių stebėjimas ir krepšinio šventės.
          </p>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Akredituotos NVŠ programos
            <span /> Nuolaidos broliams ir seserims
            <span /> Aiškus ir patogus atsiskaitymas
          </div>
        </div>
      </header>

      {/* 4 Cards Hub (Program-grid style) */}
      <section className="site-container pb-16">
        <div className="program-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {parentSections.map(section => (
            <Link key={section.number} href={section.href} className="program-card" style={{ padding: '36px' }}>
              <div className="program-meta">
                <span>{section.number}</span>
                <span>{section.category}</span>
              </div>
              <h3 style={{ fontSize: '24px', marginTop: '24px', marginBottom: '8px' }}>{section.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.85', marginBlock: '10px 24px' }}>
                {section.description}
              </p>
              <span className="program-link" style={{ paddingTop: '18px' }}>
                Atidaryti skiltį <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick contacts for parents */}
      <section className="site-container pb-20">
        <div className="editorial-card-warm" style={{ padding: '36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <span className="eyebrow"><span className="status-dot" /> Pagalba tėveliams</span>
            <h2 style={{ fontSize: '24px', marginTop: '8px' }}>Kilo klausimų dėl treniruočių ar mokesčių?</h2>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px' }}>
              Akademijos administracija pasiruošusi Jums atsakyti kiekvieną darbo dieną.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="tel:+37067246656" className="button-primary" style={{ gap: '10px', minHeight: '46px', padding: '12px 20px', fontSize: '12px' }}>
              <Phone size={15} /> +370 672 46 656
            </a>
            <a href="mailto:info@kasnaiperis.lt" className="filter-tab active flex items-center gap-2" style={{ textDecoration: 'none', padding: '12px 20px', fontSize: '12px' }}>
              <Mail size={15} /> info@kasnaiperis.lt
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Draugiška bendruomenė</span>
              <h2>Aukime kartu.<br />Aikštelėje ir gyvenime.</h2>
              <p>Dėkojame, kad patikite savo vaiko tobulėjimą ir krepšinio kelią KA „Snaiperis“ akademijai.</p>
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
        </div>
      </section>
    </div>
  );
};

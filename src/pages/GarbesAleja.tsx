import React from 'react';
import { Award, Trophy, ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';
import { Link } from 'wouter';

export const GarbesAleja: React.FC = () => {
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
            <span className="eyebrow"><span className="status-dot" /> Asmenybės ir įkvėpimas · Garbės lenta</span>
            <h1>Garbės alėja.<br /><span>Žmonės, kūrę Snaiperį.</span></h1>
            <p className="page-header-desc">
              Žmonės, savo darbu, talentu, aistra ir atsidavimu sukūrę KA „Snaiperis“ bendruomenę ir įkvėpę šimtus jaunųjų sportininkų siekti savo svajonių.
            </p>
          </div>
        </header>

        <div className="space-y-8" style={{ maxWidth: '880px' }}>
          {/* Story 1: Martynas Balevičius */}
          <article className="editorial-card" style={{ padding: '36px' }}>
            <div className="flex items-center gap-4 pb-4 border-b border-[var(--line)]">
              <div style={{ width: '46px', height: '46px', borderRadius: '4px', background: '#eeeee7', display: 'grid', placeItems: 'center', color: 'var(--red)', flexShrink: 0 }}>
                <Award size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: '22px', margin: 0 }}>Martynas Balevičius</h2>
                <span style={{ fontSize: '12px', color: 'var(--red)', fontWeight: 600 }}>Metraštininkas & Kūrėjas</span>
              </div>
            </div>

            <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9', paddingTop: '20px', display: 'grid', gap: '16px' }}>
              <p style={{ fontStyle: 'italic', borderLeft: '2px solid var(--red)', paddingLeft: '18px', color: 'var(--ink)' }}>
                „Pirmoji mano pažintis su Kauno Krepšinio Akademija „Snaiperis“ įvyko 2012–2013 metų sezone. Simboliška, jog naujų metų pradžią pažymėjęs video reportažas apie šventinį krepšinio turnyrą, atvertė ir naują lapą mano kūrybinėje veikloje. Tai buvo tik pirmasis vėliau sekusių gausybės video siužetų, atspindinčių akademijos augimą, vaikų šypsenas ir krepšinio aistrą.“
              </p>
              <p>
                „Buvimas šios organizacijos dalimi leido pamatyti, su kokia meile treneriai dirba su vaikais, kaip krepšinis tampa gyvenimo mokykla, formuojančia charakterį ir ištvermę.“
              </p>
            </div>
          </article>

          {/* Story 2: Europos čempionė Viltė Peleckytė */}
          <article className="editorial-card-dark" style={{ padding: '36px' }}>
            <div className="court-lines" aria-hidden="true" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                <div style={{ width: '46px', height: '46px', borderRadius: '4px', background: 'var(--red)', display: 'grid', placeItems: 'center', color: '#fff', flexShrink: 0 }}>
                  <Trophy size={24} />
                </div>
                <div>
                  <h2 style={{ fontSize: '22px', margin: 0, color: '#fff' }}>Viltė Peleckytė</h2>
                  <span style={{ fontSize: '12px', color: '#ffdfd8', fontWeight: 600 }}>Europos čempionė · Snaiperio auklėtinė</span>
                </div>
              </div>

              <div style={{ fontSize: '14px', color: '#ffe6df', lineHeight: '1.9', paddingTop: '20px' }}>
                <p>
                  Viltė Peleckytė savo krepšinio kelią pradėjo KA „Snaiperis“ salėse treniruodamasi kartu su berniukais. Čia įgytas kietas charakteris, greitis, sprendimų priėmimas ir metimo technika leido jai užkopti į pačią Europos krepšinio viršūnę ir tapti Lietuvos rinktinės lydere.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Ateities čempionai</span>
              <h2>Kiekviena didelė istorija<br />prasideda salėje.</h2>
              <p>Ateikite į pirmą treniruotę ir pradėkite savo krepšinio kelią KA „Snaiperis“ akademijoje.</p>
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
        </section>
      </div>
    </div>
  );
};

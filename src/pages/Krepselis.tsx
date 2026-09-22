import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, Phone, FileText } from 'lucide-react';
import { Link } from 'wouter';

export const Krepselis: React.FC = () => {
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
            <span className="eyebrow"><span className="status-dot" /> Savivaldybės parama · Kauno m. ir Kauno r.</span>
            <h1>Neformalaus ugdymo krepšelis.<br /><span>Kompensacija vaiko treniruotėms.</span></h1>
            <p className="page-header-desc">
              VšĮ Krepšinio Akademija „Snaiperis“ yra oficialiai akredituota neformalaus švietimo įstaiga. Kiekvienas bendrojo ugdymo moksleivis gali gauti 15–50 € mėnesinę savivaldybės kompensaciją.
            </p>
            <div className="hero-reassurance" style={{ marginTop: '22px' }}>
              <Check size={15} /> Akredituotos programos Kauno mieste ir rajone
              <span /> Automatinis sąskaitos sumažinimas
              <span /> Padidintas finansavimas vaikams su SUP
            </div>
          </div>
        </header>

        <div className="space-y-8" style={{ maxWidth: '880px' }}>
          {/* Subsidy Amount Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <article className="editorial-card" style={{ padding: '32px' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="tag-badge tag-badge-red">1–8 klasėms</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Kauno m. ir r.</span>
              </div>
              <div style={{ fontSize: '38px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: 'var(--ink)' }}>
                15 € <span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 400 }}>/ mėn.</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8', marginTop: '12px', borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
                Vaikams su specialiaisiais ugdymosi poreikiais (SUP) skiriama <strong>30 € / mėn.</strong> kompensacija.
              </p>
            </article>

            <article className="editorial-card" style={{ padding: '32px' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="tag-badge tag-badge-red">9–12 klasėms</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Kauno m. ir r.</span>
              </div>
              <div style={{ fontSize: '38px', fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: 'var(--ink)' }}>
                25 € <span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 400 }}>/ mėn.</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8', marginTop: '12px', borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
                Vaikams su specialiaisiais ugdymosi poreikiais (SUP) skiriama <strong>50 € / mėn.</strong> kompensacija.
              </p>
            </article>
          </div>

          {/* Svarbiausios taisyklės */}
          <article className="editorial-card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Svarbiausios NVŠ taisyklės</h2>
            <div style={{ display: 'grid', gap: '14px' }}>
              {[
                { title: 'Tik bendrojo ugdymo mokiniams:', desc: 'Krepšelio kompensacija taikoma moksleiviams, besimokantiems 1–12 klasėse.' },
                { title: 'Tik vienas būrelis:', desc: 'NVŠ lėšomis mokslo metais gali būti kompensuojamas tik vienas pasirinktas vaiko lankomas neformalus užsiėmimas.' },
                { title: 'Teritorinis galiojimas:', desc: 'Programos akredituotos ir galioja Kauno miesto bei Kauno rajono savivaldybėse deklaruotiems vaikams.' },
                { title: 'Automatinis sumažinimas:', desc: 'Savivaldybės registre patvirtinus sutartį, mėnesinė sąskaita Jums siunčiama jau su pritaikyta nuolaida.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                  <Check size={16} style={{ color: 'var(--red)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong style={{ color: 'var(--ink)' }}>{item.title}</strong> {item.desc}</span>
                </div>
              ))}
            </div>
          </article>

          {/* Contract Signing Box */}
          <article className="editorial-card-warm" style={{ padding: '28px' }}>
            <div className="flex items-center gap-3 mb-2">
              <FileText size={18} style={{ color: 'var(--red)' }} />
              <h3 style={{ fontSize: '17px', margin: 0 }}>Kaip pasirašyti NVŠ sutartį?</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8', margin: 0 }}>
              Sutartys pasirašomos mokslo metų pradžioje (rugsėjo–spalio mėn.) arba prisijungus prie treniruočių grupės. Sutartį galima pasirašyti el. parašu arba pateikti pasirašytą egzempliorių savo treneriui ar atsiųsti el. paštu <strong style={{ color: 'var(--ink)' }}>info@kasnaiperis.lt</strong>.
            </p>
          </article>
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Pagalba dėl sutarčių</span>
              <h2>Reikia pagalbos<br />sudarant NVŠ sutartį?</h2>
              <p>Mūsų administracija patikrins registrą ir padės sutvarkyti dokumentus.</p>
            </div>
            <div className="closing-actions">
              <a href="tel:+37067246656" className="button-light">
                <Phone size={15} /> +370 672 46 656
              </a>
              <Link href="/priemimas">
                Treniruočių salės <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

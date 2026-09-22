import React, { useState } from 'react';
import { Check, ArrowUpRight, Phone, Send, Mail } from 'lucide-react';
import { Link } from 'wouter';

export const Karjera: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subpage">
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Komanda ir augimas · Kviečiame trenerius</span>
          <h1>Karjera KA „Snaiperis“.<br /><span>Aukime kartu su komanda.</span></h1>
          <p className="page-header-desc">
            Esame veržli sporto organizacija Kaune. Mus vienija meilė krepšiniui, pagarba auklėtiniams ir noras tobulėti. Kviečiame prisijungti prie mūsų 22 pedagogų komandos.
          </p>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Konkurencingas atlygis ir socialinės garantijos
            <span /> Apmokami kvalifikacijos seminarai
            <span /> Draugiška ir palaikanti bendruomenė
          </div>
        </div>
      </header>

      {/* Benefits Grid */}
      <section className="site-container pb-16">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Kodėl Snaiperis?</span>
            <h2>Geros sąlygos dirbti<br />ir tobulėti kartu.</h2>
          </div>
          <p>Kuriame aplinką, kurioje kiekvienas treneris gali realizuoti savo idėjas ir siekti aukščiausių rezultatų.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="editorial-card" style={{ padding: '28px' }}>
            <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>01</span>
            <h3 style={{ fontSize: '19px', marginTop: '10px', marginBottom: '8px' }}>Mėgstamas darbas</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8' }}>
              Kiekvieną dieną būkite krepšinio aikštelėje, perduokite žinias ir ugdykite naujosios kartos čempionus.
            </p>
          </div>

          <div className="editorial-card" style={{ padding: '28px' }}>
            <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>02</span>
            <h3 style={{ fontSize: '19px', marginTop: '10px', marginBottom: '8px' }}>Kvalifikacijos kėlimas</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8' }}>
              Akademija apmoka trenerių seminarus, licencijų atnaujinimą bei tarptautines stažuotes Lietuvoje ir Europoje.
            </p>
          </div>

          <div className="editorial-card" style={{ padding: '28px' }}>
            <span style={{ fontSize: '12px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>03</span>
            <h3 style={{ fontSize: '19px', marginTop: '10px', marginBottom: '8px' }}>Draugiška bendruomenė</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.8' }}>
              22 trenerių ir administracijos kolektyvas, kuriame visada sulauksite pagalbos, patarimų ir nuoširdaus palaikymo.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="site-container pb-20">
        <div className="editorial-card" style={{ padding: '36px', maxWidth: '780px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 0' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}><span className="status-dot" /> Kandidatūra gauta</span>
              <h2 style={{ fontSize: '28px', marginTop: '14px' }}>Ačiū už Jūsų susidomėjimą!</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.8', maxWidth: '480px', margin: '14px auto 0' }}>
                Akademijos vadovybė peržiūrės pateiktą informaciją ir artimiausiu metu susisieks pokalbiui.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ paddingBottom: '20px', borderBottom: '1px solid var(--line)', marginBottom: '24px' }}>
                <span className="eyebrow"><span className="status-dot" /> Kandidato anketa</span>
                <h2 style={{ fontSize: '24px', marginTop: '8px' }}>Prisijunkite prie Snaiperio</h2>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
                  Užpildykite anketą arba atsiųskite savo CV el. paštu <strong style={{ color: 'var(--ink)' }}>info@kasnaiperis.lt</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                    Vardas, pavardė *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jūsų vardas ir pavardė"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '4px', padding: '12px 14px', fontSize: '13px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                    Telefono numeris *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+370 6..."
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '4px', padding: '12px 14px', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                  El. pašto adresas *
                </label>
                <input
                  type="email"
                  required
                  placeholder="vardas@pastas.lt"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '4px', padding: '12px 14px', fontSize: '13px' }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                  Trumpas patirties aprašymas ir motyvacija *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Papasakokite apie savo pedagoginę ar krepšinio patirtį ir kodėl norėtumėte dirbti su vaikais..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '4px', padding: '12px 14px', fontSize: '13px' }}
                />
              </div>

              <button
                type="submit"
                className="button-primary"
                style={{ width: '100%' }}
              >
                Siųsti kandidatūrą <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Turite klausimų?</span>
              <h2>Susisiekite tiesiogiai<br />su akademijos vadovu.</h2>
              <p>Mielai atsakysime į klausimus dėl darbo sąlygų, salių ir krūvio.</p>
            </div>
            <div className="closing-actions">
              <a href="tel:+37067246656" className="button-light">
                <Phone size={15} /> +370 672 46 656
              </a>
              <a href="mailto:info@kasnaiperis.lt">
                <Mail size={15} /> info@kasnaiperis.lt
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

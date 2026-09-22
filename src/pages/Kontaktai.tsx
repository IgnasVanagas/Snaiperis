import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, ArrowUpRight } from 'lucide-react';
import { academyData } from '../data/academyData';
import { Link } from 'wouter';

export const Kontaktai: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const c = academyData.contacts;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Visada šalia · Kaunas ir Kauno rajonas</span>
          <h1>Akademijos kontaktai.<br /><span>Esame pasirengę padėti.</span></h1>
          <p className="page-header-desc">
            Turite klausimų dėl treniruočių, registracijos, sporto salių ar bendradarbiavimo? Susisiekite tiesiogiai su akademijos vadovais arba parašykite žinutę.
          </p>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Greitas atsakymas darbo dienomis
            <span /> Tiesioginis ryšys su administracija
            <span /> Virš 15 sporto salių Kaune
          </div>
        </div>
      </header>

      {/* Leadership Team Grid */}
      <section className="site-container pb-16">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Vadovybė ir administracija</span>
            <h2>Tiesioginiai kontaktai</h2>
          </div>
          <p>Kreipkitės Jums patogiu būdu – telefonu arba el. paštu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Director */}
          <div className="editorial-card" style={{ padding: '28px' }}>
            <span style={{ fontSize: '11px', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>
              {c.director.role}
            </span>
            <h3 style={{ fontSize: '20px', marginBlock: '8px 18px' }}>
              {c.director.name}
            </h3>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'grid', gap: '10px', fontSize: '12px' }}>
              <a href={`tel:${c.director.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-link" style={{ fontSize: '12px' }}>
                <Phone size={14} style={{ color: 'var(--red)' }} />
                <span>{c.director.phone}</span>
              </a>
              <a href={`mailto:${c.director.email}`} className="flex items-center gap-2 hover:text-[var(--red)]" style={{ color: 'var(--muted)' }}>
                <Mail size={14} style={{ color: 'var(--red)' }} />
                <span>{c.director.email}</span>
              </a>
            </div>
          </div>

          {/* Deputy Edgaras */}
          <div className="editorial-card" style={{ padding: '28px' }}>
            <span style={{ fontSize: '11px', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>
              {c.deputy.role}
            </span>
            <h3 style={{ fontSize: '20px', marginBlock: '8px 18px' }}>
              {c.deputy.name}
            </h3>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'grid', gap: '10px', fontSize: '12px' }}>
              <a href={`tel:${c.deputy.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-link" style={{ fontSize: '12px' }}>
                <Phone size={14} style={{ color: 'var(--red)' }} />
                <span>{c.deputy.phone}</span>
              </a>
              <a href={`mailto:${c.deputy.email}`} className="flex items-center gap-2 hover:text-[var(--red)]" style={{ color: 'var(--muted)' }}>
                <Mail size={14} style={{ color: 'var(--red)' }} />
                <span>{c.deputy.email}</span>
              </a>
            </div>
          </div>

          {/* Admin Jovita */}
          <div className="editorial-card" style={{ padding: '28px' }}>
            <span style={{ fontSize: '11px', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>
              {c.admin.role}
            </span>
            <h3 style={{ fontSize: '20px', marginBlock: '8px 18px' }}>
              {c.admin.name}
            </h3>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', display: 'grid', gap: '10px', fontSize: '12px' }}>
              <a href={`tel:${c.admin.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-link" style={{ fontSize: '12px' }}>
                <Phone size={14} style={{ color: 'var(--red)' }} />
                <span>{c.admin.phone}</span>
              </a>
              <a href={`mailto:${c.admin.email}`} className="flex items-center gap-2 hover:text-[var(--red)]" style={{ color: 'var(--muted)' }}>
                <Mail size={14} style={{ color: 'var(--red)' }} />
                <span>{c.admin.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="site-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-6 editorial-card" style={{ padding: '36px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <span className="eyebrow" style={{ justifyContent: 'center' }}><span className="status-dot" /> Žinutė gauta</span>
                <h3 style={{ fontSize: '24px', marginTop: '12px' }}>Ačiū, Jūsų žinutė išsiųsta!</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
                  Atsakysime Jums artimiausiu metu nurodytu el. paštu arba telefonu.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--line)', marginBottom: '20px' }}>
                  <span className="eyebrow"><span className="status-dot" /> Parašykite mums</span>
                  <h3 style={{ fontSize: '22px', marginTop: '6px' }}>Turite klausimų?</h3>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                    Užpildykite trumpą formą ir mes su Jumis susisieksime.
                  </p>
                </div>

                <div style={{ marginBottom: '16px' }}>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                      El. paštas *
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

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                      Telefonas *
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

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>
                    Žinutė / Klausimas *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Jūsų klausimas apie treniruotes, salę ar priėmimą..."
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
                  Siųsti žinutę <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-6 editorial-card" style={{ padding: '0', overflow: 'hidden' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146747.88607147985!2d23.774981140939527!3d54.90045814526867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72270b1670f93%3A0x400d18c70e9dc40!2sKaunas!5e0!3m2!1sen!2slt!4v1710000000000!5m2!1sen!2slt" 
              style={{ width: '100%', height: '340px', border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kauno salių žemėlapis"
            />
            <div style={{ padding: '24px', background: '#fff' }}>
              <div className="flex items-center gap-2 mb-1" style={{ fontWeight: 600, fontSize: '14px' }}>
                <MapPin size={16} style={{ color: 'var(--red)', flexShrink: 0 }} />
                <span>Treniruotės visame Kaune ir Kauno rajone</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
                Centras, Šančiai, Šilainiai, Eiguliai, Gričiupis, Rokai, Vilijampolė, Žaliakalnis, Freda, Domeikava, Raudondvaris, Ežerėlis, Vilkija.
              </p>
              <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>
                <Link href="/priemimas" className="text-link" style={{ fontSize: '12px' }}>
                  Visos treniruočių salės ir adresai <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Prisijunkite prie komandos</span>
              <h2>Laukiame Jūsų<br />mūsų treniruotėse!</h2>
              <p>Ateikite į nemokamą bandomąją treniruotę ir pajuskite Snaiperio krepšinio dvasią.</p>
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
        </div>
      </section>
    </div>
  );
};

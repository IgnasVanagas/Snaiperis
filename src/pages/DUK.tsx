import React, { useState } from 'react';
import { faqList } from '../data/faq';
import { ChevronDown, Search, ArrowLeft, ArrowUpRight, Phone, Mail, X } from 'lucide-react';
import { Link } from 'wouter';

export const DUK: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = faqList.filter(f => 
    f.q.toLowerCase().includes(search.toLowerCase()) || 
    f.a.toLowerCase().includes(search.toLowerCase())
  );

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
            <span className="eyebrow"><span className="status-dot" /> Tėvams ramiau · Dažniausi klausimai ir atsakymai</span>
            <h1>Dažniausi klausimai.<br /><span>Viskas, ką verta žinoti.</span></h1>
            <p className="page-header-desc">
              Atsakymai į klausimus apie treniruočių pradžią, kainas, NVŠ krepšelį, sveikatos pažymas, sales ir aprangas.
            </p>

            <div className="search-wrapper" style={{ marginTop: '26px' }}>
              <Search size={16} />
              <input
                type="text"
                placeholder="Ieškoti klausimo ar atsakymo..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  aria-label="Valyti paiešką"
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* FAQ List using Home page native details/summary styles */}
        <div style={{ maxWidth: '880px', marginBottom: '54px' }}>
          <div className="faq-list">
            {filtered.map((faq, idx) => (
              <details key={idx} open={idx === 0 && !search}>
                <summary>
                  {faq.q}
                  <ChevronDown size={18} />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--muted)', fontSize: '14px' }}>
              Pagal užklausą „{search}“ klausimų nerasta. Susisiekite su mumis tiesiogiai!
            </div>
          )}
        </div>

        {/* Still have questions? Help Card */}
        <div style={{ maxWidth: '880px' }}>
          <div className="editorial-card-warm" style={{ padding: '36px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div>
              <span className="eyebrow"><span className="status-dot" /> Neradote atsakymo?</span>
              <h2 style={{ fontSize: '24px', marginTop: '8px' }}>Mielai atsakysime į Jūsų klausimą.</h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
                Susisiekite telefonu arba parašykite tiesiogiai administracijai.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="tel:+37067246656" className="button-primary" style={{ gap: '10px', minHeight: '46px', padding: '12px 20px', fontSize: '12px' }}>
                <Phone size={15} /> +370 672 46 656
              </a>
              <Link href="/kontaktai" className="filter-tab active flex items-center gap-2" style={{ textDecoration: 'none', padding: '12px 20px', fontSize: '12px' }}>
                <Mail size={15} /> Rašyti žinutę
              </Link>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <section className="closing-section" style={{ marginTop: '70px' }}>
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Pradėkime šiandien</span>
              <h2>Geriausias būdas sužinoti –<br />išbandyti treniruotę.</h2>
              <p>Pirmoji bandomoji treniruotė nieko nekainuoja ir niekuo neįpareigoja.</p>
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

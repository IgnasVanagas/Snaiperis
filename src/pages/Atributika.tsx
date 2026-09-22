import React, { useState } from 'react';
import { merchandise, Product } from '../data/merchandise';
import { Search, ArrowUpRight, Check, Phone, X } from 'lucide-react';

interface AtributikaProps {
  onSelectProduct: (product: Product) => void;
}

export const Atributika: React.FC<AtributikaProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Visos');
  const [search, setSearch] = useState<string>('');

  const categories = ['Visos', 'Apranga', 'Galvos apdangalai', 'Aksesuarai', 'Inventorius ir suvenyrai', 'Sirgaliams'];

  const filtered = merchandise.filter(m => {
    const matchesCat = selectedCategory === 'Visos' || m.category === selectedCategory;
    const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Savo komanda · Savo spalvos · Oficiali atributika</span>
          <h1>Snaiperis ir už aikštelės.<br /><span>Oficiali akademijos atributika.</span></h1>
          <p className="page-header-desc">
            Sportinės aprangos, džemperiai, „Snapback“ kepuraitės, kamuoliai ir sirgalių aksesuarai. Pasirinkite atributiką ir atstovaukite savo akademijai visur.
          </p>

          <div className="search-wrapper" style={{ marginTop: '26px' }}>
            <Search size={16} />
            <input
              type="text"
              placeholder="Ieškoti prekės..."
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

          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className="filter-tab"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Originali KA „Snaiperis“ kokybė
            <span /> Galimybė pasimatuoti akademijos biure
            <span /> Visi vaikiški ir suaugusiųjų dydžiai
          </div>
        </div>
      </header>

      {/* Merchandise Grid (Home style) */}
      <section className="site-container pb-20">
        <div className="text-xs mb-8" style={{ color: 'var(--muted)' }}>
          Rasta prekių: <strong style={{ color: 'var(--ink)' }}>{filtered.length}</strong>
        </div>

        <div className="merch-grid">
          {filtered.map(item => (
            <button 
              className="merch-card" 
              key={item.id} 
              onClick={() => onSelectProduct(item)}
              type="button"
            >
              <div className="merch-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span><ArrowUpRight size={18} /></span>
              </div>
              <div className="merch-caption">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Kaip įsigyti?</span>
              <h2>Atributiką galima atsiimti<br />akademijos biure arba salėje.</h2>
              <p>Paspauskite ant patikusios prekės, pasirinkite dydį ir pateikite užklausą – paruošime prekę atsiėmimui.</p>
            </div>
            <div className="closing-actions">
              <a href="tel:+37067246656" className="button-light">
                <Phone size={15} /> +370 672 46 656
              </a>
              <span style={{ fontSize: '11px', color: '#ffe6df' }}>
                info@kasnaiperis.lt
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

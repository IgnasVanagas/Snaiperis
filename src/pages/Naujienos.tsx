import React, { useState } from 'react';
import { Link } from 'wouter';
import { newsArticles } from '../data/news';
import { Search, ArrowUpRight, Check, Phone, X, ArrowLeft, ArrowRight } from 'lucide-react';

export const Naujienos: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Visos');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const categories = ['Visos', 'Akademija', 'Čempionatai', 'Darželinukai', 'Stovyklos', 'Treneriai', 'Priėmimas'];

  const filtered = newsArticles.filter(n => {
    const matchesCat = selectedCategory === 'Visos' || n.category === selectedCategory;
    const matchesSearch = !search || 
      n.title.toLowerCase().includes(search.toLowerCase()) || 
      n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const pagedArticles = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Gyvenimas akademijoje · Varžybos ir pasiekimai</span>
          <h1>Naujienos ir straipsniai.<br /><span>Mažos ir didelės mūsų pergalės.</span></h1>
          <p className="page-header-desc">
            Akademijos rungtynių apžvalgos, MKL turnyrų rezultatai, stovyklų akimirkos ir naudingi patarimai jauniesiems krepšininkams bei jų tėveliams.
          </p>

          <div className="search-wrapper" style={{ marginTop: '26px' }}>
            <Search size={16} />
            <input
              type="text"
              placeholder="Ieškoti naujienose..."
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
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
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className="filter-tab"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Operatyvūs rungtynių rezultatai
            <span /> Nuotraukų galerijos iš aikštelių
            <span /> Naudingi trenerių patarimai
          </div>
        </div>
      </header>

      {/* News Grid (Home style) */}
      <section className="site-container pb-20">
        <div className="text-xs mb-8" style={{ color: 'var(--muted)' }}>
          Rasta straipsnių: <strong style={{ color: 'var(--ink)' }}>{filtered.length}</strong>
        </div>

        <div className="news-grid">
          {pagedArticles.map(news => (
            <Link key={news.id} href={`/naujienos/${news.slug}`} className="news-card">
              <div className="news-image">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  loading="lazy" 
                  onError={e => { 
                    if (!e.currentTarget.src.endsWith('/images/academy-team.jpg')) {
                      e.currentTarget.src = '/images/academy-team.jpg'; 
                    }
                  }} 
                />
              </div>
              <div className="news-meta">
                <span>{news.category}</span>
                <time dateTime={news.date}>{news.date.split('-').join('.')}</time>
              </div>
              <h3>{news.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.75', marginBottom: '18px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {news.excerpt}
              </p>
              <span className="news-read">Skaityti istoriją <ArrowUpRight size={16} /></span>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 pt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="filter-tab flex items-center gap-2"
              style={{ opacity: currentPage === 1 ? 0.4 : 1 }}
            >
              <ArrowLeft size={14} /> Ankstesnis
            </button>
            <span style={{ fontSize: '12px', color: 'var(--muted)', paddingInline: '12px' }}>
              {currentPage} iš {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="filter-tab flex items-center gap-2"
              style={{ opacity: currentPage === totalPages ? 0.4 : 1 }}
            >
              Kitas <ArrowRight size={14} />
            </button>
          </div>
        )}
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Aukime kartu</span>
              <h2>Kiekviena rungtynių diena –<br />nauja mūsų istorija.</h2>
              <p>Prisijunkite prie akademijos bendruomenės ir sekite mūsų kelionę krepšinio aikštelėse.</p>
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

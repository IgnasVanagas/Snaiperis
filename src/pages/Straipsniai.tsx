import React from 'react';
import { Link } from 'wouter';
import { newsArticles } from '../data/news';
import { ArrowUpRight, Phone } from 'lucide-react';

export const Straipsniai: React.FC = () => {
  const featuredArticles = newsArticles.slice(0, 12);

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Žinios ir patirtis · Straipsniai ir reportažai</span>
          <h1>Straipsniai ir reportažai.<br /><span>Apie krepšinį ir tobulėjimą.</span></h1>
          <p className="page-header-desc">
            Patarimai apie jaunųjų krepšininkų tobulėjimą, fizinį pasirengimą, mitybą, emocinį saugumą ir varžybinę patirtį.
          </p>
        </div>
      </header>

      {/* Grid of Articles (Home style) */}
      <section className="site-container pb-20">
        <div className="news-grid">
          {featuredArticles.map(article => (
            <Link key={article.id} href={`/naujienos/${article.slug}`} className="news-card">
              <div className="news-image">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                  }}
                />
              </div>
              <div className="news-meta">
                <span>{article.category}</span>
                <time>{article.date.split('-').join('.')}</time>
              </div>
              <h3>{article.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.75', marginBottom: '18px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {article.excerpt}
              </p>
              <span className="news-read">Skaityti straipsnį <ArrowUpRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Pradėkite treniruotes</span>
              <h2>Kiekviena didelė kelionė<br />prasideda nuo pirmo metimo.</h2>
              <p>Kviečiame 4–18 m. vaikus ir jaunuolius į bandomąsias krepšinio treniruotes Kaune.</p>
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

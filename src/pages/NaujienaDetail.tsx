import React from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import { newsArticles } from '../data/news';
import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';

interface NaujienaDetailProps {
  onOpenRegister: () => void;
}

export const NaujienaDetail: React.FC<NaujienaDetailProps> = ({ onOpenRegister }) => {
  const [, paramsNews] = useRoute('/naujienos/:slug*');
  const [, paramsDate] = useRoute('/:year/:month/:day/:slug*');
  const [location] = useLocation();

  const rawSlug = (paramsNews as any)?.['slug*'] || (paramsNews as any)?.slug || (paramsDate as any)?.['slug*'] || (paramsDate as any)?.slug || location.split('/').filter(Boolean).pop();
  const slug = rawSlug ? decodeURIComponent(rawSlug.replace(/\/$/, '')) : '';

  const article = newsArticles.find(n => n.slug === slug) || newsArticles[0];

  const relatedArticles = newsArticles
    .filter(n => n.id !== article.id && (n.category === article.category || !article.category))
    .slice(0, 3);
  const fallbackArticles = newsArticles.filter(n => n.id !== article.id).slice(0, 3);
  const displayedRelated = relatedArticles.length > 0 ? relatedArticles : fallbackArticles;

  return (
    <div className="subpage">
      <div className="site-container" style={{ paddingTop: '124px', paddingBottom: '70px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link href="/naujienos" className="text-link" style={{ fontSize: '12px' }}>
            <ArrowLeft size={16} /> Visos naujienos
          </Link>
        </div>

        {/* Article Reader Card */}
        <article className="editorial-card" style={{ padding: '40px', maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <div className="news-meta" style={{ marginTop: 0, marginBottom: '14px' }}>
              <span className="tag-badge tag-badge-red">{article.category}</span>
              <time dateTime={article.date} style={{ color: 'var(--muted)', fontSize: '12px' }}>
                {article.date.split('-').join('.')}
              </time>
            </div>

            <h1 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.2', marginBlock: '10px 0' }}>
              {article.title}
            </h1>
          </div>

          <div style={{ aspectRatio: '16/10', maxHeight: '440px', width: '100%', borderRadius: '4px', overflow: 'hidden', background: '#e7e8df', marginBottom: '32px' }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
              }}
            />
          </div>

          <div 
            style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: '1.9' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="editorial-card-warm" style={{ padding: '24px', marginTop: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 600, margin: 0 }}>Krepšinio treniruotės Kaune</h4>
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '4px 0 0' }}>Priimame vaikus nuo 4 metų į treniruočių grupes visame mieste.</p>
            </div>
            <button
              onClick={onOpenRegister}
              className="button-primary"
              style={{ minHeight: '44px', padding: '10px 18px', fontSize: '11px' }}
            >
              Nemokama treniruotė <ArrowUpRight size={15} />
            </button>
          </div>
        </article>

        {/* Related News */}
        {displayedRelated.length > 0 && (
          <section style={{ maxWidth: '840px', margin: '60px auto 0' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 style={{ fontSize: '22px' }}>Kitos akademijos naujienos</h2>
              <Link href="/naujienos" className="text-link" style={{ fontSize: '12px' }}>
                Visos naujienos <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {displayedRelated.map(item => (
                <Link key={item.id} href={`/naujienos/${item.slug}`} className="news-card">
                  <div className="news-image">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy" 
                      onError={e => { 
                        if (!e.currentTarget.src.endsWith('/images/academy-team.jpg')) {
                          e.currentTarget.src = '/images/academy-team.jpg'; 
                        }
                      }} 
                    />
                  </div>
                  <div className="news-meta">
                    <span>{item.category}</span>
                    <time>{item.date.split('-').join('.')}</time>
                  </div>
                  <h3 style={{ fontSize: '16px', marginBlock: '8px 14px' }}>{item.title}</h3>
                  <span className="news-read">Skaityti <ArrowUpRight size={14} /></span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

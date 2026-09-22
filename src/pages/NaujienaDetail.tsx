import React from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import { newsArticles } from '../data/news';
import { ArrowLeft, Flame, Calendar, Tag, ChevronRight } from 'lucide-react';

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

  // Recommendations: 3 related or recent articles
  const relatedArticles = newsArticles
    .filter(n => n.id !== article.id && (n.category === article.category || !article.category))
    .slice(0, 3);
  const fallbackArticles = newsArticles.filter(n => n.id !== article.id).slice(0, 3);
  const displayedRelated = relatedArticles.length > 0 ? relatedArticles : fallbackArticles;

  return (
    <div className="pt-28 pb-16 space-y-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
        <Link 
          href="/naujienos" 
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-snaiperis-red transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Atgal į naujienas</span>
        </Link>

        <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-subtle p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center space-x-2 text-xs">
              <span className="bg-red-50 text-snaiperis-red font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
                {article.category}
              </span>
              <span className="text-slate-400 font-medium">
                {article.date}
              </span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video max-h-[380px] w-full">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
              }}
            />
          </div>

          <div 
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm space-y-3"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl">
            <div className="text-xs">
              <span className="font-bold text-slate-900 block">Krepšinio treniruotės Kaune</span>
              <span className="text-slate-500">Priimame vaikus nuo 4 metų į treniruotes.</span>
            </div>
            <button
              onClick={onOpenRegister}
              className="px-4 py-2 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5 shrink-0"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Registruotis</span>
            </button>
          </div>
        </article>

        {/* Related News */}
        {displayedRelated.length > 0 && (
          <div className="pt-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900">
              Kitos akademijos naujienos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {displayedRelated.map(item => (
                <Link
                  key={item.id}
                  href={`/naujienos/${item.slug}`}
                  className="bg-white rounded-2xl p-3 border border-slate-200/80 hover:border-snaiperis-red/40 transition-all flex flex-col justify-between space-y-2 group shadow-sm"
                >
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-snaiperis-red transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="text-[10px] text-slate-400 mt-1">{item.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'wouter';
import { newsArticles } from '../data/news';
import { Calendar, ArrowRight, Bookmark } from 'lucide-react';

export const Straipsniai: React.FC = () => {
  const featuredArticles = newsArticles.slice(0, 12);

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
          Straipsniai ir reportažai
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
          Straipsniai apie jaunųjų krepšininkų tobulėjimą, mitybą, fizinį pasirengimą ir Europos turnyrų patirtį.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredArticles.map(article => (
            <Link
              key={article.id}
              href={`/naujienos/${article.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-snaiperis-red/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-snaiperis-red text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-snaiperis-red transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-snaiperis-gold" />
                    <span>{article.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-snaiperis-red">
                <span>Skaityti straipsnį</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

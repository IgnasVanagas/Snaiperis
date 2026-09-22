import React, { useState } from 'react';
import { Link } from 'wouter';
import { newsArticles } from '../data/news';
import { Search, ChevronRight } from 'lucide-react';

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
    <div className="pt-28 pb-16 space-y-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
          Naujienos ir straipsniai
        </h1>

        {/* Search */}
        <div className="max-w-md mx-auto mt-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Ieškoti naujienose..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm shadow-subtle focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-snaiperis-red text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagedArticles.map(news => (
            <Link
              key={news.id}
              href={`/naujienos/${news.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-subtle hover:border-snaiperis-red/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <span className="absolute top-2.5 left-2.5 z-10 bg-snaiperis-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {news.category}
                  </span>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg';
                    }}
                  />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-snaiperis-red transition-colors leading-snug line-clamp-2">
                    {news.title}
                  </h3>
                  <div className="text-[11px] text-slate-400">{news.date}</div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-snaiperis-red">
                <span>Skaityti</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 pt-10">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold disabled:opacity-30 hover:bg-slate-50"
            >
              Ankstesnis
            </button>
            <span className="text-xs text-slate-600 font-semibold px-2">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold disabled:opacity-30 hover:bg-slate-50"
            >
              Kitas
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

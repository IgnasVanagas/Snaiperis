import React, { useState } from 'react';
import { merchandise, Product } from '../data/merchandise';
import { Search, ShoppingBag } from 'lucide-react';

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
    <div className="pt-28 pb-16 space-y-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
          KA „Snaiperis“ atributika
        </h1>

        {/* Search */}
        <div className="max-w-md mx-auto mt-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Ieškoti prekės..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm shadow-subtle focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
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

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map(product => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-subtle hover:border-snaiperis-red/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50 p-3 flex items-center justify-center mb-3">
                  <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-snaiperis-red transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="text-base font-black text-snaiperis-red">
                    {product.price}
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Dydžiai</span>
                <button
                  type="button"
                  className="px-2.5 py-1 bg-snaiperis-dark hover:bg-snaiperis-red text-white text-[11px] font-bold rounded-lg transition-colors flex items-center space-x-1"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Užsakyti</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { faqList } from '../data/faq';
import { HelpCircle, ChevronDown, Search, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';

export const DUK: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filtered = faqList.filter(f => 
    f.q.toLowerCase().includes(search.toLowerCase()) || 
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
            Dažniausiai užduodami klausimai
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm">
            Atsakymai į klausimus apie treniruočių pradžią, kainas, NVŠ krepšelį, sveikatos pažymas ir aprangas.
          </p>

          <div className="max-w-md mx-auto pt-2 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Ieškoti klausimo ar atsakymo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-snaiperis-red"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-900 hover:text-snaiperis-red transition-colors text-sm sm:text-base"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 ml-3 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180 text-snaiperis-red' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-slate-900">Neradote atsakymo į savo klausimą?</h3>
            <p className="text-xs sm:text-sm text-slate-500">Mūsų administracija mielai atsakys į visus rūpimus klausimus.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+37067246656" className="px-4 py-2.5 bg-white border border-slate-200 text-slate-900 font-semibold rounded-xl text-xs hover:border-snaiperis-red/40 shadow-sm flex items-center space-x-1.5 transition-colors">
              <Phone className="w-3.5 h-3.5 text-snaiperis-red" />
              <span>+370 672 46 656</span>
            </a>
            <Link href="/kontaktai" className="px-5 py-2.5 bg-snaiperis-red text-white font-semibold rounded-xl text-xs hover:bg-snaiperis-red-600 transition-colors shadow-sm">
              Rašyti žinutę
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

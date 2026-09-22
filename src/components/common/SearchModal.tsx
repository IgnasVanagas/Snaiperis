import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Users, Shirt, Newspaper, MapPin, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';
import { coaches } from '../../data/coaches';
import { merchandise } from '../../data/merchandise';
import { newsArticles } from '../../data/news';
import { teams } from '../../data/teams';
import { locations } from '../../data/locations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [, setLocation] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredCoaches = q ? coaches.filter(c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q)).slice(0, 3) : [];
  const filteredMerch = q ? merchandise.filter(m => m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q)).slice(0, 3) : [];
  const filteredNews = q ? newsArticles.filter(n => n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)).slice(0, 3) : [];
  const filteredTeams = q ? teams.filter(t => t.name.toLowerCase().includes(q) || t.coach.toLowerCase().includes(q)).slice(0, 3) : [];
  
  const allGyms = locations.flatMap(d => d.gyms.map(g => ({ ...g, district: d.district })));
  const filteredGyms = q ? allGyms.filter(g => g.name.toLowerCase().includes(q) || g.address.toLowerCase().includes(q) || g.district.toLowerCase().includes(q)).slice(0, 3) : [];

  const totalResults = filteredCoaches.length + filteredMerch.length + filteredNews.length + filteredTeams.length + filteredGyms.length;

  const navigateTo = (path: string) => {
    setLocation(path);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative border-b border-slate-100 flex items-center px-4 py-3">
          <Search className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Ieškoti trenerių, salių, komandų ar naujienų..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full text-sm bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-mono">ESC</span>
        </div>

        <div className="p-4 overflow-y-auto space-y-3 flex-grow">
          {!q ? (
            <div className="py-6 text-center text-slate-400 text-xs">
              Įveskite paieškos žodį (pvz. „Matulaitis“, „Centras“, „U8“)
            </div>
          ) : totalResults === 0 ? (
            <div className="py-6 text-center text-slate-500 text-xs">
              Pagal užklausą <strong>„{query}“</strong> nieko nerasta.
            </div>
          ) : (
            <div className="space-y-3">
              {filteredGyms.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-snaiperis-red" />
                    Sporto salės
                  </div>
                  <div className="space-y-1">
                    {filteredGyms.map((g, idx) => (
                      <div
                        key={idx}
                        onClick={() => navigateTo('/priemimas')}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer group"
                      >
                        <div>
                          <div className="font-semibold text-xs text-slate-900 group-hover:text-snaiperis-red">
                            {g.name}
                          </div>
                          <div className="text-[11px] text-slate-500">{g.district} • {g.address}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-snaiperis-red" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredCoaches.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center">
                    <Users className="w-3 h-3 mr-1 text-snaiperis-red" />
                    Treneriai
                  </div>
                  <div className="space-y-1">
                    {filteredCoaches.map(c => (
                      <div
                        key={c.id}
                        onClick={() => navigateTo('/treneriai')}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer group"
                      >
                        <div className="flex items-center space-x-2.5">
                          <img src={c.image} alt={c.name} className="w-6 h-6 rounded-full object-cover border border-slate-200" />
                          <div>
                            <div className="font-semibold text-xs text-slate-900 group-hover:text-snaiperis-red">
                              {c.name}
                            </div>
                            <div className="text-[11px] text-slate-500">{c.role}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-snaiperis-red" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredNews.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center">
                    <Newspaper className="w-3 h-3 mr-1 text-snaiperis-red" />
                    Naujienos
                  </div>
                  <div className="space-y-1">
                    {filteredNews.map(n => (
                      <div
                        key={n.id}
                        onClick={() => navigateTo(`/naujienos/${n.slug}`)}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer group"
                      >
                        <div className="font-semibold text-xs text-slate-900 group-hover:text-snaiperis-red line-clamp-1">
                          {n.title}
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-snaiperis-red shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

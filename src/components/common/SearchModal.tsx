import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Users, Shirt, Newspaper, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
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
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
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
      className="registration-overlay"
      style={{ alignItems: 'flex-start', paddingTop: '10vh' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Paieška svetainėje"
        style={{
          width: '100%',
          maxWidth: '580px',
          background: 'var(--paper)',
          borderRadius: '8px',
          border: '1px solid var(--line)',
          boxShadow: '0 25px 80px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--line)' }}>
          <Search size={18} style={{ color: 'var(--muted)', marginRight: '12px', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Ieškoti trenerių, salių, komandų ar naujienų..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%',
              fontSize: '14px',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              color: 'var(--ink)'
            }}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              style={{ color: 'var(--muted)', padding: '4px', marginRight: '8px', cursor: 'pointer' }}
              aria-label="Valyti"
            >
              <X size={16} />
            </button>
          )}
          <span style={{ fontSize: '10px', color: 'var(--muted)', background: '#eeeee7', padding: '3px 6px', borderRadius: '3px', fontFamily: 'monospace' }}>
            ESC
          </span>
        </div>

        {/* Results Container */}
        <div style={{ padding: '20px', overflowY: 'auto', flexGrow: 1 }}>
          {!q ? (
            <div style={{ textAlign: 'center', padding: '36px 0', color: 'var(--muted)', fontSize: '13px' }}>
              Įveskite paieškos žodį (pvz. „Matulaitis“, „Centras“, „Darželinukai“, „U8“)
            </div>
          ) : totalResults === 0 ? (
            <div style={{ textAlign: 'center', padding: '36px 0', color: 'var(--muted)', fontSize: '13px' }}>
              Pagal užklausą <strong>„{query}“</strong> nieko nerasta.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '20px' }}>
              {/* Gyms */}
              {filteredGyms.length > 0 && (
                <div>
                  <span className="tag-badge tag-badge-red" style={{ marginBottom: '8px' }}>
                    <MapPin size={10} style={{ marginRight: '4px' }} /> Sporto salės
                  </span>
                  <div style={{ display: 'grid', gap: '4px', marginTop: '6px' }}>
                    {filteredGyms.map((g, idx) => (
                      <div
                        key={idx}
                        onClick={() => navigateTo('/priemimas')}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '4px', cursor: 'pointer', transition: 'background .15s' }}
                        className="hover:bg-[#efeee8]"
                      >
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{g.name}</div>
                          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{g.district} · {g.address}</div>
                        </div>
                        <ArrowUpRight size={14} style={{ color: 'var(--red)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coaches */}
              {filteredCoaches.length > 0 && (
                <div>
                  <span className="tag-badge tag-badge-red" style={{ marginBottom: '8px' }}>
                    <Users size={10} style={{ marginRight: '4px' }} /> Treneriai
                  </span>
                  <div style={{ display: 'grid', gap: '4px', marginTop: '6px' }}>
                    {filteredCoaches.map(c => (
                      <div
                        key={c.id}
                        onClick={() => navigateTo(`/treneriai/${c.slug}`)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '4px', cursor: 'pointer', transition: 'background .15s' }}
                        className="hover:bg-[#efeee8]"
                      >
                        <div className="flex items-center gap-3">
                          <img src={c.image} alt={c.name} style={{ width: '28px', height: '28px', borderRadius: '4px', objectFit: 'cover', objectPosition: 'top' }} />
                          <div>
                            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{c.name}</div>
                            <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{c.role}</div>
                          </div>
                        </div>
                        <ArrowUpRight size={14} style={{ color: 'var(--red)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Teams */}
              {filteredTeams.length > 0 && (
                <div>
                  <span className="tag-badge tag-badge-red" style={{ marginBottom: '8px' }}>
                    Komandos
                  </span>
                  <div style={{ display: 'grid', gap: '4px', marginTop: '6px' }}>
                    {filteredTeams.map(t => (
                      <div
                        key={t.id}
                        onClick={() => navigateTo(`/komandos/${t.slug}`)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '4px', cursor: 'pointer', transition: 'background .15s' }}
                        className="hover:bg-[#efeee8]"
                      >
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.year} m. · {t.division} · Treneris: {t.coach}</div>
                        </div>
                        <ArrowUpRight size={14} style={{ color: 'var(--red)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Merchandise */}
              {filteredMerch.length > 0 && (
                <div>
                  <span className="tag-badge tag-badge-red" style={{ marginBottom: '8px' }}>
                    <Shirt size={10} style={{ marginRight: '4px' }} /> Atributika
                  </span>
                  <div style={{ display: 'grid', gap: '4px', marginTop: '6px' }}>
                    {filteredMerch.map(m => (
                      <div
                        key={m.id}
                        onClick={() => navigateTo('/atributika')}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '4px', cursor: 'pointer', transition: 'background .15s' }}
                        className="hover:bg-[#efeee8]"
                      >
                        <div className="flex items-center gap-3">
                          <img src={m.image} alt={m.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                          <div>
                            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{m.name}</div>
                            <div style={{ fontSize: '11px', color: 'var(--red)' }}>{m.price}</div>
                          </div>
                        </div>
                        <ArrowUpRight size={14} style={{ color: 'var(--red)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {filteredNews.length > 0 && (
                <div>
                  <span className="tag-badge tag-badge-red" style={{ marginBottom: '8px' }}>
                    <Newspaper size={10} style={{ marginRight: '4px' }} /> Naujienos
                  </span>
                  <div style={{ display: 'grid', gap: '4px', marginTop: '6px' }}>
                    {filteredNews.map(n => (
                      <div
                        key={n.id}
                        onClick={() => navigateTo(`/naujienos/${n.slug}`)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '4px', cursor: 'pointer', transition: 'background .15s' }}
                        className="hover:bg-[#efeee8]"
                      >
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{n.title}</div>
                          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{n.category} · {n.date}</div>
                        </div>
                        <ArrowUpRight size={14} style={{ color: 'var(--red)' }} />
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

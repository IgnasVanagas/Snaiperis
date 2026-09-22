import React, { useState } from 'react';
import { coaches, Coach } from '../data/coaches';
import { Search, ArrowUpRight, Check, Phone, X } from 'lucide-react';

interface TreneriaiProps {
  onSelectCoach: (coach: Coach) => void;
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const Treneriai: React.FC<TreneriaiProps> = ({ onSelectCoach, onOpenRegister }) => {
  const [search, setSearch] = useState('');

  const filteredCoaches = coaches.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase()) ||
    (c.bio && c.bio.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Žmonės, kurie įkvepia · 22 pedagogai ir specialistai</span>
          <h1>Treneriai. Mokytojai.<br /><span>Jūsų vaiko komanda.</span></h1>
          <p className="page-header-desc">
            Kvalifikuoti pedagogai, kuriuos vienija meilė krepšiniui ir noras padėti kiekvienam vaikui patirti tobulėjimo džiaugsmą, ugdyti pasitikėjimą ir komandinę dvasią.
          </p>

          <div className="search-wrapper" style={{ marginTop: '26px' }}>
            <Search size={16} />
            <input
              type="text"
              placeholder="Ieškoti trenerio pagal vardą ar pareigas..."
              value={search}
              onChange={e => setSearch(e.target.value)}
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

          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Visi treneriai turi aukštąjį sporto pedagogikos išsilavinimą
            <span /> Nuolatinis kvalifikacijos kėlimas
            <span /> Individualus dėmesys kiekvienam vaikui
          </div>
        </div>
      </header>

      {/* Coaches Grid */}
      <section className="site-container pb-20">
        <div className="text-xs mb-8" style={{ color: 'var(--muted)' }}>
          Akademijoje dirba: <strong style={{ color: 'var(--ink)' }}>{filteredCoaches.length}</strong> {filteredCoaches.length === 1 ? 'treneris' : 'treneriai'}
        </div>

        <div className="coach-grid">
          {filteredCoaches.map(coach => (
            <button
              key={coach.id}
              className="coach-card"
              onClick={() => onSelectCoach(coach)}
              type="button"
            >
              <div className="coach-photo">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  loading="lazy" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                  }}
                />
                <span><ArrowUpRight size={18} /></span>
              </div>
              <h3>{coach.name}</h3>
              <p>{coach.role}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Norite prisijungti?</span>
              <h2>Susipažinkite su treneriu<br />artimiausioje salėje.</h2>
              <p>Pirmoji treniruotė – nemokama. Ateikite į treniruotę, pasikalbėkite su treneriu ir pamatykite viską savo akimis.</p>
            </div>
            <div className="closing-actions">
              <button onClick={() => onOpenRegister()} className="button-light">
                Registruotis į treniruotę <ArrowUpRight size={18} />
              </button>
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

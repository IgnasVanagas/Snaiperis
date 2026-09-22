import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Phone, 
  Check, 
  ArrowRight,
  ArrowUpRight,
  X
} from 'lucide-react';
import { locations } from '../data/locations';
import { coaches } from '../data/coaches';

interface PriemimasProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const Priemimas: React.FC<PriemimasProps> = ({ onOpenRegister }) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Visi');
  const [selectedYear, setSelectedYear] = useState<string>('Visi');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allGyms = locations.flatMap(d => d.gyms.map(g => ({ ...g, district: d.district })));

  const filteredGyms = allGyms.filter(g => {
    const matchesDistrict = selectedDistrict === 'Visi' || g.district === selectedDistrict;
    const matchesYear = selectedYear === 'Visi' || g.years.includes(selectedYear);
    const matchesQuery = !searchQuery || 
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      g.address.toLowerCase().includes(searchQuery.toLowerCase()) || 
      g.coach.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesYear && matchesQuery;
  });

  const birthYears = ['Visi', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
  const districts = ['Visi', ...locations.map(d => d.district)];

  const hasActiveFilters = selectedDistrict !== 'Visi' || selectedYear !== 'Visi' || searchQuery.length > 0;

  return (
    <div className="subpage">
      {/* Editorial Page Header */}
      <header className="page-header">
        <div className="site-container page-header-content">
          <span className="eyebrow"><span className="status-dot" /> Priėmimas · Kaunas ir Kauno rajonas</span>
          <h1>Treniruočių salės ir<br /><span>registracija į komandą.</span></h1>
          <p className="page-header-desc">
            Krepšinio treniruotės 4–18 metų vaikams ir jaunimui. Pasirinkite salę arčiau namų ir atvykite į nemokamą bandomąją treniruotę.
          </p>
          <div className="hero-reassurance" style={{ marginTop: '22px' }}>
            <Check size={15} /> Pirmoji treniruotė nemokama
            <span /> NVŠ krepšelio kompensacija (15–50 €/mėn.)
            <span /> Virš 15 sporto bazių
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="site-container pb-8">
        <div className="editorial-card" style={{ padding: '24px' }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 search-wrapper" style={{ maxWidth: '100%' }}>
              <Search size={16} />
              <input
                type="text"
                placeholder="Ieškoti pagal salės pavadinimą, adresą ar trenerį..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  aria-label="Valyti paiešką"
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Birth Year Select */}
            <div className="md:col-span-3">
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="w-full"
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: '4px',
                  padding: '12px 14px',
                  fontSize: '13px',
                  background: '#fff',
                  color: 'var(--ink)'
                }}
              >
                {birthYears.map(y => (
                  <option key={y} value={y}>{y === 'Visi' ? 'Visi gimimo metai' : `${y} m. gimimas`}</option>
                ))}
              </select>
            </div>

            {/* District Select */}
            <div className="md:col-span-3">
              <select
                value={selectedDistrict}
                onChange={e => setSelectedDistrict(e.target.value)}
                className="w-full"
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: '4px',
                  padding: '12px 14px',
                  fontSize: '13px',
                  background: '#fff',
                  color: 'var(--ink)'
                }}
              >
                {districts.map(d => (
                  <option key={d} value={d}>{d === 'Visi' ? 'Visi mikrorajonai' : d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* District Filter Pills */}
          <div className="filter-tabs" style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
            {districts.map(d => (
              <button
                key={d}
                aria-pressed={selectedDistrict === d}
                onClick={() => setSelectedDistrict(d)}
                className="filter-tab"
              >
                {d === 'Visi' ? 'Visi rajonai' : d}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs mt-6 mb-4" style={{ color: 'var(--muted)' }}>
          <div className="font-semibold">
            Rasta sporto salių: <strong style={{ color: 'var(--ink)' }}>{filteredGyms.length}</strong>
          </div>
          {hasActiveFilters && (
            <button
              onClick={() => {
                setSelectedDistrict('Visi');
                setSelectedYear('Visi');
                setSearchQuery('');
              }}
              className="text-link"
              style={{ fontSize: '11px' }}
            >
              Išvalyti filtrus
            </button>
          )}
        </div>
      </section>

      {/* Gym Results List */}
      <section className="site-container pb-16">
        <div className="gym-results">
          {filteredGyms.map((gym, idx) => {
            const matchedCoach = coaches.find(c => c.name.toLowerCase().includes(gym.coach.toLowerCase()));
            return (
              <article className="gym-result" key={`${gym.name}-${idx}`} style={{ border: '1px solid var(--line)' }}>
                <div className="gym-location">
                  <span className="location-icon"><MapPin size={22} /></span>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="tag-badge tag-badge-red">{gym.district}</span>
                    </div>
                    <h3>{gym.name}</h3>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      {gym.address} <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                <div className="gym-details">
                  <span>Gimimo metai</span>
                  <p>{gym.years.join(', ')}</p>
                  <span>Treneris</span>
                  <p>{gym.coach}</p>
                </div>

                <div className="gym-actions">
                  <button 
                    onClick={() => onOpenRegister(gym.name, gym.coach)} 
                    className="button-primary"
                  >
                    Rinktis šią salę <ArrowRight size={16} />
                  </button>
                  <a href={`tel:${gym.phone.replace(/\s+/g, '')}`}>
                    <Phone size={13} />{gym.phone}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Checklist Section */}
      <section className="section-space" style={{ background: '#eeefe8', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="site-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Prieš pirmą treniruotę</span>
              <h2>Ką atsinešti į salę?</h2>
            </div>
            <p>Jokios specialios ar brangios įrangos nereikia – svarbiausia patogumas ir gera nuotaika.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Sportinė apranga', desc: 'Patogūs trumpi šortai ir marškinėliai, nevaržantys judesių.' },
              { num: '02', title: 'Sportiniai bateliai', desc: 'Švari, krepšinio ar salės sportui skirta avalynė švariu padu.' },
              { num: '03', title: 'Gertuvė su vandeniu', desc: 'Negazuotas geriamasis vanduo troškuliui numalšinti per pertraukėles.' },
              { num: '04', title: 'Gera nuotaika', desc: 'Noras susipažinti su komanda, išbandyti metimus ir smagiai pajudėti.' }
            ].map(item => (
              <div key={item.num} className="editorial-card" style={{ padding: '24px' }}>
                <span style={{ fontSize: '13px', color: 'var(--red)', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                  {item.num}
                </span>
                <h3 style={{ fontSize: '16px', marginTop: '12px', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-section">
        <div className="site-container">
          <div className="closing-card">
            <div className="court-lines" aria-hidden="true" />
            <div>
              <span className="eyebrow">Pirmas žingsnis – paprastas</span>
              <h2>Reikia patarimo<br />pasirenkant salę?</h2>
              <p>Paskambinkite akademijos vadovui arba administracijai – parinksime patogiausią vietą ir geriausią grupę jūsų vaikui.</p>
            </div>
            <div className="closing-actions">
              <button onClick={() => onOpenRegister()} className="button-light">
                Pildyti anketą <ArrowUpRight size={18} />
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

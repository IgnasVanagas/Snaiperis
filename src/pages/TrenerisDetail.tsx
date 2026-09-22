import React from 'react';
import { Link, useRoute } from 'wouter';
import { coaches, Coach } from '../data/coaches';
import { locations } from '../data/locations';
import { teams } from '../data/teams';
import { Phone, Mail, MapPin, ArrowLeft, ArrowUpRight, Check } from 'lucide-react';

interface TrenerisDetailProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const TrenerisDetail: React.FC<TrenerisDetailProps> = ({ onOpenRegister }) => {
  const [, params] = useRoute('/treneriai/:slug*');
  const slug = (params as any)?.['slug*'] || (params as any)?.slug || '';
  const cleanSlug = slug ? decodeURIComponent(slug.replace(/\/$/, '')) : '';

  const coach = coaches.find(c => c.slug === cleanSlug) || coaches[0];

  const coachGyms = locations.flatMap(loc => 
    loc.gyms
      .filter(g => g.coach.toLowerCase().includes(coach.name.toLowerCase()) || coach.name.toLowerCase().includes(g.coach.toLowerCase()))
      .map(g => ({ ...g, district: loc.district }))
  );

  const coachTeams = teams.filter(t => 
    t.coach.toLowerCase().includes(coach.name.toLowerCase()) || coach.name.toLowerCase().includes(t.coach.toLowerCase())
  );

  const otherCoaches = coaches.filter(c => c.id !== coach.id).slice(0, 4);

  return (
    <div className="subpage">
      <div className="site-container" style={{ paddingTop: '124px', paddingBottom: '70px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link href="/treneriai" className="text-link" style={{ fontSize: '12px' }}>
            <ArrowLeft size={16} /> Visi treneriai
          </Link>
        </div>

        {/* Coach Main Hero Card */}
        <div className="editorial-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Photo Column */}
            <div className="md:col-span-5" style={{ minHeight: '380px', background: '#e7e8df', position: 'relative' }}>
              <img 
                src={coach.image} 
                alt={coach.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                }}
              />
            </div>

            {/* Details Column */}
            <div className="md:col-span-7" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="eyebrow"><span className="status-dot" /> Krepšinio pedagogas · KA Snaiperis</span>
                <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', marginBlock: '12px 6px' }}>
                  {coach.name}
                </h1>
                <span style={{ fontSize: '13px', color: 'var(--red)', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
                  {coach.role}
                </span>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                  {coach.phone && (
                    <a 
                      href={`tel:${coach.phone.replace(/\s+/g, '')}`}
                      className="filter-tab active flex items-center gap-2"
                      style={{ textDecoration: 'none' }}
                    >
                      <Phone size={13} />
                      <span>{coach.phone}</span>
                    </a>
                  )}
                  {coach.email && (
                    <a 
                      href={`mailto:${coach.email}`}
                      className="filter-tab flex items-center gap-2"
                      style={{ textDecoration: 'none' }}
                    >
                      <Mail size={13} />
                      <span>{coach.email}</span>
                    </a>
                  )}
                </div>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
                  <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Apie trenerį</h2>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.9' }}>
                    {coach.bio}
                  </p>
                </div>
              </div>

              <div style={{ paddingTop: '24px', borderTop: '1px solid var(--line)', marginTop: '24px' }}>
                <button
                  onClick={() => onOpenRegister(undefined, coach.name)}
                  className="button-primary"
                >
                  Registruotis pas šį trenerį <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Training Gyms & Schedules */}
        {coachGyms.length > 0 && (
          <section style={{ marginTop: '54px' }}>
            <div className="section-heading">
              <div>
                <span className="eyebrow">Treniruočių vietos</span>
                <h2>Salės ir grupės</h2>
              </div>
              <p>Treniruotės, kurias veda {coach.name}:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coachGyms.map((gym, idx) => (
                <div 
                  key={idx}
                  className="editorial-card"
                  style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="tag-badge tag-badge-red">{gym.district}</span>
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{gym.years.join(', ')} m.</span>
                    </div>
                    <h3 style={{ fontSize: '17px', marginBottom: '6px' }}>{gym.name}</h3>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted)', marginBottom: '12px' }}>
                      <MapPin size={13} style={{ color: 'var(--muted)', flexShrink: 0 }} />
                      <span className="truncate">{gym.address}</span>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: '14px', marginTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <a
                      href={`tel:${gym.phone.replace(/\s+/g, '')}`}
                      className="text-link"
                      style={{ fontSize: '11px' }}
                    >
                      <Phone size={12} /> {gym.phone}
                    </a>
                    <button
                      onClick={() => onOpenRegister(gym.name, coach.name)}
                      className="text-link"
                      style={{ fontSize: '11px', color: 'var(--red)' }}
                    >
                      Registruotis <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Coached Teams */}
        {coachTeams.length > 0 && (
          <section style={{ marginTop: '54px' }}>
            <div className="section-heading">
              <div>
                <span className="eyebrow">Reprezentacija</span>
                <h2>Treniruojamos komandos</h2>
              </div>
              <p>MKL ir KKML pirmenybėse besivaržančios komandos:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coachTeams.map(team => (
                <Link
                  key={team.id}
                  href={`/komandos/${team.slug}`}
                  className="news-card"
                  style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '4px', overflow: 'hidden' }}
                >
                  <div style={{ aspectRatio: '16/10', position: 'relative', overflow: 'hidden', background: '#232a26' }}>
                    <img 
                      src={team.image} 
                      alt={team.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                      }}
                    />
                    <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
                      <span className="tag-badge tag-badge-red">{team.year} m.</span>
                      <span className="tag-badge" style={{ background: '#202320eb', color: '#fff' }}>{team.division}</span>
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{team.name}</h3>
                    <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '14px' }}>
                      {team.description}
                    </p>
                    <span className="news-read">Komandos puslapis <ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other Coaches Strip */}
        <section style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="eyebrow">Kolektyvas</span>
              <h2>Kiti akademijos treneriai</h2>
            </div>
            <Link href="/treneriai" className="text-link">
              Visi 22 treneriai <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="coach-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {otherCoaches.map(c => (
              <Link
                key={c.id}
                href={`/treneriai/${c.slug}`}
                className="coach-card"
              >
                <div className="coach-photo">
                  <img 
                    src={c.image} 
                    alt={c.name} 
                    loading="lazy" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
                    }}
                  />
                  <span><ArrowUpRight size={16} /></span>
                </div>
                <h3>{c.name}</h3>
                <p>{c.role}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

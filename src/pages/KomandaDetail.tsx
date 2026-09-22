import React from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import { teams } from '../data/teams';
import { coaches } from '../data/coaches';
import { Users, MapPin, Calendar, Trophy, ArrowLeft, ArrowUpRight, Phone, Mail, Check } from 'lucide-react';

interface KomandaDetailProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
}

export const KomandaDetail: React.FC<KomandaDetailProps> = ({ onOpenRegister }) => {
  const [, params] = useRoute('/komandos/:slug*');
  const [location] = useLocation();

  const rawSlug = (params as any)?.['slug*'] || (params as any)?.slug || location.split('/').filter(Boolean).pop();
  const slug = rawSlug ? decodeURIComponent(rawSlug.replace(/\/$/, '')) : '';

  const team = teams.find(t => t.slug === slug) || teams[0];
  const matchedCoach = coaches.find(c => 
    c.name.toLowerCase().includes(team.coach.toLowerCase()) || 
    team.coach.toLowerCase().includes(c.name.toLowerCase())
  );

  return (
    <div className="subpage">
      <div className="site-container" style={{ paddingTop: '124px', paddingBottom: '70px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link href="/komandos" className="text-link" style={{ fontSize: '12px' }}>
            <ArrowLeft size={16} /> Visos komandos
          </Link>
        </div>

        {/* Team Banner */}
        <div style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line)', background: '#fff' }}>
          <div style={{ position: 'relative', aspectRatio: '21/9', minHeight: '260px', background: '#232a26', overflow: 'hidden' }}>
            <img 
              src={team.image} 
              alt={team.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20, 29, 23, 0.2), rgba(20, 29, 23, 0.85))' }} />
            <div style={{ position: 'absolute', left: '32px', right: '32px', bottom: '28px', color: '#fff' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <span className="tag-badge tag-badge-red">{team.year} m. gimimas</span>
                <span className="tag-badge" style={{ background: '#ffffff30', color: '#fff' }}>{team.division}</span>
              </div>
              <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 3.5vw, 44px)', margin: 0 }}>
                {team.name}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ padding: '36px' }}>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="eyebrow" style={{ marginBottom: '8px' }}><span className="status-dot" /> Reprezentacinė komanda</span>
                <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Apie komandą</h2>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9' }}>
                  {team.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '14px' }}>Treniruočių informacija</h3>
                <div className="editorial-card-warm" style={{ padding: '20px', display: 'grid', gap: '12px', fontSize: '13px' }}>
                  <div className="flex items-center gap-3">
                    <Calendar size={16} style={{ color: 'var(--red)', flexShrink: 0 }} />
                    <span><strong>Tvarkaraštis:</strong> {team.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} style={{ color: 'var(--red)', flexShrink: 0 }} />
                    <span><strong>Sporto salė:</strong> {team.hall}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy size={16} style={{ color: 'var(--red)', flexShrink: 0 }} />
                    <span><strong>Pirmenybės:</strong> Moksleivių krepšinio lyga (MKL) ir KKML</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '10px' }}>
                <button
                  onClick={() => onOpenRegister(team.hall, team.coach)}
                  className="button-primary"
                >
                  Registruotis į peržiūrą <ArrowUpRight size={17} />
                </button>
              </div>
            </div>

            {/* Coach Card */}
            <div>
              <div className="editorial-card" style={{ padding: '24px' }}>
                <span className="eyebrow" style={{ marginBottom: '14px' }}>Vyriausiasis treneris</span>
                <div className="flex items-center gap-4">
                  <div style={{ width: '60px', height: '60px', borderRadius: '4px', overflow: 'hidden', background: '#e7e8df', flexShrink: 0 }}>
                    <img 
                      src={matchedCoach?.image || '/images/academy-team.jpg'} 
                      alt={team.coach}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 600 }}>{team.coach}</h4>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>{matchedCoach?.role || 'Treneris'}</span>
                    {matchedCoach && (
                      <Link 
                        href={`/treneriai/${matchedCoach.slug}`}
                        className="text-link"
                        style={{ fontSize: '11px', marginTop: '6px' }}
                      >
                        Trenerio profilis <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>

                {matchedCoach && (
                  <div style={{ borderTop: '1px solid var(--line)', marginTop: '20px', paddingTop: '16px', display: 'grid', gap: '8px', fontSize: '12px' }}>
                    <a href={`tel:${matchedCoach.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-[var(--red)]">
                      <Phone size={14} style={{ color: 'var(--red)' }} />
                      <span>{matchedCoach.phone}</span>
                    </a>
                    <a href={`mailto:${matchedCoach.email}`} className="flex items-center gap-2 hover:text-[var(--red)]">
                      <Mail size={14} style={{ color: 'var(--red)' }} />
                      <span className="truncate">{matchedCoach.email}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

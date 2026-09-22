import React, { useEffect, useRef } from 'react';
import { X, Phone, Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { Coach } from '../../data/coaches';
import { locations } from '../../data/locations';

interface CoachModalProps {
  coach: Coach | null;
  onClose: () => void;
  onRegisterWithCoach: (coachName: string) => void;
}

export const CoachModal: React.FC<CoachModalProps> = ({ coach, onClose, onRegisterWithCoach }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!coach) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [coach, onClose]);

  if (!coach) return null;

  const coachGyms = locations.flatMap(d => 
    d.gyms.filter(g => g.coach.toLowerCase().includes(coach.name.toLowerCase()) || coach.name.toLowerCase().includes(g.coach.toLowerCase()))
      .map(g => ({ ...g, district: d.district }))
  );

  return (
    <div 
      className="registration-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="coach-title"
        className="registration-dialog"
        style={{ maxWidth: '560px' }}
      >
        <button 
          ref={closeRef}
          onClick={onClose} 
          aria-label="Uždaryti" 
          className="icon-button registration-close"
        >
          <X size={21} />
        </button>

        <span className="eyebrow"><span className="status-dot" /> Akademijos pedagogas</span>
        
        <div className="flex items-center gap-4 mt-4 pb-5 border-b border-[var(--line)]">
          <div style={{ width: '72px', height: '72px', borderRadius: '4px', overflow: 'hidden', background: '#e7e8df', flexShrink: 0 }}>
            <img 
              src={coach.image} 
              alt={coach.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/academy-team.jpg';
              }}
            />
          </div>
          <div>
            <h2 id="coach-title" style={{ fontSize: '26px', margin: 0, lineHeight: 1.2 }}>
              {coach.name}
            </h2>
            <span style={{ fontSize: '13px', color: 'var(--red)', fontWeight: 600, display: 'block', marginTop: '2px' }}>
              {coach.role}
            </span>
          </div>
        </div>

        {/* Bio */}
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>Apie trenerį</h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.85', margin: 0 }}>
            {coach.bio}
          </p>
        </div>

        {/* Gyms */}
        {coachGyms.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Treniruočių salės</h3>
            <div style={{ display: 'grid', gap: '8px' }}>
              {coachGyms.map((g, idx) => (
                <div key={idx} className="editorial-card-warm" style={{ padding: '12px 16px', borderRadius: '4px' }}>
                  <div className="flex items-center justify-between">
                    <strong style={{ fontSize: '13px', color: 'var(--ink)' }}>{g.name}</strong>
                    <span className="tag-badge tag-badge-red">{g.district}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs mt-1" style={{ color: 'var(--muted)' }}>
                    <MapPin size={12} />
                    <span>{g.address} · Gimimo metai: {g.years.join(', ')} m.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          {coach.phone && (
            <a 
              href={`tel:${coach.phone.replace(/\s+/g, '')}`}
              className="filter-tab active flex items-center gap-2"
              style={{ textDecoration: 'none', fontSize: '12px', padding: '8px 14px' }}
            >
              <Phone size={13} />
              <span>{coach.phone}</span>
            </a>
          )}
          {coach.email && (
            <a 
              href={`mailto:${coach.email}`}
              className="filter-tab flex items-center gap-2"
              style={{ textDecoration: 'none', fontSize: '12px', padding: '8px 14px' }}
            >
              <Mail size={13} />
              <span>{coach.email}</span>
            </a>
          )}
        </div>

        {/* Primary Action Button */}
        <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--line)' }}>
          <button
            onClick={() => {
              onClose();
              onRegisterWithCoach(coach.name);
            }}
            className="button-primary"
            style={{ width: '100%' }}
          >
            Registruotis pas šį trenerį <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

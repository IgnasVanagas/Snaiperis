import React from 'react';
import { X, Phone, Mail, Award, MapPin, CheckCircle } from 'lucide-react';
import { Coach } from '../../data/coaches';
import { locations } from '../../data/locations';

interface CoachModalProps {
  coach: Coach | null;
  onClose: () => void;
  onRegisterWithCoach: (coachName: string) => void;
}

export const CoachModal: React.FC<CoachModalProps> = ({ coach, onClose, onRegisterWithCoach }) => {
  if (!coach) return null;

  const coachGyms = locations.flatMap(d => 
    d.gyms.filter(g => g.coach.toLowerCase().includes(coach.name.toLowerCase()))
      .map(g => ({ ...g, district: d.district }))
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white p-1 rounded-full bg-slate-900/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Coach Header */}
        <div className="bg-snaiperis-dark-950 text-white p-6 relative">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-slate-800">
              <img src={coach.image} alt={coach.name} className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-white">{coach.name}</h2>
              <div className="text-xs text-snaiperis-red font-semibold mt-0.5">{coach.role}</div>
            </div>
          </div>
        </div>

        {/* Coach Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-grow text-xs sm:text-sm">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Apie trenerį
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {coach.bio}
            </p>
          </div>

          {coachGyms.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Treniruočių salės
              </h3>
              <div className="space-y-1.5">
                {coachGyms.map((g, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="font-bold text-slate-900 text-xs">{g.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{g.district} • {g.address}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      Gimimo metai: {g.years.join(', ')} m.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`tel:${coach.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center space-x-1.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-snaiperis-red" />
              <span>{coach.phone}</span>
            </a>
            <a
              href={`mailto:${coach.email}`}
              className="flex items-center justify-center space-x-1.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl text-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-snaiperis-red" />
              <span>El. paštas</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onRegisterWithCoach(coach.name);
            }}
            className="w-full py-2.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Registruotis pas šį trenerį</span>
          </button>
        </div>
      </div>
    </div>
  );
};

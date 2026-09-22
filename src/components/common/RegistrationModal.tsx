import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, User, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { locations } from '../../data/locations';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGym?: string;
  preselectedCoach?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedGym = '',
  preselectedCoach = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childBirthYear: '2016',
    district: 'Centras',
    gym: preselectedGym || 'Kauno Senamiesčio progimnazija',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedGym) {
      setFormData(prev => ({ ...prev, gym: preselectedGym }));
      for (const d of locations) {
        if (d.gyms.some(g => g.name === preselectedGym)) {
          setFormData(prev => ({ ...prev, district: d.district, gym: preselectedGym }));
          break;
        }
      }
    }
  }, [preselectedGym]);

  if (!isOpen) return null;

  const currentGyms = locations.find(d => d.district === formData.district)?.gyms || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-snaiperis-dark-950 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-black font-display text-white">
            Registracija į treniruotes
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Pirmoji bandomoji treniruotė – nemokama
          </p>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-grow">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Registracija gauta!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mb-5">
                Treneris susisieks su Jumis telefonu per 24 val. ir pakvies į pirmąją nemokamą treniruotę.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 max-w-sm mx-auto text-left mb-5 text-xs">
                <div><strong>Vaikas:</strong> {formData.childName} ({formData.childBirthYear} m.)</div>
                <div><strong>Salė:</strong> {formData.gym} ({formData.district})</div>
                {preselectedCoach && <div><strong>Treneris:</strong> {preselectedCoach}</div>}
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
              >
                Grįžti į puslapį
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Steps */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`flex items-center space-x-1.5 ${step === 1 ? 'text-snaiperis-red font-bold' : 'text-slate-400'}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 1 ? 'bg-snaiperis-red text-white' : 'bg-slate-100'}`}>1</span>
                  <span>Vaikas</span>
                </button>
                <div className="h-0.5 flex-grow mx-3 bg-slate-100"></div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`flex items-center space-x-1.5 ${step === 2 ? 'text-snaiperis-red font-bold' : 'text-slate-400'}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 2 ? 'bg-snaiperis-red text-white' : 'bg-slate-100'}`}>2</span>
                  <span>Salė & Tėvai</span>
                </button>
              </div>

              {step === 1 ? (
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Vaiko vardas ir pavardė *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="pvz. Jonas Jonaitis"
                      value={formData.childName}
                      onChange={e => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-snaiperis-red focus:bg-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Vaiko gimimo metai *
                    </label>
                    <select
                      value={formData.childBirthYear}
                      onChange={e => setFormData({ ...formData, childBirthYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-snaiperis-red focus:bg-white text-sm font-semibold"
                    >
                      {['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', 'Rinktinė'].map(y => (
                        <option key={y} value={y}>{y} m. gimimas</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Pastabos (neprivaloma)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ar anksčiau lankė krepšinį..."
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-snaiperis-red focus:bg-white text-xs"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (formData.childName.trim()) setStep(2);
                      else alert('Prašome įvesti vaiko vardą ir pavardę.');
                    }}
                    className="w-full py-2.5 bg-snaiperis-dark hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                  >
                    Toliau: Pasirinkti salę
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Mikrorajonas *
                      </label>
                      <select
                        value={formData.district}
                        onChange={e => {
                          const dist = e.target.value;
                          const gymsInDist = locations.find(d => d.district === dist)?.gyms || [];
                          setFormData({ 
                            ...formData, 
                            district: dist, 
                            gym: gymsInDist[0]?.name || '' 
                          });
                        }}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
                      >
                        {locations.map(d => (
                          <option key={d.district} value={d.district}>{d.district}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Salė *
                      </label>
                      <select
                        value={formData.gym}
                        onChange={e => setFormData({ ...formData, gym: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-snaiperis-red"
                      >
                        {currentGyms.map(g => (
                          <option key={g.name} value={g.name}>{g.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Tėvų vardas, pavardė *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Vardas Pavardė"
                      value={formData.parentName}
                      onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-snaiperis-red focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Telefonas *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+370 6..."
                        value={formData.parentPhone}
                        onChange={e => setFormData({ ...formData, parentPhone: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-snaiperis-red focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        El. paštas *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vardas@pastas.lt"
                        value={formData.parentEmail}
                        onChange={e => setFormData({ ...formData, parentEmail: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-snaiperis-red focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 border border-slate-200 text-slate-600 font-bold rounded-xl text-xs"
                    >
                      Atgal
                    </button>
                    <button
                      type="submit"
                      className="flex-grow py-2.5 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
                    >
                      Registruotis
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

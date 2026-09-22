import React, { useState } from 'react';
import { Briefcase, CheckCircle2, Send, Phone, Mail, Award, HeartHandshake } from 'lucide-react';

export const Karjera: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
            Karjera KA „Snaiperis“
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Esame veržli sporto organizacija. Mus vienija meilė krepšiniui, noras tobulėti ir kurti geriausias sąlygas auklėtiniams.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-snaiperis-red flex items-center justify-center font-bold">
              🏀
            </div>
            <h3 className="font-bold text-slate-900 text-base">Mėgstamas darbas</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Kiekvieną dieną dirbkite su krepšiniu, realizuokite savo idėjas ir ugdykite ateities talentus.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              📈
            </div>
            <h3 className="font-bold text-slate-900 text-base">Kvalifikacijos kėlimas</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Akademija skatina ir apmoka trenerių seminarus, licencijų kėlimą bei stažuotes Lietuvoje ir užsienyje.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              🤝
            </div>
            <h3 className="font-bold text-slate-900 text-base">Draugiška bendruomenė</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              22 trenerių ir administracijos komanda, kurioje visada rasi pagalbą, patarimą ir bendraminčių palaikymą.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ačiū! Jūsų kandidatūra gauta.</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Akademijos vadovybė peržiūrės Jūsų pateiktą informaciją ir susisieks pokalbiui artimiausiu metu.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Trenerio / pedagogo anketa</h3>
                <p className="text-xs text-slate-500">
                  Užpildykite anketą arba atsiųskite savo CV el. paštu <strong>info@kasnaiperis.lt</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Vardas, pavardė *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vardas Pavardė"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-snaiperis-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Telefonas *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+370 6..."
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-snaiperis-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  El. paštas *
                </label>
                <input
                  type="email"
                  required
                  placeholder="vardas@pastas.lt"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-snaiperis-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Trumpas patirties aprašymas ir motyvacija
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Papasakokite apie savo krepšinio ar pedagoginę patirtį ir kodėl norėtumėte dirbti su vaikais..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-snaiperis-red"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-snaiperis-red hover:bg-snaiperis-red-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Siųsti kandidatūrą</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

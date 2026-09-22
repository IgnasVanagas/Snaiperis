import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { academyData } from '../data/academyData';
import { locations } from '../data/locations';

export const Kontaktai: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const c = academyData.contacts;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
          Akademijos kontaktai
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
          Turite klausimų dėl treniruočių, registracijos ar bendradarbiavimo? Susisiekite tiesiogiai arba parašykite žinutę.
        </p>
      </section>

      {/* Leadership Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Director */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                {c.director.name}
              </h3>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                {c.director.role}
              </div>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              <a href={`tel:${c.director.phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-snaiperis-red font-semibold transition-colors">
                <Phone className="w-3.5 h-3.5 mr-2 text-snaiperis-red" />
                <span>{c.director.phone}</span>
              </a>
              <a href={`mailto:${c.director.email}`} className="flex items-center hover:text-snaiperis-red transition-colors">
                <Mail className="w-3.5 h-3.5 mr-2 text-snaiperis-red" />
                <span>{c.director.email}</span>
              </a>
            </div>
          </div>

          {/* Deputy Edgaras */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                {c.deputy.name}
              </h3>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                {c.deputy.role}
              </div>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              <a href={`tel:${c.deputy.phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-snaiperis-red font-semibold transition-colors">
                <Phone className="w-3.5 h-3.5 mr-2 text-snaiperis-red" />
                <span>{c.deputy.phone}</span>
              </a>
              <a href={`mailto:${c.deputy.email}`} className="flex items-center hover:text-snaiperis-red transition-colors">
                <Mail className="w-3.5 h-3.5 mr-2 text-snaiperis-red" />
                <span>{c.deputy.email}</span>
              </a>
            </div>
          </div>

          {/* Admin Jovita */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                {c.admin.name}
              </h3>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                {c.admin.role}
              </div>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              <a href={`tel:${c.admin.phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-snaiperis-red font-semibold transition-colors">
                <Phone className="w-3.5 h-3.5 mr-2 text-snaiperis-red" />
                <span>{c.admin.phone}</span>
              </a>
              <a href={`mailto:${c.admin.email}`} className="flex items-center hover:text-snaiperis-red transition-colors">
                <Mail className="w-3.5 h-3.5 mr-2 text-snaiperis-red" />
                <span>{c.admin.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Ačiū! Žinutė išsiųsta.</h3>
                <p className="text-xs text-slate-500">Atsakysime Jums artimiausiu metu nurodytu el. paštu.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Susisiekite su mumis</h3>
                  <p className="text-xs text-slate-500">Užpildykite formą ir mes su Jumis susisieksime.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Jūsų vardas, pavardė *
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    Žinutė / Klausimas *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Jūsų klausimas arba pageidavimas..."
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
                  <span>Siųsti žinutę</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-6 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200/80 h-full min-h-[420px] relative flex flex-col justify-between">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146747.88607147985!2d23.774981140939527!3d54.90045814526867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72270b1670f93%3A0x400d18c70e9dc40!2sKaunas!5e0!3m2!1sen!2slt!4v1710000000000!5m2!1sen!2slt" 
              className="w-full h-80 sm:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kauno salių žemėlapis"
            />
            <div className="p-6 bg-white space-y-1 border-t border-slate-100">
              <div className="font-bold text-slate-900 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-1.5 text-snaiperis-red" />
                <span>Treniruotės visame Kauno mieste ir rajone</span>
              </div>
              <p className="text-xs text-slate-500">
                Centras, Šančiai, Šilainiai, Eiguliai, Gričiupis, Rokai, Vilijampolė, Žaliakalnis, Freda, Domeikava, Raudondvaris, Ežerėlis, Vilkija.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

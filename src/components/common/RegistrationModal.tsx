import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Phone, X } from 'lucide-react';
import { locations } from '../../data/locations';
import { coaches } from '../../data/coaches';

interface RegistrationModalProps { isOpen: boolean; onClose: () => void; preselectedGym?: string; preselectedCoach?: string; }
// Official registration form linked by the academy's 2026–2027 admissions article.
const REGISTRATION_URL = 'https://forms.gle/iLAMYZFidn23Zwyk8';

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, preselectedGym = '', preselectedCoach = '' }) => {
  const [district, setDistrict] = useState(locations[0].district);
  const [gymName, setGymName] = useState('');
  const [coachName, setCoachName] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;
    const selectedDistrict = locations.find(d => d.gyms.some(gym => gym.name === preselectedGym));
    setDistrict(selectedDistrict?.district || locations[0].district);
    setGymName(preselectedGym);
    setCoachName(preselectedCoach);
    const focused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
      if (event.key !== 'Tab') return;
      const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button,a[href],select') || []).filter(el => el.getClientRects().length > 0);
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', keydown); if (focused?.isConnected) focused.focus(); };
  }, [isOpen, preselectedGym, preselectedCoach]);

  if (!isOpen) return null;
  const gyms = locations.find(d => d.district === district)?.gyms || [];
  const gym = gyms.find(g => g.name === gymName);
  const coach = coaches.find(c => c.name === coachName);
  const contactName = gym?.coach || coach?.name;
  const phone = gym?.phone || coach?.phone || '+370 672 46 656';

  return <div className="registration-overlay" onClick={event => { if (event.target === event.currentTarget) onClose(); }}><div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="registration-title" aria-describedby="registration-description" className="registration-dialog">
    <button ref={closeRef} onClick={onClose} aria-label="Uždaryti registraciją" className="icon-button registration-close"><X size={21} /></button>
    <span className="eyebrow"><span className="status-dot" /> Jūsų vieta komandoje</span><h2 id="registration-title">Pradėkime nuo<br />pirmos treniruotės.</h2>
    <p id="registration-description" className="registration-intro">Susipažinkite su treneriu, atraskite naujų draugų ir išbandykite krepšinį. Padėsime rasti jūsų vaikui tinkamą grupę.</p>
    <div className="registration-benefits"><span><Check size={14} /> Pirmoji treniruotė nemokama</span></div>
    <div className="registration-fields"><label htmlFor="registration-district">Jums patogus mikrorajonas<select id="registration-district" value={district} onChange={event => { setDistrict(event.target.value); setGymName(''); setCoachName(''); }}>{locations.map(d => <option key={d.district}>{d.district}</option>)}</select></label><label htmlFor="registration-gym">Treniruočių salė<select id="registration-gym" value={gymName} onChange={event => { setGymName(event.target.value); setCoachName(''); }}><option value="">Norėčiau pagalbos renkantis</option>{gyms.map(g => <option key={g.name}>{g.name}</option>)}</select></label></div>
    <div className="registration-coach"><div><span>{contactName ? 'Jūsų treneris' : 'Padėsime išsirinkti'}</span>{contactName || 'Akademijos administracija'}</div><a href={`tel:${phone.replace(/\s+/g, '')}`}><Phone size={14} />{phone}</a></div>
    <p className="registration-next">Užpildykite akademijos registracijos anketą. Gavę ją, susisieksime ir suderinsime treniruotės laiką, vietą bei grupę.</p>
    <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="button-primary">Pildyti registracijos anketą <ArrowUpRight size={18} /></a>
    <p className="registration-footnote">Oficiali akademijos anketa atsidarys naujame lange.{gymName ? ' Pasirinktą salę nurodykite anketoje – ji neperkeliama automatiškai.' : ' Savo kontaktus pateiksite anketoje.'}</p>
  </div></div>;
};

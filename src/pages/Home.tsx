import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, MapPin, Phone, ShieldCheck, Target, Users } from 'lucide-react';
import { locations } from '../data/locations';
import { coaches, Coach } from '../data/coaches';
import { newsArticles } from '../data/news';
import { merchandise, Product } from '../data/merchandise';
import { faqList } from '../data/faq';

interface HomeProps {
  onOpenRegister: (gym?: string, coach?: string) => void;
  onSelectCoach: (coach: Coach) => void;
  onSelectProduct: (product: Product) => void;
}

const programs = [
  { number: '01', age: '4–7 metai', title: 'Maži žingsniai. Dideli atradimai.', name: 'Darželinukai', description: 'Pirmieji krepšinio įgūdžiai, judrieji žaidimai ir koordinacija. Mažesni kamuoliai, žemesni krepšiai ir daug džiaugsmo.', href: '/darzelinukai' },
  { number: '02', age: 'U8–U11', title: 'Pirmoji komanda. Pirmosios pergalės.', name: 'Čempionų lyga', description: 'Vidinis akademijos čempionatas, kuriame mokomės žaisti kartu ir atrandame tikrų krepšinio rungtynių jaudulį.', href: '/cempionu-lyga' },
  { number: '03', age: '2009–2017 m. kartos', title: 'Daugiau ryžto. Aukštesni tikslai.', name: 'MKL rinktinės', description: '10 reprezentacinių komandų, kryptingas meistriškumo ugdymas ir varžybos Lietuvoje bei tarptautiniuose turnyruose.', href: '/komandos' },
  { number: '04', age: 'Vasaros atostogoms', title: 'Aktyvi vasara. Tikra draugystė.', name: 'Vasaros stovyklos', description: 'Dieninės stovyklos Kaune ir išvažiuojamosios su nakvyne gamtoje. Krepšinis, nauji draugai ir nepamirštamos patirtys.', href: '/stovyklos' },
];

export const Home: React.FC<HomeProps> = ({ onOpenRegister, onSelectCoach, onSelectProduct }) => {
  const [selectedDistrict, setSelectedDistrict] = useState(locations[0].district);
  const activeGyms = locations.find(d => d.district === selectedDistrict)?.gyms || [];
  return (
    <div className="home-page">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title">Čia auga<br />daugiau nei<br /><span>krepšininkai.</span></h1>
            <p className="hero-description">Pasitikėjimas savimi. Draugystė. Meilė judėti.<br className="hidden sm:block" /> Krepšinio treniruotės 4–18 metų vaikams ir jaunimui, kur kiekvienas atranda savo vietą komandoje.</p>
            <div className="hero-actions"><button className="button-primary" onClick={() => onOpenRegister()}>Išbandyti nemokamai <ArrowUpRight size={18} /></button><a href="#gym-finder" className="text-link">Rasti treniruočių salę <ArrowRight size={17} /></a></div>
            <div className="hero-reassurance"><Check size={15} /> Pirmoji treniruotė nemokama</div>
            <a className="hero-discover" href="#programos"><span><ArrowDown size={16} /></span> Didelė kelionė prasideda nuo pirmo metimo</a>
          </div>
          <div className="hero-visual">
            <img src="/images/academy-team.jpg" alt="Snaiperio auklėtiniai kartu džiaugiasi iškovota taure" width="2048" height="1365" fetchPriority="high" className="hero-photo" />
            <div className="hero-photo-shade" />
            <div className="hero-photo-caption"><span>Aukime kartu.</span><p>Aikštelėje ir gyvenime.</p></div><div className="hero-photo-index" aria-hidden="true">KA / 04</div>
          </div>
        </div>
        <div className="site-container stats-strip">{[['20+', 'metų auginame asmenybes'], ['1 000+', 'vaikų mūsų bendruomenėje'], ['22', 'treneriai ir pedagogai'], ['15+', 'sporto salių arčiau namų']].map(([value, label]) => <div className="stat" key={label}><strong>{value}<span>.</span></strong><span>{label}</span></div>)}</div>
      </section>
      <section id="programos" className="section-space"><div className="site-container">
        <div className="section-heading"><div><span className="eyebrow">Kiekvienam savo startas</span><h2>Mažiems žingsniams.<br />Didelėms svajonėms.</h2></div><p>Nuo pirmo kamuolio iki pirmo čempionato.<br />Atraskite savo vaiko amžiui ir patirčiai tinkamą kelią.</p></div>
        <div className="program-grid">{programs.map(program => <Link key={program.number} href={program.href} className="program-card"><div className="program-meta"><span>{program.number}</span><span>{program.age}</span></div><h3>{program.name}</h3><h4>{program.title}</h4><p>{program.description}</p><span className="program-link">Atrasti programą <ArrowUpRight size={19} /></span></Link>)}</div>
        <div className="program-help"><span>Nežinote, nuo ko pradėti? Padėsime išsirinkti tinkamą grupę.</span><a href="tel:+37067246656"><Phone size={14} /> +370 672 46 656</a></div>
      </div></section>
      <section className="values-section section-space"><div className="site-container values-grid">
        <div className="values-visual"><img src="/images/young-players.jpg" alt="Jaunieji akademijos žaidėjai mokosi krepšinio ir komandinio žaidimo" loading="lazy" width="1024" height="683" /><div><span>Ne tik geresnis žaidėjas.</span><strong>Labiau savimi pasitikintis vaikas.</strong></div></div>
        <div className="values-copy"><span className="eyebrow">Daugiau nei sportas</span><h2>Gera vieta<br />augti kartu.</h2><p className="section-intro">Mums svarbūs ne tik taškai švieslentėje. Svarbu, kaip vaikas jaučiasi, ko išmoksta ir su kokia šypsena grįžta namo.</p>
          <div className="value-row"><Target size={23} /><div><h3>Treniruotės pagal vaiką</h3><p>Amžiui pritaikyta metodika, mažesni kamuoliai ir žemesni krepšiai – kad sėkmę patirtų nuo pirmos dienos.</p></div></div>
          <div className="value-row"><ShieldCheck size={23} /><div><h3>Pagarba ir emocinis saugumas</h3><p>Mokomės palaikyti komandos draugą, gerbti varžovą ir drąsiai bandyti. Pozityvus tėvų palaikymas – mūsų kultūros dalis.</p></div></div>
          <div className="value-row"><Users size={23} /><div><h3>Prieinama daugiau šeimų</h3><p>Akredituotos NVŠ programos ir nuolaidos broliams bei seserims. <Link href="/neformalaus-ugdymo-krepselis">Apie kompensaciją <ArrowUpRight size={13} /></Link></p></div></div>
        </div>
      </div></section>
      <section id="gym-finder" className="gym-section section-space" aria-labelledby="gym-heading"><div className="site-container">
        <div className="section-heading"><div><span className="eyebrow">Arčiau namų. Arčiau komandos.</span><h2 id="gym-heading">Jūsų rajone jau<br />laukia komanda.</h2></div><div><p>Treniruotės visame Kaune ir rajone.<br />Pasirinkite vietą, o mes padėsime žengti pirmą žingsnį.</p><Link href="/priemimas" className="text-link">Visos salės ir amžiaus grupės <ArrowUpRight size={16} /></Link></div></div>
        <div className="district-filters" aria-label="Pasirinkite mikrorajoną">{locations.map(d => <button key={d.district} aria-pressed={selectedDistrict === d.district} onClick={() => setSelectedDistrict(d.district)}>{d.district}</button>)}</div>
        <div className="gym-results" aria-live="polite" aria-atomic="true">{activeGyms.map(gym => <article className="gym-result" key={gym.name}><div className="gym-location"><span className="location-icon"><MapPin size={23} /></span><div><h3>{gym.name}</h3><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.address)}`} target="_blank" rel="noreferrer">{gym.address} <ArrowUpRight size={13} /></a></div></div><div className="gym-details"><span>Gimimo metai</span><p>{gym.years.join(', ')}</p><span>Treneris</span><p>{gym.coach}</p></div><div className="gym-actions"><button onClick={() => onOpenRegister(gym.name, gym.coach)} className="button-primary">Rinktis šią salę <ArrowRight size={16} /></button><a href={`tel:${gym.phone.replace(/\s+/g, '')}`}><Phone size={13} />{gym.phone}</a></div></article>)}</div>
        <p className="gym-note"><Check size={15} /> Treniruotės laiką ir tinkamą grupę suderinsite su treneriu.</p>
      </div></section>
      <section className="section-space"><div className="site-container">
        <div className="section-heading"><div><span className="eyebrow">Žmonės, kurie įkvepia</span><h2>Treneriai. Mokytojai.<br />Jūsų vaiko komanda.</h2></div><div><p>22 pedagogai, kuriuos vienija meilė krepšiniui<br />ir noras padėti kiekvienam vaikui augti.</p><Link href="/treneriai" className="text-link">Pažinti visus trenerius <ArrowUpRight size={16} /></Link></div></div>
        <div className="coach-grid">{coaches.slice(0, 6).map(coach => <button key={coach.id} className="coach-card" onClick={() => onSelectCoach(coach)}><div className="coach-photo"><img src={coach.image} alt={coach.name} loading="lazy" /><span><ArrowUpRight size={18} /></span></div><h3>{coach.name}</h3><p>{coach.role}</p></button>)}</div>
      </div></section>
      <section className="news-section section-space"><div className="site-container">
        <div className="section-heading"><div><span className="eyebrow">Gyvenimas akademijoje</span><h2>Mažos ir didelės<br />mūsų pergalės.</h2></div><Link href="/naujienos" className="text-link">Visos naujienos <ArrowUpRight size={16} /></Link></div>
        <div className="news-grid">{newsArticles.slice(0, 3).map(news => <Link key={news.id} href={`/naujienos/${news.slug}`} className="news-card"><div className="news-image"><img src={news.image} alt={news.title} loading="lazy" onError={e => { if (!e.currentTarget.src.endsWith('/images/academy-team.jpg')) e.currentTarget.src = '/images/academy-team.jpg'; }} /></div><div className="news-meta"><span>{news.category}</span><time dateTime={news.date}>{news.date.split('-').join('.')}</time></div><h3>{news.title}</h3><span className="news-read">Skaityti istoriją <ArrowUpRight size={16} /></span></Link>)}</div>
      </div></section>
      <section className="section-space merch-section"><div className="site-container">
        <div className="section-heading"><div><span className="eyebrow">Savo komanda. Savo spalvos.</span><h2>Snaiperis ir už aikštelės.</h2></div><Link href="/atributika" className="text-link">Visa atributika <ArrowUpRight size={16} /></Link></div>
        <div className="merch-grid">{merchandise.slice(0, 4).map(item => <button className="merch-card" key={item.id} onClick={() => onSelectProduct(item)}><div className="merch-image"><img src={item.image} alt={item.name} loading="lazy" /><span><ArrowUpRight size={18} /></span></div><div className="merch-caption"><h3>{item.name}</h3><span>{item.price}</span></div></button>)}</div>
      </div></section>
      <section className="faq-section section-space"><div className="site-container faq-grid"><div><span className="eyebrow">Tėvams ramiau</span><h2>Prieš pirmą<br />treniruotę.</h2><p className="section-intro">Atsakymai į klausimus, kurie rūpi labiausiai.</p><Link href="/d-u-k" className="text-link">Visi klausimai ir atsakymai <ArrowUpRight size={16} /></Link></div><div className="faq-list">{[faqList[1], faqList[5], faqList[6], faqList[0]].map(faq => <details key={faq.q}><summary>{faq.q}<ChevronDown size={18} /></summary><p>{faq.a}</p></details>)}</div></div></section>
      <section className="closing-section"><div className="site-container"><div className="closing-card"><div className="court-lines" aria-hidden="true" /><div><span className="eyebrow">Pirmas metimas – jūsų.</span><h2>Didelės istorijos<br />prasideda nuo „pabandom“.</h2><p>Ateikite susipažinti, pajudėti ir atrasti savo komandą.<br />Pirmoji treniruotė – mūsų dovana.</p></div><div className="closing-actions"><button onClick={() => onOpenRegister()} className="button-light">Išbandyti nemokamai <ArrowUpRight size={18} /></button><a href="tel:+37067246656"><Phone size={15} /> +370 672 46 656</a></div></div></div></section>
      <section className="partners-section"><div className="site-container"><span className="eyebrow">Augame kartu su</span><div className="partners"><span>KAUNO MIESTAS</span><span>MKL<span>Moksleivių krepšinio lyga</span></span><span>KKML</span><span>BaskEUball</span><span>LIETUVOS KREPŠINIO<br />FEDERACIJA</span></div></div></section>
    </div>
  );
};

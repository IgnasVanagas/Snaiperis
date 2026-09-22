const fs = require('fs');
const path = require('path');

const outDir = './src/data';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const embedded = JSON.parse(fs.readFileSync('./scraper_data/embedded_data.json', 'utf8'));
const cleanTextExtracted = JSON.parse(fs.readFileSync('./scraper_data/extracted_pages_content.json', 'utf8'));

// 1. COACHES
console.log('Compiling coaches...');
const coaches = embedded.treneriai.map(t => {
  const media = t._embedded && t._embedded['wp:featuredmedia'] ? t._embedded['wp:featuredmedia'][0] : null;
  const image = media ? media.source_url : 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
  const rawBio = t.content && t.content.rendered ? t.content.rendered.replace(/<[^>]+>/g, '').trim() : 'Treneris';
  
  // Extract phone & email if present or assign academy defaults
  return {
    id: t.id,
    slug: t.slug,
    name: t.title.rendered.replace(/&#8211;/g, '-').replace(/&#8220;|&#8221;|&quot;/g, '"'),
    role: rawBio || 'Krepšinio treneris',
    image: image,
    bio: rawBio.length > 20 ? rawBio : 'Krepšinio Akademijos „Snaiperis“ kvalifikuotas treneris, ugdantis jaunuosius krepšininkus pagal pažangiausią akademijos metodiką.',
    phone: '+370 672 46 656',
    email: 'info@kasnaiperis.lt'
  };
});

// Update coaches with phone numbers found in priemimas
const coachPhones = {
  'Armandas Sinkevičius': '+370 684 137 10',
  'Edgaras Čižinauskas': '+370 653 387 78',
  'Lukas Šaulevičius': '+370 626 197 29',
  'Karolis Matviejevas': '+370 695 454 91',
  'Martynas Valančius': '+370 645 564 35',
  'Adomas Rybelis': '+370 677 159 18',
  'Ugnius Bandžiulis': '+370 676 845 58',
  'Domas Čepaitis': '+370 689 066 20',
  'Tomas Mockus': '+370 690 908 65',
  'Lukas Šitkauskas': '+370 616 086 18',
  'Kajus Lapienis': '+370 606 130 25',
  'Lukas Januškevičius': '+370 670 123 74',
  'Gustas Virbalis': '+370 679 968 39',
  'Tautvydas Stankus': '+370 623 189 14',
  'Rokas Mileris': '+370 646 717 98',
  'Gytis Vyšniauskas': '+370 601 162 83',
  'Kostas Damijonaitis': '+370 678 368 67',
  'Kęstutis Matulaitis': '+370 679 192 90',
  'Tomas Bietkis': '+370 673 624 16',
  'Edgaras Bartuševičius': '+370 673 106 92'
};

coaches.forEach(c => {
  for (const [name, phone] of Object.entries(coachPhones)) {
    if (c.name.toLowerCase().includes(name.toLowerCase())) {
      c.phone = phone;
      c.email = name.toLowerCase().replace(/[\sąčęėįšųūž]/g, c => ({'ą':'a','č':'c','ę':'e','ė':'e','į':'i','š':'s','ų':'u','ū':'u','ž':'z',' ':'\.'}[c] || '')) + '@kasnaiperis.lt';
    }
  }
});

fs.writeFileSync(path.join(outDir, 'coaches.ts'), `export interface Coach {
  id: number;
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  phone: string;
  email: string;
}

export const coaches: Coach[] = ${JSON.stringify(coaches, null, 2)};
`);

// 2. MERCHANDISE (ATRIBUTIKA)
console.log('Compiling merchandise...');
const merchandise = embedded.atributika.map((item, idx) => {
  const media = item._embedded && item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] : null;
  const image = media ? media.source_url : 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
  
  const rawPrice = item.content && item.content.rendered ? item.content.rendered.replace(/<[^>]+>/g, '').trim() : '';
  const priceMatch = rawPrice.match(/(\d+[\.,]?\d*)\s*€?/);
  const price = priceMatch ? priceMatch[1].replace(',', '.') + ' €' : '15.00 €';

  let category = 'Apranga';
  const name = item.title.rendered.replace(/&#8220;|&#8221;|&quot;/g, '"');
  if (name.toLowerCase().includes('kepur') || name.toLowerCase().includes('snapback')) category = 'Galvos apdangalai';
  else if (name.toLowerCase().includes('kojines') || name.toLowerCase().includes('kojinės')) category = 'Aksesuarai';
  else if (name.toLowerCase().includes('kamuolys') || name.toLowerCase().includes('gertuv') || name.toLowerCase().includes('puodelis') || name.toLowerCase().includes('kuprin')) category = 'Inventorius ir suvenyrai';
  else if (name.toLowerCase().includes('šalikas') || name.toLowerCase().includes('salikas')) category = 'Sirgaliams';

  return {
    id: item.id,
    slug: item.slug,
    name: name,
    category: category,
    price: price,
    image: image,
    description: `Oficiali Krepšinio Akademijos „Snaiperis“ atributika. Aukštos kokybės, pritaikyta treniruotėms ir laisvalaikiui. Galimi įvairūs vaikiški ir suaugusiųjų dydžiai.`,
    sizes: ['116', '128', '140', '152', '164', 'S', 'M', 'L', 'XL']
  };
});

fs.writeFileSync(path.join(outDir, 'merchandise.ts'), `export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  sizes: string[];
}

export const merchandise: Product[] = ${JSON.stringify(merchandise, null, 2)};
`);

// 3. TEAMS (KOMANDOS)
console.log('Compiling teams...');
const teams = embedded.komandos.map(t => {
  const media = t._embedded && t._embedded['wp:featuredmedia'] ? t._embedded['wp:featuredmedia'][0] : null;
  const image = media ? media.source_url : 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
  const title = t.title.rendered.replace(/&#8220;|&#8221;|&quot;/g, '"').replace(/&#039;/g, "'").replace(/,,/g, '"');
  
  // extract coach from content or assign
  const cleanContent = t.content && t.content.rendered ? t.content.rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';

  return {
    id: t.id,
    slug: t.slug,
    name: title,
    year: title.match(/\b(200\d|201\d)\b/) ? title.match(/\b(200\d|201\d)\b/)[1] : 'Rinktinė',
    division: title.includes('II') ? 'II komanda' : 'I komanda',
    image: image,
    description: cleanContent || `KA „Snaiperis“ ${title} reprezentacinė komanda, dalyvaujanti MKL (Moksleivių krepšinio lygoje), Kauno krepšinio mėgėjų lygoje bei tarptautiniuose turnyruose.`,
    coach: title.includes('2013') ? 'Kostas Damijonaitis' : title.includes('2012') ? 'Kęstutis Matulaitis' : title.includes('2011') ? 'Tomas Bietkis' : title.includes('2010') ? 'Lukas Šaulevičius' : 'Edgaras Bartuševičius',
    schedule: 'Treniruotės vyksta 3-4 kartus per savaitę sporto salėse su profesionaliu fiziniu ir taktiniu pasirengimu.',
    hall: 'Lietuvos inžinerijos kolegija / Statybininkų g. 3 sporto salė'
  };
});

fs.writeFileSync(path.join(outDir, 'teams.ts'), `export interface Team {
  id: number;
  slug: string;
  name: string;
  year: string;
  division: string;
  image: string;
  description: string;
  coach: string;
  schedule: string;
  hall: string;
}

export const teams: Team[] = ${JSON.stringify(teams, null, 2)};
`);

// 4. LOCATIONS & GYMS (PRIĖMIMAS DATA)
console.log('Compiling locations & gyms...');
const locations = [
  {
    district: 'Centras',
    gyms: [
      { name: 'Kauno Senamiesčio progimnazija', address: 'Nemuno g. 12, Kaunas', coach: 'Armandas Sinkevičius', phone: '+370 684 137 10', years: ['2016', '2017', '2018', '2019', '2020'] }
    ]
  },
  {
    district: 'Gričiupis',
    gyms: [
      { name: 'Kauno Kovo 11-osios gimnazija', address: 'Kovo 11-osios g. 50, Kaunas', coach: 'Edgaras Čižinauskas', phone: '+370 653 387 78', years: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'] },
      { name: 'Kauno B. Brazdžionio mokykla-daugiafunkcis centras', address: 'Radvilėnų pl. 7, Kaunas', coach: 'Lukas Šaulevičius', phone: '+370 626 197 29', years: ['2014', '2015', '2016', '2017', '2018'] },
      { name: 'Kauno Nemuno vidurinė mokykla', address: 'A. ir J. Gravrogkų g. 9, Kaunas', coach: 'Karolis Matviejevas', phone: '+370 695 454 91', years: ['2014', '2015', '2016', '2017', '2018'] },
      { name: 'Kauno Varpelio pradinė mokykla', address: 'Vakarų g. 15, Kaunas', coach: 'Martynas Valančius', phone: '+370 645 564 35', years: ['2017', '2018', '2019', '2020'] },
      { name: 'Kauno mokykla-darželis „Šviesa“', address: 'Rimvydo g. 20, Kaunas', coach: 'Adomas Rybelis', phone: '+370 677 159 18', years: ['2018', '2019', '2020'] }
    ]
  },
  {
    district: 'Eiguliai',
    gyms: [
      { name: '„Kauno Švara“ sporto salė (Berniukai ir Mergaitės)', address: 'Statybininkų g. 3, Kaunas', coach: 'Martynas Valančius', phone: '+370 645 564 35', years: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'] },
      { name: 'Kauno Martyno Mažvydo progimnazija', address: 'Šiaurės pr. 55, Kaunas', coach: 'Ugnius Bandžiulis', phone: '+370 676 845 58', years: ['2015', '2016', '2017', '2018', '2019'] }
    ]
  },
  {
    district: 'Rokai',
    gyms: [
      { name: 'Kauno Antano Smetonos gimnazija', address: 'Vijūnų g. 2, Kaunas', coach: 'Domas Čepaitis', phone: '+370 689 066 20', years: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'] }
    ]
  },
  {
    district: 'Šančiai',
    gyms: [
      { name: 'Vytauto Didžiojo universiteto klasikinio ugdymo mokykla', address: 'Vokiečių g. 164, Kaunas', coach: 'Tomas Mockus', phone: '+370 690 908 65', years: ['2015', '2016', '2017', '2018', '2019'] },
      { name: 'KTU Vaižganto progimnazija', address: 'Skuodo g. 27, Kaunas', coach: 'Lukas Šitkauskas', phone: '+370 616 086 18', years: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'] },
      { name: 'Kauno Montesori mokykla–darželis „Žiburėlis“', address: 'Verkių g. 36, Kaunas', coach: 'Tautvydas Stankus', phone: '+370 623 189 14', years: ['2018', '2019', '2020'] },
      { name: 'Motiejaus Valančiaus mokykla-darželis', address: 'Kranto 5–oji g. 7, Kaunas', coach: 'Domas Čepaitis', phone: '+370 689 066 20', years: ['2017', '2018', '2019', '2020'] }
    ]
  },
  {
    district: 'Šilainiai',
    gyms: [
      { name: 'Kauno Santaros gimnazija (Berniukai ir Mergaitės)', address: 'Baltų pr. 51, Kaunas', coach: 'Kajus Lapienis', phone: '+370 606 130 25', years: ['2013', '2014', '2015', '2016', '2017', '2018'] },
      { name: 'Šv. Kazimiero progimnazija', address: 'Vandžiogalos pl. 51, Kaunas', coach: 'Lukas Januškevičius', phone: '+370 670 123 74', years: ['2014', '2015', '2016', '2017', '2018', '2019'] }
    ]
  },
  {
    district: 'Vilijampolė',
    gyms: [
      { name: 'Kauno Suzuki progimnazija', address: 'A. Stulginskio g. 61 A, Kaunas', coach: 'Gustas Virbalis', phone: '+370 679 968 39', years: ['2016', '2017', '2018', '2019', '2020'] },
      { name: 'Kauno Vešvų gimnazija', address: 'Mūšos g. 6, Kaunas', coach: 'Ugnius Bandžiulis', phone: '+370 676 845 58', years: ['2015', '2016', '2017', '2018'] }
    ]
  },
  {
    district: 'Žaliakalnis',
    gyms: [
      { name: 'Kauno mokykla-darželis „Rūtelė“', address: 'Kalniečių g. 167, Kaunas', coach: 'Tautvydas Stankus', phone: '+370 623 189 14', years: ['2018', '2019', '2020'] },
      { name: 'Kauno Gedimino sporto ir sveikatinimo gimnazija', address: 'Aukštaičių g. 78, Kaunas', coach: 'Rokas Mileris / Adomas Rybelis', phone: '+370 646 717 98', years: ['2014', '2015', '2016', '2017', '2018'] }
    ]
  },
  {
    district: 'Freda',
    gyms: [
      { name: 'Mokykla – darželis „Pažinimo medis“', address: 'Vilties g. 2, Kaunas', coach: 'Lukas Šitkauskas', phone: '+370 616 086 18', years: ['2017', '2018', '2019', '2020'] }
    ]
  },
  {
    district: 'Kauno rajonas',
    gyms: [
      { name: 'Domeikavos gimnazija', address: 'Bažnyčios g. 3, Domeikava', coach: 'Lukas Januškevičius', phone: '+370 670 123 74', years: ['2014', '2015', '2016', '2017', '2018'] },
      { name: 'Ežerėlio pagrindinė mokykla', address: 'Kauno g. 19, Ežerėlis', coach: 'Edgaras Čižinauskas', phone: '+370 653 387 78', years: ['2012', '2013', '2014', '2015', '2016'] },
      { name: 'Raudondvario A. ir A. Kriauzų pradinė mokykla', address: 'Instituto g. 20, Raudondvaris', coach: 'Gytis Vyšniauskas', phone: '+370 601 162 83', years: ['2016', '2017', '2018', '2019', '2020'] },
      { name: 'Vilkijos dienos centras', address: 'Saulėtekių g. 89, Vilkija', coach: 'Lukas Šaulevičius', phone: '+370 626 197 29', years: ['2010', '2011', '2012', '2013', '2014'] }
    ]
  }
];

fs.writeFileSync(path.join(outDir, 'locations.ts'), `export interface GymLocation {
  name: string;
  address: string;
  coach: string;
  phone: string;
  years: string[];
}

export interface DistrictGroup {
  district: string;
  gyms: GymLocation[];
}

export const locations: DistrictGroup[] = ${JSON.stringify(locations, null, 2)};
`);

// 5. NEWS (NAUJIENOS)
console.log('Compiling news...');
const news = embedded.naujienos.map(n => {
  const media = n._embedded && n._embedded['wp:featuredmedia'] ? n._embedded['wp:featuredmedia'][0] : null;
  const image = media ? media.source_url : 'https://kasnaiperis.lt/wp-content/themes/snaiperis/assets/img/mainLogo.png';
  const cleanTitle = n.title.rendered.replace(/&#8211;/g, '-').replace(/&#8220;|&#8221;|&quot;/g, '"').replace(/&#039;/g, "'");
  const rawExcerpt = n.excerpt && n.excerpt.rendered ? n.excerpt.rendered.replace(/<[^>]+>/g, '').trim() : '';
  const dateStr = n.date.split('T')[0];

  let category = 'Akademija';
  if (cleanTitle.toLowerCase().includes('daržel') || cleanTitle.toLowerCase().includes('darzel')) category = 'Darželinukai';
  else if (cleanTitle.toLowerCase().includes('čempion') || cleanTitle.toLowerCase().includes('lyg') || cleanTitle.toLowerCase().includes('lyga')) category = 'Čempionatai';
  else if (cleanTitle.toLowerCase().includes('stovykl')) category = 'Stovyklos';
  else if (cleanTitle.toLowerCase().includes('trener')) category = 'Treneriai';
  else if (cleanTitle.toLowerCase().includes('registracij') || cleanTitle.toLowerCase().includes('naujok')) category = 'Priėmimas';

  return {
    id: n.id,
    slug: n.slug,
    title: cleanTitle,
    date: dateStr,
    category: category,
    image: image,
    excerpt: rawExcerpt.slice(0, 200) + (rawExcerpt.length > 200 ? '...' : ''),
    content: n.content && n.content.rendered ? n.content.rendered : rawExcerpt
  };
});

fs.writeFileSync(path.join(outDir, 'news.ts'), `export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const newsArticles: NewsArticle[] = ${JSON.stringify(news, null, 2)};
`);

// 6. FAQ (D.U.K.)
console.log('Compiling FAQ...');
const faqList = [
  {
    q: 'Kur galima lankyti Krepšinio Akademijos „Snaiperis“ treniruotes?',
    a: 'Krepšinio treniruotės vyksta visame Kauno mieste ir rajone (virš 15 sporto salių). Treniruotės vyksta Centras, Gričiupis, Eiguliai, Rokai, Šančiai, Šilainiai, Vilijampolė, Žaliakalnis, Freda, Domeikava, Raudondvaris, Ežerėlis, Vilkija. Tikslius salių adresus ir trenerių kontaktus rasite skiltyje „Priėmimas“.'
  },
  {
    q: 'Kada galima pradėti lankyti treniruotes?',
    a: 'Registracija vyksta ištisus metus! Prie grupių galima prisijungti bet kuriuo sezono metu, jei grupėje yra laisvų vietų. Pirmoji bandomoji treniruotė yra nemokama.'
  },
  {
    q: 'Kodėl būtina pristatyti vaikų sveikatos pažymas per pirmąsias treniruočių savaites?',
    a: 'Vaikų sveikata ir saugumas mums yra pirmoje vietoje. Vaiko sveikatos pažymą (forma Nr. 027-1/a arba elektroninės sveikatos išrašą apie galimybę lankyti sporto užsiėmimus) būtina pateikti per pirmąsias 2 treniruočių lankymo savaites.'
  },
  {
    q: 'Kodėl reikia pasirašyti sporto mokymo sutartį su „Krepšinio Akademija Snaiperis“?',
    a: 'Sporto mokymo sutartis užtikrina vaiko vietą grupėje, apibrėžia treniruočių sąlygas, atsakomybes bei suteikia teisę pretenduoti į Neformalaus ugdymo krepšelį (NVŠ) kompensaciją.'
  },
  {
    q: 'Kaip nutraukti sporto mokymo sutartį?',
    a: 'Norint nutraukti sutartį, vaiko atstovas privalo ne mažiau nei prieš 14 dienų raštiškai kreiptis į Akademijos administraciją el. paštu info@kasnaiperis.lt. Nesant įsiskolinimų, vaikas išbraukiamas per 3 darbo dienas.'
  },
  {
    q: 'Kiek kainuoja krepšinio treniruotės?',
    a: 'Mėnesinis mokestis priklauso nuo amžiaus grupės bei savaitinių treniruočių skaičiaus (paprastai 45–65 €/mėn.). Pritaikant NVŠ krepšelį kaina sumažėja 15–25 € kiekvieną mėnesį.'
  },
  {
    q: 'Kokiais atvejais taikomos nuolaidos ir kitos kompensacijos?',
    a: 'Nuolaidos taikomos šeimoms, kurių du ar daugiau vaikų lanko akademiją (brolių/sesių nuolaida), taip pat socialiai remtinoms šeimoms pagal savivaldybės nustatytą tvarką.'
  },
  {
    q: 'Kaip sumokėti už krepšinio treniruotes ir kokią informaciją nurodyti?',
    a: 'Sąskaitos siunčiamos el. paštu kiekvieną mėnesį. Mokėjimas atliekamas bankiniu pavedimu. Paskirtyje BŪTINA nurodyti: vaiko vardą, pavardę, mokyklą/salę ir sąskaitos numerį.'
  }
];

fs.writeFileSync(path.join(outDir, 'faq.ts'), `export interface FAQItem {
  q: string;
  a: string;
}

export const faqList: FAQItem[] = ${JSON.stringify(faqList, null, 2)};
`);

// 7. EVENTS & CAMPS
console.log('Compiling events & camps...');
const eventsData = {
  tournaments: [
    {
      id: 's-stonkus-cup',
      title: 'S. Stonkus Cup',
      subtitle: 'Tradicinis tarptautinis krepšinio turnyras Stanislovo Stonkaus atminimui',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/08/cempionatu-titulinis-1.jpg',
      description: 'Tarptautinis vaikų ir jaunimo krepšinio turnyras, suburiantis stipriausias Lietuvos ir užsienio komandas (Latvija, Estija, Lenkija, Vokietija). Turnyras skirtas pagerbti legendinį krepšininką ir profesorių Stanislovą Stonkų.',
      date: 'Gegužės mėn.',
      location: 'Kaunas, Lietuvos inžinerijos kolegijos sporto salė'
    },
    {
      id: 'igudziu-treniruotes',
      title: 'Individualių įgūdžių treniruotės',
      subtitle: 'Meistriškumo tobulinimas mažose grupėse su specializuotais treneriais',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/08/renginiu-titulinis-1.jpg',
      description: 'Papildomos individualios treniruotės, kuriose akcentuojama metimo technika, driblingas, sprendimų priėmimas greitose atakose, 1 prieš 1 situacijos ir krepšinio IQ ugdymas.',
      date: 'Ištisus metus',
      location: 'Kauno sporto bazės'
    },
    {
      id: 'turnyrai',
      title: 'Turnyrai ir MKL čempionatai',
      subtitle: 'Akademijos komandų pasirodymai Lietuvos ir Europos arenose',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/06/IMG_5529.jpeg',
      description: 'KA „Snaiperis“ komandos aktyviai varžosi Moksleivių krepšinio lygoje (MKL), Kauno krepšinio mėgėjų lygoje (KKML) bei rengia išvykas į Europos jaunimo krepšinio lygos (EYBL) etapus.',
      date: 'Rugsėjis – Birželis',
      location: 'Visa Lietuva ir Europa'
    }
  ],
  camps: [
    {
      id: 'dienine-stovykla',
      slug: 'dieninestovykla',
      title: 'Dieninė vasaros stovykla',
      target: 'Vaikams nuo 6 iki 14 metų',
      hours: '8:00 – 17:00 val.',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/05/Untitled-design-8.png',
      description: 'Aktyvi, linksma ir krepšinio įgūdžius lavinanti stovykla Kaune. Kiekvieną dieną vaikų laukia 2 krepšinio treniruotės, baseinas, edukacinės išvykos, protmūšiai, batutų parkas ir subalansuotas maitinimas (pietūs + pavakariai).',
      price: '160 € / pamaina (5 dienos)',
      activities: ['2 krepšinio treniruotės kasdien', 'Maitinimas 2 kartus per dieną', 'Baseinas ir vandens pramogos', 'Kino teatras ir edukacijos', 'Dovanos ir diplomai kiekvienam']
    },
    {
      id: 'vasaros-stovykla',
      slug: 'vasaros-stovykla',
      title: 'Vasaros stovykla su nakvyne',
      target: 'Vaikams nuo 8 iki 17 metų',
      hours: '7 dienų pamaina gamtoje',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/05/707406803_1618653383598966_3574923160617246335_n.jpg',
      description: 'Tikra krepšinio stovykla gamtoje su apgyvendinimu, profesionaliomis treniruotėmis 3 kartus per dieną, maudynėmis ežere, vakaro renginiais, komandos dvasios stiprinimu ir nepamirštamais įspūdžiais visam gyvenimui!',
      price: '340 € / pamaina (7 dienos su maitinimu ir nakvyne)',
      activities: ['Apgyvendinimas jaukiuose kambariuose', 'Subalansuotas 4 kartų maitinimas', 'Fizinio parengimo ir taktikos treniruotės', 'Turnyrai 3x3, baudų ir tritaškių konkursai', 'Vakaro laužai ir pramogos']
    }
  ],
  kindergarten: [
    {
      id: 'jaunojo-krepsininko-diena',
      slug: 'renginys-1',
      title: 'Jaunojo krepšininko diena',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/05/FB_IMG_1780050715159.jpg',
      description: 'Šventinis renginys mažiausiems akademijos auklėtiniams. Estafetės, linksmi žaidimai su krepšinio kamuoliu, bendravimas su akademijos talismanu ir pirmieji medaliai!'
    },
    {
      id: 'kaledine-eglute',
      slug: 'renginys-2',
      title: 'Kalėdinė eglutė',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/02/455e8775-afd5-4fb3-9bd0-9340e80f53d2-2.jpg',
      description: 'Tradicinė Kalėdų šventė visiems KA „Snaiperis“ darželinukams ir jų tėveliams. Kalėdų Senelis, saldžios dovanėlės, konkursai ir šventinė krepšinio pasaka.'
    },
    {
      id: 'kauno-darzelinuku-cempionatas',
      slug: 'renginys-3',
      title: 'Kauno darželinukų čempionatas',
      image: 'https://kasnaiperis.lt/wp-content/uploads/2026/05/kievisas.fotografija-160.jpg',
      description: 'Didžiausias ikimokyklinio amžiaus vaikų krepšinio turnyras Kauno mieste! Dešimtys komandų iš Kauno darželių varžosi dėl garbingos taurės ir nugalėtojų titulo.'
    }
  ],
  championsLeague: {
    description: 'Krepšinio Akademija „Snaiperis“ organizuoja unikalų vidaus turnyrą – „Čempionų Lyga“. Lygoje rungtyniauja Akademijos auklėtiniai iki 12 metų amžiaus. Čempionų lyga – priemonė, kuria siekiama skatinti vaikus aktyviam laisvalaikiui, domėtis krepšiniu ir mokytis jį žaisti. Čempionatų pagalba vaikai įgauna komandinio bendradarbiavimo įgūdžių, mokosi siekti užsibrėžto tikslo, pagarbos varžovams ir sportinės drausmės.',
    divisions: [
      { id: 'u8', name: 'U8 Divizionas', age: 'Iki 8 metų', teamsCount: 8, format: 'Žaidžiama 3x3 arba 4x4 prie žemesnių krepšių su 5 dydžio kamuoliais' },
      { id: 'u9', name: 'U9 Divizionas', age: 'Iki 9 metų', teamsCount: 10, format: 'Žaidžiama 4x4 per visą aikštelę, skatinamas greitas perdavimas ir gynyba' },
      { id: 'u12', name: 'U11 / U12 Divizionas', age: '10–12 metų', teamsCount: 12, format: 'Pilnos 5x5 taisyklės, oficialūs teisėjai, statistika ir atkrintamosios' }
    ]
  }
};

fs.writeFileSync(path.join(outDir, 'events.ts'), `export const eventsData = ${JSON.stringify(eventsData, null, 2)};\n`);

// 8. ACADEMY DATA
console.log('Compiling academy data...');
const academyData = {
  milestones: [
    { year: '2004', title: 'Akademijos įkūrimas', desc: 'VšĮ Krepšinio Akademija „Snaiperis“ oficialiai pradeda savo veiklą Kaune, pradėdama treniruotes pirmosiose keliose Kauno mokyklose.' },
    { year: '2008', title: 'Darželinukų programos startas', desc: 'Pradedama pirmoji Lietuvoje specializuota krepšinio programa 4-6 metų darželinukams.' },
    { year: '2010', title: 'Pirmasis KKML finalinis ketvertas', desc: 'KA „Snaiperis“ komanda iškovoja kelialapį į Kauno krepšinio mėgėjų lygos finalinį ketvertą.' },
    { year: '2012', title: 'Tarptautinės pergalės Poznanėje', desc: 'Iškovota 1-oji vieta prestižiniame „DzienDzienkaCup“ turnyre Poznanėje (Lenkija).' },
    { year: '2015', title: 'Čempionų lygos įkūrimas', desc: 'Startuoja vidinis akademijos čempionatas „Čempionų Lyga“, pritraukiantis šimtus jaunųjų talentų.' },
    { year: '2018', title: 'MKL A diviziono viršūnėse', desc: 'Akademijos rinktinės sėkmingai varžosi aukščiausiame Moksleivių krepšinio lygos A divizione.' },
    { year: '2022', title: 'Tarptautinis projektas „BaskEUball“', desc: 'Akademija laimi tarptautinį Erasmus+ sporto projektą bendradarbiaujant su Graikijos ir Vokietijos klubais.' },
    { year: '2024–2026', title: '20 metų jubiliejus ir virš 1000 auklėtinių', desc: 'Akademija švenčia 20 metų sukaktį, vienija virš 22 trenerių, 15+ modernių sporto bazių ir išugdo Europos čempionus (Viltė Peleckytė).' }
  ],
  conductRules: [
    {
      category: 'Vykdami į treniruotes ar rungtynes ir grįždami:',
      rules: [
        'KREPŠINIO AKADEMIJOS „SNAIPERIS“ nariai privalo laikytis kelių eismo taisyklių.',
        'Visuomeniniame ir akademijos transporte elgtis mandagiai, neužimti perteklinės vietos, neteršti.',
        'Atvykti į treniruotės ar varžybų vietą likus ne mažiau kaip 15 minučių iki pradžios.'
      ]
    },
    {
      category: 'Persirengimo kambaryje:',
      rules: [
        'Laikytis švaros ir tvarkos, neteršti persirengimo kambarių ir dušų.',
        'Saugoti savo ir komandos draugų asmeninius daiktus.',
        'Persirengus tvarkingai susidėti drabužius į sportinius krepšius.',
        'Riebaluotus ar nešvarius batelius nuvalyti prieš einant į sporto salę.'
      ]
    },
    {
      category: 'Sporto salėje treniruočių ir varžybų metu:',
      rules: [
        'Į sporto salę įeiti tik su švaria, salei skirta sportine avalyne.',
        'Atidžiai klausytis trenerio nurodymų, nenaudoti kamuolių be trenerio leidimo.',
        'Gerbti komandos draugus, varžovus, teisėjus ir trenerius.',
        'Treniruotės metu draudžiama naudotis mobiliaisiais telefonais.'
      ]
    },
    {
      category: 'Vykstant į varžybas kitame mieste ar užsienyje:',
      rules: [
        'Griežtai laikytis trenerio nustatyto dienos režimo ir miego valandų.',
        'Reprezentuoti KA „Snaiperis“ vardą oriai, pagarbiai bendrauti su kitų šalių sportininkais.',
        'Neatsiskirti nuo komandos be trenerio leidimo.'
      ]
    }
  ],
  spectatorRules: [
    'Rungtynių stebėjimo metu palaikykite VISUS vaikus pozityviai – plojimais ir paskatinimais.',
    'Nešaukite ant teisėjų, trenerių ar varžovų žaidėjų – elkitės garbingai ir rodykite teigiamą pavyzdį savo vaikams.',
    'Nurodymus žaidėjams aikštelėje duoda TIK treneris. Papildomi tėvų šūksniai klaidina ir blaško jaunąjį sportininką.',
    'Po rungtynių padėkokite abiems komandoms už gražią kovą nepriklausomai nuo galutinio rezultato.'
  ],
  payments: {
    receiver: 'VšĮ „Krepšinio Akademija Snaiperis“',
    companyCode: '300062828',
    bank: 'AB Swedbank',
    iban: 'LT24 7300 0100 8925 5816',
    purposeExample: 'Vaiko Vardas Pavardė, Kauno Senamiesčio prog., Sąsk. Nr. 12345',
    terms: [
      'Sąskaita už einamąjį mėnesį išsiunčiama el. paštu ir turi būti apmokėta iki einamojo mėnesio paskutinės dienos.',
      'Metinis nario mokestis sumokamas per 30 dienų nuo sutarties pasirašymo.',
      'Broliams ir seserims taikoma šeimos nuolaida.',
      'Pritaikius NVŠ krepšelį kaina automatiškai sumažinama sąskaitoje.'
    ]
  },
  supportGPM: {
    year: '2026',
    percent: '1,2%',
    deadline: '2026 m. gegužės 4 d.',
    code: '300062828',
    title: 'KA SNAIPERIS',
    purpose: 'Už surinktą 1,2% paramą siekiame įsigyti naują Akademijos autobusą saugioms jaunųjų krepšininkų kelionėms į Lietuvos ir tarptautinius turnyrus!',
    prizes: [
      'Už skirtą paramą – oficialūs KA „Snaiperis“ suvenyrai, sirgalių marškinėliai bei atributika!',
      'Gauti prizus galėsite pateikę EDS deklaracijos patvirtinimo kopiją.'
    ]
  },
  contacts: {
    director: { name: 'Kęstutis Matulaitis', role: 'Direktorius', phone: '+370 679 192 90', email: 'kestutis.matulaitis@kasnaiperis.lt' },
    deputy: { name: 'Edgaras Bartuševičius', role: 'Direktoriaus pavaduotojas', phone: '+370 673 106 92', email: 'edgaras.bartusevicius@kasnaiperis.lt' },
    admin: { name: 'Jovita Matulaitienė', role: 'Direktoriaus pavaduotoja administracijai', phone: '+370 672 46 656', email: 'info@kasnaiperis.lt' },
    generalPhone: '+370 672 46 656',
    generalEmail: 'info@kasnaiperis.lt',
    address: 'Kaunas, Lietuva',
    socials: {
      facebook: 'https://www.facebook.com/kasnaiperis/',
      instagram: 'https://www.instagram.com/kasnaiperis/',
      youtube: 'https://www.youtube.com/user/SnaiperisTV'
    }
  },
  birthdays: [
    {
      title: 'Krepšinio gimtadienis (1 val.)',
      duration: '1 valanda aikštelėje',
      kids: 'Iki 6-12 vaikų',
      price: '100 €',
      features: ['Šventinė treniruotė su profesionaliu treneriu', 'Linksmos krepšinio estafetės ir konkursai', 'Diplomai visiems dalyviams', 'Salės nuoma įskaičiuota']
    },
    {
      title: 'Pilnas krepšinio gimtadienis (1,5 val.)',
      duration: '1,5 valandos aikštelėje',
      kids: 'Iki 6-12 vaikų',
      price: '130 €',
      features: ['Šventinė treniruotė ir rungtynės su treneriu', 'Krepšinio viktorina ir protmūšis', 'Jubiliato krikštynos krepšinio tradicijomis', 'Gimtadienio torto įnešimas aikštelėje', 'Dovanėlė jubiliatui']
    }
  ]
};

fs.writeFileSync(path.join(outDir, 'academyData.ts'), `export const academyData = ${JSON.stringify(academyData, null, 2)};\n`);

console.log('All TypeScript data files compiled successfully!');

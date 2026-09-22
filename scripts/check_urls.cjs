const fs = require('fs');

const userUrls = [
  'https://kasnaiperis.lt/',
  'https://kasnaiperis.lt/wp-includes/wlwmanifest.xml',
  'https://kasnaiperis.lt/kontaktai/',
  'https://kasnaiperis.lt/mokejimu-informacija/',
  'https://kasnaiperis.lt/neformalaus-ugdymo-krepselis/',
  'https://kasnaiperis.lt/rungtyniu-stebejimo-taisykles/',
  'https://kasnaiperis.lt/gimtadieniai/',
  'https://kasnaiperis.lt/karjera/',
  'https://kasnaiperis.lt/d-u-k/',
  'https://kasnaiperis.lt/parama/',
  'https://kasnaiperis.lt/elgesio-taisykles/',
  'https://kasnaiperis.lt/atributika/',
  'https://kasnaiperis.lt/treneriai/',
  'https://kasnaiperis.lt/istorija/',
  'https://kasnaiperis.lt/garbes-aleja/',
  'https://kasnaiperis.lt/absolventai/',
  'https://kasnaiperis.lt/naujienos/',
  'https://kasnaiperis.lt/komandos/',
  'https://kasnaiperis.lt/komandos/kasnaiperis-2013-i/',
  'https://kasnaiperis.lt/komandos/kasnaiperis-2012-ii/',
  'https://kasnaiperis.lt/komandos/kasnaiperis-2012-i/',
  'https://kasnaiperis.lt/komandos/ka-snaiperis-2011-ii/',
  'https://kasnaiperis.lt/komandos/ka-snaiperis-2011-i/',
  'https://kasnaiperis.lt/komandos/ka-snaiperis-2010-raudonieji/',
  'https://kasnaiperis.lt/komandos/ka-snaiperis-2010-geltonieji/',
  'https://kasnaiperis.lt/komandos/ka-snaiperis-2009-raudonieji/',
  'https://kasnaiperis.lt/komandos/2009/',
  'https://kasnaiperis.lt/cempionu-lyga/',
  'https://kasnaiperis.lt/renginiai/',
  'https://kasnaiperis.lt/renginiai/igudziu-treniruotes/',
  'https://kasnaiperis.lt/renginiai/s-stonkus-cup/',
  'https://kasnaiperis.lt/stovyklos/dieninestovykla/',
  'https://kasnaiperis.lt/stovyklos/vasaros-stovykla/',
  'https://kasnaiperis.lt/renginiai/turnyrai/',
  'https://kasnaiperis.lt/darzelinukai/',
  'https://kasnaiperis.lt/kindergarden/renginys-1/',
  'https://kasnaiperis.lt/kindergarden/renginys-2/',
  'https://kasnaiperis.lt/kindergarden/renginys-3/',
  'https://kasnaiperis.lt/naujienos/naujoku-registracija-i-2026-2027-m-sezona-jau-prasidejo/',
  'https://kasnaiperis.lt/naujienos/svarbiausi-2025-2026-m-sezono-renginiai/',
  'https://kasnaiperis.lt/naujienos/2025-2026-m-nuo-vidiniu-iki-tarptautiniu-cempionatu/',
  'https://kasnaiperis.lt/naujienos/baskeuball-kai-krepsinis-tampa-daugiau-nei-zaidimu/',
  'https://kasnaiperis.lt/naujienos/europos-cempione-vilte-peleckyte-tarp-berniuku-uzaugo-ka-snaiperis-akademijoje/',
  'https://kasnaiperis.lt/naujienos/treneris-gytis-vysniauskas-gim-2017-m-berniuku-kartos-treneris/',
  'https://kasnaiperis.lt/naujienos/krepsinio-aiksteleje-susitiko-trys-kartos-triumfavo-draugyste-ir-gera-nuotaika/',
  'https://kasnaiperis.lt/naujienos/u16-cempionu-lygos-finalai-mes-renkame-patirti-o-ne-pergales/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-2009-kkml-jaunimo-lygos-vicecempionai/',
  'https://kasnaiperis.lt/naujienos/u11-finalinis-etapas-atkaklios-kovos-ir-dramatiskos-rungtyniu-pabaigos/',
  'https://kasnaiperis.lt/naujienos/u9-cempionu-lygos-finalinis-ketvertas-cempionus-leme-vienas-taskas/',
  'https://kasnaiperis.lt/naujienos/u8-cempionu-lygos-finalai-paaiskejo-sezono-nugaletojai/',
  'https://kasnaiperis.lt/naujienos/vel-talinas-ir-vel-keturios-taures/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-i-kkml-cempionai-2016m-grupeje-ispudinga-sezona-vainikavo-aukso-medaliais-2/',
  'https://kasnaiperis.lt/naujienos/auksinis-finisas-ka-snaiperis-sakramento-kings-triumfavo-u14-jr-nba-cempionate/',
  'https://kasnaiperis.lt/naujienos/meile-krepsiniui-prasideda-cia-kauno-darzelinuku-cempionato-finalinis-etapas-2026/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-2013-i-naujieji-kkml-cempionai-istorinis-komandos-triumfas/',
  'https://kasnaiperis.lt/treneriai/lukas-saulevicius-6/',
  'https://kasnaiperis.lt/treneriai/karolis-matviejevas/',
  'https://kasnaiperis.lt/treneriai/marius-liepa/',
  'https://kasnaiperis.lt/treneriai/tomas-mockus/',
  'https://kasnaiperis.lt/treneriai/edgaras-cizinauskas/',
  'https://kasnaiperis.lt/treneriai/lukas-saulevicius-7/',
  'https://kasnaiperis.lt/treneriai/kestutis-matulaitis/',
  'https://kasnaiperis.lt/treneriai/kostas-damijonaitis/',
  'https://kasnaiperis.lt/treneriai/nauris-baranauskas/',
  'https://kasnaiperis.lt/treneriai/tomas-bietkis/',
  'https://kasnaiperis.lt/priemimas/',
  'https://kasnaiperis.lt/treneriai/rokas-mileris/',
  'https://kasnaiperis.lt/treneriai/lukas-sitkauskas/',
  'https://kasnaiperis.lt/treneriai/kajus-lapienis/',
  'https://kasnaiperis.lt/treneriai/lukas-januskevicius/',
  'https://kasnaiperis.lt/treneriai/robertas-malinovskij/',
  'https://kasnaiperis.lt/treneriai/martynas-valancius/',
  'https://kasnaiperis.lt/treneriai/tautvydas-stankus/',
  'https://kasnaiperis.lt/treneriai/armandas-sinkevicius/',
  'https://kasnaiperis.lt/treneriai/adomas-rybelis/',
  'https://kasnaiperis.lt/treneriai/domas-cepaitis/',
  'https://kasnaiperis.lt/treneriai/ugnius-bandziulis/',
  'https://kasnaiperis.lt/treneriai/gustas-virbalis/',
  'https://kasnaiperis.lt/naujienos/feed/',
  'https://kasnaiperis.lt/komandos/ka-snaiperis-2013-ii/',
  'https://kasnaiperis.lt/naujienos/cempionai-is-kauno-kele-i-virsu-berlyno-loki/',
  'https://kasnaiperis.lt/naujienos/dalyvaujantys-vaikuciai-projekte-baskeuball-nekantriai-laukia-keliones-i-graikija/',
  'https://kasnaiperis.lt/naujienos/partneryste-tarptautiniame-projekte-basket-change-maker-play-include-and-educate-baskeuball/',
  'https://kasnaiperis.lt/naujienos/darzelinuku-krepsinis/',
  'https://kasnaiperis.lt/naujienos/lukas-saulevicius-apie-velykini-turnyra-suomijoje-is-sios-keliones-pasisememe-neikainojamos-patirties-kuri-pades-mums-artejanciose-svarbiausiose-sio-sezono-kovose/',
  'https://kasnaiperis.lt/naujienos/auksine-ka-snaiperis-keturiolikmeciu-kelione-lietuvos-mkl-trijuliu-cempionate/',
  'https://kasnaiperis.lt/naujienos/tomas-bietkis-apie-debiutini-ka-snaiperis-u12-i-komandos-pasirodyma-mkl-sezono-svarbiausios-kovos-ant-nosies-ir-net-negalvojame-siame-etape-sustoti/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-grizta-prie-nuotoliniu-krepsinio-treniruociu/',
  'https://kasnaiperis.lt/naujienos/kiekvienose-rungtynese-gali-atsirasti-skirtingas-zaidejas-kuris-ta-diena-taps-lyderis/',
  'https://kasnaiperis.lt/naujienos/zarasai-camp20-geriausia-vasaros-patirtis/',
  'https://kasnaiperis.lt/naujienos/prasminga-ir-turininga-vasara-ka-snaiperis-organizuojamoje-dienineje-vasaros-stovykloje-kaunas-camp-2020/',
  'https://kasnaiperis.lt/naujienos/nauji-issukiai-naujiems-ka-snaiperis-rinktiniu-treneriams/',
  'https://kasnaiperis.lt/naujienos/2370/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-i-u13-pateko-tarp-top4-mkl-b-diviziono-komandu/',
  'https://kasnaiperis.lt/naujienos/nuotolinis-mokymas-treniruojames-namuose/',
  'https://kasnaiperis.lt/naujienos/stabdomi-ka-snaiperis-krepsinio-uzsiemimai-ir-cempionatai/',
  'https://kasnaiperis.lt/cempionu_lyga/u8/',
  'https://kasnaiperis.lt/cempionu_lyga/u9/',
  'https://kasnaiperis.lt/cempionu_lyga/u12/',
  'https://kasnaiperis.lt/naujienos/mazyliu-meile-krepsiniui-nepaliko-abejingu/',
  'https://kasnaiperis.lt/naujienos/lukas-saulevicius-galiu-pasidziaugti-kad-akademijoje-dirba-puikus-treneriu-kolektyvas-kuris-visada-padeda/',
  'https://kasnaiperis.lt/naujienos/tomas-mockus-i-rankas-kamuoli-paimti-niekada-neatsisakau/',
  'https://kasnaiperis.lt/naujienos/benas-narbutas-nera-jokio-vitamino-kuri-suvalgius-motyvacija-niekada-nedingtu/',
  'https://kasnaiperis.lt/naujienos/cempionu-lygos-lyderiai/',
  'https://kasnaiperis.lt/naujienos/is-talino-su-keturiomis-tauremis-naujais-sukiais-ir-puikiomis-emocijomis/',
  'https://kasnaiperis.lt/naujienos/pirmieji-zingsniai-lietuvos-cempionate-ir-matomas-progresas/',
  'https://kasnaiperis.lt/naujienos/sunkus-sezonas/',
  'https://kasnaiperis.lt/naujienos/bbbl-svente-kaune-svarbus-zingsnis-kuriuo-didziuojames/',
  'https://kasnaiperis.lt/naujienos/stonkus-cup-2026-naujoves-sveciai-is-uzsienio-ir-dar-daugiau/',
  'https://kasnaiperis.lt/naujienos/maziausiuju-krepsininku-debiutas-olimpinese-zaidynese/',
  'https://kasnaiperis.lt/naujienos/naujas-sezonas-nauji-issukiai-ir-rekordai/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-gim-2016-m-berniuku-karta-patiketa-treneriui-rokui-mileriui/',
  'https://kasnaiperis.lt/naujienos/vasara-geriausias-metas-tobuleti-ne-tik-zaidejams-bet-ir-treneriams/',
  'https://kasnaiperis.lt/naujienos/akademijos-treneriu-duetas-lietuvos-merginu-rinktineje/',
  'https://kasnaiperis.lt/naujienos/atostogos-baigesi-prasideda-rimtas-darbas/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-2024-2025-sezono-apzvalga/',
  'https://kasnaiperis.lt/naujienos/skrydzio-pabaiga-isleista-dar-viena-akademijos-absolventu-karta/',
  'https://kasnaiperis.lt/naujienos/krepsinio-akademijos-snaiperis-2009-2010-metu-sezono-uzdarymo-svente/',
  'https://kasnaiperis.lt/naujienos/snaiperiuku-kaledos/',
  'https://kasnaiperis.lt/naujienos/krepsinio-akademijos-snaiperis-2008-2009-m-sezono-uzdarymo-svente/',
  'https://kasnaiperis.lt/naujienos/krepsinio-akademijos-snaiperis-jauniu-zygis-ostravoje/',
  'https://kasnaiperis.lt/naujienos/krepsinio-akademijos-snaiperis-aukletiniai-3x3-zalgirio-turnyro-vicecempionai/',
  'https://kasnaiperis.lt/naujienos/stovykla-snaiperiu-blyksnis/',
  'https://kasnaiperis.lt/naujienos/fenikso-skrydzio-20-metis-sokiai-dainos-ir-pergales-tortas/',
  'https://kasnaiperis.lt/naujienos/sezonas-uzdarytas-su-gera-nuotaika-ir-grazia-pabaiga/',
  'https://kasnaiperis.lt/naujienos/alinantis-karstis-kieta-kova-ir-draugystes-pergale/',
  'https://kasnaiperis.lt/naujienos/zingsnelis-atgal-ir-galimybe-pademonstruoti-sukaupta-patirti/',
  'https://kasnaiperis.lt/naujienos/neitiketinas-rungtyniu-skaicius-ir-sekminga-pabaiga/',
  'https://kasnaiperis.lt/naujienos/4958/',
  'https://kasnaiperis.lt/naujienos/krepsinis-be-sienu-zaidimas-suvienijo-lietuvos-graikijos-ir-ispanijos-jaunuosius-krepsininkus/',
  'https://kasnaiperis.lt/naujienos/isdalinti-medaliu-komplektai-jauniausiems-cempionu-lygos-dalyviams/',
  'https://kasnaiperis.lt/naujienos/medaliu-kupinas-savaitgalis-tarptautiniuose-turnyruose/',
  'https://kasnaiperis.lt/naujienos/nesusiklostes-sezonas-ir-noras-atsigriebti-kitais-metais/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-aukletiniai-dalyvavo-tarptautiniame-turnyre-estijoje/',
  'https://kasnaiperis.lt/naujienos/finisavo-snaiperio-lygos-2012-2013-m-sezonas/',
  'https://kasnaiperis.lt/naujienos/kauno-zalgirio-3-pries-3-turnyre-snaiperiukai-vicecempionai/',
  'https://kasnaiperis.lt/naujienos/draugiskose-rungtynese-ka-snaiperis-aukletiniai-turejo-pripazinti-sveciu-is-svedijos-pranasuma/',
  'https://kasnaiperis.lt/naujienos/krepsinio-akademijoje-snaiperis-apdovanoti-geriausi-2012-metu-krepsininkai/',
  'https://kasnaiperis.lt/naujienos/krepsinio-akademijoje-snaiperis-prauze-naujuju-metu-atidarymo-svete-atnaujinta-nuotraukos-video/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-jaunieji-krepsininkai-gim-2003-2004-metais-sauniai-kovojo-raseiniuose/',
  'https://kasnaiperis.lt/naujienos/ka-snaiperis-jaunuju-krepsininku-triumfas-pikenroll-cup-2012-turnyre/',
  'https://kasnaiperis.lt/naujienos/krepsinio-akademijos-snaiperis-aukletiniai-3-pries-3-turnyro-vicecempionai/',
  'https://kasnaiperis.lt/naujienos/kaledine-svente-krepsinio-akademijoje-snaiperis/',
  'https://kasnaiperis.lt/naujienos/berniukai-su-geltonais-marskineliais-pavirto-i-auksinius-berniukus/',
  'https://kasnaiperis.lt/naujienos/kai-triumfuoja-draugyste-ir-meile-krepsiniui/',
  'https://kasnaiperis.lt/naujienos/svarbiausios-kovos-jau-si-savaitgali-druskininkuose/',
  'https://kasnaiperis.lt/naujienos/zingsnis-i-prieki-akivaizdus-progresas-ir-ambicingi-tikslai/',
  'https://kasnaiperis.lt/naujienos/pozityviai-nuteikiantis-sezonas-ir-didelis-noras-tobuleti-vasara/'
];

const newsContent = fs.readFileSync('./src/data/news.ts', 'utf8');
const coachesContent = fs.readFileSync('./src/data/coaches.ts', 'utf8');
const teamsContent = fs.readFileSync('./src/data/teams.ts', 'utf8');

const missingNews = [];
const missingCoaches = [];
const missingTeams = [];
const otherUrls = [];

for (const rawUrl of userUrls) {
  const url = rawUrl.trim();
  const path = new URL(url).pathname.replace(/\/$/, '') || '/';
  
  if (path.startsWith('/naujienos/')) {
    const slug = path.replace('/naujienos/', '');
    if (slug && slug !== 'feed') {
      const regex = new RegExp(`"slug":\\s*"${slug}"`);
      if (!regex.test(newsContent)) {
        missingNews.push(slug);
      }
    }
  } else if (path.startsWith('/treneriai/')) {
    const slug = path.replace('/treneriai/', '');
    if (slug) {
      const regex = new RegExp(`"slug":\\s*"${slug}"`);
      if (!regex.test(coachesContent)) {
        missingCoaches.push(slug);
      }
    }
  } else if (path.startsWith('/komandos/')) {
    const slug = path.replace('/komandos/', '');
    if (slug) {
      const regex = new RegExp(`"slug":\\s*"${slug}"`);
      if (!regex.test(teamsContent)) {
        missingTeams.push(slug);
      }
    }
  } else {
    otherUrls.push(path);
  }
}

console.log('Total URLs analyzed:', userUrls.length);
console.log('Missing news:', missingNews.length, missingNews);
console.log('Missing coaches:', missingCoaches.length, missingCoaches);
console.log('Missing teams:', missingTeams.length, missingTeams);
console.log('Other URLs:', otherUrls);

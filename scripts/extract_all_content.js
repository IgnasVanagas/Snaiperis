const fs = require('fs');

const pages = [
  'mokejimu-informacija',
  'neformalaus-ugdymo-krepselis',
  'elgesio-taisykles',
  'rungtyniu-stebejimo-taisykles',
  'd-u-k',
  'parama',
  'gimtadieniai',
  'karjera',
  'kontaktai',
  'cempionu-lyga',
  'darzelinukai',
  'istorija',
  'garbes-aleja',
  'absolventai',
  'stovyklos-page'
];

const extracted = {};

pages.forEach(p => {
  const html = fs.readFileSync('./scraper_data/html_pages/' + p + '.html', 'utf8');
  const hIdx = html.indexOf('</header>');
  const fIdx = html.indexOf('<footer');
  const main = (hIdx !== -1 && fIdx !== -1) ? html.slice(hIdx + 9, fIdx) : html;

  // Clean html to meaningful markdown-like lines
  const clean = main
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n* $1\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '-')
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();

  extracted[p] = clean;
});

fs.writeFileSync('./scraper_data/extracted_pages_content.json', JSON.stringify(extracted, null, 2));
console.log('Extracted and saved all content cleanly. Page count:', Object.keys(extracted).length);

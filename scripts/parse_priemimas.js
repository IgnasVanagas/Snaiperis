const fs = require('fs');

const html = fs.readFileSync('./scraper_data/html_pages/priemimas.html', 'utf8');
const hIdx = html.indexOf('</header>');
const fIdx = html.indexOf('<footer');
const main = html.slice(hIdx + 9, fIdx);

// save clean text of priemimas to file
const text = main.replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<\/div>/gi, '\n')
  .replace(/<\/p>/gi, '\n')
  .replace(/<\/li>/gi, '\n')
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<[^>]+>/g, '')
  .split('\n')
  .map(l => l.trim())
  .filter(Boolean)
  .join('\n');

fs.writeFileSync('./scraper_data/priemimas_clean.txt', text);
console.log('Saved priemimas clean text, lines:', text.split('\n').length);
console.log('Sample:\n', text.split('\n').slice(0, 50).join('\n'));

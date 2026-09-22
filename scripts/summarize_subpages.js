const fs = require('fs');
const files = fs.readdirSync('./scraper_data/subpages');
for (const f of files) {
  const html = fs.readFileSync('./scraper_data/subpages/' + f, 'utf8');
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || f;
  const clean = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(f.replace('.html', ''), '=> Title:', title.replace(/&quot;/g, '"').slice(0, 60), '| Chars:', clean.length);
}

const fs = require('fs');

const files = fs.readdirSync('./scraper_data/subpages');

files.forEach(f => {
  const html = fs.readFileSync('./scraper_data/subpages/' + f, 'utf8');
  // let's look for specific content containers or headings
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const cleanTitle = (h1Match ? h1Match[1] : (h2Match ? h2Match[1] : f)).replace(/<[^>]+>/g, '').trim();

  // Find images
  const imgs = [];
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = imgRegex.exec(html)) !== null) {
    if (!m[1].includes('logo') && !m[1].includes('icon') && !m[1].includes('facebook') && !m[1].includes('svg')) {
      imgs.push(m[1]);
    }
  }

  // Extract paragraphs
  const paras = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((m = pRegex.exec(html)) !== null) {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    if (text.length > 20 && !text.includes('Visos teisės saugomos') && !text.includes('info@kasnaiperis.lt')) {
      paras.push(text);
    }
  }

  console.log(`=== ${f} ===`);
  console.log(`Title: ${cleanTitle}`);
  console.log(`Images: ${imgs.length} (${imgs.slice(0, 2).join(', ')})`);
  console.log(`Paragraphs (${paras.length}):`);
  paras.slice(0, 3).forEach((p, i) => console.log(`  [${i+1}] ${p.substring(0, 120)}...`));
  console.log('');
});

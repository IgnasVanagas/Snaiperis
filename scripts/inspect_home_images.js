const fs = require('fs');
const html = fs.readFileSync('./scraper_data/html_pages/home.html', 'utf8');
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Total images on home:', imgs.length);
console.log('Sample images on home:');
imgs.slice(0, 20).forEach(i => console.log(i));

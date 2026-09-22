const fs = require('fs');

function extractGymLocations() {
  const html = fs.readFileSync('./scraper_data/html_pages/priemimas.html', 'utf8');
  // let's search for district blocks
  const sections = html.split(/class="[^"]*location-title[^"]*"/i);
  console.log('Location sections found:', sections.length);

  // Let's also do a clean text extraction of the training locations area
  const start = html.indexOf('KAUNO MIESTAS');
  const end = html.indexOf('REGISTRACIJOS ANKETA') !== -1 ? html.indexOf('REGISTRACIJOS ANKETA') : html.indexOf('<form');
  if (start !== -1 && end !== -1) {
    const locSnippet = html.slice(start, end).replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n').trim();
    console.log('--- TRAINING LOCATIONS SNIPPET ---');
    console.log(locSnippet.slice(0, 2000));
    fs.writeFileSync('./scraper_data/training_locations.txt', locSnippet);
  }
}

function inspectAllPagesFull() {
  const files = fs.readdirSync('./scraper_data/html_pages');
  const summary = {};
  for (const f of files) {
    const html = fs.readFileSync('./scraper_data/html_pages/' + f, 'utf8');
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/&quot;/g, '"').replace(/&#8220;|&#8221;/g, '"').replace(/&#8211;/g, '-').trim() : f;
    const cleanText = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    summary[f] = {
      title,
      textLength: cleanText.length,
      sampleText: cleanText.slice(0, 150)
    };
  }
  console.log('--- ALL PAGES SUMMARY ---');
  console.log(JSON.stringify(summary, null, 2));
}

extractGymLocations();
inspectAllPagesFull();

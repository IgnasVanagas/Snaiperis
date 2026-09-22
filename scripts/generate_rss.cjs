const fs = require('fs');

const newsData = fs.readFileSync('./src/data/news.ts', 'utf8');

// Parse articles
const articles = [];
const r = /"id":\s*(\d+),\s*"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"date":\s*"([^"]+)"/g;
let m;
while ((m = r.exec(newsData)) !== null && articles.length < 50) {
  articles.push({ id: m[1], slug: m[2], title: m[3], date: m[4] });
}

let rss = '<?xml version="1.0" encoding="UTF-8"?>\n';
rss += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
rss += '  <channel>\n';
rss += '    <title>Krepšinio Akademija „Snaiperis“ | Naujienos</title>\n';
rss += '    <link>https://kasnaiperis.lt/naujienos/</link>\n';
rss += '    <description>Krepšinio Akademija „Snaiperis“ oficialus naujienų srautas</description>\n';
rss += '    <language>lt</language>\n';

articles.forEach(a => {
  rss += '    <item>\n';
  rss += '      <title><![CDATA[' + a.title + ']]></title>\n';
  rss += '      <link>https://kasnaiperis.lt/naujienos/' + a.slug + '/</link>\n';
  rss += '      <pubDate>' + a.date + '</pubDate>\n';
  rss += '      <guid>https://kasnaiperis.lt/naujienos/' + a.slug + '/</guid>\n';
  rss += '    </item>\n';
});

rss += '  </channel>\n';
rss += '</rss>\n';

fs.mkdirSync('./public/naujienos/feed', { recursive: true });
fs.writeFileSync('./public/naujienos/feed/index.xml', rss, 'utf8');
fs.mkdirSync('./public/feed', { recursive: true });
fs.writeFileSync('./public/feed/index.xml', rss, 'utf8');
console.log('RSS generated with', articles.length, 'articles');

const fs = require('fs');
const html = fs.readFileSync('/tmp/site.html', 'utf8');
const urls = html.match(/https:\/\/lh[0-9]\.googleusercontent\.com\/[^\s"'<>]+/g) || [];
console.log('Total URLs found:', urls.length);
const unique = [...new Set(urls)];
for (const u of unique) {
  console.log(u);
}

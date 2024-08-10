import fs from 'fs-extra';

// Define your routes here
const routes = [
  '/',
  '/cart',
  '/checkout',
  '/about',
  '/contact',
  '/refundpolicy',
  // Add more routes as needed
];

// Function to generate XML content
function generateSitemap(routes) {
  const baseUrl = 'https://Buttoiltraders.com'; // Replace with your actual domain

  const xmlEntries = routes.map(route => (
    `<url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
  )).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlEntries}
    </urlset>`;
}

// Generate sitemap content
const sitemapContent = generateSitemap(routes);

// Write sitemap.xml file
fs.writeFile('public/sitemap.xml', sitemapContent, (err) => {
  if (err) throw err;
  console.log('Sitemap generated successfully!');
});
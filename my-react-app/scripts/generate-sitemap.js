const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://welovevilamoura.pt';

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/all', priority: 0.9, changefreq: 'daily' },
  { url: '/access', priority: 0.9, changefreq: 'weekly' },
  { url: '/partnership', priority: 0.8, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
];

// Function to extract routes from a data file
function extractRoutesFromFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const routes = new Set();

    // Extract category routes
    const categoryMatches = fileContent.match(/route:\s*["']([^"']+)["']/g) || [];
    categoryMatches.forEach(match => {
      const route = match.match(/["']([^"']+)["']/)[1];
      routes.add(route.replace(/^\//, '')); // Remove leading slash if present
    });

    // Extract any additional dynamic routes here if needed
    // For example, if you have item-specific routes, you can add them here

    return Array.from(routes);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  // Start XML string
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add static pages
  staticPages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${page.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority.toFixed(1)}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Get all categories from all language versions
  const allCategories = new Set();
  const dataFiles = [
    path.join(__dirname, '../src/data/appData.ts'),
    path.join(__dirname, '../src/data/appDataFR.ts'),
    path.join(__dirname, '../src/data/appDataPT.ts')
  ];

  dataFiles.forEach(file => {
    const routes = extractRoutesFromFile(file);
    routes.forEach(route => allCategories.add(route));
  });

  // Add category pages
  allCategories.forEach(categoryRoute => {
    if (!categoryRoute) return; // Skip empty routes
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/${categoryRoute}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Close XML
  xml += '</urlset>';

  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write to file
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('Sitemap generated successfully!');
}

// Generate sitemap
generateSitemap(); 
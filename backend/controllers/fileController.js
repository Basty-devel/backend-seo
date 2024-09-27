// backend/controllers/fileController.js
const fs = require('fs');
const path = require('path');

// Serve the robots.txt file
exports.getRobotsTxt = (req, res) => {
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    res.sendFile(robotsPath);
};

// Generate and serve a dynamic sitemap.xml
exports.getSitemapXml = (req, res) => {
    const urls = [
        { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
        { loc: '/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
        // Add more URLs dynamically based on your app
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    urls.forEach(url => {
        sitemap += `<url>\n<loc>${url.loc}</loc>\n<lastmod>${url.lastmod}</lastmod>\n<changefreq>${url.changefreq}</changefreq>\n<priority>${url.priority}</priority>\n</url>\n`;
    });
    sitemap += '</urlset>';

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
};

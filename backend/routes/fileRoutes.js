// backend/routes/fileRoutes.js
const express = require('express');
const { getRobotsTxt, getSitemapXml } = require('../controllers/fileController');

const router = express.Router();

// Route to serve robots.txt file
router.get('/robots.txt', getRobotsTxt);

// Route to generate and serve sitemap.xml file
router.get('/sitemap.xml', getSitemapXml);

module.exports = router;

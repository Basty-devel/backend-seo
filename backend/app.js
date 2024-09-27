// backend/app.js
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/emails', emailRoutes);
app.use('/api/files', fileRoutes);  // Serving robots.txt and sitemap.xml

module.exports = app;

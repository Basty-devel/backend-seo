// backend/routes/emailRoutes.js
const express = require('express');
const { subscribeEmail } = require('../controllers/emailController');

const router = express.Router();

// Route for subscribing to the email list
router.post('/subscribe', subscribeEmail);

module.exports = router;

// backend/models/Email.js
const mongoose = require('mongoose');

// Define the email schema
const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure uniqueness of email in the database
        match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Basic email validation
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the Email model
const Email = mongoose.model('Email', emailSchema);

module.exports = Email;

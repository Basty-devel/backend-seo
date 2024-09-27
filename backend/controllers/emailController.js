// backend/controllers/emailController.js
const Email = require('../models/Email');

// Subscribe a new user by email
exports.subscribeEmail = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if email already exists
        const existingEmail = await Email.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        // Save the new email
        const newEmail = new Email({ email });
        await newEmail.save();

        return res.status(201).json({ message: 'Email subscribed successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

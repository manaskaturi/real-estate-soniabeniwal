const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

// Test credentials for login (predefined)
const testCredentials = {
  email: 'test@example.com',
  password: 'password123',
};

// Login Route (hardcoded for testing)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the credentials match the hardcoded ones
  if (email === testCredentials.email && password === testCredentials.password) {
    const token = jwt.sign({ id: 'testUserId' }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;

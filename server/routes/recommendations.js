const express = require('express');
const router = express.Router();
const Property = require('../models/Property'); // Property model

// Mock AI Recommendations
router.get('/', async (req, res) => {
  const userPreferences = req.user?.preferences || ['luxury', 'urban']; // Example preferences
  try {
    const recommendedProperties = await Property.find({
      tags: { $in: userPreferences }, // Match based on tags
    }).limit(6); // Return top 6 matches
    res.json(recommendedProperties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendations' });
  }
});

module.exports = router;

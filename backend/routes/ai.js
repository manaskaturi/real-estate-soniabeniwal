const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
  const userTags = req.body.tags || [];

  const recommendedProperties = [
    { title: 'Luxury Villa', price: 1200000, description: 'A beautiful villa.', tags: ['luxury'] },
    { title: 'Urban Apartment', price: 350000, description: 'Modern city apartment.', tags: ['urban'] },
  ];

  const recommendations = recommendedProperties.filter(property =>
    property.tags.some(tag => userTags.includes(tag))
  );

  res.json(recommendations);
});

module.exports = router;

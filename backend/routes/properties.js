const express = require('express');
const router = express.Router();

// Hardcoded property data with random prices (only in USD now)
const properties = [
  {
    id: 1,
    title: 'Luxury Villa in Goa',
    description: 'A beautiful 4-bedroom villa with ocean views and a private pool.',
    priceInUSD: 500000,
    image: 'https://via.placeholder.com/300?text=Villa+1',
  },
  {
    id: 2,
    title: 'Urban Apartment in Mumbai',
    description: 'Modern 2-bedroom apartment in the heart of the city with stunning views.',
    priceInUSD: 300000,
    image: 'https://via.placeholder.com/300?text=Apartment+2',
  },
  {
    id: 3,
    title: 'Cozy Cottage in Shimla',
    description: 'A charming 3-bedroom cottage located in the hills with scenic views.',
    priceInUSD: 200000,
    image: 'https://via.placeholder.com/300?text=Cottage+3',
  },
  {
    id: 4,
    title: 'Penthouse in New York',
    description: 'Stunning penthouse with panoramic views of the city skyline.',
    priceInUSD: 1000000,
    image: 'https://via.placeholder.com/300?text=Penthouse+4',
  },
  {
    id: 5,
    title: 'Beach House in California',
    description: 'A modern beach house located steps away from the beach.',
    priceInUSD: 750000,
    image: 'https://via.placeholder.com/300?text=Beach+House+5',
  },
  {
    id: 6,
    title: 'Villa in Tuscany',
    description: 'A luxurious villa set in the hills of Tuscany with a beautiful garden.',
    priceInUSD: 650000,
    image: 'https://via.placeholder.com/300?text=Villa+6',
  }
];

// Fetch properties
router.get('/', (req, res) => {
  console.log('Fetching properties...');
  res.json(properties);  // Send the hardcoded data as response
});

module.exports = router;

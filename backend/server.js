const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());

// Hardcoded property data for testing
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
];

// Properties endpoint
app.get('/api/properties', (req, res) => {
  res.json(properties);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});


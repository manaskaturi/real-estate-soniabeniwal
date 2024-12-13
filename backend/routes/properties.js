const express = require('express');
const Property = require('../models/Property');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Error fetching properties" });
  }
});

module.exports = router;

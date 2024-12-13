const mongoose = require('mongoose');
module.exports = mongoose.model('Property', PropertySchema);
const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  tags: [String], // Tags for AI filtering, e.g., ['luxury', 'urban', 'cozy']
});

module.exports = mongoose.model('Property', PropertySchema);

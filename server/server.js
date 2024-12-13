const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
const recommendationRoutes = require('./routes/recommendations');
app.use('/api/recommendations', recommendationRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

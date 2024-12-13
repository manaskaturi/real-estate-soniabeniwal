const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Hardcoded user (for testing purpose)
const testUser = {
  email: 'test@example.com',
  password: 'password123', // Plaintext password for testing
};

// User Schema (hardcoded for now, no need to save to DB)
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to match password (using bcryptjs)
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Simulate login using the hardcoded test user
UserSchema.statics.findTestUser = () => testUser;

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: String,
  profile: { type: String, enum: ['admin', 'convecional'], default: 'convecional' },
  email: {
    type: String,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    unique: true,
    lowercase: true,
  },
  address: [
    {
      street: String,
      number: Number,
      complement: String,
      zipCode: String,
      principal: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);

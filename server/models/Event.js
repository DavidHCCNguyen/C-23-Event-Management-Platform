const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  // ... add more fields as needed
});

module.exports = mongoose.model('Event', eventSchema);

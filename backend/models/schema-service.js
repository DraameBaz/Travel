const mongoose = require('mongoose');

// Define the schema for IT services
const serviceSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  provider: {
    type: String,
    required: true,
    trim: true,
  }
});

// Create the model using the schema
const Service = mongoose.model('services', serviceSchema);

module.exports = Service;

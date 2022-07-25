var mongoose = require('mongoose');

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var ReviewSchema = new Schema({
  stars: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

// Create model from the schema
var Review = mongoose.model('Review', ReviewSchema);

// Export model
module.exports = Review;

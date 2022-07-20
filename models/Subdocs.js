const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parentSchema = new Schema({
  // Single subdocument
  name: { type: String, unique: true },
  child1: { name: String, keys: String },
  // Array of subdocuments
  child2: [{ name: String, keys: String }],
});

const Character = mongoose.model('Character', parentSchema);

module.exports = Character;

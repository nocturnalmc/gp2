const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kaunterSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  negeri: {
    type: String,
    required: [true, 'Please provide negeri'],
  },
  daerah: {
    type: String,
    required: [true, 'Please provide daerah'],
  },
  kp: {
    type: String,
    required: [true, 'Please provide KP'],
  },
});

const Kaunter = mongoose.model('Kaunter', kaunterSchema);
module.exports = Kaunter;

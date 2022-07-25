const mongoose = require('mongoose');

const KotakSchema = new mongoose.Schema({
  // negeri, daerah, kp, operator are associated with each kotak
  createdByNegeri: {
    type: String,
    required: true,
  },
  createdByDaerah: {
    type: String,
    required: true,
  },
  createdByKp: {
    type: String,
    required: true,
  },
  createdByUsername: {
    type: String,
    required: true,
  },
  // kotak --------------------------------------------------
  statusM: {
    type: String,
    default: '',
  },
  jenisR: {
    type: String,
    default: '',
  },
  tarikh1: {
    type: String,
    default: '',
  },
  tarikh2: {
    type: String,
    default: '',
  },
  tarikh3: {
    type: String,
    default: '',
  },
  tarikh4: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Kotaksekolah', KotakSchema);

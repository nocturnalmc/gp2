const mongoose = require('mongoose');

const PemeriksaansekolahSchema = new mongoose.Schema({
  // negeri, daerah, kp, operator are associated with each pemeriksaan
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
  // pemeriksaan ----------------------------------------------------------
  statikBergerak: {
    type: String,
    default: '',
  },
  kpBergerak: {
    type: Boolean,
    default: false,
  },
  plateNo: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Pemeriksaansekolah', PemeriksaansekolahSchema);

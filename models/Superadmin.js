const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  user_name: { type: String, required: true },
  password: { type: String, required: true },
  daerah: { type: String, required: true },
  negeri: { type: String, required: true },
  tempKey: { type: String },
});

adminSchema.pre('save', async function () {
  this.password = await bcryptjs.hash(this.password, 10);
});

const Superadmin = mongoose.model('Superadmin', adminSchema);

module.exports = Superadmin;

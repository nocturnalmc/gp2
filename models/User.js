const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true,
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
  accountType: {
    type: String,
    required: [true, 'Please provide account type'],
    enum: {
      values: ['kpUser', 'kaunterUser'],
      message: '{VALUE} is not supported. Provide only "kpUser", "kaunterUser"',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      username: this.username,
      negeri: this.negeri,
      daerah: this.daerah,
      kp: this.kp,
      accountType: this.accountType,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcryptjs.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model('User', UserSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operatorSchema = new Schema({
  nama: {
    type: String,
    // required: true
  },
  gred: {
    type: String,
    // required: true
  },
  daerah: {
    type: String,
    // required: true
  },
  kpSkrg: {
    type: String,
    // required: true
  },
  role: {
    type: String,
    // required: true
  },
});

const Operator = mongoose.model("Operator", operatorSchema);

module.exports = Operator;

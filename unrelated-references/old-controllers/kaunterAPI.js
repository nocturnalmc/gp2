const jwt = require('jsonwebtoken');
const Umum = require('../models/Umum');
const Kaunter = require('../models/Kaunter');
const formidable = require('formidable');

async function helloThere(req, res) {
  res.status(200).json({
    message: 'Hello there',
  });
}

async function registerPT(req, res) {
  const { nama, negeri, daerah, kp } = req.body;
  const newKaunter = new Kaunter({
    nama,
    negeri,
    daerah,
    kp,
  });
  try {
    const kaunter = await newKaunter.save();
    res.status(201).json({
      message: 'PT berjaya ditambah',
      kaunter,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function loginPT(req, res) {
  const { nama } = req.body;
  try {
    const kaunter = await Kaunter.findOne({ nama });
    if (!kaunter) {
      return res.status(401).json({
        message: 'PT tidak ditemui',
      });
    }
    const token = jwt.sign(
      {
        kp,
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );
    res.status(200).json({
      message: 'Login berjaya',
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function getAllPesakit(req, res) {
  try {
    const semuaPesakit = await Umum.find({});
    res.status(200).json({
      message: 'Senarai semua pesakit',
      semuaPesakit,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function saveUmumData(req, res) {
  // const Umumdata = await Umum.create(req.body);
  // console.log(Umumdata);
  // res.status(201).json({ Umumdata });
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: 'Error when saving data',
      });
    }
    const umum = await Umum.create(fields);
    console.log(fields);
    res.status(200).json({ umum });
  });
}

module.exports = {
  helloThere,
  registerPT,
  loginPT,
  getAllPesakit,
  saveUmumData,
};

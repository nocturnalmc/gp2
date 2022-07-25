const Sekolah = require('../models/Sekolah');
const Pemeriksaansekolah = require('../models/Pemeriksaansekolah');
const Rawatansekolah = require('../models/Rawatansekolah');
const Kotaksekolah = require('../models/Kotaksekolah');
const Fasiliti = require('../models/Fasiliti');

// GET /
const getAllPersonSekolahsVanilla = async (req, res) => {
  const { kp } = req.user;
  const fasilitiSekolahs = await Fasiliti.find({
    handler: kp,
    jenisFasiliti: { $in: ['sekolah-rendah', 'sekolah-menengah'] },
  });

  const namaSekolahs = fasilitiSekolahs.reduce(
    (arrNamaSekolahs, singleFasilitiSekolah) => {
      if (!arrNamaSekolahs.includes(singleFasilitiSekolah.nama)) {
        arrNamaSekolahs.push(singleFasilitiSekolah.nama);
      }
      return arrNamaSekolahs.filter((valid) => valid);
    },
    ['']
  );

  const allPersonSekolahs = await Sekolah.find({
    namaSekolah: { $in: [...namaSekolahs] },
  });
  res.status(200).json({ allPersonSekolahs });
};

// GET /:personSekolahId
const getSinglePersonSekolahVanilla = async (req, res) => {
  const {
    params: { id: personSekolahId },
  } = req;

  const singlePersonSekolah = await Sekolah.findOne({ _id: personSekolahId });

  if (!singlePersonSekolah) {
    return res
      .status(404)
      .json({ msg: `No person with id ${personSekolahId}` });
  }

  res.status(200).json({ singlePersonSekolah });
};

// GET /populate
const getAllPersonSekolahsWithPopulate = async (req, res) => {
  const { kp } = req.user;
  const fasilitiSekolahs = await Fasiliti.find({
    handler: kp,
    jenisFasiliti: { $in: ['sekolah-rendah', 'sekolah-menengah'] },
  });

  const namaSekolahs = fasilitiSekolahs.reduce(
    (arrNamaSekolahs, singleFasilitiSekolah) => {
      if (!arrNamaSekolahs.includes(singleFasilitiSekolah.nama)) {
        arrNamaSekolahs.push(singleFasilitiSekolah.nama);
      }
      return arrNamaSekolahs.filter((valid) => valid);
    },
    ['']
  );

  const allPersonSekolahs = await Sekolah.find({
    namaSekolah: { $in: [...namaSekolahs] },
  })
    .populate('pemeriksaanSekolah')
    .populate('rawatanSekolah')
    .populate('kotakSekolah');

  res.status(200).json({ allPersonSekolahs });
};

// GET /populate/:personSekolahId
const getSinglePersonSekolahWithPopulate = async (req, res) => {
  const personSekolahWithPopulate = await Sekolah.findOne({
    _id: req.params.personSekolahId,
  })
    .populate('pemeriksaanSekolah')
    .populate('rawatanSekolah')
    .populate('kotakSekolah');

  res.status(201).json({ personSekolahWithPopulate });
};

// POST /
// will use for ERKM
const createPersonSekolah = async (req, res) => {
  const personSekolah = await Sekolah.create(req.body);

  res.status(201).json({ personSekolah });
};

// set statusRawatan to 'belum selesai' when creating pemeriksaan
// POST /pemeriksaan/:personSekolahId
const createPemeriksaanWithSetPersonSekolah = async (req, res) => {
  // associate negeri, daerah, kp to each person sekolah when creating pemeriksaan
  req.body.createdByNegeri = req.user.negeri;
  req.body.createdByDaerah = req.user.daerah;
  req.body.createdByKp = req.user.kp;

  const pemeriksaanSekolah = await Pemeriksaansekolah.create(req.body);

  // masukkan pemeriksaan ID dalam personSekolah
  const personSekolah = await Sekolah.findOneAndUpdate(
    { _id: req.params.personSekolahId },
    {
      $set: {
        pemeriksaanSekolah: pemeriksaanSekolah._id,
        statusRawatan: 'belum selesai',
      },
    },
    { new: true }
  );

  res.status(201).json({ personSekolah });
};

// POST /rawatan/:personSekolahId
const createRawatanWithPushPersonSekolah = async (req, res) => {
  // associate negeri, daerah & kp to each person sekolah when creating rawatan
  req.body.createdByNegeri = req.user.negeri;
  req.body.createdByDaerah = req.user.daerah;
  req.body.createdByKp = req.user.kp;

  const rawatanSekolah = await Rawatansekolah.create(req.body);

  // masukkan rawatan ID dalam personSekolah
  const personSekolah = await Sekolah.findOneAndUpdate(
    { _id: req.params.personSekolahId },
    {
      $push: { rawatanSekolah: rawatanSekolah._id },
      $set: { statusRawatan: req.body.statusRawatan },
    },
    { new: true }
  );

  res.status(201).json({ personSekolah });
};

// kotak tak handle statusRawatan
// POST /kotak/:personSekolahId
const createKotakWithSetPersonSekolah = async (req, res) => {
  // associate negeri, daerah, kp to each person sekolah when creating kotak
  req.body.createdByNegeri = req.user.negeri;
  req.body.createdByDaerah = req.user.daerah;
  req.body.createdByKp = req.user.kp;

  const kotakSekolah = await Kotaksekolah.create(req.body);

  // masukkan kotak ID dalam personSekolah
  const personSekolah = await Sekolah.findOneAndUpdate(
    { _id: req.params.personSekolahId },
    {
      $set: {
        kotakSekolah: kotakSekolah._id,
      },
    },
    { new: true }
  );

  res.status(201).json({ personSekolah });
};

// reset statusRawatan to 'belum selesai'
// PATCH /pemeriksaan/ubah/:pemeriksaanSekolahId?personSekolahId=
const updatePemeriksaanSekolah = async (req, res) => {
  const updatedSinglePemeriksaan = await Pemeriksaansekolah.findOneAndUpdate(
    { _id: req.params.pemeriksaanSekolahId },
    req.body,
    { new: true }
  );

  if (!updatedSinglePemeriksaan) {
    return res
      .status(404)
      .json({ msg: `No document with id ${req.params.pemeriksaanSekolahId}` });
  }

  await Sekolah.findOneAndUpdate(
    { _id: req.query.personSekolahId },
    { $set: { statusRawatan: 'belum selesai' } }
  );

  res.status(200).json({ updatedSinglePemeriksaan });
};

// kotak tak handle status rawatan
// PATCH /kotak/ubah/:kotakSekolahId
const updateKotakSekolah = async (req, res) => {
  const updatedSingleKotak = await Kotaksekolah.findOneAndUpdate(
    { _id: req.params.kotakSekolahId },
    req.body,
    { new: true }
  );

  if (!updatedSingleKotak) {
    return res
      .status(404)
      .json({ msg: `No document with id ${req.params.kotakSekolahId}` });
  }

  res.status(200).json({ updatedSingleKotak });
};

// query route
const queryPersonSekolah = async (req, res) => {
  const {
    user: { kp },
    query: { namaSekolah, darjah, tingkatan, kelas },
  } = req;
  const queryObject = {};

  if (namaSekolah) {
    queryObject.namaSekolah = namaSekolah;
  }

  if (darjah) {
    queryObject.darjah = darjah;
  }

  if (tingkatan) {
    queryObject.tingkatan = tingkatan;
  }

  if (kelas) {
    queryObject.kelas = kelas;
  }

  const sekolahResultQuery = await Sekolah.find(queryObject)
    .populate('pemeriksaanSekolah')
    .populate('rawatanSekolah')
    .populate('kotakSekolah');

  res.status(200).json({ sekolahResultQuery });
};

module.exports = {
  getAllPersonSekolahsVanilla,
  getSinglePersonSekolahVanilla,
  getAllPersonSekolahsWithPopulate,
  getSinglePersonSekolahWithPopulate,
  createPersonSekolah,
  createPemeriksaanWithSetPersonSekolah,
  createRawatanWithPushPersonSekolah,
  createKotakWithSetPersonSekolah,
  updatePemeriksaanSekolah,
  updateKotakSekolah,
  queryPersonSekolah,
};

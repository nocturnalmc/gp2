const Sekolah = require('../models/Sekolah');

const getAllPersonSekolahs = async (req, res) => {
  const allPersonSekolahs = await Sekolah.find({
    createdByKp: req.user.kp,
  });
  res.status(200).json({ allPersonSekolahs });
};

const getSinglePersonSekolah = async (req, res) => {
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

// this function might not be used since we already has ERKM
const createPersonSekolah = async (req, res) => {
  // associate negeri, daerah & kp to each person sekolah
  req.body.createdByNegeri = req.user.negeri;
  req.body.createdByDaerah = req.user.daerah;
  req.body.createdByKp = req.user.kp;

  const personSekolah = await Sekolah.create(req.body);
  res.status(201).json({ personSekolah });
};

const updatePersonSekolah = async (req, res) => {
  const {
    params: { id: personSekolahId },
  } = req;

  // associate negeri, daerah & kp to each person sekolah for every update
  req.body.createdByNegeri = req.user.negeri;
  req.body.createdByDaerah = req.user.daerah;
  req.body.createdByKp = req.user.kp;

  const updatedSinglePersonSekolah = await Sekolah.findOneAndUpdate(
    { _id: personSekolahId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedSinglePersonSekolah) {
    return res
      .status(404)
      .json({ msg: `No person with id ${personSekolahId}` });
  }

  res.status(200).json({ updatedSinglePersonSekolah });
};

// this function might not be used since we already has ERKM and a person must persist and cannot be deleted
const deletePersonSekolah = async (req, res) => {
  const {
    user: { kp },
    params: { id: personSekolahId },
  } = req;

  const deletedSinglePersonSekolah = await Sekolah.findOneAndRemove({
    _id: personSekolahId,
    createdByKp: kp,
  });

  if (!deletedSinglePersonSekolah) {
    return res
      .status(404)
      .json({ msg: `No person with id ${personSekolahId}` });
  }

  res.status(200).json({ msg: `Deleted person with id ${personSekolahId}` });
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

  const sekolahResultQuery = await Sekolah.find(queryObject);

  res.status(200).json({ sekolahResultQuery });
};

module.exports = {
  getAllPersonSekolahs,
  getSinglePersonSekolah,
  createPersonSekolah,
  updatePersonSekolah,
  deletePersonSekolah,
  queryPersonSekolah,
};

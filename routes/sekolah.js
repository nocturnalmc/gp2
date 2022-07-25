const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/sekolah');

router.route('/').get(getAllPersonSekolahsVanilla).post(createPersonSekolah);
// router.route('/:personSekolahId').get(getSinglePersonSekolahVanilla);
router.route('/populate').get(getAllPersonSekolahsWithPopulate);
router
  .route('/populate/:personSekolahId')
  .get(getSinglePersonSekolahWithPopulate);
router
  .route('/pemeriksaan/:personSekolahId')
  .post(createPemeriksaanWithSetPersonSekolah);
router
  .route('/pemeriksaan/ubah/:pemeriksaanSekolahId')
  .patch(updatePemeriksaanSekolah);
router
  .route('/rawatan/:personSekolahId')
  .post(createRawatanWithPushPersonSekolah);
router.route('/kotak/:personSekolahId').post(createKotakWithSetPersonSekolah);
router.route('/kotak/ubah/:kotakSekolahId').patch(updateKotakSekolah);
module.exports = router;

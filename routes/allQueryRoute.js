const express = require('express');
const router = express.Router();
const { queryPersonUmum } = require('../controllers/umum');
const { queryPersonSekolah } = require('../controllers/sekolah');

router.route('/umum').get(queryPersonUmum);
router.route('/sekolah').get(queryPersonSekolah);

module.exports = router;

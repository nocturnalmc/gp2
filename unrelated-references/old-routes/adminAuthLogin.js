const express = require('express');
const router = express.Router();
const adminAuthLogin = require('../controllers/adminAuthLogin');

router.route('/login').post(adminAuthLogin);

module.exports = router;
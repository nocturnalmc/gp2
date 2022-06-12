const express = require('express');
const router = express.Router();
const identity = require('../controllers/identity');

router.route('/').get(identity);

module.exports = router;

const express = require('express');
const router = express.Router();

const indexcon = require('../controllers/indexController');

router.get('/', indexcon.getAllDataforDashboard);

module.exports = router;

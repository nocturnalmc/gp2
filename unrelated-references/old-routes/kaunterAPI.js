// Base
const express = require('express');
const router = express.Router();

// Controller
const kaunterCon = require('../controllers/kaunterAPI');

// routes
router.get('/', kaunterCon.helloThere);
router.get('/all', kaunterCon.getAllPesakit);

router.post('/register', kaunterCon.registerPT);
router.post('/login', kaunterCon.loginPT);

router.post('/postdata', kaunterCon.saveUmumData);

module.exports = router;

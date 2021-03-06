// Base
const express = require('express');
const router = express.Router();

// Controller
const admincon = require('../controllers/adminController');
const genretcon = require('../controllers/generateRetenController');
const countcon = require('../controllers/countHelper');

// Routes
router.get('/', admincon.loginPage);
router.post('/', admincon.isItOk);
router.get('/home', admincon.test);
router.post('/add', admincon.commitData);
// router.get('/delete/:id', admincon.deleteData);

router.get('/test', admincon.test);

router.get('/taska', admincon.listTaska);
router.post('/taska', admincon.addTaska);
// router.post('/taska/add', admincon.commitData);

router.get('/:id/delete/:id2', admincon.deleteData);

router.get('/tadika', admincon.listTadika);
router.post('/tadika', admincon.addTadika);
// router.post('/tadika/add', admincon.commitData);

router.get('/kp', admincon.listKp);
router.post('/kp', admincon.addKp);
// router.post('/kp/add', admincon.commitData);

router.get('/sr', admincon.listSr);
router.post('/sr', admincon.addSr);
// router.post('/sr/add', admincon.commitData);

router.get('/sm', admincon.listSm);
router.post('/sm', admincon.addSm);
// router.post('/sm/add', admincon.commitData);

router.get('/pg', admincon.listPg);
router.post('/pg', admincon.addPg);
// router.post('/pg/add', admincon.commitPg);

router.post('/search', admincon.searchAll);
router.post('/searchpg', admincon.searchPg);

router.get('/details/:id', admincon.showEntrails);
router.get('/update/:id', admincon.updateFac);
router.post('/update/:id', admincon.updateNow);

router.post('/logout', admincon.logOut);

router.get('/buatreten', countcon.createTOD);

router.get('/ujikaji', countcon.filterbyUmur);

module.exports = router;
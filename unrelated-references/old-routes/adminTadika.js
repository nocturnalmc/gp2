const express = require('express');
const router = express.Router();
const { adminGetAllPersonTadikas, adminGetSinglePersonTadika, adminUpdatePersonTadika, adminDeletePersonTadika } = require('../controllers/adminTadika');

router.route('/').get(adminGetAllPersonTadikas);
router.route('/:id').get(adminGetSinglePersonTadika).patch(adminUpdatePersonTadika).delete(adminDeletePersonTadika);

module.exports = router;
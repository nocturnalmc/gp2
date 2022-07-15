const express = require('express');
const router = express.Router();
const { getAllPersonTadikas, getSinglePersonTadika, createPersonTadika, updatePersonTadika, deletePersonTadika } = require('../controllers/tadika');

router.route('/').get(getAllPersonTadikas).post(createPersonTadika);
router.route('/:id').get(getSinglePersonTadika).patch(updatePersonTadika).delete(deletePersonTadika);

module.exports = router;
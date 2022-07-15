const express = require('express');
const router = express.Router();

const kidsCon = require('../controllers/kidsController');

/* GET users listing. */
router.get('/:id', kidsCon.kid_detail);
router.get('/:id/delete', kidsCon.kiddeleteForm);
router.post('/:id/delete', kidsCon.kiddeletePost);

module.exports = router;

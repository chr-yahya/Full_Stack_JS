const express = require('express');
const router = express.Router();
const { Delete } = require('../controllers/deleteController');
router.get('/', Delete);
module.exports = router;
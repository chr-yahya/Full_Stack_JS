const express = require('express');
const router = express.Router();
const { read } = require('../controllers/readController');
router.get('/', read);
module.exports = router;
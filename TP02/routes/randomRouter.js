const express = require('express');
const router = express.Router();
const { random } = require('../controllers/randomController');

router.get('/', random);
module.exports = router;

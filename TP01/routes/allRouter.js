const express = require('express');
const router = express.Router();
const { home } = require('../controllers/allController');

router.get('/', home);

module.exports = router;

const express = require('express');
const router = express.Router();
const { home } = require('../controllers/homeController');

router.post('/', home);

module.exports = router;

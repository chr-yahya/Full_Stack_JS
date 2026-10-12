const express = require('express');
const router = express.Router();
const { research } = require('../controllers/researchController');

router.get('/', research);

module.exports = router;

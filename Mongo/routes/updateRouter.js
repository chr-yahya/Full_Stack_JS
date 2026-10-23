const express = require('express');
const router = express.Router();
const { update } = require('../controllers/updateController');
router.get('/', update);
module.exports = router;
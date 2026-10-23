const express = require('express');
const router = express.Router();
const { create } = require('../controllers/CreateController');
router.get('/', create);
module.exports = router;

const express = require('express');
const router = express.Router();
const { jokes } = require('../controllers/jokesController');

router.post('/', jokes);
module.exports = router;

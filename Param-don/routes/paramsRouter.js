const express = require('express');
const router = express.Router();
const { user_params } = require('../controllers/paramsController');

router.get('/', user_params);

module.exports = router;

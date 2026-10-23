const express = require('express');
const router = express.Router();
const { form } = require('../controllers/formController');

router.get('/', form);

module.exports = router;

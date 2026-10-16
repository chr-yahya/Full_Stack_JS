const express = require('express');
const router = express.Router();
const { form } = require('../controllers/formController');

router.post('/', form);

module.exports = router;

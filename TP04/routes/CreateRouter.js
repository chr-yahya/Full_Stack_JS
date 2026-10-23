const express = require('express');
const router = express.Router();
const { form } = require('../controllers/formController');
const { create } = require('../controllers/CreateController');
const upload = require('../middleware/upload');

router.get('/', form);
router.post('/', upload.single('image'), create);

module.exports = router;

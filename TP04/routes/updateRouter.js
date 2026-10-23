const express = require('express');
const router = express.Router();
const { update } = require('../controllers/updateController');
const upload = require('../middleware/upload');

router.post('/:id', upload.single('image'), update);

module.exports = router;

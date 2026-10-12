const express = require('express');
const router = express.Router();
const {
    teaching,
    node,
    expressPage,
    php
} = require('../controllers/teachingController');

router.get('/node', node);

router.get('/express', expressPage);

router.get('/php', php);

router.get('/', teaching);

module.exports = router;

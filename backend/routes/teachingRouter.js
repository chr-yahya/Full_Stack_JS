const express = require('express');
const router = express.Router();

router.get('/node', (req, res) => {
    res.render('pages/node');
});

router.get('/express', (req, res) => {
    res.render('pages/express');
});

router.get('/php', (req, res) => {
    res.render('pages/php');
});

router.get('/', (req, res) => {
    res.render('pages/teaching');
});

module.exports = router;

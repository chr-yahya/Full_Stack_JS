const express = require('express');
const router = express.Router();
const { formulaire } = require('../controllers/formulaireController');

router.get('/', formulaire);

module.exports = router;

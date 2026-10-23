const express = require('express');
const router = express.Router();
const { list } = require('../controllers/MoviesController');
const createRouter = require('./CreateRouter');
const deleteRouter = require('./deleteRouter');
const updateRouter = require('./updateRouter');
const readRouter = require('./readRouter');

router.get('/', list);
router.use('/create', createRouter);
router.use('/delete',deleteRouter);
router.use('/update', updateRouter);
router.use('/read',readRouter);
module.exports = router;

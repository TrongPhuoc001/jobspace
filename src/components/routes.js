const express = require('express');
const router = express.Router();

const sampleRouter = require('./sample/route');

router.use('/sample', sampleRouter);

module.exports = router;

// routes/distanceRoutes.js

const express = require('express');
const router = express.Router();
const distanceController = require('../controllers/distanceController');

router.post('/', distanceController.getDistance);

module.exports = router;

// logisticsRoutes.js
const express = require('express');
const router = express.Router();
const logisticsController = require('../Controllers/logisticsController'); // Import the logistics controller

// Create a new logistics record
router.post('/', logisticsController.createLogistics);

// Get all logistics records
router.get('/', logisticsController.fetchAllLogistics);

// Get logistics by ID
router.get('/:id', logisticsController.getLogisticsById);

// Update logistics record
router.put('/:id', logisticsController.updateLogistics);

// Delete logistics record
router.delete('/:id', logisticsController.deleteLogistics);

module.exports = router; // Export the router

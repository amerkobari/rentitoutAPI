// securityRoutes.js
const express = require('express');
const router = express.Router();
const securityController = require('../Controllers/securityController'); // Use a relative path

// Create a new deposit
router.post('/', securityController.createDeposit);

// Get all deposits
router.get('/', securityController.getAllDeposits);

// Get deposit by ID
router.get('/:id', securityController.getDepositById);

// Update deposit by ID
router.put('/:id', securityController.updateDeposit);

// Delete deposit by ID
router.delete('/:id', securityController.deleteDeposit);

module.exports = router;

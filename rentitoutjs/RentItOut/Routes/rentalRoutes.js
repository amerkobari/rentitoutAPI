// rentalRoutes.js
const express = require('express');
const router = express.Router();
const rentalController = require('../Controllers/rentalController'); // Update path as necessary

// Create a new rental record
router.post('/', rentalController.createRental);

// Get all rental records
router.get('/', rentalController.getAllRentals);

// Get rental by ID
router.get('/:id', rentalController.getRentalById);

// Update rental by ID
router.put('/:id', rentalController.updateRental);

// Delete rental by ID
router.delete('/:id', rentalController.deleteRental);

module.exports = router;

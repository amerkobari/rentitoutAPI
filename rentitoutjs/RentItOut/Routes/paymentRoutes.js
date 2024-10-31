// paymentRoutes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../Controllers/paymentController'); // Import the payment controller

// Create a new payment record
router.post('/', paymentController.createPayment);

// Get all payment records
router.get('/', paymentController.fetchAllPayments);

// Get payment by ID
router.get('/:id', paymentController.getPaymentById);

// Update payment record
router.put('/:id', paymentController.updatePayment);

// Delete payment record
router.delete('/:id', paymentController.deletePayment);

module.exports = router; // Export the router

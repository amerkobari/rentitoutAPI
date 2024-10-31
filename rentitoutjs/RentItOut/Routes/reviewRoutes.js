// reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../Controllers/reviewController'); // Use a relative path

// Create a new review
router.post('/', reviewController.createReview);

// Get all reviews
router.get('/', reviewController.getAllReviews);

// Get review by ID
router.get('/:id', reviewController.getReviewById);

// Update review by ID
router.put('/:id', reviewController.updateReview);

// Delete review by ID
router.delete('/:id', reviewController.deleteReview);

module.exports = router;

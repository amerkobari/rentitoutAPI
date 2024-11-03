// reviewController.js
const reviewModel = require('../Models/review'); // Adjust the path if necessary

// Create a new review
const createReview = (req, res) => {
    const reviewData = req.body;
    reviewModel.createReview(reviewData, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ message: 'Review created successfully', reviewId: result.insertId });
    });
};

// Get all reviews
const getAllReviews = (req, res) => {
    reviewModel.getAllReviews((err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json(results);
    });
};

// Get review by ID
const getReviewById = (req, res) => {
    const reviewId = req.params.id;
    reviewModel.getReviewById(reviewId, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (!result) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(result);
    });
};

// Update review by ID
const updateReview = (req, res) => {
    const reviewId = req.params.id;
    const reviewData = req.body;
    reviewModel.updateReview(reviewId, reviewData, (err) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: 'Review updated successfully' });
    });
};

// Delete review by ID
const deleteReview = (req, res) => {
    const reviewId = req.params.id;
    reviewModel.deleteReview(reviewId, (err) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: 'Review deleted successfully' });
    });
};

module.exports = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview
};
// reviewModel.js
const connection = require('../Config/db'); // Your database connection file

// Create a new review
exports.createReview = (reviewData, callback) => {
    const query = `INSERT INTO review (rentalId, reviewerId, rating, comment) VALUES (?, ?, ?, ?)`;
    connection.query(query, [reviewData.rentalId, reviewData.reviewerId, reviewData.rating, reviewData.comment], callback);
};

// Get all reviews
exports.getAllReviews = (callback) => {
    const query = `SELECT * FROM review`;
    connection.query(query, callback);
};

// Get review by ID
exports.getReviewById = (reviewId, callback) => {
    const query = `SELECT * FROM review WHERE reviewId = ?`;
    connection.query(query, [reviewId], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]); // Return the first record if found
    });
};

// Update review by ID
exports.updateReview = (reviewId, reviewData, callback) => {
    const query = `UPDATE review SET rentalId = ?, reviewerId = ?, rating = ?, comment = ? WHERE reviewId = ?`;
    connection.query(query, [reviewData.rentalId, reviewData.reviewerId, reviewData.rating, reviewData.comment, reviewId], callback);
};

// Delete review by ID
exports.deleteReview = (reviewId, callback) => {
    const query = `DELETE FROM review WHERE reviewId = ?`;
    connection.query(query, [reviewId], callback);
};

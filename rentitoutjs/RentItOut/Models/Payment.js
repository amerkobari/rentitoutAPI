// paymentModel.js
const connection = require('../Config/db'); // Import the database connection

// Create a new payment record
const createPayment = (paymentData, callback) => {
    const { paymentId,rentalId, userId, totalAmount, insuranceFee, status, creationTime } = paymentData;
    connection.query(
        'INSERT INTO payment (paymentId,rentalId, userId, totalAmount, insuranceFee, status, creationTime) VALUES (?,?, ?, ?, ?, ?, ?)',
        [paymentId,rentalId, userId, totalAmount, insuranceFee, status, creationTime],
        callback
    );
};

// Get all payment records
const getAllPayments = (callback) => {
    connection.query('SELECT * FROM payment', callback);
};

// Get payment by ID
const getPaymentById = (paymentId, callback) => {
    connection.query('SELECT * FROM payment WHERE paymentId = ?', [paymentId], callback);
};

// Update payment record
const updatePayment = (paymentId, paymentData, callback) => {
    const { rentalId, userId, totalAmount, insuranceFee, status, creationTime } = paymentData;
    connection.query(
        'UPDATE payment SET rentalId = ?, userId = ?, totalAmount = ?, insuranceFee = ?, status = ?, creationTime = ? WHERE paymentId = ?',
        [rentalId, userId, totalAmount, insuranceFee, status, creationTime, paymentId],
        callback
    );
};

// Delete payment record
const deletePayment = (paymentId, callback) => {
    connection.query('DELETE FROM payment WHERE paymentId = ?', [paymentId], callback);
};

module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment
};

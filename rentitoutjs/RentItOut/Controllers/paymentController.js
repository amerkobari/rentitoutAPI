// paymentController.js
const paymentModel = require('../Models/payment'); // Import the payment model

// Create a new payment record
const createPayment = (req, res) => {
    const paymentData = req.body;
    paymentModel.createPayment(paymentData, (err, result) => {
        if (err) {
            console.error('Error creating payment:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(201).json({ message: 'Payment record created successfully' });
    });
};

// Get all payment records
const fetchAllPayments = (req, res) => {
    paymentModel.getAllPayments((err, results) => {
        if (err) {
            console.error('Error fetching payments:', err);
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
};

// Get payment by ID
const getPaymentById = (req, res) => {
    const paymentId = req.params.id;
    paymentModel.getPaymentById(paymentId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json(result);
    });
};

// Update payment record
const updatePayment = (req, res) => {
    const paymentId = req.params.id;
    const paymentData = req.body;
    paymentModel.updatePayment(paymentId, paymentData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'Payment record updated successfully' });
    });
};

// Delete payment record
const deletePayment = (req, res) => {
    const paymentId = req.params.id;
    paymentModel.deletePayment(paymentId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'Payment record deleted successfully' });
    });
};

module.exports = {
    createPayment,
    fetchAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment
};

// securityController.js
const securityModel = require('../Models/securityModel'); // Adjust the path if necessary

// Create a new deposit
exports.createDeposit = (req, res) => {
    const depositData = req.body;
    securityModel.createDeposit(depositData, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ message: 'Deposit created successfully', depositId: result.insertId });
    });
};

// Get all deposits
exports.getAllDeposits = (req, res) => {
    securityModel.getAllDeposits((err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json(results);
    });
};

// Get deposit by ID
exports.getDepositById = (req, res) => {
    const depositId = req.params.id;
    securityModel.getDepositById(depositId, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (!result) return res.status(404).json({ message: 'Deposit not found' });
        res.status(200).json(result);
    });
};

// Update deposit by ID
exports.updateDeposit = (req, res) => {
    const depositId = req.params.id;
    const depositData = req.body;
    securityModel.updateDeposit(depositId, depositData, (err) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: 'Deposit updated successfully' });
    });
};

// Delete deposit by ID
exports.deleteDeposit = (req, res) => {
    const depositId = req.params.id;
    securityModel.deleteDeposit(depositId, (err) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: 'Deposit deleted successfully' });
    });
};

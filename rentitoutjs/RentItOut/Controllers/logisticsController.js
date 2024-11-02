
// logisticsController.js
const logisticsModel = require('../Models/logistics'); // Import the logistics model

// Create a new logistics record
const createLogistics = (req, res) => {
    const logisticsData = req.body;
    logisticsModel.createLogistics(logisticsData, (err, result) => {
        if (err) {
            console.error('Error creating logistics:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(201).json({ message: 'Logistics record created successfully' });
    });
};

// Get all logistics records
const fetchAllLogistics = (req, res) => {
    logisticsModel.getAllLogistics((err, results) => {
        if (err) {
            console.error('Error fetching logistics:', err);
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
};

// Get logistics by ID
const getLogisticsById = (req, res) => {
    const logisticsId = req.params.id;
    logisticsModel.getLogisticsById(logisticsId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json(result);
    });
};

// Update logistics record
const updateLogistics = (req, res) => {
    const logisticsId = req.params.id;
    const logisticsData = req.body;
    logisticsModel.updateLogistics(logisticsId, logisticsData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'Logistics record updated successfully' });
    });
};

// Delete logistics record
const deleteLogistics = (req, res) => {
    const logisticsId = req.params.id;
    logisticsModel.deleteLogistics(logisticsId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'Logistics record deleted successfully' });
    });
};

module.exports = {
    createLogistics,
    fetchAllLogistics,
    getLogisticsById,
    updateLogistics,
    deleteLogistics
};

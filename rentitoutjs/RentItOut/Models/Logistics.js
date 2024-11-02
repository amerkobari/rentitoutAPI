// logisticsModel.js
const connection = require('../Config/db'); // Import the database connection

// Create a new logistics record
const createLogistics = (logisticsData, callback) => {
    const {logisticsId, rentalId, pickupType, pickupLocation, fees, pickupDate, returnDate } = logisticsData;
    connection.query(
        'INSERT INTO logistics (logisticsId,rentalId, pickupType, pickupLocation, fees, pickupDate, returnDate) VALUES (?,?, ?, ?, ?, ?, ?)',
        [logisticsId,rentalId, pickupType, pickupLocation, fees, pickupDate, returnDate],
        callback
    );
};

// Get all logistics records
const getAllLogistics = (callback) => {
    connection.query('SELECT * FROM logistics', callback);
};

// Get logistics by ID
const getLogisticsById = (logisticsId, callback) => {
    connection.query('SELECT * FROM logistics WHERE logisticsId = ?', [logisticsId], callback);
};

// Update logistics record
const updateLogistics = (logisticsId, logisticsData, callback) => {
    const { rentalId, pickupType, pickupLocation, fees, pickupDate, returnDate } = logisticsData;
    connection.query(
        'UPDATE logistics SET rentalId = ?, pickupType = ?, pickupLocation = ?, fees = ?, pickupDate = ?, returnDate = ? WHERE logisticsId = ?',
        [rentalId, pickupType, pickupLocation, fees, pickupDate, returnDate, logisticsId],
        callback
    );
};

// Delete logistics record
const deleteLogistics = (logisticsId, callback) => {
    connection.query('DELETE FROM logistics WHERE logisticsId = ?', [logisticsId], callback);
};

module.exports = {
    createLogistics,
    getAllLogistics,
    getLogisticsById,
    updateLogistics,
    deleteLogistics
};

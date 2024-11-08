// rentalModel.js
const connection = require('../Config/db'); // Your database connection file

// Create a new rental record
const createRental = (rentalData, callback) => {
    const query = `INSERT INTO rental (itemId, renterId, rentStart, rentEnd, totalPrice) VALUES (?, ?, ?, ?, ?)`;
    connection.query(query, [rentalData.itemId, rentalData.renterId, rentalData.rentStart, rentalData.rentEnd, rentalData.totalPrice], callback);
};

// Get all rental records
const getAllRentals = (callback) => {
    const query = `SELECT * FROM rental`;
    connection.query(query, callback);
};

// Get rental by ID
const getRentalById = (rentalId, callback) => {
    const query = `SELECT * FROM rental WHERE rentalId = ?`;
    connection.query(query, [rentalId], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]); // Return the first record if found
    });
};

// Update rental by ID
const updateRental = (rentalId, rentalData, callback) => {
    const query = `UPDATE rental SET itemId = ?, renterId = ?, rentStart = ?, rentEnd = ?, totalPrice = ? WHERE rentalId = ?`;
    connection.query(query, [rentalData.itemId, rentalData.renterId, rentalData.rentStart, rentalData.rentEnd, rentalData.totalPrice, rentalId], callback);
};

// Delete rental by ID
const deleteRental = (rentalId, callback) => {
    const query = `DELETE FROM rental WHERE rentalId = ?`;
    connection.query(query, [rentalId], callback);
};

module.exports = {
    createRental,
    getAllRentals,
    getRentalById,
    updateRental,
    deleteRental
};

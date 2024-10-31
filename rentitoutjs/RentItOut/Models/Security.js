// securityModel.js
const connection = require('../Config/db'); // Your database connection file

// Create a new deposit
exports.createDeposit = (depositData, callback) => {
    const query = `INSERT INTO security (rentalId, amount, status, held_date) VALUES (?, ?, ?, ?)`;
    connection.query(query, [depositData.rentalId, depositData.amount, depositData.status, depositData.held_date], callback);
};

// Get all deposits
exports.getAllDeposits = (callback) => {
    const query = `SELECT * FROM security`;
    connection.query(query, callback);
};

// Get deposit by ID
exports.getDepositById = (depositId, callback) => {
    const query = `SELECT * FROM security WHERE depositId = ?`;
    connection.query(query, [depositId], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]); // Return the first record if found
    });
};

// Update deposit by ID
exports.updateDeposit = (depositId, depositData, callback) => {
    const query = `UPDATE security SET rentalId = ?, amount = ?, status = ?, held_date = ? WHERE depositId = ?`;
    connection.query(query, [depositData.rentalId, depositData.amount, depositData.status, depositData.held_date, depositId], callback);
};

// Delete deposit by ID
exports.deleteDeposit = (depositId, callback) => {
    const query = `DELETE FROM security WHERE depositId = ?`;
    connection.query(query, [depositId], callback);
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
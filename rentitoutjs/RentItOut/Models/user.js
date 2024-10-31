// userModel.js
const connection = require('../Config/db'); // Import the database connection

// Create a new user
const createUser = (userData, callback) => {
    const { userId, name, email, password, phone, verified } = userData;
    connection.query(
        'INSERT INTO user (userid, name, email, password, phone, verified) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, name, email, password, phone, verified],
        callback
    );
};

// Get all users
const getAllUsers = (callback) => {
    connection.query('SELECT * FROM user', callback);
};

// Get user by ID
const getUserById = (userId, callback) => {
    connection.query('SELECT * FROM user WHERE userid = ?', [userId], callback);
};

// Update user
const updateUser = (userId, userData, callback) => {
    const { name, email, password, phone, verified } = userData;
    connection.query(
        'UPDATE user SET name = ?, email = ?, password = ?, phone = ?, verified = ? WHERE userid = ?',
        [name, email, password, phone, verified, userId],
        callback
    );
};

// Delete user
const deleteUser = (userId, callback) => {
    connection.query('DELETE FROM user WHERE userid = ?', [userId], callback);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};

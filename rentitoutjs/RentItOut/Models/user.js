const connection = require('../Config/db');
const crypto = require('crypto');

// Create a new user with a verification token
const createUser = (userData, callback) => {
    const { userId, name, email, password, phone, verified } = userData;
    const verificationToken = crypto.randomBytes(32).toString('hex'); // Generate a token

    connection.query(
        'INSERT INTO user (userid, name, email, password, phone, verified, verificationToken) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [userId, name, email, password, phone, verified, verificationToken],
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

// Find a user by verification token
const findUserByToken = (token, callback) => {
    connection.query('SELECT * FROM user WHERE verificationToken = ?', [token], callback);
};

// Verify a user's email
const verifyUser = (userId, callback) => {
    connection.query(
        'UPDATE user SET verified = ?, verificationToken = NULL WHERE userid = ?',
        [true, userId],
        callback
    );
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    findUserByToken,
    verifyUser
};

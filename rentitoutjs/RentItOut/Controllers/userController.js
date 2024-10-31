// userController.js
const userModel = require('../Models/user');

// Register a new user
const registerUser = (req, res) => {
    const userData = req.body;
    userModel.createUser(userData, (err, result) => {
        if (err) {
            console.error('Error registering user:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
};

// Get all users
const fetchAllUsers = (req, res) => {
    userModel.getAllUsers((err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
};

// Get user by ID
const getUserById = (req, res) => {
    const userId = req.params.id;
    userModel.getUserById(userId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json(result);
    });
};

// Update user
const updateUser = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    userModel.updateUser(userId, userData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
};

// Delete user
const deleteUser = (req, res) => {
    const userId = req.params.id;
    userModel.deleteUser(userId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

module.exports = {
    registerUser,
    fetchAllUsers,
    getUserById,
    updateUser,
    deleteUser
};

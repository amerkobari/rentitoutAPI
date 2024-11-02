const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController'); // Use a relative path

// User registration endpoint
router.post('/', userController.registerUser);

// Email verification endpoint
router.get('/verify/:token', userController.verifyUserEmail);

// Get all users endpoint
router.get('/', userController.fetchAllUsers);

// Get user by ID
router.get('/:id', userController.getUserById);

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router; // Export the router

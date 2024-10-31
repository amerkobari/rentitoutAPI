// categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryController'); // Import the category controller

// Create a new category
router.post('/', categoryController.createCategory);

// Get all categories
router.get('/', categoryController.fetchAllCategories);

// Get category by ID
router.get('/:id', categoryController.getCategoryById);

// Update category
router.put('/:id', categoryController.updateCategory);

// Delete category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router; // Export the router

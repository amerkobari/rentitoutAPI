// itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/itemController');

// Create a new item
router.post('/', itemController.createItem);

// Fetch all items
router.get('/', itemController.getAllItems);

// Get item by ID
router.get('/:id', itemController.getItemById);

// Update an item
router.put('/:id', itemController.updateItem);

// Delete an item
router.delete('/:id', itemController.deleteItem);

module.exports = router;

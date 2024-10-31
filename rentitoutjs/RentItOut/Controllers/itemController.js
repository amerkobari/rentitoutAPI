// itemController.js
const itemModel = require('../Models/item');

// Create a new item
const createItem = (req, res) => {
    const itemData = req.body;
    itemModel.createItem(itemData, (err, result) => {
        if (err) {
            console.error('Error creating item:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(201).json({ message: 'Item created successfully', id: result.insertId });
    });
};

// Fetch all items
const getAllItems = (req, res) => {
    itemModel.getAllItems((err, results) => {
        if (err) {
            console.error('Error fetching items:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json(results);
    });
};

// Get item by ID
const getItemById = (req, res) => {
    const id = req.params.id;
    itemModel.getItemById(id, (err, result) => {
        if (err) {
            console.error('Error fetching item:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(result[0]);
    });
};

// Update an item
const updateItem = (req, res) => {
    const id = req.params.id;
    const itemData = req.body;
    itemModel.updateItem(id, itemData, (err, result) => {
        if (err) {
            console.error('Error updating item:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated successfully' });
    });
};

// Delete an item
const deleteItem = (req, res) => {
    const id = req.params.id;
    itemModel.deleteItem(id, (err, result) => {
        if (err) {
            console.error('Error deleting item:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    });
};

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
};

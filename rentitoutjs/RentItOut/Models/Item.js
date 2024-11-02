// itemModel.js
const connection = require('../Config/db'); // Import the database connection

// Create a new item
const createItem = (itemData, callback) => {
    const { itemId,userId, title, description, category, price, available } = itemData;
    const query = 'INSERT INTO item (itemId,userId, title, description, category, price, available) VALUES (?,?, ?, ?, ?, ?, ?)';
    connection.query(query, [itemId,userId, title, description, category, price, available], callback);
};

// Fetch all items
const getAllItems = (callback) => {
    const query = 'SELECT * FROM item';
    connection.query(query, callback);
};

// Get item by ID
const getItemById = (id, callback) => {
    const query = 'SELECT * FROM item WHERE itemID = ?';
    connection.query(query, [id], callback);
};

// Update an item
const updateItem = (id, itemData, callback) => {
    const { title, description, category, price, available } = itemData;
    const query = 'UPDATE item SET title = ?, description = ?, category = ?, price = ?, available = ? WHERE idItem = ?';
    connection.query(query, [title, description, category, price, available, id], callback);
};

// Delete an item
const deleteItem = (id, callback) => {
    const query = 'DELETE FROM item WHERE idItem = ?';
    connection.query(query, [id], callback);
};

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
};

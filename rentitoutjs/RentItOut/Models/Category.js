// categoryModel.js
const connection = require('../Config/db'); // Import the database connection

// Create a new category
const createCategory = (categoryData, callback) => {
    const { name, description } = categoryData;
    connection.query(
        'INSERT INTO category (name, description) VALUES (?, ?)',
        [name, description],
        callback
    );
};

// Get all categories
const getAllCategories = (callback) => {
    connection.query('SELECT * FROM category', callback);
};

// Get category by ID
const getCategoryById = (catId, callback) => {
    connection.query('SELECT * FROM category WHERE catId = ?', [catId], callback);
};

// Update category
const updateCategory = (catId, categoryData, callback) => {
    const { name, description } = categoryData;
    connection.query(
        'UPDATE category SET name = ?, description = ? WHERE catId = ?',
        [name, description, catId],
        callback
    );
};

// Delete category
const deleteCategory = (catId, callback) => {
    connection.query('DELETE FROM category WHERE catId = ?', [catId], callback);
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};



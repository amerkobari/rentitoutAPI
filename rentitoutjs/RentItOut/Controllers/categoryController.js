// categoryController.js
const categoryModel = require('../Models/categoryModel'); // Import the category model

// Create a new category
const createCategory = (req, res) => {
    const categoryData = req.body;
    categoryModel.createCategory(categoryData, (err, result) => {
        if (err) {
            console.error('Error creating category:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(201).json({ message: 'Category created successfully' });
    });
};

// Get all categories
const fetchAllCategories = (req, res) => {
    categoryModel.getAllCategories((err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
};

// Get category by ID
const getCategoryById = (req, res) => {
    const catId = req.params.id;
    categoryModel.getCategoryById(catId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json(result);
    });
};

// Update category
const updateCategory = (req, res) => {
    const catId = req.params.id;
    const categoryData = req.body;
    categoryModel.updateCategory(catId, categoryData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'Category updated successfully' });
    });
};

// Delete category
const deleteCategory = (req, res) => {
    const catId = req.params.id;
    categoryModel.deleteCategory(catId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    });
};

module.exports = {
    createCategory,
    fetchAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};

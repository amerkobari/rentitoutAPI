// rentalController.js
const rentalModel = require('../Models/rental'); // Adjust the path if needed

// Create a new rental record
const createRental = (req, res) => {
    const rentalData = req.body;
    rentalModel.createRental(rentalData, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ message: 'Rental record created successfully', rentalId: result.insertId });
    });
};

// Get all rental records
const getAllRentals = (req, res) => {
    rentalModel.getAllRentals((err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json(results);
    });
};

// Get rental by ID
const getRentalById = (req, res) => {
    const rentalId = req.params.id;
    rentalModel.getRentalById(rentalId, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (!result) return res.status(404).json({ message: 'Rental not found' });
        res.status(200).json(result);
    });
};

// Update rental by ID
const updateRental = (req, res) => {
    const rentalId = req.params.id;
    const rentalData = req.body;
    rentalModel.updateRental(rentalId, rentalData, (err) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: 'Rental record updated successfully' });
    });
};

// Delete rental by ID
const deleteRental = (req, res) => {
    const rentalId = req.params.id;
    rentalModel.deleteRental(rentalId, (err) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(200).json({ message: 'Rental record deleted successfully' });
    });
};

module.exports = {
    createRental,
    getAllRentals,
    getRentalById,
    updateRental,
    deleteRental
};
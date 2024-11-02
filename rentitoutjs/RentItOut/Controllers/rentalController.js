// rentalController.js
const rentalModel = require('../Models/rental');
const notificationModel = require('../Models/notification');
const {getAllRentals, getRentalById, deleteRental} = require("../Models/Rental"); // Import notification model

// Create a new rental record and notify user
const createRental = (req, res) => {
    const rentalData = req.body;
    rentalModel.createRental(rentalData, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });

        // Notify user about booking confirmation
        const notificationData = {
            userId: rentalData.renterId,
            message: `Booking confirmed for item ${rentalData.itemId}`,
            type: 'booking_confirmation',
            status: 'unread',
            createdAt: new Date()
        };
        notificationModel.createNotification(notificationData, (notifErr) => {
            if (notifErr) console.error('Error creating notification:', notifErr);
        });

        res.status(201).json({ message: 'Rental record created successfully', rentalId: result.insertId });
    });
};

// Update rental by ID and notify user of any changes
const updateRental = (req, res) => {
    const rentalId = req.params.id;
    const rentalData = req.body;
    rentalModel.updateRental(rentalId, rentalData, (err) => {
        if (err) return res.status(500).json({ message: err.message });

        // Notify user about rental update
        const notificationData = {
            userId: rentalData.renterId,
            message: `Your rental for item ${rentalData.itemId} has been updated.`,
            type: 'rental_update',
            status: 'unread',
            createdAt: new Date()
        };
        notificationModel.createNotification(notificationData, (notifErr) => {
            if (notifErr) console.error('Error creating notification:', notifErr);
        });

        res.status(200).json({ message: 'Rental record updated successfully' });
    });
};

module.exports = {
    createRental,
    getAllRentals,
    getRentalById,
    updateRental,
    deleteRental
};

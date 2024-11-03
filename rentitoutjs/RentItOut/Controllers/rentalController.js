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
const notificationController = require('../Controllers/notificationController');

// Create a new rental record
const createRental = (req, res) => {
    const rentalData = req.body;
    rentalModel.createRental(rentalData, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });

        // Send booking confirmation email
        notificationController.sendBookingConfirmation(rentalData.userEmail, rentalData);

        res.status(201).json({ message: 'Rental record created successfully', rentalId: result.insertId });
    });
};

// Example of sending an expiry reminder email (could be triggered by a scheduler)
const sendExpiryReminder = (rentalData) => {
    notificationController.sendExpiryReminder(rentalData.userEmail, rentalData);
};


module.exports = {
    createRental,
    getAllRentals,
    getRentalById,
    updateRental,
    deleteRental
};

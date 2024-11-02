// notificationController.js
const notificationModel = require('../Models/notification'); // Import the notification model

// Create a new notification
const createNotification = (req, res) => {
    const notificationData = req.body;
    notificationModel.createNotification(notificationData, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating notification' });
        res.status(201).json({ message: 'Notification created successfully' });
    });
};

// Get notifications for a user
const getNotificationsByUserId = (req, res) => {
    const userId = req.params.userId;
    notificationModel.getNotificationsByUserId(userId, (err, results) => {
        if (err) return res.status(500).json({ message: 'Error fetching notifications' });
        res.status(200).json(results);
    });
};

module.exports = {
    createNotification,
    getNotificationsByUserId,
};

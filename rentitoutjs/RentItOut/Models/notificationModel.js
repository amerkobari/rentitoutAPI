// notificationModel.js
const connection = require('../Config/db'); // Import the database connection

// Create a new notification record
const createNotification = (notificationData, callback) => {
    const { userId, message, type, status, createdAt } = notificationData;
    const query = 'INSERT INTO notifications (userId, message, type, status, createdAt) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [userId, message, type, status, createdAt], callback);
};

// Get notifications for a specific user
const getNotificationsByUserId = (userId, callback) => {
    const query = 'SELECT * FROM notifications WHERE userId = ? ORDER BY createdAt DESC';
    connection.query(query, [userId], callback);
};

module.exports = {
    createNotification,
    getNotificationsByUserId,
};

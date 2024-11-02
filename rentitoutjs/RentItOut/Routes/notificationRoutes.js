// notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../Controllers/notificationController');

// Create a new notification (for testing purposes)
router.post('/', notificationController.createNotification);

// Get notifications for a specific user
router.get('/:userId', notificationController.getNotificationsByUserId);

module.exports = router;

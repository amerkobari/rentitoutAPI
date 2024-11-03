const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use other services like Outlook, Yahoo, or configure SMTP
    auth: {
        user: process.env.EMAIL_USER, // Set these in your environment variables
        pass: process.env.EMAIL_PASS
    }
});

// Function to send a booking confirmation email
const sendBookingConfirmation = (userEmail, rentalDetails) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Booking Confirmation',
        text: `Your booking for ${rentalDetails.itemName} has been confirmed. Rental starts on ${rentalDetails.rentStart} and ends on ${rentalDetails.rentEnd}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Booking confirmation email sent:', info.response);
        }
    });
};

// Function to send a rental expiry reminder email
const sendExpiryReminder = (userEmail, rentalDetails) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Rental Expiry Reminder',
        text: `Your rental for ${rentalDetails.itemName} is ending on ${rentalDetails.rentEnd}. Please return it on time to avoid additional charges.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Expiry reminder email sent:', info.response);
        }
    });
};

module.exports = {
    sendBookingConfirmation,
    sendExpiryReminder
};

const userModel = require('../Models/user');
const nodemailer = require('nodemailer');

// Register a new user and send verification email
const registerUser = (req, res) => {
    const userData = req.body;
    userModel.createUser(userData, (err, result) => {
        if (err) {
            console.error('Error registering user:', err.message);
            return res.status(500).json({ message: 'An error occurred' });
        }

        // Send the verification email
        const verificationToken = userData.verificationToken; // Token from userModel
        const verificationLink = `http://localhost:3000/verify/${verificationToken}`;

        // Configure the mail transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'rentitoutco@gmail.com',
                pass: 'yooghhahjavtasqr'
            }
        });

        const mailOptions = {
            from: 'rentitoutco@gmail.com',
            to: userData.email,
            subject: 'Email Verification',
            text: `Please verify your email by clicking the following link: ${verificationLink}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Failed to send verification email' });
            }
            res.status(201).json({ message: 'User registered successfully. Please verify your email.' });
        });
    });
};

// Verify user email
const verifyUserEmail = (req, res) => {
    const token = req.params.token;
    userModel.findUserByToken(token, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        userModel.verifyUser(user.userid, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'An error occurred' });
            }
            res.status(200).json({ message: 'Email verified successfully' });
        });
    });
};

// Get all users
const fetchAllUsers = (req, res) => {
    userModel.getAllUsers((err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
};

// Get user by ID
const getUserById = (req, res) => {
    const userId = req.params.id;
    userModel.getUserById(userId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json(result);
    });
};

// Update user
const updateUser = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    userModel.updateUser(userId, userData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
};

// Delete user
const deleteUser = (req, res) => {
    const userId = req.params.id;
    userModel.deleteUser(userId, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'An error occurred' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

module.exports = {
    registerUser,
    verifyUserEmail,
    fetchAllUsers,
    getUserById,
    updateUser,
    deleteUser
};

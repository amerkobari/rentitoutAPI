const express = require('express');

const router = express.Router();



// User registration endpoint
router.post('/', (req, res) => {
    const userId = req.body.userId;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const verified = req.body.verified;

    connection.query(
        'INSERT INTO user (userid, name, email, password, phone, verified) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, name, email, password, phone, verified],
        (err, result) => {
            if (err) {
                console.error('Error registering user:', err.message);
                res.status(500).json({ message: 'An error occurred' });
                return;
            }
            res.status(201).json({ message: 'User registered successfully' });
        }
    );
});

// Get all users endpoint
router.get('/', (req, res) => {
    const query = 'SELECT * FROM user'; // Adjust the query to match your table structure
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send(err);
        }
        res.status(200).json(results); // Send the results as JSON
    });
});

module.exports = router; // Export the router

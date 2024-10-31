const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../rentitoutjs/RentItOut/Models/user'); // Import user routes
const app = express();
const mysql = require('mysql2');


// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',        // Your database host
    user: 'root',     // Your database username
    password: 'Aaa98981119@', // Your database password
    database: 'mydb'  // Your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});



// Middleware to parse JSON
app.use(bodyParser.json());

// Use the user routes
app.use('/user', userRoutes); // Prefix user routes with /user

// Start the server
const PORT = 3000; // You can change this if necessary
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

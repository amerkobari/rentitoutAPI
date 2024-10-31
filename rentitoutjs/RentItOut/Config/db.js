// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',        // Your database host
    user: 'root',             // Your database username
    password: 'Aaa98981119@', // Your database password
    database: 'mydb'         // Your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

module.exports = connection; // Export the connection

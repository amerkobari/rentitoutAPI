const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./RentItOut/Routes/userRoutes');
const itemRoutes = require('./RentItOut/Routes/itemRoutes');
const categoryRoutes = require('./RentItOut/Routes/categoryRoutes');
const logisticsRoutes = require('./RentItOut/Routes/logisticsRoutes');
const paymentRoutes = require('./RentItOut/Routes/paymentRoutes');
const rentalRoutes = require('./RentItOut/Routes/rentalRoutes');
const reviewRoutes = require('./RentItOut/Routes/reviewRoutes');
const securityRoutes = require('./RentItOut/Routes/securityRoutes');
// Use a relative path
const mysql = require('mysql2');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Use the user routes
app.use('/user', userRoutes); // Prefix user routes with /user
app.use('/item', itemRoutes);
app.use('/category', categoryRoutes);
app.use('/logistics', logisticsRoutes);
app.use('/payment', paymentRoutes);
app.use('/rental', rentalRoutes);
app.use('/review', reviewRoutes);
app.use('/security', securityRoutes);



// Start the server
const PORT = 3000; // You can change this if necessary
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

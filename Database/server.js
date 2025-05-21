const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/dbconnect'); // Database connection
const billRoutes = require('./Routes/BillRoutes'); // Bill routes
const mppRoutes = require('./Routes/MPPRoutes'); // MPP routes

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Health Check Endpoint
app.get('/', (req, res) => {
    res.send('RaiseIT API is running');
});

// Route Registrations
app.use('/api/bills', billRoutes); // Routes for bills
app.use('/api/mpps', mppRoutes);   // Routes for MPPs

// Start the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


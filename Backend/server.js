require('dotenv').config();
console.log('DBG Startup: DBAPI_URL =', process.env.DBAPI_URL);

// Core imports
const express = require('express');
const cors = require('cors'); // For handling CORS
const billsRoutes = require('./Routes/billsRoutes');
const mppRoutes =require('./Routes/mppRoutes')
const newsRoutes = require('./Routes/newsRoutes'); 
// Initialize the Express app
const app = express();

// Middleware
app.use(cors({ // Enable CORS with specific settings
  origin: "http://localhost:5173", // Frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], // Include 'Authorization' for protected routes
}));

app.use(express.json()); // Parse JSON request bodies

// Base routes
app.use('/api/bills', billsRoutes); // Routes for bills
app.use('/api/mpps', mppRoutes); //Routes for MPPs
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Backend is up and running!' });
});


app.use('/api/news', newsRoutes); 
// Handle 404 for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5002; // Use port from .env or default to 5002
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

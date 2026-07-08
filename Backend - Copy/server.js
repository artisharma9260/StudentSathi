// student-saathi-backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Allows us to accept JSON data in the body
app.use(cors()); // Allows your frontend (on a different port) to access the backend

// Define Routes
// Document Routes: /api/documents
app.use('/api/documents', require('./routes/documents')); 

// Auth Routes: /api/auth/register, /api/auth/login
app.use('/api/auth', require('./routes/auth')); 

// Simple check route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
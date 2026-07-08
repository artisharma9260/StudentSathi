// student-saathi-backend/config/db.js - CORRECTED

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // --- CORRECTED: Removed deprecated options ---
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // ---------------------------------------------
        
        console.log(`✅ MongoDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB connection error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
// student-saathi-backend/seeder.js

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Document = require('./models/Document'); 
const documents = require('./data/documents'); 

// Load environment variables (to get MONGO_URI)
dotenv.config();

// Connect to the Database

const connectDB = async () => {
    try {
        // --- CORRECTED: Removed deprecated options ---
        await mongoose.connect(process.env.MONGO_URI); 
        // ---------------------------------------------

        console.log('✅ MongoDB Atlas Connected for Seeding...');
    } catch (error) {
        console.error(`❌ Seeding Error: ${error.message}`);
        process.exit(1);
    }
};

// Function to import all documents
const importData = async () => {
    await connectDB();
    try {
        await Document.deleteMany(); 
        await Document.insertMany(documents); 

        console.log('✨ Data Successfully Imported! ✨');
        process.exit();
    } catch (error) {
        console.error(`❌ Data Import Failed: ${error.message}`);
        process.exit(1);
    }
};

// Function to destroy all documents
const destroyData = async () => {
    await connectDB();
    try {
        await Document.deleteMany();
        console.log('🗑️ Data Successfully Destroyed! 🗑️');
        process.exit();
    } catch (error) {
        console.error(`❌ Data Destroy Failed: ${error.message}`);
        process.exit(1);
    }
};

// Check if the command line argument is -d (for destroy)
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
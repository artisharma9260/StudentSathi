// student-saathi-backend/models/Document.js

// const mongoose = require('mongoose');

// const LinkSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     url: { type: String, required: true }
// });

// const DocumentSchema = new mongoose.Schema({
//     document_name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     steps: {
//         type: String, // Stored as one long string with '→' separator
//         required: true
//     },
//     required_documents: {
//         type: [String], // Array of strings
//         default: []
//     },
//     eligibility: {
//         type: String,
//         default: 'Check Official Site'
//     },
//     application_fee: {
//         type: String,
//         default: 'Not Specified'
//     },
//     processing_time: {
//         type: String,
//         default: 'Varies'
//     },
//     official_links: {
//         type: [LinkSchema],
//         default: []
//     },
//     date_created: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('Document', DocumentSchema);

// const express = require('express');
// const router = express.Router();
// const Document = require('../models/Document');
// const { protect } = require('../middleware/authMiddleware');

// // @route   GET /api/documents
// // @desc    Get ALL documents (homepage)
// // @access  Public
// router.get('/', async (req, res) => {
//   try {
//     const documents = await Document.find({})
//       .select('document_name category');

//     const categories = {};

//     documents.forEach(doc => {
//       if (!categories[doc.category]) {
//         categories[doc.category] = [];
//       }

//       categories[doc.category].push({
//         title: doc.document_name,
//         _id: doc._id
//       });
//     });

//     res.json(categories);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route   GET /api/documents/:id
// // @desc    Get single document details
// // @access  Private (Logged-in users)
// router.get('/:id', protect, async (req, res) => {
//   try {
//     const document = await Document.findById(req.params.id);

//     if (!document) {
//       return res.status(404).json({ message: 'Document not found' });
//     }

//     res.json(document);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;

const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    document_name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);


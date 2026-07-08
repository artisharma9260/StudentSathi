// // student-saathi-backend/routes/documents.js

// const express = require('express');
// const router = express.Router();
// const Document = require('../models/Document'); 

// // @route   GET /api/documents
// // @desc    Get ALL documents, categorized for the homepage
// // @access  Public
// router.get('/', async (req, res) => {
//     try {
//         // Fetch only the name and category fields
//         const documents = await Document.find({}).select('document_name category'); 
        
//         // Group the documents by category
//         const categories = {};
//         documents.forEach(doc => {
//             const cat = doc.category;
//             if (!categories[cat]) {
//                 categories[cat] = [];
//             }
//             categories[cat].push({ 
//                 title: doc.document_name, 
//                 _id: doc._id 
//             });
//         });
        
//         res.json(categories);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// // @route   GET /api/documents/:id
// // @desc    Get detailed information for a single document
// // @access  Public
// router.get('/:id', async (req, res) => {
//     try {
//         // Find one document by its MongoDB ID
//         const document = await Document.findById(req.params.id);

//         if (!document) {
//             return res.status(404).json({ msg: 'Document not found' });
//         }

//         res.json(document);
//     } catch (err) {
//         console.error(err.message);
//         if (err.kind === 'ObjectId') {
//             return res.status(404).json({ msg: 'Document not found' });
//         }
//         res.status(500).send('Server Error');
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Document = require('../models/Document');
const { protect } = require('../middleware/authMiddleware');

// @route   GET /api/documents
// @desc    Get ALL documents (homepage)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find({})
      .select('document_name category');

    const categories = {};

    documents.forEach(doc => {
      if (!categories[doc.category]) {
        categories[doc.category] = [];
      }

      categories[doc.category].push({
        title: doc.document_name,
        _id: doc._id
      });
    });

    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/documents/:id
// @desc    Get single document details
// @access  Private (Logged-in users)
router.get('/:id', protect, async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.json(document);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

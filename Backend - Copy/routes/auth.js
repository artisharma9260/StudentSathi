// student-saathi-backend/routes/auth.js

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // Helper function to generate JWT token
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '30d', 
//     });
// };

// // @route   POST /api/auth/register
// // @desc    Register a new user
// // @access  Public
// router.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });
        
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         user = await User.create({
//             name,
//             email,
//             password, 
//         });

//         if (user) {
//             res.status(201).json({
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 token: generateToken(user._id),
//             });
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });


// // @route   POST /api/auth/login
// // @desc    Authenticate user and get token
// // @access  Public
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (user && (await user.matchPassword(password))) {
//             res.json({
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 token: generateToken(user._id), 
//             });
//         } else {
//             res.status(401).json({ msg: 'Invalid credentials' });
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// module.exports = router;

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const User = require("../models/User");

// const router = express.Router();

// // REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = await User.create({ name, email, password });

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import { sendEmail } from "../utils/sendEmail.js";

// const router = express.Router();

// /* ================= REGISTER ================= */
// router.post("/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const exists = await User.findOne({ email });
//     if (exists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     await User.create({
//       email,
//       password: hashedPassword,
//       otp,
//       otpExpiry: Date.now() + 10 * 60 * 1000, // 10 mins
//     });

//     await sendEmail(
//       email,
//       "Student Saathi OTP Verification",
//       `Your OTP is ${otp}`
//     );

//     res.status(201).json({ message: "OTP sent to email" });
//   } catch (err) {
//     res.status(500).json({ message: "Registration failed" });
//   }
// });

// /* ================= VERIFY OTP ================= */
// router.post("/verify-otp", async (req, res) => {
//   try {
//     const { email, otp } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (user.otp !== otp || user.otpExpiry < Date.now()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.isVerified = true;
//     user.otp = null;
//     user.otpExpiry = null;
//     await user.save();

//     res.json({ message: "Email verified successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "OTP verification failed" });
//   }
// });

// /* ================= LOGIN ================= */
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     if (!user.isVerified) {
//       return res.status(403).json({ message: "Verify email first" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//       token,
//       user: {
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Login failed" });
//   }
// });

// export default router;
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const { sendEmail } = require("../utils/sendEmail");

// const router = express.Router();

// /* ================= REGISTER ================= */
// router.post("/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     await User.create({
//       email,
//       password: hashedPassword,
//       otp,
//       otpExpiry: Date.now() + 10 * 60 * 1000, // 10 min
//     });

//     await sendEmail(
//       email,
//       "Student Saathi OTP Verification",
//       `Your OTP is ${otp}`
//     );

//     res.status(201).json({ message: "OTP sent to email" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Registration failed" });
//   }
// });

// /* ================= VERIFY OTP ================= */
// router.post("/verify-otp", async (req, res) => {
//   try {
//     const { email, otp } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (user.otp !== otp || user.otpExpiry < Date.now()) {
//       return res.status(400).json({ message: "Invalid or expired OTP" });
//     }

//     user.isVerified = true;
//     user.otp = null;
//     user.otpExpiry = null;
//     await user.save();

//     res.json({ message: "Email verified successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "OTP verification failed" });
//   }
// });

// /* ================= LOGIN ================= */
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     if (!user.isVerified) {
//       return res.status(403).json({ message: "Please verify your email first" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//       token,
//       user: {
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Login failed" });
//   }
// });

// module.exports = router;


const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/* ================= REGISTER (OTP BYPASSED) ================= */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      isVerified: true
    });

    return res.status(201).json({
      message: "User registered successfully"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;

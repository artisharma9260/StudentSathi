// student-saathi-backend/models/User.js

// 

// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     default: "user" // admin | user
//   }
// }, { timestamps: true });

// // Hash password before save
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// module.exports = mongoose.model("User", userSchema);



// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     default: "user",
//   },
//   isVerified: {
//     type: Boolean,
//     default: false,
//   },
//   otp: String,
//   otpExpiry: Date,
// }, { timestamps: true });

// export default mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

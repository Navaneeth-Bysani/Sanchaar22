const mongoose = require("mongoose");
const validator = require("validator");

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user should have a name"],
  },
  email: {
    type: String,
    required: [true, "user should have an email"],
    // unique : true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phoneNumber: {
    type: String,
    required: [true],
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  workshop: {
    type: String,
  },
  hasPaid: {
    type: Boolean,
    default: false,
  },
  college: {
    type: String,
  },
  branch: {
    type: String,
  },
  year: {
    type: String,
  },
  createdAt: {
    type: String,
    default: new Date(Date.now()).toLocaleString(),
  },
});

const Registration = mongoose.model("Registration", registrationSchema);
module.exports = Registration;

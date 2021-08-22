const mongoose = require('mongoose');
const validator = require('validator');

const registrationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'user should have a name']
    },
    email : {
        type : String,
        required : [true, 'user should have an email'],
        // unique : true,
        lowercase : true,
        validate : [validator.isEmail, 'Please provide a valid email']
    },
    phoneNumber : {
        type : String,
        required : [true]
    },
    emailVerificationCode : String,
    emailVerified : {
        type : Boolean,
        default : false
    },
})

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
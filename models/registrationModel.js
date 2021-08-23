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
    emailVerified : {
        type : Boolean,
        default : false
    },
    workshop : {
        type : String,
        enum : ["Automobile", "Data Science", "Machine Learning", "Cyber Security"]
    },
    hasPaid : {
        type : Boolean,
        default : false
    },
    paymentId : {
        type : String,
        default : ""
    }
})

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
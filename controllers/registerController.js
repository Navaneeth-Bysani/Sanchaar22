const Registration = require('./../models/registrationModel');
const email = require('./../utils/email');

const catchAsync = require('./../utils/catchAsync');

exports.initiateRegistration = catchAsync(async (req,res,next) => {
    
    const registration = {
        email : req.body.email,
        name : req.body.name,
        phoneNumber : req.body.phoneNumber
    }

    // const existing = await Registration.findOne(registration);
    // if(existing) {
    //     res.status(404).json({
    //         "status" : "already registered"
    //     })
    //     return next();
    // }

    const newRegistration = await Registration.create(registration);
    
    if(newRegistration) {
        const link = `http://localhost:3000/emailConfirm/${newRegistration._id}`;

        const text = `Hi ${newRegistration.name}! \n Please click on the link below \n ${link}`;

        const options = {
            email : newRegistration.email,
            name : newRegistration.name,
            text
        }
        await email(options);
    }
    
        res.status(201).json({
            "status" : "success",
            "message" : "email sent successfully",
            newRegistration
        })

    return next();
})

exports.verifyEmail = catchAsync(async (req,res,next) => {
    const regId = req.params.regId;
    const registration = await Registration.findById(regId);
    if(registration.emailVerified) {
        res.status(400).json({
            "message" : "already verified"
        })
        return next();
    }
    registration.emailVerified = true;
    await registration.save({validateBeforeSave : false});
    res.status(201).json({
        "status" : "success",
        "message" : "email verified",
        registration
    })
})
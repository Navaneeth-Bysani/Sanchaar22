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
        const link = `https://localhost:3000/emailConfirm/${newRegistration._id}`;

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
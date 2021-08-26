const Insta = require("instamojo-nodejs");
const url = require("url");
const AppError = require("./../utils/appError");
const Registration = require("./../models/registrationModel");
const email = require("./../utils/email");
const config = require("./../utils/config");

const catchAsync = require("./../utils/catchAsync");

exports.initiateRegistration = catchAsync(async (req, res, next) => {
  const registration = {
    email: req.body.email,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    workshop: req.body.workshop,
    college : req.body.college,
    branch : req.body.branch
  };

  const existing = await Registration.findOne({
      email : registration.email,
      phoneNumber : registration.phoneNumber,
      workshop : registration.workshop
  });
  if (existing && existing.paymentId !== null) {
    res.status(200).json({
      status: "Already paid",
      paid: true,
    });
    return;
  }

  const newRegistration = await Registration.create(registration);
  console.log(newRegistration);
  if (newRegistration) {
    const link = `https://wiss-sanchaar-2022.herokuapp.com/emailConfirm/${newRegistration._id}`;

    const text = `Hi ${newRegistration.name}! \n Please click on the link below \n ${link}`;

    const options = {
      email: newRegistration.email,
      name: newRegistration.name,
      text,
    };
    await email(options);
  }

  res.status(200).json({
    status: "success",
    message: "email sent successfully",
    newRegistration,
  });

  return;
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  const regId = req.params.regId;
  const registration = await Registration.findById(regId);
  if (registration.emailVerified) {
    res.status(200).json({
      message: "already verified",
      registration,
    });
    return;
  }
  registration.emailVerified = true;
  await registration.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: "email verified",
    registration,
  });
});

exports.makePayment = catchAsync(async (req, res, next) => {
  const API_KEY = config.API_KEY;
  const AUTH_KEY = config.AUTH_KEY;

  Insta.setKeys(API_KEY, AUTH_KEY);
  var data = new Insta.PaymentData();
  Insta.isSandboxMode(true);
  const registration = await Registration.findById(req.params.regId);
  console.log(registration);
  data.purpose = "workshop";
  data.amount = 600;
  data.buyer_name = registration.name;
  data.redirect_url = `https://wiss-sanchaar-2022.herokuapp.com/callback?user_id=${registration._id}`;
  data.email = registration.email;
  data.phone = registration.phoneNumber;
  data.send_email - false;
  data.webhook = "http://www.example.com/webhook/";
  data.send_sms = false;
  data.allow_repeated_payments = false;

  Insta.createPayment(data, function (error, response) {
    if (error) {
      // some error
      console.log(error);
      res.status(200).json({
        status: "error",
        error,
      });
    } else {
      // Payment redirection link at response.payment_request.longurl
      //   console.log(response);
      // console.log("response:  ", response);
      const responseData = JSON.parse(response);
      console.log(responseData);
      if (responseData === null) {
        return next(new AppError("Error with phone number", 404));
      }
      const redirectUrl = responseData.payment_request.longurl;
      console.log(redirectUrl);
      res.status(200).json({
        redirectUrl,
      });
    }
  });
});

exports.confirmPayment = catchAsync(async (req, res, next) => {
  let url_parts = url.parse(req.url, true);
  const response_data = url_parts.query;
  if (response_data.payment_id) {
    const registration = await Registration.findById(response_data.user_id);
    registration.paymentId = response_data.payment_id;
    await registration.save({ validateBeforeSave: false });
    const text = `You have been succesfully registered for the workshop. You will be communicated about the details`;
    const emailOptions = {
      email: registration.email,
      name: registration.name,
      text,
    };
    await email(emailOptions);
    res.status(200).json({
      status: "success",
      message: "payment is successful",
    });
  }
});

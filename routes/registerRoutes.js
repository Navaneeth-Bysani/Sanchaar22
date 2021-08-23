const express = require('express');
const registerController = require('./../controllers/registerController');

const router = express.Router();

router.post(`/initiateRegistration`, registerController.initiateRegistration);
router.patch(`/verifyEmail/:regId`, registerController.verifyEmail);
router.post(`/initiatePayment/:regId`, registerController.makePayment);
router.get(`/callback/`, registerController.confirmPayment);
module.exports = router;
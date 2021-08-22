const express = require('express');
const registerController = require('./../controllers/registerController');

const router = express.Router();

router.post(`/initiateRegistration`, registerController.initiateRegistration);
router.patch(`/verifyEmail/:regId`, registerController.verifyEmail);
module.exports = router;
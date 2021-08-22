const express = require('express');
const registerController = require('./../controllers/registerController');

const router = express.Router();

router.post(`/initiatePayment`, registerController.initiatePayment);
module.exports = router;
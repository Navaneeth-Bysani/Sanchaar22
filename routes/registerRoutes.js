const express = require('express');
const registerController = require('./../controllers/registerController');

const router = express.Router();

router.post(`/initiateRegistration`, registerController.initiateRegistration);
module.exports = router;
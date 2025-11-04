const express = require('express');
const checkAvailability = require('../middleware/bookingMiddleware');
const makeBooking = require('../controllers/bookingController');
const verifyToken = require('../middleware/authMiddleware');
const sendBookingMail = require('../middleware/sendMail');

const router = express.Router();


router.post('/booking',verifyToken,checkAvailability,makeBooking,sendBookingMail);


module.exports = router;
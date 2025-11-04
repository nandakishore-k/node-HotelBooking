const express = require('express');
const checkAvailability = require('../middleware/bookingMiddleware');
const makeBooking = require('../controllers/bookingController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/booking',verifyToken,checkAvailability,makeBooking);


module.exports = router;
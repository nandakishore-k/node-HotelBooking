const Booking = require('../models/bookingModel');


//aftermaking sure hall is available
const makeBooking = async (req,res,next) => {
    try{
    const {hallName,startDateTime,endDateTime} = req.body;
    const {name,email} = req.user;
    const booking  = await Booking.create({
        hallName,
        user:"kishore",
        email,
        startDateTime,
        endDateTime
    })

    console.log("booking confirmed");
    next();
    }
    catch(error){
        console.log(req.user);
        return res.status(500).json({ message: "Server error(make booking)" });
    }
    
}

module.exports = makeBooking;
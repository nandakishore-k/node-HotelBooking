const Booking = require('../models/bookingModel');


const checkAvailability = async (req,res,next) => {
    try{
    
    const {hallName,startDateTime,endDateTime} = req.body;

    const start = new Date(startDateTime);
    const end = new Date(endDateTime);

    const overlappingBooking = await Booking.findOne({
        hallName,
        startDateTime: { $lt: end },
        endDateTime: { $gt: start }
    });

    if(overlappingBooking){ 
        console.log(" Booking conflict detected");
        return res
        .status(401)
        .json({message:`${hallName} is already booked for ${startDateTime} to ${endDateTime}`});
    }

    //no overlap
    next();
    }
    catch(error){
        console.log(req.body);
        console.log(error);
        return res.status(500).json({ message: "internal server error(check availability)" });
    }
}

module.exports = checkAvailability;
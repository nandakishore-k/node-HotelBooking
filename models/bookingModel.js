const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    hallName : {
        type: String,
        required: true,
        enum: ['hall-01', 'hall-02','hall-03'],
    },
    user: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  startDateTime: {
    type : Date,
    required: true
  },
  endDateTime: {
    type : Date,
    required: true
  },
})

module.exports = mongoose.model('Booking',bookingSchema);
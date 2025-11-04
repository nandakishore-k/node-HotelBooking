const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./config/database');
const hotelRouter = require('./routes/bookingRouter');
const authRouter = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());

db.connectDb();

app.use('/auth',authRouter);
app.use('/hotel',hotelRouter);



app.listen(3000 ,()=> {
    console.log('listening at port 3000');
})



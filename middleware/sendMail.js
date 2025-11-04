const nodeMailer = require('nodemailer');
require('dotenv').config(); 


const sendBookingMail = async (req,res)=> {
    try{
    const transporter = nodeMailer.createTransport(
        {
            service: 'gmail',
            auth:{
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_PASSWORD
            }

        }

    )

    console.log("inside send email",req.user.email)
    const {hallName,startDateTime,endDateTime} = req.body;

    const to = req.user.email;
    const sub = `Booking confirmed ${hallName}`;
    const body = `<h1>Booking details</h1>
                    <p>Hall name: ${hallName}</p>
                     <p>  start Time:${startDateTime}</p>
                     <p> end Time: ${endDateTime}</p>`

    
    await transporter.sendMail(
            {
                to:to,
                subject: sub,
                html:body,
            }
        ).then(
            res.status(200).json({message:"Booking confirmation mail sent"})
            
        )
    return res.status(200).json({
        message: `Booking made successfully. Booking ID: ${booking._id}`,
        booking,
    });
    }
    catch (err){
        console.log(err)
    }
}

module.exports = sendBookingMail;
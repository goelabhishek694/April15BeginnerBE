const Booking = require("../models/bookingModel");
const Show = require("../models/showModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.makePayment = async (req, res) => {
    try{
        const {token, amount} = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency:"inr",
            customer: customer.id,
            payment_method_type: ["card"],
            receipt_email: token.email,
            description: "Token has been assigned to the movie",
            confirm: true
        });

        const transactionId = paymentIntent.id;
        res.send({
            success: true,
            message: "Payment processing. You will receive a confirmation once the payment is complete",
            data: transactionId,
          });
       

    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.bookShow = async (req, res) => {
    try{
        const newBooking = await new Booking(req.body);
        await newBooking.save();

        const show = Show.findById(req.body.show);
        const updatedBookedSeats = [...show.bookedSeats, ...req.body.seats]
        await Show.findByIdAndUpdate(req.body.show, {
            bookedSeats: updatedBookedSeats
        })
        res.send({
            success: true,
            message: "booking done !",
            data: newBooking
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.allBookingsByUser = async (req, res) => {
    try{
        const {userId} = req.params;
        const bookings = await Booking.find({user:userId})
        .populate("user")
        .populate("show")
        .populate({
            path: "show",
            populate:{
                path: "movie",
                model: "movie"
            }
        })
        .populate({
            path: "show",
            populate:{
                path: "theatre",
                model: "theatre"
            }
        })
        res.send({
            success: true,
            message: "bookings fetched !",
            data: bookings
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
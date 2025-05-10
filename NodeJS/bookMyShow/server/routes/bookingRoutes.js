const bookingRouter = require("express").Router();
const { makePayment, bookShow, allBookingsByUser } = require("../controller/bookingController");

bookingRouter.post("/make-payment", makePayment);
bookingRouter.post("/book-show", bookShow);
bookingRouter.get("/all-bookings/:userId", allBookingsByUser);



module.exports = bookingRouter;
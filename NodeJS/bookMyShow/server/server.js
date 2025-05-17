const express = require("express");
//loads the env variable in process.env object
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const connectToDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showRouter = require("./routes/showRoutes");
const bookingRouter = require("./routes/bookingRoutes");

connectToDB();
const app = express();
app.use(mongoSanitize());
// app.use(helmet({
//     xDownloadOptions: false,
//     xPoweredBy: false,
// }));
app.use((req, res, next) => {
    res.header("X-powered-by", "no-entry");
    next();
})
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        objectSrc: ["'none'"],
      },
    })
   );
   

// Rate limiter middleware
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
});
   
//apply rate limiter to all the api routes
app.use("/api", apiLimiter);

app.use(express.json());
app.use("/api/users", userRouter)
//rate lmiting on a specific route
app.use("/api/movies", apiLimiter, movieRouter)
app.use("/api/theatres", theatreRouter)
app.use("/api/shows", showRouter)
app.use("/api/booking", bookingRouter)




app.listen(8082, () => {
    console.log("server is listening on port 8082");
});

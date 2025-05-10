const express = require("express");
//loads the env variable in process.env object
require("dotenv").config();
const connectToDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showRouter = require("./routes/showRoutes");
const bookingRouter = require("./routes/bookingRoutes");

connectToDB();
const app = express();

app.use(express.json());
app.use("/api/users", userRouter)
app.use("/api/movies", movieRouter)
app.use("/api/theatres", theatreRouter)
app.use("/api/shows", showRouter)
app.use("/api/booking", bookingRouter)




app.listen(8082, () => {
    console.log("server is listening on port 8082");
});

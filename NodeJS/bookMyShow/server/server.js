const express = require("express");
//loads the env variable in process.env object
require("dotenv").config();
const connectToDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");

connectToDB();
const app = express();

app.use(express.json());
app.use("/api/users", userRouter)
app.use("/api/movies", movieRouter)
app.use("/api/theatres", theatreRouter)




app.listen(8082, () => {
    console.log("server is listening on port 8082");
});

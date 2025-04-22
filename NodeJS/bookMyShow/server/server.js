const express = require("express");
//loads the env variable in process.env object
require("dotenv").config();
const connectToDB = require("./config/db");
const app = express();
connectToDB();



app.listen(8082, () => {
    console.log("server is listening on port 8082");
});

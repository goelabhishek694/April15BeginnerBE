const mongoose = require("mongoose");
require("dotenv").config()
const {RESEND_API_KEY} = process.env
const connectToDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDB;
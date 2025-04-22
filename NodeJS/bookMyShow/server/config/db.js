const mongoose = require("mongoose");
const url = process.env.MONGODB_READ_WRITE
const connectToDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDB;
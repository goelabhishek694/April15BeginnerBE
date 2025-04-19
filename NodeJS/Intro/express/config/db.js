const mongoose = require("mongoose");
const url =
  "mongodb+srv://April15:Test123@cluster0.8vsqe7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDB;
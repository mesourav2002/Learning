const mongoose = require("mongoose");

let url = "mongodb://127.0.0.1:27017/database";

let connectDb = async () => {
  await mongoose.connect(url);
  console.log("Database is Connected");
};

module.exports = connectDb;

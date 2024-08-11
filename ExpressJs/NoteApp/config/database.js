let mongoose = require("mongoose");

// ? mongoose : It is mongoDB  object modeling with node js
// ? It is used to interect with database
// ? It is a library for nodeJS & mongodb

// * mongodb : 3 Steps (connection , db , collection)
 
let url = "mongodb://127.0.0.1:27017/app";

let connectDb = async () => {
  await mongoose.connect(url);
  console.log("Database is Connected");
};

module.exports = connectDb;

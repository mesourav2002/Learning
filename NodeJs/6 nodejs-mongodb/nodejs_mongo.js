let mongodb = require("mongodb").MongoClient;

// let url = "mongodb://localhost:27017/";

let url = "mongodb://127.0.0.1:27017";

let connectDb = async () => {
  try {
    // !1st step: Create Connection
    let connect = await mongodb.connect(url);
    console.log("DataBase is Connected");

    // !2nd step: Create Database
    let database = await connect.db("Students");
    console.log("DataBase Created");

    // !3rd step : Create Collection
    let collection = await database.createCollection("Users");
    console.log("Collection Created");

    // !4th step : insert only one data
    //   await collection.insertOne(
    //     {
    //     name: "Dinga",
    //     place: "Goa",
    //     age: 50
    //   }
    // )

    // ! insert many data
    // await collection.insertMany([
    //   {
    //     name: "Sourav",
    //     place: "Odisha",
    //     age: 23,
    //   },
    //   {
    //     name: "Sivam",
    //     place: "MP",
    //     age: 23,
    //   },
    //   {
    //     name: "Monoj",
    //     place: "Goa",
    //     age: 23,
    //   },
    // ]);
    // console.log("Multiple data insertetd");

    // ! Find 1st one data
    // let data = await collection.findOne();
    // console.log(data);

    // ! Find all  data
    // let data = await collection.find().toArray()
    // console.log(data);

    // ! Find any  data
    // let data = await collection.findOne({ name: "Sivam" });
    // console.log(data);

    // ! Update data
    // await collection.updateOne({ name: "Sivam" }, { $set: { age: 24 } });
    // console.log("Data is update Manyd");

    // ! Update Many data
    // await collection.updateMany({}, { $set: { place: "Banglore" ,gender:"male"} });
    // console.log("Many Data is update");

    // ! delete the 1st data
    // await collection.deleteOne()
    // console.log("delete 1st one data")

    // ! delete the specific data
    // await collection.deleteOne({ name: "Monoj" });
    // console.log("Data is deleted");

    // ! delete all data
    // await collection.deleteMany()
    // console.log("delete all data")
    
  } catch (err) {
    console.log(err);
  }
};

connectDb();

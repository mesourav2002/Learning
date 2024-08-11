let express = require("express");
let app = express();
let port = 4000;

const connectDb = require("./config/database");
connectDb();

// !========
const { createNote } = require("./controller/noteController");
let router = require("./routers/noteRouters.js");

app.use(express.json());

app.use("/api", router);
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running in port 4000");
});


// ! npm init 
// ! npm i mongoose 
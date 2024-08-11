const express = require("express");
const connectDb = require("./config/database.js");
const router = require("./routes/routes.js");
const app = express();
const port = 5000;

connectDb();
app.use("/", router);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

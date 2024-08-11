const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server is running at port ${port}`);
});

// npm i cors help to send backend api to frontend

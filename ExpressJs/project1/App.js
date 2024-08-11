let express = require("express");
let app = express();

// ! HTTP Methods : get() , post() , put() , delete() ...
app.get("/", (req, res) => {
  res.send("Get request at Home page");
  res.end();
});

app.post("/", (req, res) => {
  res.send("Post request at Home page");
  res.end();
});

app.put("/", (req, res) => {
  res.send("Put request at Home page");
  res.end();
});

app.patch("/", (req, res) => {
  res.send("Patch request at Home page");
  res.end();
});

module.exports = app;

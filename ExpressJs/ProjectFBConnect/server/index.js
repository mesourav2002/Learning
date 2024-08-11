const express = require("express");
const port = 5000
const App = express();

App.use("/", (req, res) => {
  res.json({ name: "sourav" });
});

App.listen(port, () => {
  console.log(`Server is working in port ${port}`);
});

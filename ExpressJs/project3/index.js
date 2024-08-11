let express = require("express");
let server = express();
let port = 4000;

server.get("/", (req, res) => {
  res.send("Sourav");
});
server.listen(port, () => {
  console.log(`Server is Started : http://localhost:${port}`);
});

let express = require("express");
let app = express();
let port = 4000;





app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running in port 4000");
});

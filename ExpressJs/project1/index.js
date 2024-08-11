const app = require("./App");
let fs = require("fs");
let PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is Started : http://localhost:${PORT}`);
});


// ! npm init
// ! npm i nodemon
// ! npm i express
let express = require("express");
let app = express();

let userRouter = require("./Router/router");
app.use(userRouter);

// app.post("/", (req, res) => {
//   res.send("<h1>I am in HOME page</h1>");
//   res.end();
// });
// app.post("/about", (req, res) => {
//   res.send("I am in ABOUT page");
//   res.end();
// });
// app.post("/contact", (req, res) => {
//   res.send(`I am in CONTACT page`);
//   res.end();
// });

app.use((req, res) => {
  res.send(`<h3 style=color:red>Page Not Found</h3>`);
});

module.exports = app;

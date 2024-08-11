let express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>I am in HOME page</h1>");
  res.end();
});
router.get("/about", (req, res) => {
  res.send("I am in ABOUT page");
  res.end();
});
router.get("/contact", (req, res) => {
  res.send(`I am in CONTACT page`);
  res.end();
});



module.exports = router;

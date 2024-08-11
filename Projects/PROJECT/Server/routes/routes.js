let express = require("express");
const test = require("../controllers/controller");
const router = express.Router();

router.get("/", test);

module.exports = router;

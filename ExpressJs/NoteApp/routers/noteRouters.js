let { Router } = require("express");
let {
  createNote,
  findAllData,
  findOneData,
} = require("../controller/noteController.js");

const router = Router();

router.post("/notes", createNote);
router.get("/notes", findAllData);
router.get("/find", findOneData);

module.exports = router;

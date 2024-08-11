const noteSchema = require("../model/noteSchema.js");

exports.createNote = async (req, res) => {
  let payload = await noteSchema.create(req.body);
  res.status(200).json({ sucess: true, message: "Data Inserted", payload });
};

exports.findAllData = async (req, res) => {
  let data = await noteSchema.find({});
  res.status(200).json({ sucess: true, message: "Data Displayed", data });
};

exports.findOneData = async (req, res) => {
  let data = await noteSchema.findOne({});
  res.status(200).json({ sucess: true, message: "Data Displayed", data });
};
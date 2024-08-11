let { Schema, model } = require("mongoose");

let newSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }  // its use for time added in database
);

module.exports = model("note", newSchema);

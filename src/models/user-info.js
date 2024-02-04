/** @format */

const { Schema, model } = require("mongoose");

const author = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    required: true,
  },
  content: {
    required: true,
  },
});

module.exports = model("User", author);

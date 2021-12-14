const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserModel = new Schema({
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserModel);

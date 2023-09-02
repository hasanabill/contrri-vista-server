const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  userImg: String,
  username: String,
  email: String,
  gender: String,
  bio: String,
  socialLink: String,
  achievements: String,
  badges: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;

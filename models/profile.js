const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  gender: String,
  bio: String,
  github: String,
  achievements: Array,
  badges: Array,
  location: String,
  skills: {
    type: [String],
  },
  social: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String,
    youtube: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;

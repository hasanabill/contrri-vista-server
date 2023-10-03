const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  desc: String,
  imgs: Array,
  tags: [String],
  status: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;

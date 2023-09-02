const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userImg: String,
    username: String,
    title: String,
    desc: String,
    tags: String,
    status: String,
});

const Project = mongoose.model("project", userSchema);

module.exports = Project;
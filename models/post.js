const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    userImg: String,
    username: String,
    title: String,
    desc: String,
    imgs: Array,
    tags: String,
    status: String,
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
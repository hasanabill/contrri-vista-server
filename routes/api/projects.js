const express = require("express");
const router = express.Router();
const Project = require("../../models/project");

// @route       GET api/projects
// @desc        Test Route
// @access      public
router.post("/", async (req, res) => {
  const { user, title, desc, imgs, tags, status, date } = req.body;
  try {
    const project = new Project({
      user,
      title,
      desc,
      imgs,
      tags,
      status,
      date,
    });
    await project.save();

    return res.status(200).json({ success: true, project: project });
  } catch (err) {
    res.status(403).json({ success: false, error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

// @route       GET api/projects
// @desc        Test Route
// @access      public
router.get("/", (req, res) => {
  res.send("projects route");
});

module.exports = router;

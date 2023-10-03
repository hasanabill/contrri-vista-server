const express = require("express");
const router = express.Router();
const User = require("../../models/users");
const Profile = require("../../models/profile");

// @route       GET api/profile/me
// @desc        get current users profile
// @access      public
router.get("/me", async (req, res) => {
  try {
    console.log(req.user);
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar", "email"]
    );
    console.log(profile);
    if (!profile) {
      return res.status(400).json({ msg: "User not found" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

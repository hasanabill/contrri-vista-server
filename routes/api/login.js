const express = require("express");
const router = express.Router();
const User = require("../../models/users");
const bcrypt = require("bcryptjs");

// @route       GET api/login
// @desc        Authenticates users
// @access      public
router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route       POST api/users
// @desc        Register User
// @access      public
router.post("/", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    } else {
      return res.status(200).json({ success: true, user: user });
    }
  } catch (err) {
    res.status(403).json({ loginSuccess: false, error: err });
  }
});

module.exports = router;

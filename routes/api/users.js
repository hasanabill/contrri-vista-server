const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const User = require("../../models/users");

// @route       POST api/users
// @desc        Register User
// @access      public
router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    console.log(req.body);

    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    user = new User({ name, email, avatar, password });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    return res.status(200).json({ success: true, user: user });
  } catch (err) {
    res.status(403).json({ loginSuccess: false, error: err });
  }
});

module.exports = router;

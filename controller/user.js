const User = require("../models/user");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user && user.password === req.body.password) {
        return res.status(200).json({
          success: true,
          user: user,
        });
      } else {
        return res
          .status(201)
          .json({ success: false, message: "Wrong Password" });
      }
    } else {
      return res
        .status(201)
        .json({ success: false, message: "Account Not found" });
    }
  } catch (err) {
    return res.status(403).json({ loginSuccess: false, err: err });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      success: true,
      users: users,
    });
  } catch (err) {
    return res.json({ success: false, err });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    return res.status(200).json({
      success: true,
      user: user,
    });
  } catch (err) {
    return res.json({ success: false, err });
  }
};

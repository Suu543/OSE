const User = require("../models/User");

exports.read = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });

    user.password = undefined;
    user.tokens = undefined;
    user.resetPasswordLink = undefined;

    return res.status(200).json(user);
  } catch (error) {
    console.log("Read Error", error);

    return res.status(400).json({
      error: "User Not Found...",
    });
  }
};

const User = require('../models/User');

exports.read = (req, res) => {
  if (!req.user) {
    return res.status(400).json({
      error: 'User Not Found...',
    });
  }

  const { user } = req;

  user.password = undefined;
  user.tokens = undefined;
  user.resetPasswordLink = undefined;

  return res.status(200).json(user);
};

exports.update = async (req, res) => {
  // console.log("UPDATE USER - req.user", req.user, "UPDATE DATA", req.body);
  try {
    console.log('req.user', req.user._id);
    const { name, password } = req.body;

    const user = await User.findById(req.user._id);
    console.log(name);
    console.log(password);

    if (name === undefined && password === undefined) {
      return res.status(400).json({
        error: 'name or password required...',
      });
    }

    if (name) {
      user.name = name;
    }

    if (password) {
      user.password = password;
    }

    const response = await user.save();

    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).json({
      error: 'User Not Found...',
    });
  }
};

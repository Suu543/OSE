const JWT = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

exports.auth = async (req, res, next) => {
  if (req.header("Authorization")) {
    const token = req.header("Authorization").replace("Bearer ", "");

    try {
      const data = await JWT.verify(token, process.env.JWT_KEY);
      const user = await User.findOne({ _id: data._id, "tokens.token": token });

      if (!user) {
        throw new Error({ error: "User Not Found or Not Valid Token" });
      }

      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      return res
        .status(401)
        .send({ error: "Not Authorized to access this resource" });
    }
  } else {
    return res.status(401).send({ error: "Token has not been provided..." });
  }
};

exports.admin = (req, res, next) => {
  const user = req.user.role;

  if (user !== "admin") {
    return res.status(400).json({
      error: "Admin Resource. Access Denied...",
    });
  }

  req.profile = req.user;
  next();
};

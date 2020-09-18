const JWT = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const data = JWT.verify(token, process.env.JWT_KEY);

  try {
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
};

module.exports = auth;

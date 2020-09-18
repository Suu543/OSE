const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  // Create a new user
  try {
    const user = new User({ name, email, password });
    await user.save();

    const token = await user.generateAuthToken();

    return res.status(201).send({ user, token });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  // Login a registered user
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res
        .status(401)
        .send({ error: "Login Failed! Check Authentication Credentials" });
    }

    return res.status(200).send({ success: "Login Success" });
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;

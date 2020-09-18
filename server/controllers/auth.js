const express = require("express");
const User = require("../models/User");

exports.signup = async (req, res) => {
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
};

exports.signin = async (req, res) => {
  // Login a registered user
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res
        .status(401)
        .send({ error: "Login Failed! Check Authentication Credentials" });
    }

    const token = await user.generateAuthToken();

    return res.send({ user, token });
  } catch (error) {
    return res.status(400).send(error);
  }
};

exports.me = async (req, res) => {
  // View Logged in User Profile - user data is assigned to req.user in auth middleware function
  return res.send(req.user);
};

exports.singleLogout = async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    let user = await req.user.save();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.multiLogout = async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    let user = await req.user.save();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

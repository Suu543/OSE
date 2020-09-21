// Models
const User = require("../models/User");

// Email
const {
  signupEmailParams,
  forgotPasswordEmailParams,
} = require("../helpers/email");
const AWS = require("aws-sdk");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let newUser = await User.findOne({ email });

    if (newUser) {
      return res.status(400).json({
        error: "Already Registered Email...",
      });
    }

    const token = JWT.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "10m",
      }
    );

    const params = signupEmailParams(email, token);
    const sendEmailOnSignup = AWS_SES.sendEmail(params).promise();

    sendEmailOnSignup
      .then((data) => {
        console.log("Email Submitted to SES", data);
        return res.status(200).json({
          message: `Email has been sent to ${email}, Follow the instructions to complete your registration`,
        });
      })
      .catch((error) => {
        console.log("Registration Error", error);
        return res.status(400).json({
          error: `We could not verify your email. Please try again...`,
        });
      });
  } catch (error) {
    console.log("Registration Error", error);
    return res.status(400).send(error);
  }
};

exports.activateSignup = async (req, res) => {
  const { token } = req.body;

  JWT.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, async function (
    err,
    decoded
  ) {
    if (err) {
      return res
        .status(401)
        .json({ error: "Expired Link... Please Try Again..." });
    }

    const { name, email, password } = decoded;

    try {
      const user = new User({ name, email, password });
      await user.save();
      return res
        .status(200)
        .json({ message: "Registration Success. Please Signin..." });
    } catch (error) {
      return res.status(401).json({
        error: "Error Saving User in DB. Please Try Again...",
      });
    }
  });
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
    return res.status(400).json({
      error:
        "User with that email does not exist. Please Signup or Signin with valid email and password...",
    });
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

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "User with this email does not exist...",
      });
    }

    const token = JWT.sign(
      { _id: user._id, name: user.name },
      process.env.JWT_RESET_PASSWORD,
      { expiresIn: "10m" }
    );

    const params = forgotPasswordEmailParams(email, token);
    await user.updateOne({ resetPasswordLink: token });

    const sendResetPasswordEmail = AWS_SES.sendEmail(params).promise();

    sendResetPasswordEmail
      .then((data) => {
        console.log("SES Reset Password Success", data);
        return res.status(200).json({
          message: `Email has been sent to ${email}. Click on the link to reset your password`,
        });
      })
      .catch((error) => {
        console.log("SES Reset Password Failed", error);
      });
  } catch (error) {
    return res.status(400).json({
      error: `${error} Password Reset Failed... Try Again...`,
    });
  }
};

exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  if (resetPasswordLink) {
    JWT.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      async function (err, decoded) {
        try {
          if (err) {
            return res
              .status(401)
              .json({ error: "Invalid Token... Please Try Again..." });
          }

          const user = await User.findOne({ resetPasswordLink });

          if (!user) {
            return res.status(400).json({ error: "Not Found User..." });
          }

          user.password = newPassword;
          user.resetPasswordLink = "";
          await user.save();

          return res.status(200).json({
            message: "Successfully Changed Password! Please Login Again...",
          });
        } catch (error) {
          return res.status(400).json({
            error: "Password Reset Failed... Try Again...",
          });
        }
      }
    );
  }
};

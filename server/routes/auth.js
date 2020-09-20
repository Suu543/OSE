const express = require("express");
const {
  signup,
  activateSignup,
  signin,
  me,
  singleLogout,
  multiLogout,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

// Middleware
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/account-activation", activateSignup);
router.post("/signin", signin);
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", resetPassword);
router.get("/me", auth, me);
router.post("/me/logout", auth, singleLogout);
router.post("/me/logoutall", auth, multiLogout);

module.exports = router;

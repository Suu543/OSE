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
  googleLogin,
} = require("../controllers/auth");

// Middleware
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/account-activation", activateSignup);
router.post("/signin", signin);
// Reset Password
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", resetPassword);

// Logout
router.get("/me", auth, me);
router.post("/me/logout", auth, singleLogout);
router.post("/me/logoutall", auth, multiLogout);

//  Google and Facebook
router.post("/google-login", googleLogin);

module.exports = router;

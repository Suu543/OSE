const express = require("express");
const {
  signup,
  signin,
  me,
  singleLogout,
  multiLogout,
} = require("../controllers/auth");

// Middleware
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/me", auth, me);
router.post("/me/logout", auth, singleLogout);
router.post("/me/logoutall", auth, multiLogout);

module.exports = router;

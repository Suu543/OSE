const express = require("express");
const router = express.Router();

const { requireSignin } = require("../controllers/auth");
const { read } = require("../controllers/user");

// http://localhost:8000/users/user/5f665c37c1cce1641071b8fc
router.get("/user/:id", requireSignin, read);

module.exports = router;

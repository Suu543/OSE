const express = require("express");

const { createTag, removeTag, readAllTags } = require("../controllers/tag");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.get("/tags", readAllTags);
router.post("/tag", auth, createTag);
router.delete("/tag/:slug", auth, removeTag);

module.exports = router;

const express = require("express");
const router = express.Router();

const { createTag, removeTag, readAllTags } = require("../controllers/tag");
const { auth } = require("../middleware/auth");
const { runValidation } = require("../validators");
const { tagCreationValidator } = require("../validators/tag");

router.get("/tags", readAllTags);
router.post("/tag", tagCreationValidator, runValidation, auth, createTag);
router.delete("/tag/:slug", auth, removeTag);

module.exports = router;

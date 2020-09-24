const express = require("express");
const router = express.Router();

const {
  createTopic,
  removeTopic,
  readAllTopics,
} = require("../controllers/topic");
const { auth } = require("../middleware/auth");
const { runValidation } = require("../validators");
const { topicCreationValidator } = require("../validators/topic");

router.get("/topics", readAllTopics);
// router.post("/topic", topicCreationValidator, runValidation, auth, createTopic);
router.post("/topic", auth, createTopic);
router.delete("/topic/:slug", auth, removeTopic);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  createCategory,
  removeCategory,
  readAllCategories,
} = require("../controllers/category");
const { auth } = require("../middleware/auth");
const { runValidation } = require("../validators");
const { categoryCreationValidator } = require("../validators/category");

router.get("/categories", readAllCategories);
router.post(
  "/category",
  categoryCreationValidator,
  runValidation,
  auth,
  createCategory
);
router.delete("/category/:slug", auth, removeCategory);

module.exports = router;

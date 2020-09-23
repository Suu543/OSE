const { check } = require("express-validator");

exports.categoryCreationValidator = [
  check("name").not().isEmpty().withMessage("Category title is required..."),
];

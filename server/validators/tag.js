const { check } = require("express-validator");

exports.tagCreationValidator = [
  check("title").not().isEmpty().withMessage("Tag title is required..."),
];

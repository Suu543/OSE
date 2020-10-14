const { check } = require('express-validator');

exports.tagCreationValidator = [
  check('name').not().isEmpty().withMessage('Tag title is required...'),
];

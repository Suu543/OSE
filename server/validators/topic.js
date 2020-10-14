const { check } = require('express-validator');

exports.topicCreationValidator = [
  check('name').not().isEmpty().withMessage('Topic Name is required...'),
];

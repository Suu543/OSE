const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      maxlength: 32,
    },

    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      url: String,
      key: String,
    },
  },
  { timestamps: true }
);

const Topic = mongoose.model('Topic', topicSchema);

module.exports = {
  Topic,
};

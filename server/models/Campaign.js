// CampaignID
// Campaign Title
// Campaign Description
// Campaign Organizer - References User Model
// Campaign Submit Button Text
// Campaign Donation Amount
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    organizer: {
      type: ObjectId,
      ref: 'User',
    },

    submitBtn: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = {
  Campaign,
};

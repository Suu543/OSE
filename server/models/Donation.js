const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true
  },

  dollarAmount: {
    type: Number,
    required: true
  },

  comment: {
    type: String
  },

  created_date: {
    type: Date,
    default: Date.now
  }
},
{
  timestamps: true,
}
);

const Donation = mongoose.model("Donation", donationSchema);

module.exports = {
  Donation,
};

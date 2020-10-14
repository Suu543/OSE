// DonationID
// Campaign Name - References Campaign Model
// Amount
// Date
// Notes
// DonerID - References User Model

const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const donationSchema = new mongoose.Schema({
  campaign: {
    type: ObjectId,
    ref: 'Campaign',
  },

  amount: {
    type: Number,
    required: true,
  },

  notes: {
    type: String,
  },

  patron_email: {
    type: String,
  },

  patron_name: {
    type: String,
  },

  patron_address: {
    type: String,
  },

  patron_phone: {
    type: String,
  },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = {
  Donation,
};

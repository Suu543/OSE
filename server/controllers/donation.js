/* eslint-disable camelcase */
const { Donation } = require('../models/Donation');

exports.createDonation = async (req, res) => {
  const { campaign, amount, notes, patron_email, patron_name } = req.body;

  const newDonation = new Donation({
    campaign,
    amount,
    notes,
    patron_email,
    patron_name,
  });

  try {
    const result = await newDonation.save();
    if (result) {
      return res.status(201).json({
        message: `${amount} is donated to ${campaign} `,
      });
    }
  } catch (error) {
    return res.status(409).json({
      error: `Failed to donate... Please Try Again...`,
    });
  }
};

exports.getDonation = async (req, res) => {
  try {
    const donations = await Donation.find({});
    if (donations) {
      return res.status(201).send(donations);
    }
  } catch (error) {
    return res.status(404).json({
      error: `Donation Not Found...`,
    });
  }
};

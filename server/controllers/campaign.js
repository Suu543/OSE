const { Campaign } = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
  const { title, description, organizer, submitBtn, amount } = req.body;
  const newCampaign = new Campaign({
    title,
    description,
    organizer,
    submitBtn,
    amount,
  });

  try {
    const result = await newCampaign.save();
    if (result) {
      return res.status(201).json({
        message: `${result.title} campaign successfully created...`,
        campaign: result,
      });
    }
  } catch (error) {
    return res.status(409).json({
      error: `Failed to create ${title} campaign...`,
    });
  }
};

const express = require('express');
const { createDonation, getDonation } = require('../controllers/donation');

const router = express.Router();

router.post('/donation', createDonation);
router.get('/donations', getDonation);

module.exports = router;

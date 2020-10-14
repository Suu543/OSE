const express = require('express');

const router = express.Router();

const { auth, admin } = require('../middleware/auth');
const { read, update } = require('../controllers/user');

// http://localhost:8000/users/user/5f665c37c1cce1641071b8fc
router.get('/user/:id', auth, read);
router.put('/user/update/:id', auth, update);
router.put('/user/admin/update/:id', auth, admin, update);

module.exports = router;

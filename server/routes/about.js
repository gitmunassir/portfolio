const express = require('express');
const router = express.Router();
const { getAbout, updateAbout } = require('../controllers/aboutController');
const auth = require('../middleware/auth');

// Public route
router.get('/', getAbout);

// Protected route (admin)
router.put('/', auth, updateAbout);

module.exports = router;

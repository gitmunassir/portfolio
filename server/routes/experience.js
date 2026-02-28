const express = require('express');
const router = express.Router();
const {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceController');
const auth = require('../middleware/auth');

// Public routes
router.get('/', getExperiences);
router.get('/:id', getExperience);

// Protected routes (admin)
router.post('/', auth, createExperience);
router.put('/:id', auth, updateExperience);
router.delete('/:id', auth, deleteExperience);

module.exports = router;

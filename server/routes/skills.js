const express = require('express');
const router = express.Router();
const {
  getSkills,
  getSkillsByCategory,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillController');
const auth = require('../middleware/auth');

// Public routes
router.get('/', getSkills);
router.get('/category/:category', getSkillsByCategory);

// Protected routes (admin)
router.post('/', auth, createSkill);
router.put('/:id', auth, updateSkill);
router.delete('/:id', auth, deleteSkill);

module.exports = router;

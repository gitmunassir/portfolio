const express = require('express');
const router = express.Router();
const {
  getMessages,
  getUnreadCount,
  markAsRead,
  sendMessage,
  deleteMessage
} = require('../controllers/messageController');
const auth = require('../middleware/auth');

// Public route
router.post('/', sendMessage);

// Protected routes (admin)
router.get('/', auth, getMessages);
router.get('/unread', auth, getUnreadCount);
router.put('/:id/read', auth, markAsRead);
router.delete('/:id', auth, deleteMessage);

module.exports = router;

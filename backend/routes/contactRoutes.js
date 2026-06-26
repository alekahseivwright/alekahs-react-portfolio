const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

// Public route - anyone can submit contact form
router.post('/', controller.createMessage);

// Admin-only routes
router.get('/', verifyToken, requireAdmin, controller.getMessages);
router.put('/:id', verifyToken, requireAdmin, controller.updateMessage);
router.delete('/:id', verifyToken, requireAdmin, controller.deleteMessage);

module.exports = router;

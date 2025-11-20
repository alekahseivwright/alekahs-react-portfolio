const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');
const auth = require('../middleware/authMiddleware');

// CONTACT ROUTES

// Create new contact message
router.post('/', auth, controller.createMessage); 

// Get all contact messages (protected route)
router.get('/', controller.getMessages);

// Update a contact message (protected route)
router.put('/:id', auth, controller.updateMessage);

// Delete a contact message (protected route)
router.delete('/:id', auth, controller.deleteMessage);

module.exports = router;
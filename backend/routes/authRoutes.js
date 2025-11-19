const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

// AUTH ROUTES

// User registration
router.post('/register', controller.register);

// User login
router.post('/login', controller.login);

// User logout
router.post('/logout', controller.logout);

module.exports = router;
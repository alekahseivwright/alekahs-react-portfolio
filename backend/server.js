// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configure environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));

// Simple route
app.get('/', (req, res) => {
  res.send('Server is running successfully 🩷');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

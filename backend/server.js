require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

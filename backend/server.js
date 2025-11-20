require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const educationRoutes = require("./routes/educationRoutes");

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/education", educationRoutes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

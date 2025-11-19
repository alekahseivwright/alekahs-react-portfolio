const mongoose = require("mongoose");

// Schema for portfolio projects
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: { type: String, required: true }, 
    github: { type: String },
    image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);

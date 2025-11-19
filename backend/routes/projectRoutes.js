const express = require("express");
const router = express.Router();
const controller = require("../controllers/projectController");
const auth = require("../middleware/authMiddleware");

// CRUD ROUTES
router.get("/", controller.getProjects);      // Get all projects
router.get("/:id", controller.getProject);    // Get one project by ID
router.post("/", auth, controller.createProject);   // Create new project
router.put("/:id", auth, controller.updateProject); // Update a project
router.delete("/:id", auth, controller.deleteProject); // Delete a project

module.exports = router;


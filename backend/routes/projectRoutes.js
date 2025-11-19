const express = require("express");
const router = express.Router();
const controller = require("../controllers/projectController");

// CRUD ROUTES
router.get("/", controller.getProjects);      // Get all projects
router.get("/:id", controller.getProject);    // Get one project by ID
router.post("/", controller.createProject);   // Create new project
router.put("/:id", controller.updateProject); // Update a project
router.delete("/:id", controller.deleteProject); // Delete a project

module.exports = router;


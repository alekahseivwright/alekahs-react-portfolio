const express = require("express");
const router = express.Router();
const controller = require("../controllers/projectController");
const auth = require("../middleware/authMiddleware");

// CRUD ROUTES

// Get all projects
router.get("/", controller.getProjects);

// Get one project by ID
router.get("/:id", controller.getProject);    

// Create new project
router.post("/", auth, controller.createProject); 

// Update a project
router.put("/:id", auth, controller.updateProject); 

// Delete a project
router.delete("/:id", auth, controller.deleteProject); 

module.exports = router;


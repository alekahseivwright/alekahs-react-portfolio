const Project = require("../models/projectModel");

// GET all projects
exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.status(200).json(projects);
};

// GET one project
exports.getProject = async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json(project);
};

// CREATE new project
exports.createProject = async (req, res) => {
    const project = await Project.create(req.body);
    res.status(201).json({ message: "Project created", project });
};

// UPDATE project
exports.updateProject = async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Updated successfully", project });
};

// DELETE project
exports.deleteProject = async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Deleted successfully" });
};

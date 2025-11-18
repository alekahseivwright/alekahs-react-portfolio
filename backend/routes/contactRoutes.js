import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

// POST - save contact form message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const saved = await Contact.create({ name, email, message });
    res.status(201).json({ msg: "Message saved", data: saved });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

// GET - fetch all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;

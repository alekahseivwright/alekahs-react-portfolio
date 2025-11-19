const Message = require("../models/contactModels");

// CREATE new message
exports.createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newMessage = new Message({
            name,
            email,
            message,
        });

        await newMessage.save();
        res.status(201).json({ message: "Message sent successfully!", newMessage });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET all messages (admin only)
exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET single message
exports.getMessageById = async (req, res) => {
    try {
        const msg = await Message.findById(req.params.id);

        if (!msg) {
            return res.status(404).json({ message: "Message not found" });
        }

        res.status(200).json(msg);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE message
exports.updateMessage = async (req, res) => {
    try {
        const updated = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updated) return res.status(404).json({ message: "Message not found" });

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE message
exports.deleteMessage = async (req, res) => {
    try {
        const deleted = await Message.findByIdAndDelete(req.params.id);

        if (!deleted) return res.status(404).json({ message: "Message not found" });

        res.status(200).json({ message: "Message deleted", deleted });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const Contact = require("../models/contactModels");
const { sendContactNotification } = require("../utils/sendEmail");

// CREATE new message
exports.createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newMessage = new Contact({
            name,
            email,
            message,
        });

        await newMessage.save();

        let emailSent = false;
        try {
            emailSent = await sendContactNotification({ name, email, message });
        } catch (emailError) {
            console.error('Failed to send contact notification email:', emailError.message);
        }

        res.status(201).json({
            message: emailSent
                ? "Message sent successfully! I'll get back to you soon."
                : "Message saved successfully! I'll get back to you soon.",
            newMessage,
            emailSent,
        });

    } catch (error) {
        res.status(500).json({ message: error.message || "Server error" });
    }
};

// GET all messages (admin only)
exports.getMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET single message
exports.getMessageById = async (req, res) => {
    try {
        const msg = await Contact.findById(req.params.id);

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
        const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updated) return res.status(404).json({ message: "Message not found" });

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE message
exports.deleteMessage = async (req, res) => {
    try {
        const deleted = await Contact.findByIdAndDelete(req.params.id);

        if (!deleted) return res.status(404).json({ message: "Message not found" });

        res.status(200).json({ message: "Message deleted", deleted });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

import React, { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../context/AuthContext";
import { API_BASE_URL } from "../config/api";
import kittyWaving from "../assets/kitty-waving.png";
import kittiesCuddling from "../assets/kitties-cuddling.png";

const CONTACT_EMAIL = "seivwrightalekah@gmail.com";

export default function Contact() {
  const { token, user } = useContext(AuthContext);
  const isAdmin = user?.role === "admin";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [messages, setMessages] = useState([]);
  const [messagesError, setMessagesError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchMessages = useCallback(async () => {
    if (!token || !isAdmin) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (!res.ok) {
        setMessagesError(data.message || "Could not load messages");
        return;
      }

      setMessages(data);
      setMessagesError("");
    } catch (err) {
      console.error(err);
      setMessagesError("Could not connect to server. Is the backend running?");
    }
  }, [token, isAdmin]);

  const deleteMessage = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/api/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchMessages();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.message || "Error sending message. Please try again.");
        return;
      }

      setStatus(data.message || "Message sent ✅");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      if (isAdmin) {
        fetchMessages();
      }
    } catch (err) {
      console.error(err);
      setStatus("Could not connect to server. Make sure the backend is running on port 5000.");
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <img src={kittyWaving} alt="" className="contact-kitty contact-kitty-left" />
      <img src={kittiesCuddling} alt="" className="contact-kitty contact-kitty-right" />

      <p className="contact-info">
        Email:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email-link">
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="contact-note">
        Fill out the form below and your message will be saved and emailed to me.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status">{status}</p>}

      {isAdmin && (
        <section className="admin-messages">
          <h2>Contact Submissions</h2>
          {messagesError && <p className="status">{messagesError}</p>}
          {messages.length === 0 && !messagesError && (
            <p>No messages yet — when someone contacts you, they'll show up here.</p>
          )}
          {messages.map((msg) => (
            <div className="message-card" key={msg._id}>
              <div className="message-header">
                <strong>{msg.name}</strong>
                <span>{new Date(msg.createdAt).toLocaleString()}</span>
              </div>
              <p>
                <a href={`mailto:${msg.email}`}>{msg.email}</a>
              </p>
              <p>{msg.message}</p>
              <button type="button" onClick={() => deleteMessage(msg._id)}>
                Delete
              </button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

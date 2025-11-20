import React, { useState } from "react";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Status message state
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Prepare payload for backend
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.message || "Error sending message");
        return;
      }

      setStatus("Message sent ✅");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Error sending message");
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Email: aseivwr3@my.centennialcollege.ca</p>
      

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
          placeholder="Email"
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
        ></textarea>

        <button type="submit">Send</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
}

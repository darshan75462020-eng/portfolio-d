import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://dharshan-portfolio-backend.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="success">Message sent successfully ✅</p>
        )}

        {status === "error" && (
          <p className="error">Something went wrong ❌</p>
        )}
      </form>
    </section>
  );
};

export default Contact;

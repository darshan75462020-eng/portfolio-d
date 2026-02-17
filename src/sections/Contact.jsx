import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react"; // Added for feedback
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        setTimeout(() => setStatus(null), 4000);
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
      <div className="contact-card fade-in show">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hi? I'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className={`btn-primary submit-btn ${loading ? 'loading' : ''}`} 
            disabled={loading}
          >
            {loading ? (
              <span className="btn-content">Sending...</span>
            ) : (
              <span className="btn-content">
                Send Message <Send size={18} />
              </span>
            )}
          </button>

          <div className="status-container">
            {status === "success" && (
              <div className="status-message success">
                <CheckCircle2 size={18} />
                <span>Message sent successfully! I'll be in touch.</span>
              </div>
            )}
            {status === "error" && (
              <div className="status-message error">
                <AlertCircle size={18} />
                <span>Something went wrong. Please try again later.</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
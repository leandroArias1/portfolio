import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Complete all fields.");
      return;
    }

    emailjs
      .send(
        "service_dc8z6wn",
        "template_of2usin",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "qLl2lePC_g6a6D1xq"
      )
      .then(() => {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Error sending message. Please try again.");
      });
  };

  return (
    <section id="contact">
      <div className="container contact-layout">
        {/* FORM */}
        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          <div className="form-left">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-right">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn">
            Send
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        {/* TEXTO */}
        <div className="contact-text fade-up">
          <h2>Let’s talk</h2>
          <p>
            If you have an idea or a project in mind, feel free to reach out.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

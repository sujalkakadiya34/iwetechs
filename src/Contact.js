import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";
import BannerSection from "./BannerSection";  


export default function Contact({ showAlertInNavbar }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Smooth scroll to navbar alert
  const scrollToAlert = () => {
    const alertElement = document.querySelector(".navbar-alert");
    if (alertElement) {
      alertElement.classList.add("show");
      alertElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => alertElement.classList.remove("show"), 4000); // hide after 4s
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showAlertInNavbar("⚠️ Please fill in Name, Email, and Message!");
      scrollToAlert();
      return;
    }

    showAlertInNavbar(`✔ Thank You! ${formData.name}, Data Has Successfully Sent!`);
    scrollToAlert();

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="cf-container">
        {/* Left Column */}
        <div className="cf-left">
          <h2 className="cf-heading">Feel Free to Get in Touch</h2>

          <div className="cf-info-box">
            <span className="cf-icon"><FaPhoneAlt /></span>
            <div>
              <h4 className="cf-info-title">Call Anytime</h4>
              <p className="cf-info-text">+ 88 (9800) 6802</p>
            </div>
          </div>

          <div className="cf-info-box">
            <span className="cf-icon"><FaEnvelope /></span>
            <div>
              <h4 className="cf-info-title">Send Email</h4>
              <p className="cf-info-text">iwetechs1017@gmail.com</p>
            </div>
          </div>

          <div className="cf-info-box">
            <span className="cf-icon"><FaMapMarkerAlt /></span>
            <div>
              <h4 className="cf-info-title">Visit Now</h4>
              <p className="cf-info-text">
                1017, RK Supreme, Near Nana Mava Circle, 150 Feet Ring Road, Rajkot, Gujarat - 360005
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div style={{ marginTop: "39px", textAlign: "center" }}>
            <Link to="/" className="cf-button-b-t-h" style={{ textDecoration: "none" }}>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="cf-right">
          <form className="cf-form" onSubmit={handleSubmit}>
            <div className="cf-form-row">
              <input
                className="cf-input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="cf-input"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cf-form-row">
              <input
                className="cf-input"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="cf-input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="cf-textarea"
              name="message"
              placeholder="Write a Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button className="cf-button" type="submit">
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>
      <BannerSection />
      <Footer />
    </>
  );
}

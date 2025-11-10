// src/LearnMoreReady.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";

function LearnMoreReady() {
  return (
    <main className="lm-ready-page">
      {/* Hero Section */}
      <header className="lm-ready-hero">
        <h1>We’re Always Ready to Serve You</h1>
        <p>Your trusted IT partner for scalable and innovative solutions.</p>
      </header>

      {/* Content */}
      <section className="lm-ready-content">
        <div className="content-box-lm">
          <h2>Why Choose Us?</h2>
          <p className="content-box-lm-p">
            We provide high-quality IT solutions tailored to your business needs.
            From cloud integration to app development, our team is always ready.
          </p>

          <ul className="features">
            <li><FaCheckCircle className="check" /> 24/7 Support & Consultation</li>
            <li><FaCheckCircle className="check" /> Scalable & Secure Solutions</li>
            <li><FaCheckCircle className="check" /> Proven Track Record</li>
            <li><FaCheckCircle className="check" /> Affordable Pricing Plans</li>
          </ul>

          <div className="actions">
            <Link to="/" className="btn-learn">BACK HOME</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LearnMoreReady;

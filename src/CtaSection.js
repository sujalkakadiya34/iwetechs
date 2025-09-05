import React from "react";
import "./App.css";

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Left Content */}
        <div className="cta-text">
          <p>We’re here to help to grow your business.</p>
          <h2>Looking for the Best IT Business Solutions?</h2>
        </div>

        {/* Right Button */}
        <div className="cta-button">
          <a href="#learn" className="btn-learn">
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;

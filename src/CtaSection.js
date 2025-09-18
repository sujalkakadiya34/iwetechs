// src/CtaSection.js
import React from "react";
import "./App.css";
import "./rspsv.css";
import { useNavigate } from "react-router-dom";

function CtaSection() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/cta-learn"); // ✅ navigates to ctalmbtn.js
  };

  return (
    <section className="ctaSectionBox">
      <div className="ctaInner">
        {/* Left Content */}
        <div className="ctaContent">
          <p>We’re here to help to grow your business.</p>
          <h2>Looking for the Best IT Business Solutions?</h2>
        </div>

        {/* Right Button */}
        <div className="ctaBtnWrap">
          <button onClick={handleLearnMore} className="ctaLearnBtn">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;



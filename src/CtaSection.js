import React from "react";
import "./App.css";
import "./rspsv.css";

function CtaSection() {
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
          <a href="#learn" className="ctaLearnBtn">
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;


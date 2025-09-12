import React from "react";
import "./AboutCompany.css";
// import "./rspsv.css";
 
function AboutCompany() {
  return (
    <div className="about-container">
      {/* Left Side Images */}
      <div className="about-left">
        <div className="about-img-wrapper">
          <img src="./assets/about-thumb-1.jpg" alt="About Company" className="about-img-top-img" />
          <div className="about-overlay-card">
            <h2>6800+</h2>
            <p>Satisfied Clients</p>
          </div>
        </div>
        <div className="about-img-wrapper">
          <img src="./assets/about-thumb-2.jpg" alt="About Team" className="about-img-bottom-img" />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="about-right">
        {/* ✅ Logo placed above the subtitle */}
        <img src="./assets/circlelogo.png" alt="Company Logo" className="about-logo" />

        <p className="about-subtitle">— About Our Company</p>
        <h2 className="about-title">
          We’re Partner of Your <br /> <span>Innovations</span>
        </h2>
        <p className="about-description">
          There are many variations of passages of Lorem Ipsum available,
          but the <br></br>majority have suffered alteration in some form, by injected
          humour, or <br></br>randomised words which don’t look even.
        </p>

        {/* Service Cards */}
        <div className="about-services">
          <div className="about-service">
            <span className="service-icon">💻</span>
            <h4 className="about-subtitle-h4">Website <br></br> Development</h4>
          </div>
          <div className="about-service">
            <span className="service-icon">🖥️</span>
            <h4 className="about-subtitle-h4">Website <br></br> Development</h4>
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="about-list">
          <li style={{ fontSize: "17px" }}>✔ Exploring version of lorem veritatis proin</li>
          <li style={{ fontSize: "17px" }}>✔ Auctor aliquet aenean simply free text veritatis quis</li>
          <li style={{ fontSize: "17px" }}>✔ Consequat ipsum nec lorem sagittis sem nibh.</li>
        </ul>

        {/* Button */}
        <button className="about-btn">LEARN MORE</button>
      </div>
    </div>
  );
}

export default AboutCompany;

import React from "react";
import "./App.css"; 

function LearnMore() {
  return (
    <div className="learn-more-container">
      <div className="learn-more-content">
        <h1 className="learn-more-title">About Our IT Solutions</h1>
        <p className="learn-more-text">
          We provide world-class IT services including product development,
          digital marketing, cybersecurity, and UI/UX designing.
          <br /> <br />
          Our mission is to help businesses grow with technology-driven
          solutions while delivering excellence, innovation, and efficiency in
          every project we undertake.
        </p>

        <div className="learn-more-stats">
          <div className="stat-box">
            <h2>10+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat-box">
            <h2>50+</h2>
            <p>Expert Developers</p>
          </div>
          <div className="stat-box">
            <h2>100+</h2>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;

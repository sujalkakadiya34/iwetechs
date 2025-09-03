import React from "react";
import "./Dealing.css";
import { FaCheckCircle } from "react-icons/fa";

const ReadySection = () => {
  return (
    <section className="ready-section">
      <div className="ready-container">
        {/* Left Circle Image */}
        <div className="ready-left">
          <img
            src = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Team Work"
            className="ready-img"
          />
        </div>

        {/* Right Content */}
        <div className="ready-right">
          <h1 className="ready-title">We’re Ready Develop Your Site!</h1>

          <ul className="ready-list">
            <li>
              <FaCheckCircle className="ready-icon" />
              Exploring version of lorem veritatis proin
            </li>
            <li>
              <FaCheckCircle className="ready-icon" />
              Auctor aliquet aenean simply free text veritatis quis
            </li>
            <li>
              <FaCheckCircle className="ready-icon" />
              Consequat ipsum nec lorem sagittis sem nibh.
            </li>
          </ul>

          <div className="ready-btn-wrapper">
            <button className="ready-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;

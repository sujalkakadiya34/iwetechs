import React, { useState } from "react";
import "./Services.css";
import Servicesone from "./Servicesone";
import WhyChooseSection from "./WhyChooseSection";

function ServicesoneData() {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Servicesone />
      <section className="services-section">
        {/* Left side: Image with gradient circle */}
        <div className="services-left">
          <div className="services-gradient-circle"></div>
          <img
            src="./assets/vrglass.jpg"
            alt="VR Illustration"
            className="services-image"
          />
        </div>

        {/* Right side: Text content */}
        <div className="services-right">
          <p className="services-subtitle">— Company Benefits</p>
          <h1 className="services-title">
            Expert of Your Software <br /> Programming
          </h1>
          <p className="services-highlight">
            Proin est lacus, sagittis lobortis iaculis eget.
          </p>
          <p className="services-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour,
            or randomised words which don’t look even.
          </p>

          <div className="services-bubble">
            <div className="services-icon">
              <i className="fa fa-globe"></i>
            </div>
            <p className="services-bubble-text">
              <b>Stop worrying, we take care of your technology problems.</b>
            </p>
          </div>

          <button
            className={`services-button ${showMore ? "active" : ""}`}
            onClick={handleLearnMore}
          >
            {showMore ? "SHOW LESS" : "LEARN MORE"}
          </button>

          {/* Animated extra content */}
          <div className={`learnmore-content ${showMore ? "show" : ""}`}>
            <h3>Our Expertise Includes:</h3>
            <ul>
              <li>✅ Full-stack Web Development</li>
              <li>✅ Mobile App Solutions</li>
              <li>✅ Cloud Infrastructure & DevOps</li>
              <li>✅ AI-driven Business Automation</li>
            </ul>
            <p>
              We provide scalable and innovative solutions tailored to your business,
              ensuring performance, security, and efficiency in every project we deliver.
            </p>
          </div>
        </div>

    

      </section>
      <WhyChooseSection />
    </>
  );
}

export default ServicesoneData;

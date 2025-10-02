import React from "react";
import "./BannerSection.css";
import MapEmbed from "./MapEmbed";

export default function BannerSection() {
  const handleLearnMore = () => {
    const startY = window.scrollY;
    const endY = 0;  
    const distance = endY - startY;
    const duration = 1000;  
    let startTime = null;

    const easing = (t) => Math.pow(t, 3); 

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easing(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <>
      <section className="banner-section">
        <div className="banner-container">
          <div className="banner-content">
            <p className="banner-subtitle">Let’s get started</p>
            <h1 className="banner-title">
              World class IT solutions partner of choice
            </h1>
          </div>

          <div className="banner-right">
            <button className="banner-button" onClick={handleLearnMore}>
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      <div className="map-section">
        <MapEmbed />
      </div>
    </>
  );
}

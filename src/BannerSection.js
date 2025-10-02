import React from "react";
import "./BannerSection.css"; 
import MapEmbed from "./MapEmbed";   // Import map component

export default function BannerSection() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-container">
          {/* Left content */}
          <div className="banner-content">
            <p className="banner-subtitle">Let’s get started</p>
            <h1 className="banner-title">
              World class IT solutions partner of choice
            </h1>
          </div>

          {/* Right side content (button only) */}
          <div className="banner-right">
            <button className="banner-button">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* Map Section (comes after banner) */}
      <div className="map-section">
        <MapEmbed />
      </div>
    </>
  );
}

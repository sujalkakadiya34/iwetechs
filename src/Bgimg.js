import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./rspsv.css";

function Bgimg() {
  const images = [
    "assets/bgimg1.jpg",
    "assets/bgimg2.jpg",
    "assets/bgimg3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
 
      <div className="hero-overlay"></div>
 
      <div className="hero-content">
        <p className="hero-subtitle">EXPERIENCE THE BEST IT SOLUTIONS</p>
        <h1 className="hero-title">
          IT SOLUTIONS <span>&</span> <br /> SERVICES
        </h1>
 
        <Link to="/learn-more">
          <button className="btn-learn-more">
            Learn More
            <span className="arrow">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Bgimg;

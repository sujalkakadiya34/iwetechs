import React, { useState, useEffect } from "react";
import "./App.css";

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

  // Manual next/prev
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

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
        <button className="hero-btn">LEARN MORE</button>
      </div>

      <div className="hero-arrows">
        <button onClick={prevSlide} className="arrow-btn">
          &larr;
        </button>
        <button onClick={nextSlide} className="arrow-btn">
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Bgimg;

// src/ctalmbtn.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function CtaLmBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/learn-more");
  };

  return (
    <section className="ctaLmBox">
      <div className="ctaLmContent animateContainer">
        <h1 className="animateFadeDown">We’re here to help to grow your business.</h1>
        <h2 className="animateFadeUp">Looking for the Best IT Business Solutions?</h2>
        <p className="animateFadeIn">
          Growing a business in today’s digital world requires more than just
          great ideas — it requires smart technology, innovative strategies, and
          reliable support. <br /> <br />
          Our team specializes in delivering <b>custom IT solutions</b> that
          empower businesses of all sizes to achieve sustainable growth. From
          <span className="highlight"> cloud infrastructure</span> and{" "}
          <span className="highlight">web development</span> to{" "}
          <span className="highlight">AI-driven tools</span> and{" "}
          <span className="highlight">digital marketing strategies</span>, we
          provide everything you need to stay ahead of the competition. <br />{" "}
          <br />
          Let us partner with you to turn challenges into opportunities and make
          your vision a reality.
        </p>

        <button onClick={handleClick} className="ctaAnimatedBtn">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}

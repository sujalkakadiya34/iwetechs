import React, { useEffect, useRef, useState } from "react";
import "./Dealing.css";

export default function Dealing() {
  const services = [
    { icon: "💻", title: "Product Development" },
    { icon: "📢", title: "Digital Marketing" },
    { icon: "🔒", title: "Security System" },
    { icon: "🖥️", title: "UI/UX Designing" },
    { icon: "📊", title: "Data Analysis" },
    { icon: "⚙️", title: "IT Solutions" },
    { icon: "🌐", title: "Web Development" },
    { icon: "📱", title: "App Development" },
  ];

  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(230);
  const gap = 20;
  const leftPad = 20;
  const rightPad = 20;

  // Update visible cards dynamically based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 600) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2); // Tablets
      } else {
        setVisibleCards(4); // Desktop
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const cardFull = cardWidth + gap;
  const visibleAreaWidth = visibleCards * cardWidth + (visibleCards - 1) * gap;
  const wrapperWidth = leftPad + visibleAreaWidth + rightPad;

  const clonesBefore = services.slice(-visibleCards);
  const clonesAfter = services.slice(0, visibleCards);
  const slides = [...clonesBefore, ...services, ...clonesAfter];
  const startIndex = visibleCards;

  const [index, setIndex] = useState(startIndex);
  const [transitionOn, setTransitionOn] = useState(true);
  const trackRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const t = setTimeout(() => {
      setTransitionOn(true);
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearTimeout(t);
  }, [index]);

  // Loop back for infinite effect
  const handleTransitionEnd = () => {
    if (index >= services.length + visibleCards) {
      setTransitionOn(false);
      setIndex(startIndex);
      setTimeout(() => setTransitionOn(true), 40);
    }
  };

  const translateX = -index * cardFull;

  return (
    <div className="dealing-section">
      {/* --------- TOP TEXT --------- */}
      <div className="dealing-top-text">
        <div className="top-left">
          <span className="top-subtitle">— What We're Offering</span>
          <h2 className="top-title">Dealing in all Professional IT Services</h2>
        </div>
        <div className="top-right">
          <p className="top-description">
            There are many variations of passages available, but majority have suffered alteration
            in some form, by humour or randomised words which don’t look even slightly believable.
          </p>
        </div>
      </div>

      {/* --------- SLIDER --------- */}
      <div
        className="carousel-wrapper"
        style={{
          width: `${wrapperWidth}px`,
          paddingLeft: `${leftPad}px`,
          paddingRight: `${rightPad}px`,
          ["--card-width"]: `${cardWidth}px`,
          ["--gap"]: `${gap}px`,
        }}
      >
        <div
          ref={trackRef}
          className="carousel-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: transitionOn ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {slides.map((s, i) => (
            <div className="service-card-de" key={i}>
              <div className="service-icon-1">{s.icon}</div>
              <h3 className="service-title-h3">
                {s.title.split(" ").map((word, idx) =>
                  idx === 1 ? <><br />{word}</> : word + " "
                )}
              </h3>
              <p className="service-text">
                Lorem Ipsum has been the <br />
                industry text ever since <br />
                then.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

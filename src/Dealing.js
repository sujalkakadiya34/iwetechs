import React, { useEffect, useRef, useState } from "react";
import "./Dealing.css";

export default function Dealing() {
  const services = [
    {
      title: "Product Development",
      icon: (
        <img
          src="/assets/pro.jpg.webp"
          alt="Product Development"
          width="48"
          height="48"
        />
      ),
    },
    {
      title: "Digital Marketing",
      icon: (
        <img
          src="/assets/degital-mark.svg"
          alt="Digital Marketing"
          width="48"
          height="48"
        />
      ),
    },
    {
      title: "Security System",
      icon: (
        <img
          src="/assets/secyour-sys.svg"
          alt="Security System"
          width="48"
          height="48"
        />
      ),
    },
    {
      title: "UI/UX Designing",
      icon: (
        <img
          src="/assets/ui-ux-de.svg"
          alt="UI/UX Designing"
          width="48"
          height="48"
        />
      ),
    },
    {
      title: "Data Analysis",
      icon: (
        <img
          src="/assets/data-any.svg"
          alt="Data Analysis"
          width="48"
          height="48"
        />
      ),
    },
    {
      title: "IT Solutions",
      icon: (
        <img
          src="/assets/it-sol.svg"
          alt="IT Solutions"
          width="48"
          height="48"
        />
      ),
    },
    {
      title: "Web Development",
      icon: (
        <img
          src="/assets/degital-mark.svg"
          alt="Web Development"
          width="48"
          height="48"
        />
      ),
    },
    {
      title: "App Development",
      icon: (
        <img
          src="/assets/data-any.svg"
          alt="App Development"
          width="48"
          height="48"
        />
      ),
    },
  ];

  const [visibleCards, setVisibleCards] = useState(4);
  // const [cardWidth, setCardWidth] = useState(230);
    const [cardWidth] = useState(230);
  const gap = 20;
  const leftPad = 20;
  const rightPad = 20;

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 600) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const cardFull = cardWidth + gap;
  const visibleAreaWidth =
    visibleCards * cardWidth + (visibleCards - 1) * gap;
  const wrapperWidth = leftPad + visibleAreaWidth + rightPad;

  const clonesBefore = services.slice(-visibleCards);
  const clonesAfter = services.slice(0, visibleCards);
  const slides = [...clonesBefore, ...services, ...clonesAfter];
  const startIndex = visibleCards;

  const [index, setIndex] = useState(startIndex);
  const [transitionOn, setTransitionOn] = useState(true);
  const trackRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setTransitionOn(true);
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearTimeout(t);
  }, [index]);

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
      <div className="dealing-top-text">
        <div className="top-left">
          <span className="top-subtitle">— What We're Offering</span>
          <h2 className="top-title">
            Dealing in all Professional IT <br></br>
            Services
          </h2>
        </div>
        <div className="top-right">
          <p className="top-description">
            There are many variations of passages available, but majority
            have suffered alteration in some form, by humour or randomised
            words which don’t look even slightly believable.
          </p>
          {/* <img src="/assets/pro.jpg.webp" alt="Profile" width="200" /> */}
        </div>
      </div>

          <div
            className="carousel-wrapper"
            style={{
              width: `${wrapperWidth}px`,
              paddingLeft: `${leftPad}px`,
              paddingRight: `${rightPad}px`,
              "--card-width": `${cardWidth}px`,
              "--gap": `${gap}px`,
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
          {slides.map((s, i) => {
            let key;
            if (i < visibleCards) {
              key = `clone-before-${i}-${s.title}`;
            } else if (i >= services.length + visibleCards) {
              key = `clone-after-${i}-${s.title}`;
            } else {
              key = `original-${i}-${s.title}`;
            }

            return (
              <div className="service-card-de" key={key}>
                <div className="service-icon-1">{s.icon}</div>
                <h3 className="service-title-h3">
                  {s.title.split(" ").map((word, idx) =>
                    idx === 1 ? (
                      <React.Fragment key={idx}>
                        <br />
                        {word}
                      </React.Fragment>
                    ) : (
                      word + " "
                    )
                  )}
                </h3>
                <p className="service-text">
                  Lorem Ipsum has been the <br />
                  industry text ever since <br />
                  then.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

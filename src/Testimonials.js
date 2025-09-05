import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const TESTIMONIALS = [
  {
    img: "https://i.pravatar.cc/150?img=1",
    name: "Aleesha Smith",
    role: "Senior Developer",
    rating: "★★★★★",
    text: "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text repreh."
  },
  {
    img: "https://i.pravatar.cc/150?img=2",
    name: "Mike Hardson",
    role: "Senior Designer",
    rating: "★★★★★",
    text: "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text repreh."
  },
  {
    img: "https://i.pravatar.cc/150?img=3",
    name: "Sophia Lee",
    role: "Project Manager",
    rating: "★★★★★",
    text: "The team was fantastic to work with. Their communication, dedication, and expertise exceeded our expectations. Duis aute lorem ipsum is simply free text repreh."
  },
  {
    img: "https://i.pravatar.cc/150?img=4",
    name: "John Carter",
    role: "Team Lead",
    rating: "★★★★★",
    text: "Working with them has been a wonderful experience. Their timely delivery and professionalism make them stand out. Duis aute lorem ipsum is simply free text repreh."
  }
];

export default function Testimonials() {
  const [perView, setPerView] = useState(window.innerWidth <= 668 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => setPerView(window.innerWidth <= 768 ? 1 : 2);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extended = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, perView)];
  const trackRef = useRef(null);
  const stepPxRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector(".testimonial-slide");
    if (!first) return;
    const rect = first.getBoundingClientRect();
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.gap || "0") || 0;
    stepPxRef.current = Math.round(rect.width + gap);
  };

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    const t = setTimeout(measureStep, 300);
    return () => {
      window.removeEventListener("resize", measureStep);
      clearTimeout(t);
    };
  }, [perView]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index >= TESTIMONIALS.length) {
      const t = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, 620);
      return () => clearTimeout(t);
    } else if (!withTransition) {
      requestAnimationFrame(() => setWithTransition(true));
    }
  }, [index, withTransition]);

  const stepPx = stepPxRef.current;
  const offsetPx = stepPx ? -(index * stepPx) : 0;
  const offsetPct = -(index * (100 / perView));

  const trackStyle = {
    transform: stepPx
      ? `translate3d(${offsetPx}px,0,0)`
      : `translate3d(${offsetPct}%,0,0)`,
    transition: withTransition ? "transform 600ms ease" : "none",
    "--spv": perView,
    "--gap": "30px"
  };

  return (
    <div className="Testimonials-main-container">
      <div className="Testimonials-container">
        <p className="Testimonials-container-p1">— Client Testimonials</p>
        <p className="Testimonials-container-p2">
          <b>What They’re Talking?</b>
        </p>
      </div>

      <section className="slider-wrapper testimonials-slider">
        <div className="slider-viewport">
          <div ref={trackRef} className="slider-track" style={trackStyle}>
            {extended.map((t, i) => (
              <div className="testimonial-slide" key={i}>
                <div className="testimonial-card">
                  {/* Avatar & Name */}
                  <div className="card-header">
                    <div className="profile">
                      <img src={t.img} alt={t.name} />
                    </div>
                    <div className="name-bubble">
                      <h3 className="name">{t.name}</h3>
                      <p className="role">{t.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="rating">{t.rating}</div>

                  {/* Text */}
                  <p className="testimonial-text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {TESTIMONIALS.map((_, i) => {
            const active = index % TESTIMONIALS.length === i;
            return (
              <span key={i} className={`dot ${active ? "active" : ""}`}></span>
            );
          })}
        </div>
      </section>
    </div>
  );
}

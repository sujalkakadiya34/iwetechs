import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "./rspsv.css";

const DATA = [
  {
    img: "https://i.pravatar.cc/150?img=2",
    name: "Mike Hardson",
    role: "Senior Designer",
    rating: 5,
    text:
      "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch."
  },
  {
    img: "https://i.pravatar.cc/150?img=1",
    name: "Aleesha Smith",
    role: "Senior Developer",
    rating: 5,
    text:
      "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch."
  },
  {
    img: "https://i.pravatar.cc/150?img=3",
    name: "Sophia Lee",
    role: "Project Manager",
    rating: 5,
    text:
      "The team was fantastic to work with. Their communication, dedication, and expertise exceeded our expectations."
  },
  {
    img: "https://i.pravatar.cc/150?img=4",
    name: "John Carter",
    role: "Team Lead",
    rating: 5,
    text:
      "Working with them has been a wonderful experience. Their timely delivery and professionalism make them stand out."
  }
];

const AUTOPLAY_MS = 3000;
const TRANSITION_MS = 600;

export default function Testimonials() {
  const [perView, setPerView] = useState(window.innerWidth <= 768 ? 1 : 2);

   const items = React.useMemo(() => {
    const head = DATA.slice(-perView);
    const tail = DATA.slice(0, perView);
    return [...head, ...DATA, ...tail];
  }, [perView]);

   const [index, setIndex] = useState(perView);
  const [withTransition, setWithTransition] = useState(true);

  const trackRef = useRef(null);
  const stepPxRef = useRef(0);  

   useEffect(() => {
    const onResize = () => setPerView(window.innerWidth <= 768 ? 1 : 2);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

   const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector(".testimonial-slide");
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    const w = first.getBoundingClientRect().width;
    stepPxRef.current = Math.round(w + gap);
  };

   useEffect(() => {
    measureStep();
    const onResize = () => measureStep();
    window.addEventListener("resize", onResize);
     const t = setTimeout(measureStep, 50);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

   useEffect(() => {
    setWithTransition(false);
    setIndex(perView);
    requestAnimationFrame(() => {
      measureStep();
      setWithTransition(true);
    });
  }, [perView]);

 
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  
  useEffect(() => {
    const realLen = DATA.length;
    const edgeRight = realLen + perView;  
    if (index >= edgeRight) {
      const t = setTimeout(() => {
        setWithTransition(false);
        setIndex(perView); 
        requestAnimationFrame(() => setWithTransition(true));
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [index, perView]);

  const step = stepPxRef.current || 0;
  const translateX = -(index * step);

  const trackStyle = {
    transform: `translate3d(${translateX}px, 0, 0)`,
    transition: withTransition ? `transform ${TRANSITION_MS}ms ease` : "none",
    "--gap": "30px",
    "--perView": perView
  };

  const activeDot =
    (index - perView + DATA.length) % DATA.length;  

  return (
    <section className="Testimonials">
      <header className="Testimonials-header">
        <p className="eyebrow">— Client Testimonials</p>
        <h2 className="title">What They’re Talking?</h2>
      </header>

      <div className="slider-wrapper">
        <div className="slider-viewport">
          <div ref={trackRef} className="slider-track" style={trackStyle}>
            {items.map((t, i) => (
              <div className="testimonial-slide" key={i}>
                <article className="testimonial-card">
                  <div className="card-header">
                    <div className="profile">
                      <img src={t.img} alt={t.name} />
                    </div>
                    <div className="name-bubble">
                      <h3 className="name">{t.name}</h3>
                      <p className="role">{t.role}</p>
                    </div>
                  </div>

                  <div className="rating">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text">{t.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {DATA.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeDot ? "active" : ""}`}
              onClick={() => {
                setWithTransition(true);
                setIndex(i + perView);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

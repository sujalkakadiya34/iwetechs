// src/WhyChooseSection.js
import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import "./Testimonialss.css";
import Footer from "./Footer";

const WhyChooseSection = () => {
  return (
    <>
      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="why-wrap">
        <div className="why-inner">
          {/* LEFT: Text block */}
          <div className="why-text">
            <p className="why-kicker">— What We’re Offering</p>

            <h1 className="why-title">
              Why you Should Choose Our
              <br /> Services
            </h1>

            <p className="why-desc">
              There are many variations of passages of but the majority have
              alteration in some form by injected humour or which don’t look
              even slightly believe.
            </p>

            <ul className="why-bullets">
              <li>Making this first true generator</li>
              <li>Many desktop publish packages</li>
              <li>Lorem Ipsum is not simply</li>
              <li>If you are going to passage</li>
              <li>It has roots in a piece</li>
            </ul>

            <div className="why-signature">Mike Hardson</div>
          </div>

          {/* RIGHT: Image + purple badge */}
          <div className="why-media">
            <img
              className="why-img"
              src={"./assets/meeting.jpg"}
              alt="Team meeting"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop";
              }}
            />
            <div className="why-badge">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.6 0 1.27-.44 1.51-1.07v-.01c-.24-.63-.91-1.07-1.51-1.07H3a2 2 0 1 1 0-4h.09c.6 0 1.27-.44 1.51-1.07.24-.63.09-1.27-.33-1.82l-.06-.06A2 2 0 1 1 7.04 2.3l.06.06c.55.42 1.19.57 1.82.33h.01C9.56 2.45 9.91 2 10.5 2a2 2 0 1 1 4 0c.59 0 .94.45 1.07 1.09h.01c.63.24 1.27.09 1.82-.33l.06-.06A2 2 0 1 1 21.7 7.04l-.06.06c-.42.55-.57 1.19-.33 1.82v.01c.24.63.91 1.07 1.51 1.07H22a2 2 0 1 1 0 4h-.09c-.6 0-1.27.44-1.51 1.07Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE GRID (kept from your file) ===== */}
      <Service />

      {/* ===== TESTIMONIALS (added at bottom) ===== */}
      <Testimonialss />
    </>
  );
};

/* ===================== SERVICE SECTION ===================== */
function Service() {
  const services = [
    {
      img: "./assets/service-1.jpg",
      icon: "./assets/service-icon-1.webp",
      title: "Perfect solutions that business demands",
    },
    {
      img: "./assets/service-2.jpg",
      icon: "./assets/service-icon-2.webp",
      title: "Reduced Spending with IT Talent Sourcing",
    },
    {
      img: "./assets/service-3.jpg",
      icon: "./assets/service-icon-3.webp",
      title: "Access to Experts and the Latest Technology",
    },
  ];

  return (
    <div className="service-section">
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-wrapper">
              <img
                src={service.img}
                alt={`service-${index}`}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>

            <div className="content-box-pl">
              <div className="icon-box">
                <img
                  src={service.icon}
                  alt="icon"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://img.icons8.com/ios-filled/100/ffffff/services.png";
                  }}
                />
              </div>
            </div>

            <div className="service-title">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================== TESTIMONIALS (added) ===================== */

const DATA = [
  {
    id: 1,
    img: "https://i.pravatar.cc/150?img=47",
    name: "Aleesha Smith",
    role: "Senior Developer",
    rating: 5,
    text:
      "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch."
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/150?img=12",
    name: "Mike Hardson",
    role: "Senior Designer",
    rating: 5,
    text:
      "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch."
  },
  {
    id: 3,
    img: "https://i.pravatar.cc/150?img=32",
    name: "Sophia Lee",
    role: "Project Manager",
    rating: 5,
    text:
      "The team was fantastic to work with. Their communication, dedication, and expertise exceeded our expectations."
  },
  {
    id: 4,
    img: "https://i.pravatar.cc/150?img=4",
    name: "John Carter",
    role: "Team Lead",
    rating: 5,
    text:
      "Working with them has been a wonderful experience. Their timely delivery and professionalism make them stand out."
  }
];

const AUTOPLAY_MS = 2000;
const TRANSITION_MS = 600;
const DEFAULT_GAP_PX = 20;

function Testimonialss() {
  // perView based on window width
  const [perView, setPerView] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 2
  );

  // clones for infinite loop
  const items = React.useMemo(() => {
    const head = DATA.slice(-perView);
    const tail = DATA.slice(0, perView);
    return [...head, ...DATA, ...tail];
  }, [perView]);

  const [index, setIndex] = useState(perView);
  const [withTransition, setWithTransition] = useState(true);

  const trackRef = useRef(null);
  const stepPxRef = useRef(0); // slide width + gap
  const cardWRef = useRef(0);  // measured card width
  const gapRef = useRef(DEFAULT_GAP_PX);
  const viewportRef = useRef(null);

  // keep perView synced with resize
  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth <= 768 ? 1 : 2);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // measure function
  const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstSlide = track.querySelector(".testimonial-slide");
    if (!firstSlide) return;

    // ensure track gap matches default (we also set it inline)
    track.style.gap = `${DEFAULT_GAP_PX}px`;

    const computed = getComputedStyle(track);
    const gap = parseFloat(computed.gap || "") || DEFAULT_GAP_PX;
    const w = Math.round(firstSlide.getBoundingClientRect().width);

    gapRef.current = gap;
    cardWRef.current = w;
    stepPxRef.current = Math.round(w + gap);

    // compute visible window width
    const visibleWidth = Math.round(perView * w + Math.max(0, perView - 1) * gap);

    // set viewport width inline so the visible window always equals visibleWidth
    const viewport = track.parentElement; // slider-viewport
    viewportRef.current = viewport;
    if (viewport) {
      viewport.style.width = `${visibleWidth}px`;
    }

    // update root CSS variables so CSS fallbacks match measured sizes
    const root = document.querySelector(".Testimonials");
    if (root) {
      root.style.setProperty("--perView", String(perView));
      root.style.setProperty("--card-w", `${w}px`);
      root.style.setProperty("--gap", `${gap}px`);
    }
  };

  // measure on mount, on resize, after images load
  useEffect(() => {
    measureStep();

    const onRz = () => measureStep();
    window.addEventListener("resize", onRz);

    // rebalance after images load
    const track = trackRef.current;
    const imgs = track ? Array.from(track.querySelectorAll("img")) : [];
    const onImg = () => measureStep();
    imgs.forEach((img) => img.addEventListener("load", onImg));

    const t = setTimeout(measureStep, 120);

    return () => {
      window.removeEventListener("resize", onRz);
      imgs.forEach((img) => img.removeEventListener("load", onImg));
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView]);

  // when perView changes, jump to initial index (no transition)
  useEffect(() => {
    setWithTransition(false);
    setIndex(perView);
    requestAnimationFrame(() => {
      measureStep();
      setWithTransition(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView]);

  // autoplay increment
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // wrap around logic when hitting clones
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

  // compute transform
  const step = stepPxRef.current || 0;
  const translateX = Math.round(-(index * step));

  const trackStyle = {
    transform: `translate3d(${translateX}px, 0, 0)`,
    transition: withTransition ? `transform ${TRANSITION_MS}ms ease` : "none",
    gap: `${DEFAULT_GAP_PX}px`,
    "--perView": perView
  };

  const activeDot = (index - perView + DATA.length) % DATA.length;

  return (
    <>
    <section className="Testimonials">
      <div className="Testimonials-header">
        <p className="eyebrow">— Client Testimonials</p>
        <h2 className="title">What They’re Talking?</h2>
      </div>

      <div className="slider-wrapper">
        <div className="slider-viewport">
          <div ref={trackRef} className="slider-track" style={trackStyle}>
            {items.map((t, i) => (
              <div className="testimonial-slide" key={`${t.id}-${i}`}>
                <div className="testimonial-card">
                  <div className="card-header">
                    <div className="profile">
                      <img src={t.img} alt={t.name} />
                    </div>
                    <div className="name-bubble">
                      <h3 className="name">{t.name}</h3>
                      <p className="role">{t.role}</p>
                    </div>
                    <div className="rating">{"★".repeat(t.rating)}</div>
                  </div>
                  <p className="text">{t.text}</p>
                </div>
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
    <Footer />
    </>
  );
}

export default WhyChooseSection;

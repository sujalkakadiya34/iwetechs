import React, { useEffect, useRef, useState } from "react";
import "./Testimonialss.css";

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

export default function Testimonialss() {
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

  // measure function: measures first slide width and gap,
  // sets step, updates CSS vars on root & sets viewport width (visible window)
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

    // compute visible window width: perView*card + (perView -1)*gap
    const visibleWidth = Math.round(perView * w + Math.max(0, perView - 1) * gap);

    // set viewport width inline so the VISIBLE window always equals visibleWidth and stays centered
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

    // rebalance after images load (profile images can change height/flow)
    const track = trackRef.current;
    const imgs = track ? Array.from(track.querySelectorAll("img")) : [];
    const onImg = () => measureStep();
    imgs.forEach((img) => img.addEventListener("load", onImg));

    // also a small timeout to catch async layout
    const t = setTimeout(measureStep, 120);

    return () => {
      window.removeEventListener("resize", onRz);
      imgs.forEach((img) => img.removeEventListener("load", onImg));
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView]); // re-run when perView changes

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

  // compute transform: we want the slide at `index` to align at the LEFT of the viewport.
  // Because the viewport width equals the visible group width and is centered in the page,
  // the visible cards are centered on the page.
  const step = stepPxRef.current || 0;
  const translateX = Math.round(-(index * step));

  const trackStyle = {
    transform: `translate3d(${translateX}px, 0, 0)`,
    transition: withTransition ? `transform ${TRANSITION_MS}ms ease` : "none",
    gap: `${DEFAULT_GAP_PX}px`,
    // set will-change is in CSS; we push perView as CSS var too:
    "--perView": perView
  };

  const activeDot = (index - perView + DATA.length) % DATA.length;

  return (
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
  );
}

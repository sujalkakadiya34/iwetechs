import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const PROJECTS = [
  { img: "./assets/project1.webp", title: "Web Development", category: "DESIGN / IDEAS" },
  { img: "./assets/project2.webp", title: "Smart Visions", category: "DESIGN / IDEAS" },
  { img: "./assets/project3.webp", title: "Tech Solutions", category: "DESIGN / IDEAS" },
  { img: "./assets/project4.webp", title: "Creative Design", category: "DESIGN / IDEAS" },
  { img: "./assets/project5.webp", title: "Digital Strategy", category: "DESIGN / IDEAS" },
];

export default function ProjectsSlider() {
  // slides-per-view (desktop always 3, mobile 1)
  const [perView, setPerView] = useState(window.innerWidth <= 768 ? 1 : 3);

  // adjust perView on resize
  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth <= 768 ? 1 : 3);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // create clones for smooth infinite loop
  const extended = [...PROJECTS, ...PROJECTS.slice(0, perView)];

  const trackRef = useRef(null);
  const stepPxRef = useRef(0);            // pixel width of one slide (including gap)
  const [index, setIndex] = useState(0);  // how many steps moved
  const [withTransition, setWithTransition] = useState(true);

  // measure one slide width (including gap)
  const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector(".slide");
    if (!first) return;
    const rect = first.getBoundingClientRect();
    const styles = window.getComputedStyle(track);
    // modern browsers: use gap or columnGap
    const gapStr = styles.gap || styles.columnGap || "0px";
    const gap = parseFloat(gapStr) || 0;
    stepPxRef.current = Math.round(rect.width + gap);
  };

  // measure after mount and when perView changes and on resize and image loads
  useEffect(() => {
    measureStep();
    const track = trackRef.current;
    if (!track) return;
    const imgs = track.querySelectorAll("img");
    const onImgLoad = () => measureStep();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));
    window.addEventListener("resize", measureStep);
    // re-measure in a short timeout (images or fonts might change size)
    const t = setTimeout(measureStep, 300);
    return () => {
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
      window.removeEventListener("resize", measureStep);
      clearTimeout(t);
    };
  }, [perView]);

  // auto-advance every 2 seconds
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 2000);
    return () => clearInterval(id);
  }, []);

  // when index reaches original length -> snap back to 0 (no transition)
  useEffect(() => {
    if (index >= PROJECTS.length) {
      // wait for transition to finish, then snap to 0 without animation
      const t = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, 620); // slightly more than CSS transition
      return () => clearTimeout(t);
    } else {
      // make sure transition is enabled for normal sliding
      if (!withTransition) {
        // re-enable on next frame so the "snap" has already happened
        requestAnimationFrame(() => setWithTransition(true));
      }
    }
  }, [index, withTransition]);

  // compute translate offset (pixel preferred). If measurement not ready, fallback to percent.
  const stepPx = stepPxRef.current;
  const offsetPx = stepPx ? -(index * stepPx) : 0;
  // fallback percent if stepPx is 0:
  const offsetPct = -(index * (100 / perView));

const trackStyle = {
  transform: stepPx ? `translate3d(${offsetPx}px, 0, 0)` : `translate3d(${offsetPct}%,0,0)`,
  transition: withTransition ? "transform 600ms ease" : "none",
  // pass CSS vars used by CSS for slide sizing/gap
  "--spv": perView,
  "--gap": "20px",
};


return (
  <section className="slider-wrapper">
    {/* viewport: keeps left/right padding fixed */}
    <div className="slider-viewport">
      <div ref={trackRef} className="slider-track" style={trackStyle}>
        {extended.map((p, i) => (
          <div className="slide" key={i}>
            <img className="slide-img" src={p.img} alt={p.title} />
            <div className="slide-overlay">
              <h3 className="slide-title">{p.title}</h3>
              <p className="slide-cat">{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* pagination dots */}
    <div className="slider-dots">
      {PROJECTS.map((_, i) => {
        const active = index % PROJECTS.length === i;
        return <span key={i} className={`dot ${active ? "active" : ""}`}></span>;
      })}
    </div>
  </section>
);
}
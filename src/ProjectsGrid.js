import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "./rspsv.css";

const PROJECTS = [
  { img: "./assets/project1.webp", title: "Web Development", category: "DESIGN / IDEAS" },
  { img: "./assets/project2.webp", title: "Smart Visions", category: "DESIGN / IDEAS" },
  { img: "./assets/project3.webp", title: "Tech Solutions", category: "DESIGN / IDEAS" },
  { img: "./assets/project4.webp", title: "Creative Design", category: "DESIGN / IDEAS" },
  { img: "./assets/project5.webp", title: "Digital Strategy", category: "DESIGN / IDEAS" },
];

export default function ProjectsSlider() {
 
  const [perView, setPerView] = useState(window.innerWidth <= 768 ? 1 : 3);

 
  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth <= 768 ? 1 : 3);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

 
  const extended = [...PROJECTS, ...PROJECTS.slice(0, perView)];

  const trackRef = useRef(null);
  const stepPxRef = useRef(0);             
  const [index, setIndex] = useState(0);   
  const [withTransition, setWithTransition] = useState(true);

 
  const measureStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector(".slide");
    if (!first) return;
    const rect = first.getBoundingClientRect();
    const styles = window.getComputedStyle(track);
 
    const gapStr = styles.gap || styles.columnGap || "0px";
    const gap = parseFloat(gapStr) || 0;
    stepPxRef.current = Math.round(rect.width + gap);
  };

 
  useEffect(() => {
    measureStep();
    const track = trackRef.current;
    if (!track) return;
    const imgs = track.querySelectorAll("img");
    const onImgLoad = () => measureStep();
    imgs.forEach((img) => img.addEventListener("load", onImgLoad));
    window.addEventListener("resize", measureStep);
  
    const t = setTimeout(measureStep, 300);
    return () => {
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
      window.removeEventListener("resize", measureStep);
      clearTimeout(t);
    };
  }, [perView]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index >= PROJECTS.length) {
     
      const t = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, 620);  
      return () => clearTimeout(t);
    } else {
      if (!withTransition) {
        requestAnimationFrame(() => setWithTransition(true));
      }
    }
  }, [index, withTransition]);

 
  const stepPx = stepPxRef.current;
  const offsetPx = stepPx ? -(index * stepPx) : 0;
 
  const offsetPct = -(index * (100 / perView));

const trackStyle = {
  transform: stepPx ? `translate3d(${offsetPx}px, 0, 0)` : `translate3d(${offsetPct}%,0,0)`,
  transition: withTransition ? "transform 600ms ease" : "none",
 
  "--spv": perView,
  "--gap": "20px",
};


return (
  <section className="slider-wrapper">
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

 
    <div className="slider-dots">
      {PROJECTS.map((_, i) => {
        const active = index % PROJECTS.length === i;
        return <span key={i} className={`dot ${active ? "active" : ""}`}></span>;
      })}
    </div>
  </section>
);
}
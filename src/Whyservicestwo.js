import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Services.css";
import Servicesone from "./Servicesone";

function Whyservicestwo() {
  return (
    <>
      {/* ===== Your existing top section ===== */}
      <Servicesone />
      <div className="Whyservicestwo-section">
        <div className="Whyservicestwo-section-main">
          <img src="./assets/service-thumb-4.webp" alt="Why Service Two" />
        </div>

        <div className="icon-circle">
          <div className="icon-inner">
            <img src="./assets/service-icon-4.webp" alt="Why Service Two" />
          </div>
        </div>

        <div className="Whyservicestwo-section-content">
          <p className="Whyservicestwo-section-content-p1">
            <b> — Discover More Now </b>
          </p>
          <h1 className="Whyservicestwo-section-content-h1">
            Cloud Based Services for <br /> Mobile Apps
          </h1>
          <p className="Whyservicestwo-section-content-p2">
            Duis aute irure dolor in reprehenderit in voluptate velit <br />
            esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <p className="Whyservicestwo-section-content-p3">
            <b>
              <img src="./assets/arrow-icon-2.webp" alt="" /> Refresing to get
              such a personal touch. <br />
              <img src="./assets/arrow-icon-2.webp" alt="" /> Duis aute irure
              dolor in reprehenderit in voluptate. <br />
              <img src="./assets/arrow-icon-2.webp" alt="" /> Velit esse cillum
              dolore eu fugiat nulla pariatur.
            </b>
          </p>

          <button className="Whyservicestwo-section-content-btn">
            <b> Learn More </b>
          </button>
        </div>

        <div className="Whyservicestwo-section-content-signature">
          {/* <img
            src="./assets/service-item-1.webp"
            alt="Signature"
            className="Whyservicestwo-section-content-signature-img"
          /> */}
          <p className="Whyservicestwo-section-content-signature-p1">
            <b> . </b>
          </p>
        </div>
      </div>

      {/* ===== Autoplay Infinite Slider ===== */}
      <Ws2Carousel />
    </>
  );
}

/* ======= Carousel Component ======= */
function Ws2Carousel() {
  const baseCards = useMemo(
    () => [
      {
        id: 1,
        title: "Gaming and Entertainment",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form.",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop",
        badge: "G",
      },
      {
        id: 2,
        title: "Business and Finance",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form.",
        img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
        badge: "B",
      },
      {
        id: 3,
        title: "Information Technology",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form.",
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1400&auto=format&fit=crop",
        badge: "T",
      },
      {
        id: 4,
        title: "AI & Automation",
        text:
          "From strategy to deployment, we help teams automate workflows and scale securely.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
        badge: "A",
      },
    ],
    []
  );

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);

  const computePerView = () => {
    const w = window.innerWidth;
    if (w <= 720) return 1;
    if (w <= 1100) return 2;
    return 3;
  };

  const extendedCards = useMemo(() => {
    const pv = perView;
    const head = baseCards.slice(-pv);
    const tail = baseCards.slice(0, pv);
    return [...head, ...baseCards, ...tail];
  }, [baseCards, perView]);

  useEffect(() => {
    setAnim(false);
    setIndex(perView);
    const id = setTimeout(() => setAnim(true), 50);
    return () => clearTimeout(id);
  }, [perView]);

  useEffect(() => {
    const onResize = () => setPerView(computePerView());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const getStep = () => {
    const container = containerRef.current;
    if (!container) return 0;
    const gap = 40;
    const w = container.clientWidth;
    return (w - gap * (perView - 1)) / perView + gap;
  };

  const translateX = () => {
    const step = getStep();
    return -index * step;
  };

  const move = (dir = 1) => {
    setIndex((prev) => prev + dir);
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const handler = () => {
      const pv = perView;
      const total = extendedCards.length;
      if (index >= total - pv) {
        setAnim(false);
        setIndex(pv);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnim(true));
        });
      }
      if (index < pv) {
        setAnim(false);
        setIndex(total - pv - 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnim(true));
        });
      }
    };
    const node = trackRef.current;
    node?.addEventListener("transitionend", handler);
    return () => node?.removeEventListener("transitionend", handler);
  }, [index, perView, extendedCards.length]);

  // autoplay (move one card every 2 seconds)
  useEffect(() => {
    const id = setInterval(() => move(1), 2000);
    return () => clearInterval(id);
  }, [perView]);

  return (
    <section className="ws2-carousel">
      <div className="ws2-viewport" ref={containerRef}>
        <div
          className={`ws2-track ${anim ? "" : "no-anim"}`}
          ref={trackRef}
          data-per-view={perView}
          style={{ transform: `translateX(${translateX()}px)` }}
        >
          {extendedCards.map((c, i) => (
            <article className="ws2-card" key={`${c.id}-${i}`}>
              <span className="ws2-card-bg" />
              <div className="ws2-media">
                <img src={c.img} alt={c.title} />
                <div className="ws2-badge">{c.badge}</div>
              </div>
              <div className="ws2-body">
                <h3 className="ws2-title">{c.title}</h3>
                <p className="ws2-text">{c.text}</p>
              </div>
              <span className="ws2-corner" />
            </article>
          ))}
        </div>

        {/* <div className="ws2-controls">
          <button
            type="button"
            className="ws2-btn"
            onClick={() => move(-1)}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            type="button"
            className="ws2-btn"
            onClick={() => move(1)}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Whyservicestwo;
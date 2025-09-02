import React, { useEffect, useRef, useState } from "react";
import "./Dealing.css";

function Dealing() {
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

  const loopedServices = [...services, ...services, ...services];

  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);

  const sliderRef = useRef(null);

  // Compute the step width from the actual slider width on mobile,
  // fixed steps on larger screens.
  const computeCardWidth = () => {
    const containerW = sliderRef.current?.clientWidth || window.innerWidth;
    if (containerW <= 576) return containerW;  // 1 full-width card on mobile
    if (containerW <= 992) return 240;         // tablet step
    return 200;                                 // desktop step
  };

  const [cardWidth, setCardWidth] = useState(computeCardWidth());
  const totalLength = services.length;

  useEffect(() => {
    const onResize = () => setCardWidth(computeCardWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto move every 2s
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => p + 1), 2000);
    return () => clearInterval(id);
  }, []);

  // Seamless loop
  useEffect(() => {
    if (index >= totalLength * 2) {
      const t = setTimeout(() => {
        setNoTransition(true);
        setIndex(totalLength);
      }, 600);
      return () => clearTimeout(t);
    } else {
      setNoTransition(false);
    }
  }, [index, totalLength]);

  return (
    <>
      <div className="more-services-txt">
        <div className="more-services-left">
          <p className="more-services-txt-p1">— What We’re Offering</p>
          <h1 className="more-services-txt-h1">
            Dealing in all Professional IT <br /> Services
          </h1>
        </div>

        <div className="more-services-right">
          <p className="more-services-txt-p2">
            There are many variations of passages of available but majority have
            suffered alteration in some form, by humour or randomised words which
            don’t look even slightly believable.
          </p>
        </div>
      </div>

      <div className="services-slider" ref={sliderRef}>
        <div
          className="services-track"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
            transition: noTransition ? "none" : "transform 0.6s ease-in-out",
          }}
        >
          {loopedServices.map((service, i) => (
            <div className="service-card-de" key={i}>
              <div className="service-icon-1">{service.icon}</div>
              <h3 className="service-title-h3">{service.title}</h3>
              <p className="service-text">
                Lorem Ipsum has been the industry text ever since then.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dealing;

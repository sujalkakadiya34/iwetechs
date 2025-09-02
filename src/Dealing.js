import React, { useEffect, useState } from "react";
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

  // duplicate services 3x to ensure smooth looping
  const loopedServices = [...services, ...services, ...services];

  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);

  const cardWidth = 190; // card + margin
  const totalLength = services.length;

  // Auto move every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Loop back seamlessly when reaching 2nd copy
  useEffect(() => {
    if (index >= totalLength * 2) {
      setTimeout(() => {
        setNoTransition(true);
        setIndex(totalLength); // jump back to middle copy
      }, 600); // after transition ends
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

      <div className="services-slider">
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

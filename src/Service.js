import React from "react";
import "./App.css";
import "./rspsv.css";

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
              <img src={service.img} alt={`service-${index}`} />
            </div>
            
            <div className="content-box">
              <div className="icon-box">
                <img src={service.icon} alt="icon" />
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

export default Service;

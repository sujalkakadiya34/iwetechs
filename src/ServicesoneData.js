import React from "react";
import "./Services.css";
import Servicesone from "./Servicesone";

function  ServicesoneData() {
  return (
    <>
    <section className="services-section">
      {/* Left side: Image with gradient circle */}
      <div className="services-left">
        <div className="services-gradient-circle"></div>
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/19/15/virtual-reality-1287209_1280.jpg"
          alt="VR Illustration"
          className="services-image"
        />
      </div>

      {/* Right side: Text content */}
      <div className="services-right">
        <p className="services-subtitle">— Company Benefits</p>
        <h1 className="services-title">
          Expert of Your Software <br /> Programming
        </h1>
        <p className="services-highlight">
          Proin est lacus, sagittis lobortis iaculis eget.
        </p>
        <p className="services-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which don’t look even.
        </p>

        <div className="services-bubble">
          <div className="services-icon">
            <i className="fa fa-globe"></i>
          </div>
          <p className="services-bubble-text">
            <b>Stop worrying, we take care of your technology problems.</b>
          </p>
        </div>

        <button className="services-button">LEARN MORE</button>
      </div>
    </section>

    <Servicesone />

    </>
  );
}

export default ServicesoneData;

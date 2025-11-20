import React from "react";
import "./Services.css";
import Servicesone from "./Servicesone";

function Whyservicesthree() {
  return (
    <>
      <Servicesone />
      <section className="why-three-wrapper">
        <div className="why-three-grid">

          {/* ===== CARD 1 ===== */}
          <div className="why-three-card">
            <div className="why-three-img-wrapper">
              <img
                src="./assets/project-thumb-1.webp"
                alt="IT Solutions Worldwide"
                className="Whyservicesthree-content-main-div1-img1"
              />
              <div className="why-three-purple-overlay"></div>
            </div>

            <div className="why-three-content">
              <h3><b> We’re providing <br></br> IT solutions to all <br></br> countries Worldwide </b></h3>
              <button className="why-three-btn">
                <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* ===== CARD 2 ===== */}
          <div className="why-three-card">
            <div className="why-three-img-wrapper">
              <img
                src="./assets/project-thumb-2.webp"
                alt="Happy Clients"
                className="Whyservicesthree-content-main-div1-img2"
              />
              <div className="why-three-purple-overlay"></div>
            </div>

            <div className="why-three-content">
              <h3><b> Our happy clients <br></br> loved our technology <br></br> and services </b></h3>
              <button className="why-three-btn">
                <span className="arrow">→</span>
              </button>
            </div>
          </div>

          <div>
            <div className="Whyservicesthree-center-image-divone">
                <img
                  src="./assets/information-thumb-2.webp"
                  alt="Why Choose Us"
                  className="Whyservicesthree-main-image-1"
                />

                <img
                  src="./assets/iwetechs-square.png"
                  alt="Why Choose Us"
                  className="Whyservicesthree-main-image-4"
                />

                <img
                  src="./assets/information-thumb-1.webp"
                  alt="Why Choose Us"
                  className="Whyservicesthree-main-image-2"
                />

                <img
                  src="./assets/iwetechs-square.png"
                  alt="Why Choose Us"
                  className="Whyservicesthree-main-image-3"
                />
            </div>
          </div>

          <div className="Whyservicesthree-center-image-divtwo"> 
             <p className="Whyservicesthree-center-image-divtwo-p1"><b> — Get to Know Us </b></p>
             <h1 className="Whyservicesthree-center-image-divtwo-h1">Infetech Leading in IT <br></br> Technology Market</h1>
             <p className="Whyservicesthree-center-image-divtwo-p2"><b>Proin est lacus,sagittis lobortis iaculise get.</b></p>
             <p className="Whyservicesthree-center-image-divtwo-p3">There are many variations of passages of lorem free market to available, but the majority have alteration in some form, by injected humour, or randomised words.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Whyservicesthree;

import React from "react";
import "./App.css";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Left Side */}
        <div className="projects-left">
          <p className="projects-subtitle">— Our Completed Projects</p>
          <h1 className="projects-title">
            Improve & Enhance Our <br /> Tech Projects
          </h1>
        </div>

        {/* Right Side */}
        <div className="projects-right">
          <p className="projects-description">
            There are many variations of passages of available but majority have
            suffered alteration in some form, by humour or randomised words
            which don’t look even slightly believable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

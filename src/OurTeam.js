// src/OurTeam.js
import React from "react";
import "./css.css";
import OurTeamDetail from "./OurTeamDetail";

export default function OurTeam() {
  return (
    <>
      <div className="ourteam-frame">
        <div className="ourteam-layer">
          <h1 className="ourteam-title">OUR TEAM</h1>
          <p className="ourteam-breadcrumbs">
            HOME <span>/</span> OUR TEAM
          </p>
        </div>
      </div>

       <OurTeamDetail />
    </>
  );
}

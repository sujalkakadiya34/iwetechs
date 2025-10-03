import React from "react";
import "./css.css";
import ProfileCard from "./ProfileCard";

export default function TeamDetails() {
  return (
    <>
    <div className="teamdetails-frame">
      <div className="teamdetails-layer">
        <h1 className="teamdetails-title">TEAM DETAILS</h1>
        <p className="teamdetails-breadcrumbs">
          HOME <span>/</span> TEAM
        </p>
      </div>
    </div>
    <ProfileCard />
    </>
  );
}

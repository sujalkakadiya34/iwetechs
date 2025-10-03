import React from "react";
import "./css.css";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import ProgressCircle from "./ProgressCircle";

// Left Image Component
function ProfileImage({ src, alt }) {
  return (
    <div className="profileImage">
      <img src={src} alt={alt} />
    </div>
  );
}

// Right Details Component
function ProfileDetails({ name, title, heading, desc1, desc2 }) {
  return (
    <div className="profileDetails">
      <h2 className="profileDetails-name">{name}</h2>
      <h4 className="profileDetails-title">{title}</h4>

      <div className="profileDetails-social">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaPinterestP /></a>
        <a href="#"><FaInstagram /></a>
      </div>

      <h3 className="profileDetails-heading">{heading}</h3>
      <p className="profileDetails-text">{desc1}</p>
      <p className="profileDetails-text">{desc2}</p>
    </div>
  );
}

// Wrapper Component (Row Layout)
export default function ProfileCard() {
  return (
    <>
      <div className="profileRow">
        <ProfileImage src="./assets/about-thumb-1.jpg" alt="Profile" />
        <ProfileDetails
          name="Jessica Brown"
          title="Co founder & CEO"
          heading="I help my clients stand out and they help me grow."
          desc1="Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit id impedi. Quisq commodo simply free ornare tortor."
          desc2="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Vestibulum non sollicitudin diam. Sed malesuada dolor ac sem dictum, in aliquet ipsum ullamcorper."
        />
      </div>

      <hr className="profileDivider" />

      {/* 4 Circles Section */}
      <div className="progressRow">
        <ProgressCircle percentage={80} label="IT Consultation" delay={15} />
        <ProgressCircle percentage={80} label="Technology" delay={20} />
        <ProgressCircle percentage={80} label="Development" delay={25} />
        <ProgressCircle percentage={80} label="Lines of Codes" delay={30} />
      </div>
    </>
  );
}

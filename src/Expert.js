import React from "react";
import { FaShareAlt, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa"; // Added missing icons
import "./App.css";

const TEAM = [
  {
    img: "https://i.pravatar.cc/300?img=11",
    name: "Christine Eve",
    role: "Web Developer",
  },
  {
    img: "https://i.pravatar.cc/300?img=12",
    name: "Mike Hardson",
    role: "UI/UX Designer",
  },
  {
    img: "https://i.pravatar.cc/300?img=13",
    name: "Jessica Brown",
    role: "Web Designer",
  },
];

function Expert() {
  return (
    <section className="expert-section">
      {/* Title & Intro */}
      <div className="expert-container">
        <div className="expert-left">
          <p className="expert-subtitle">Our Expert People</p>
          <h2 className="expert-title">
            Meet Our Professional Team Members
          </h2>
        </div>
        <div className="expert-right">
          <p className="expert-text">
            There are many variations of passages of available but majority have
            suffered alteration in some form, by humour or randomised words
            which don’t look even slightly believable.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="team-container">
        {TEAM.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.img} alt={member.name} />
            </div>

            <div className="team-info">
              <div className="team-text">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>

              <div className="team-icon">
                <FaShareAlt />
                <div className="team-social">
                  <a href="https://www.facebook.com/"><FaFacebookF /></a>
                  <a href="https://x.com/"><FaTwitter /></a>
                  <a href="https://www.pinterest.com/"><FaPinterestP /></a>
                  <a href="https://www.instagram.com/"><FaInstagram /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expert;

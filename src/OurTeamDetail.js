// src/OurTeamDetail.js
import React from "react";
import "./css.css";
import Footer from "./Footer";
import { FaShareAlt, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";


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

export default function OurTeamDetail() {
  return (
    <>
    <section className="ourteamdetail-section">
      <div className="ourteamdetail-container">
        <div className="ourteamdetail-left">
          {/* <p className="ourteamdetail-subtitle">— Our Expert People</p>
          <h2 className="ourteamdetail-title">
            Meet Our Professional Team Members
          </h2>
        </div>
        <div className="ourteamdetail-right">
          <p className="ourteamdetail-text">
            There are many variations of passages of available but majority have
            suffered alteration in some form, by humour or randomised words
            which don’t look even slightly believable.
          </p> */}
        </div>
      </div>

      <div className="ourteamdetail-team-container">
        {TEAM.map((member, index) => (
          <div className="ourteamdetail-card" key={index}>
            <div className="ourteamdetail-img">
              <img src={member.img} alt={member.name} />
            </div>

            <div className="ourteamdetail-info">
              <div className="ourteamdetail-text">
                <h3 className="ourteamdetail-name">{member.name}</h3>
                <p className="ourteamdetail-role">{member.role}</p>
              </div>

              <div className="ourteamdetail-icon">
                <FaShareAlt />
                <div className="ourteamdetail-social">
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
    <Footer />
    </>
  );
}

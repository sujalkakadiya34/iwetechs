import React from "react";
import "./App.css";
// import "./rspsv.css";   
// import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaSearch, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {

  return (
    <header className="navbar-container">
      <div className="main-navbar">
        <div className="logo-section">
          <img src="./assets/iwetechs.png" alt="Logo" />
        </div>

        <nav className="menu">
          <div className="dropdown">
            <a href="http://localhost:3000/" className="dropdown-toggle">Home</a>
            <div className="dropdown-menu">
              <a href="http://localhost:3000/">Home 1</a>
              <a href="http://localhost:3000/">Home 2</a>
              <a href="http://localhost:3000/">Home 3</a>
              <a href="http://localhost:3000/">Home 4</a>
              <a href="http://localhost:3000/">Home 5</a>
              <a href="http://localhost:3000/">Header Versions</a>
            </div>
          </div>

          <a href="http://localhost:3000/">About</a>

          <div className="dropdown">
            <a href="http://localhost:3000/" className="dropdown-toggle">Pages</a>
            <div className="dropdown-menu">
              <a href="http://localhost:3000/">Our Team</a>
              <a href="http://localhost:3000/">Team Details</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="http://localhost:3000/" className="dropdown-toggle">Services</a>
            <div className="dropdown-menu">
              <a href="http://localhost:3000/">Service 1</a>
              <a href="http://localhost:3000/">Service 2</a>
              <a href="http://localhost:3000/">Service 3</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://iwetechs.vercel.app/" className="dropdown-toggle">Projects</a>
            <div className="dropdown-menu">
              <a href="https://iwetechs.vercel.app/">Projects</a>
              <a href="https://iwetechs.vercel.app/">Project Details</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="https://iwetechs.vercel.app/" className="dropdown-toggle">Blog</a>
            <div className="dropdown-menu">
              <a href="https://iwetechs.vercel.app/">Blog</a>
              <a href="https://iwetechs.vercel.app/">Blog Details</a>
            </div>
          </div>

          <a href="https://iwetechs.vercel.app/">Contact</a>
        </nav>
        <div className="right-section">
   
          <div className="call-box">
            <FaPhoneAlt className="call-icon" />
            <div>
              <p className="call-text">Call Anytime</p>
              <p className="call-number">+88 ( 9800 ) 6802</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

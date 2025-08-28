import React from "react";
import "./App.css";
// import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaSearch, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar-container">
      {/* Top Bar */}


      {/* Main Navbar */}
      <div className="main-navbar">
        {/* Logo */}
        <div className="logo-section">
          {/* <h2 className="logo">infetech</h2> */}
          <img src="./assets/iwetechs.png" alt="Logo" />
        </div>

        {/* Menu */}
        <nav className="menu">
          <a href="https://www.instagram.com/">Home</a>
          <a href="https://www.instagram.com/">About</a>
          <a href="https://www.instagram.com/">Pages</a>
          <a href="https://www.instagram.com/">Services</a>
          <a href="https://www.instagram.com/">Projects</a>
          <a href="https://www.instagram.com/">Blog</a>
          <a href="https://www.instagram.com/">Contact</a>
        </nav>

        {/* Right Section */}
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

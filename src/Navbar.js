import React from "react";
import "./App.css";
// import "./rspsv.css";   
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
          {/* Home Dropdown */}
          <div className="dropdown">
            <a href="" className="dropdown-toggle">Home</a>
            <div className="dropdown-menu">
              <a href="">Home 1</a>
              <a href="">Home 2</a>
              <a href="">Home 3</a>
              <a href="">Home 4</a>
              <a href="">Home 5</a>
              <a href="">Header Versions</a>
            </div>
          </div>

          {/* About */}
          <a href="">About</a>

          {/* Pages Dropdown */}
          <div className="dropdown">
            <a href="" className="dropdown-toggle">Pages</a>
            <div className="dropdown-menu">
              <a href="">Our Team</a>
              <a href="">Team Details</a>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="dropdown">
            <a href="" className="dropdown-toggle">Services</a>
            <div className="dropdown-menu">
              <a href="">Service 1</a>
              <a href="">Service 2</a>
              <a href="">Service 3</a>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="dropdown">
            <a href="https://iwetechs.vercel.app/" className="dropdown-toggle">Projects</a>
            <div className="dropdown-menu">
              <a href="https://iwetechs.vercel.app/">Projects</a>
              <a href="https://iwetechs.vercel.app/">Project Details</a>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="dropdown">
            <a href="https://iwetechs.vercel.app/" className="dropdown-toggle">Blog</a>
            <div className="dropdown-menu">
              <a href="https://iwetechs.vercel.app/">Blog</a>
              <a href="https://iwetechs.vercel.app/">Blog Details</a>
            </div>
          </div>

          {/* Contact */}
          <a href="https://iwetechs.vercel.app/">Contact</a>
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

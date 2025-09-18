// Navbar.js
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [visible, setVisible] = useState(true);  
  const [animating, setAnimating] = useState(false);  
  const timerRef = useRef(null);
  const triggeredRef = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (!triggeredRef.current && window.scrollY > 0) {
        triggeredRef.current = true;
        setVisible(false);  
        timerRef.current = setTimeout(() => {
          setVisible(true);  
          setAnimating(true);  
          timerRef.current = null;
        }, 300);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <header
      className="navbar-container"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-120%)",
        opacity: visible ? 1 : 0,
        transition: animating
          ? "transform 0.6s ease, opacity 0.4s ease"
          : "none",
      }}
    >
      <div className="main-navbar">
        <div className="logo-section">
          <img src="./assets/iwetechs.png" alt="Logo" />
        </div>

        <nav className="menu">
          <div className="dropdown">
            <a href="#sanmlknm" className="dropdown-toggle">Home</a>
            <div className="dropdown-menu">
              <a href="#fhsdi">Home 1</a>
              <a href="#fhsdi">Home 2</a>
              <a href="#fhsdi">Home 3</a>
              <a href="#fhsdi">Home 4</a>
              <a href="#fhsdi">Home 5</a>
              <a href="#fhsdi">Header Versions</a>
            </div>
          </div>

          <a href="#sknckn">About</a>

          <div className="dropdown">
            <a href="#sdkmvldkv" className="dropdown-toggle">Pages</a>
            <div className="dropdown-menu">
              <a href="#">Our Team</a>
              <a href="#">Team Details</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#" className="dropdown-toggle">Services</a>
            <div className="dropdown-menu">
              <a href="#">Service 1</a>
              <a href="#">Service 2</a>
              <a href="#">Service 3</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#" className="dropdown-toggle">Projects</a>
            <div className="dropdown-menu">
              <a href="#">Projects</a>
              <a href="#">Project Details</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#" className="dropdown-toggle">Blog</a>
            <div className="dropdown-menu">
              <a href="#">Blog</a>
              <a href="#">Blog Details</a>
            </div>
          </div>

          <a href="#">Contact</a>
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

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ alertTrigger }) {
  const [visible, setVisible] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

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

   useEffect(() => {
    if (!alertTrigger) return;
    if (alertTrigger.message) {
      setAlertMsg(alertTrigger.message);
      setShowAlert(true);

      const timer = setTimeout(() => setShowAlert(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [alertTrigger]);

  return (
    <>
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
              <a href="#" className="dropdown-toggle">Home</a>
              <div className="dropdown-menu">
                {/* <Link to="/Home-1">Home</Link> */}
                {/* <a href="#">Home 1</a>
                <a href="#">Home 2</a>
                <a href="#">Home 3</a>
                <a href="#">Home 4</a>
                <a href="#">Home 5</a>
                <a href="#">Header Versions</a> */}
              </div>
            </div>

            <a href="#sknckn">About</a>

            <div className="dropdown">
              <a href="#" className="dropdown-toggle">Pages</a>
              <div className="dropdown-menu">
                <Link to="/our-team">Our Team</Link>
                <Link to="/our-team-detail">Team Details</Link>
              </div>
            </div>

            <div className="dropdown">
              <a href="#" className="dropdown-toggle">Services</a>
              <div className="dropdown-menu">
                 <Link to="/Services-one">Service 1</Link>
                <a href="#">Service 2</a>
                <a href="#">Service 3</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="#" className="dropdown-toggle">Projects</a>
              <div className="dropdown-menu">
                <Link to="/OurProjects-p">Projects</Link>
                <a href="#">Project Details</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="#" className="dropdown-toggle">Blog</a>
              <div className="dropdown-menu">
                <Link to="/Blog-b">Blog</Link>
                <Link to="/BlogDetails-d">Blog Details</Link>
              </div>
            </div>

            <Link to="/contact">Contact</Link>
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
        <div className={`navbar-alert ${showAlert ? "visible" : ""}`}>
          {alertMsg}
        </div>
      </header>
    </>
  );
}

export default Navbar;

import React from "react";
import "./App.css";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaPaperPlane } from "react-icons/fa";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Logo + About */}
        <div className="footer-col">
        <div className="footer-logo">
            <img src="./assets/circlelogo.png" alt="iwetechs logo" />
            <span>iwetechs</span>
        </div>
        <p>
            We work with a passion of taking challenges and creating new ones in
            advertising sector.
        </p>
        <div className="footer-socials">
            <a href="https://x.com/"><FaTwitter /></a>
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://www.pinterest.com/"><FaPinterestP /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
        </div>
        </div>

        {/* Column 2: Links */}
        <div className="footer-col">
          <h3>Links</h3>
          <ul className="footer-col-ul">
            <li><a href="https://iwetechs.vercel.app/">About us</a></li>
            <li><a href="https://iwetechs.vercel.app/">Meet our Team</a></li>
            <li><a href="https://iwetechs.vercel.app/">News & Media</a></li>
            <li><a href="https://iwetechs.vercel.app/">Our Projects</a></li>
            <li><a href="https://iwetechs.vercel.app/">Contacts</a></li>
          </ul>
        </div>

            {/* Column 3: Newsletter */}
            <div className="footer-col newsletter">
            <h3>Newsletter</h3>
            <p className="footer-col-newsletter-p">Signup for our latest news & articles. We <br></br>
                won’t give you spam mails.
            </p>
            <form className="newsletter-form">
                <input type="email" placeholder="Email Address" />
                <button type="submit"><FaPaperPlane /></button>
            </form>
            </div>



        {/* Column 4: Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          {/* <p>📞 + 88 (9800) 6802</p> */}
          <p>📞 +91 9664697037</p>
          <p>✉️ sujalkakadiya1296@gmail.com</p>
            <p>📍 1017, RK Supreme, Near nana mava circle, 150 feet ring road,
                Rajkot, Gujarat - 360005
            </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© All Copyright 2022 by <a href="https://iwetechs.vercel.app/">Pixydrops</a></p>
      </div>
    </footer>
  );
}

export default Footer;

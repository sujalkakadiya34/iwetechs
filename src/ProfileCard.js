import React from "react";
import "./css.css";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import ProgressCircle from "./ProgressCircle";
import Footer from "./Footer";

function ProfileImage({ src, alt }) {
  return (
    <div className="profileImage">
      <img src={src} alt={alt} />
    </div>
  );
}

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
 
      <div className="progressRow">
        <ProgressCircle percentage={80} label="IT Consultation" delay={15} />
        <ProgressCircle percentage={80} label="Technology" delay={20} />
        <ProgressCircle percentage={80} label="Development" delay={25} />
        <ProgressCircle percentage={80} label="Lines of Codes" delay={30} />
      </div>

        <section className="contact-form-section">
        <p className="contact-subtitle">— Contact With Us</p>
        <h2 className="contact-title">
          Feel Free to Contact with Our IT <br></br>Experts
        </h2>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.location.reload();
          }}
        >
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" required />
          </div>

          <textarea placeholder="Write a Message" rows="6" required></textarea>

          <button type="submit" className="contact-btn">
            SEND A MESSAGE
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

 import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AboutCompany.css";

function AboutCompanyPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Splash visible for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      {/* ===== Splash Animation ===== */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background */}
            <div className="splash-bg"></div>
            <div className="splash-overlay"></div>

            {/* Particles */}
            <div className="particles">
              {[...Array(10)].map((_, i) => (
                <span key={i} style={{ "--i": i }}></span>
              ))}
            </div>

            {/* Logo and Text */}
            <motion.div
              className="splash-logo-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
            >
              <motion.img
                src="./assets/circlelogo.png"
                alt="WiWeTechs Logo"
                className="splash-logo"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.h1
                className="splash-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                iWeTechs
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Main Content ===== */}
      {!showSplash && (
        <>
          {/* Hero Section */}
          <motion.section
            className="about-hero"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-text"
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1>— About Our Company</h1>
              <h2>
                We’re Partner of Your <span>Innovations</span>
              </h2>
              <p>
                We help businesses embrace innovation and technology by
                providing end-to-end IT solutions. Our passionate team blends
                creativity and cutting-edge tools to deliver exceptional
                solutions that drive growth and success.
              </p>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="image-frame">
                <img src="assets/bgimg2.jpg" alt="Our Team" />
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            className="mission-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mission-image"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src="assets/bgimg1.jpg" alt="Mission" />
            </motion.div>

            <motion.div
              className="mission-content"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower businesses with innovative digital
                solutions that simplify processes, enhance productivity, and
                accelerate growth. We focus on measurable results while building
                meaningful, long-term relationships with our clients.
              </p>
            </motion.div>
          </motion.section>
        </>
      )}
    </div>
  );
}

export default AboutCompanyPage;

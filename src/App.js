import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Contact from "./Contact";

import Bgimg from "./Bgimg";
import AboutCompany from "./AboutCompany";
import Service from "./Service";
import Dealing from "./Dealing";
import ReadySection from "./ReadySection";
import Projects from "./Projects";
import ProjectsGrid from "./ProjectsGrid";
import Testimonials from "./Testimonials";
import Expert from "./Expert";
import Solutionimage from "./Solutionimage";
import News from "./News";
import CtaSection from "./CtaSection";
import Footer from "./Footer";
import LearnMore from "./LearnMore";
import LearnMoreReady from "./LearnMoreReady";
import AboutCompanyPage from "./AboutCompanyPage";
import CtaLmBtn from "./ctalmbtn";
import OurTeam from "./OurTeam";
import TeamDetails from "./TeamDetails";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import OurProjects from "./OurProjects";
import BlogDetailsContent from "./BlogDetailscontent";
import ServicesoneData from "./ServicesoneData";

function UseNavbarHeightVar() {
  useEffect(() => {
    const setVar = () => {
      const header = document.querySelector(".navbar-container");
      const h = header?.offsetHeight || 80;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, []);
  return null;
}

function App() {
  const [alertTrigger, setAlertTrigger] = useState(null);

  const showAlertInNavbar = (message) => {
    setAlertTrigger({ message });
  };

  return (
    <BrowserRouter>
      <Navbar alertTrigger={alertTrigger} />
      <UseNavbarHeightVar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Bgimg />
              <AboutCompany />
              <Service />
              <Dealing />
              <ReadySection />
              <Projects />
              <ProjectsGrid />
              <Testimonials />
              <Expert />
              <Solutionimage />
              <News />
              <CtaSection />
              <Footer />
            </>
          }
        />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/learn-ready" element={<LearnMoreReady />} />
        <Route path="/about-company" element={<AboutCompanyPage />} />
        <Route path="/cta-learn" element={<CtaLmBtn />} />
        <Route
          path="/contact"
          element={<Contact showAlertInNavbar={showAlertInNavbar} />}
        />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-team-detail" element={<TeamDetails />} />
        <Route path="/Blog-b" element={<Blog />} />
        <Route path="/BlogDetails-d" element={<BlogDetails />} />
        <Route path="/OurProjects-p" element={<OurProjects />} />
        <Route path="/blog-details" element={<BlogDetailsContent />} />
        <Route path="/Services-one" element={<ServicesoneData /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

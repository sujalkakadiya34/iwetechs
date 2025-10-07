import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Contact from "./Contact";

// Other pages/components (placeholders)
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


function App() {
  const [alertTrigger, setAlertTrigger] = useState(null);

  const showAlertInNavbar = (message) => {
    setAlertTrigger({ message });
  };

  return (
    <BrowserRouter>
      <Navbar alertTrigger={alertTrigger} />

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
        <Route path="/our-team-detail" element={<TeamDetails />} /> {/* ✅ Added */}
        <Route path="/Blog-b" element={<Blog />} />
        <Route path="/BlogDetails-d" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// App.js
import React from "react";
import "./App.css";

import Navbar from "./Navbar";
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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearnMore from "./LearnMore";
import AboutCompanyPage from "./AboutCompanyPage";  

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Homepage */}
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

        {/* Learn More (Generic Page) */}
        <Route path="/learn-more" element={<LearnMore />} />

        {/* About Company Detailed Page */}
        <Route path="/about-company" element={<AboutCompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router components
import ContactPage from "./Landing/Contact-Us/ContactPage";
import GetStartedWidget from "./Landing/Get-Started/GetStartedWidget";
import HeroSection from "./Landing/HeroSection";
import HowItWorks from "./Landing/How-It-Works/HowItWorks";
import MeetTheTeam from "./Landing/Out-Team/MeetTeam"; // Import your new MeetTheTeam component
import WhatWeDo from "./Landing/What-We-Do/WhatWeDo";
import WhyUs from "./Landing/Why-us/WhyUs";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WhatWeDo />
                <HowItWorks />
                <GetStartedWidget />
                <WhyUs />
                <ContactPage />
              </>
            }
          />
          <Route path="/meetTheTeam" element={<MeetTheTeam />} />
          <Route path="/whatWeDo" element={<MeetTheTeam />} />
          <Route path="/howItWorks" element={<MeetTheTeam />} />
          <Route path="/getStarted" element={<MeetTheTeam />} />
          <Route path="/contactUs" element={<MeetTheTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

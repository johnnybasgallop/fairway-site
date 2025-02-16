import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router components
import ContactPage from "./Landing/Contact-Us/ContactPage";
import GetStartedWidget from "./Landing/Get-Started/GetStartedWidget";
import HeroSection from "./Landing/HeroSection";
import HowItWorksMain from "./Landing/How-It-Works/HowItWorks";
import MeetTheTeam from "./Landing/Out-Team/MeetTeam"; // Import your new MeetTheTeam component
import WhatWeDo from "./Landing/What-We-Do/WhatWeDo";
import WhyUs from "./Landing/Why-us/WhyUs";
import Navbar from "./Navbar/Navbar";
import HowItWorks from "./Subpages/HowItWorks";
import OurMission from "./Subpages/OurMission";

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
                <HowItWorksMain />
                <GetStartedWidget />
                <WhyUs />
                <ContactPage />
              </>
            }
          />
          <Route path="/meetTheTeam" element={<MeetTheTeam />} />
          <Route path="/whatWeDo" element={<OurMission />} />
          <Route path="/howItWorks" element={<HowItWorks />} />
          <Route path="/getStarted" element={<GetStartedWidget />} />
          <Route path="/contactUs" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

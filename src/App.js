import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router components
import ContactPage from "./Contact-Us/ContactPage";
import GetStartedWidget from "./Get-Started/GetStartedWidget";
import HeroSection from "./Landing/HeroSection";
import Navbar from "./Navbar/Navbar";
import MeetTheTeam from "./Out-Team/MeetTeam"; // Import your new MeetTheTeam component
import WhatWeDo from "./What-We-Do/WhatWeDo";
import WhyUs from "./Why-us/WhyUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <WhatWeDo />
              <GetStartedWidget />
              <WhyUs />
              <ContactPage />
            </>
          } />
          <Route path="/meetTheTeam" element={<MeetTheTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./Landing/HeroSection";
import WhatWeDo from "./What-We-Do/WhatWeDo";
import ContactPage from "./Contact-Us/ContactPage";
import MeetTheTeam from "./Out-Team/MeetTheTeam";
import GetStartedWidget from "./Get-Started/GetStartedWidget";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <GetStartedWidget />
      {/* <MeetTheTeam /> */}
      <ContactPage />
    </div>
  );
}

export default App;

import React from "react";
import ContactPage from "./Contact-Us/ContactPage";
import GetStartedWidget from "./Get-Started/GetStartedWidget";
import HeroSection from "./Landing/HeroSection";
import Navbar from "./Navbar/Navbar";
import WhatWeDo from "./What-We-Do/WhatWeDo";
import WhyUs from "./Why-us/WhyUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <GetStartedWidget />
      <WhyUs/>
      {/* <MeetTheTeam /> */}
      <ContactPage />
    </div>
  );
}

export default App;

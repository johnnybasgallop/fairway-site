import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./Landing/HeroSection";
import WhatWeDo from "./What-We-Do/WhatWeDo";
import ContactPage from "./Contact-Us/ContactPage";
import MeetTheTeam from "./Out-Team/MeetTheTeam";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <MeetTheTeam />
      <ContactPage />
    </div>
  );
}

export default App;

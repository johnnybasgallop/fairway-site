import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./Landing/HeroSection";
import WhatWeDo from "./What-We-Do/WhatWeDo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
    </div>
  );
}

export default App;

import React from "react";
import AutomatedTrading from "./AutomatedTrading";
import Explanation from "./Explanation";
import ManualTrading from "./ManualTrading";
const HowItWorks = () => {
  return (
    <section id="whatwedo">
      <Explanation />
      <ManualTrading />
      <AutomatedTrading />
    </section>
  );
};

export default HowItWorks;

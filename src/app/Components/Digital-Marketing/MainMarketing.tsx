import React from "react";
import HeroMarketing from "./HeroMarketing";
import OurApproach from "./OurApproach";
import MarketingServicesSection from "./MarketingServicesSection";
import HowWeWork from "./HowWeWork";
import ResultsSection from "./ResultsSection";
import CallToAction from "../Services/CallToAction";

const MainMarketing = () => {
  return (
    <>
      <HeroMarketing />
      {/* <OurApproach /> */}
      <MarketingServicesSection />
      <HowWeWork />
      <ResultsSection />
      <CallToAction />
    </>
  );
};

export default MainMarketing;

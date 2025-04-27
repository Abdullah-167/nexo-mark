import React from "react";
import WebHero from "./WebHero";
import Webservices from "./Webservices";
import Webtestimonials from "./Webtestimonials";
import WhyChooseUs from "./WhyChooseUs";
import CallToAction from "../Services/CallToAction";

const MainWeb = () => {
  return (
    <>
      <WebHero />
      <Webservices />
      <Webtestimonials />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
};

export default MainWeb;

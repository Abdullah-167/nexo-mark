import React from "react";
import BrandingHero from "./BrandingHero";
import WhyBrandingMatters from "./WhyBrandingMatters";
import BrandingApproach from "./BrandingApproach";
import BrandingUnforgettable from "./BrandingUnforgettable";
import CallToAction from "../Services/CallToAction";

const BrandingMain = () => {
  return (
    <>
      <BrandingHero />
      <WhyBrandingMatters />
      <BrandingApproach />
      <BrandingUnforgettable />
      <CallToAction />
    </>
  );
};

export default BrandingMain;

import React from "react";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import Process from "./Process";
import GlobalCaseStudies from "./CaseStudies";
import ClientTrust from "./Clienttrust";
import Testimonials from "./Testimonials";
import VisionSection from "./VisionSection";

const MainHome = () => {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Services />
      <Process />
      <GlobalCaseStudies />
      {/* <ClientTrust /> */}
      <Testimonials />
      <VisionSection />
    </main>
  );
};

export default MainHome;

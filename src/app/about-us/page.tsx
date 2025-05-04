import React from "react";
import MainAbout from "../Components/Aboutus/MainAbout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Nexo Mark",
  description:
    "Learn more about Nexo Mark — a passionate team of designers, developers, and marketers helping businesses grow through tailored digital solutions. Discover our story, mission, and the values that drive our work.",
};

const page = () => {
  return (
    <main>
      <MainAbout />
    </main>
  );
};

export default page;

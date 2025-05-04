import React from "react";
import Mainservices from "../Components/Services/Mainservices";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services - Nexo Mark | Web, SEO, Marketing & Design",
  description: "Explore Nexo Mark's full range of services — including web development, SEO, digital marketing, branding, video editing, and graphic design. Everything your business needs to grow online, all in one place.",
};


const page = () => {
  
  return (
    <>
      <Mainservices />
    </>
  );
};

export default page;

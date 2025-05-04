import React from "react";
import Mainservices from "../Components/Services/Mainservices";  // Custom component for the services section
import Head from "next/head";  // Next.js Head component to manage metadata

const Page = () => {
  return (
    <>
      {/* Manage meta tags for SEO */}
      <Head>
        <title>Services - Nexo Mark | Web, SEO, Marketing & Design</title>  {/* Title displayed in the browser tab */}
        <meta
          name="description"
          content="Explore Nexo Mark's full range of services — including web development, SEO, digital marketing, branding, video editing, and graphic design. Everything your business needs to grow online, all in one place."
        />
        <meta
          name="keywords"
          content="services, Nexo Mark, web development, SEO, digital marketing, branding, design"
        />
      </Head>

      {/* Main content section for services */}
      <main>
        <Mainservices />  {/* Your custom component that renders the services */}
      </main>
    </>
  );
};

export default Page;

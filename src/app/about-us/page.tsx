import React from "react";
import MainAbout from "../Components/Aboutus/MainAbout";
import Head from "next/head";

const Page = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>About Us - Nexo Mark</title>
        <meta
          name="description"
          content="Learn more about Nexo Mark — a passionate team of designers, developers, and marketers helping businesses grow through tailored digital solutions. Discover our story, mission, and the values that drive our work."
        />
        <meta
          name="keywords"
          content="about us, Nexo Mark, web development, digital marketing, branding, team, mission, values"
        />
      </Head>

      {/* Main content of the page */}
      <main>
        <MainAbout />
      </main>
    </>
  );
};

export default Page;

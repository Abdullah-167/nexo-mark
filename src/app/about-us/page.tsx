import React from "react";
import MainAbout from "../Components/Aboutus/MainAbout";
import Head from "next/head";

export const metadata = {
  title: "About Us - Nexo Mark",
  description:
    "Learn more about Nexo Mark — a passionate team of designers, developers, and marketers helping businesses grow through tailored digital solutions.",
  keywords: [
    "about us",
    "Nexo Mark",
    "web development",
    "digital marketing",
    "branding",
    "team",
    "mission",
    "values",
  ],
  viewport: "width=device-width, initial-scale=1",
};

const Page = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

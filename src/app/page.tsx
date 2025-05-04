import React from "react";
import MainHome from "./Components/Home/MainHome";
import Head from "next/head"; // Importing the Head component

const Home = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>Home - Nexo Mark</title>
        <meta
          name="description"
          content="Nexo Mark helps businesses grow through expert web development, SEO, digital marketing, branding, video editing and stunning design. Build your brand with purpose-driven solutions that deliver results."
        />
        <meta
          name="keywords"
          content="web development, SEO, digital marketing, branding, video editing, Nexo Mark, business growth, stunning design"
        />
      </Head>

      {/* Main content of the page */}
      <main>
        <MainHome />
      </main>
    </>
  );
};

export default Home;

import React from "react";
import MainMarketing from "@/app/Components/Digital-Marketing/MainMarketing";
import Head from "next/head";

const Page = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>Digital Marketing Services - Nexo Mark</title>
        <meta
          name="description"
          content="Accelerate your brand’s growth with Nexo Mark’s digital marketing services. From social media and PPC to email marketing, content strategy, and analytics — we drive real results through performance-based campaigns."
        />
        <meta
          name="keywords"
          content="digital marketing, social media marketing, PPC, email marketing, content strategy, performance marketing, analytics"
        />
      </Head>

      {/* Main content of the page */}
      <main>
        <MainMarketing />
      </main>
    </>
  );
};

export default Page;

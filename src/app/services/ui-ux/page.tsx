import React from "react";
import MainUiUx from "@/app/Components/UiUx/MainUiUx";
import Head from "next/head";

const Page = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>UI/UX Design Services - Nexo Mark</title>
        <meta
          name="description"
          content="Craft intuitive, conversion-focused user interfaces with Nexo Mark. We design seamless user experiences for websites, mobile apps, and digital products that drive engagement and reflect your brand identity."
        />
        <meta
          name="keywords"
          content="UI/UX design, user experience, user interface, digital design, mobile apps, website design, conversion-focused design"
        />
      </Head>

      {/* Main content of the page */}
      <main>
        <MainUiUx />
      </main>
    </>
  );
};

export default Page;

import React from "react";
import BrandingMain from "@/app/Components/Branding/BrandingMain";
import Head from "next/head";

const Page = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>Branding Services - Nexo Mark</title>
        <meta
          name="description"
          content="Build a memorable brand identity with Nexo Mark. We craft logos, visual styles, messaging, and brand strategies that help you stand out, connect with your audience, and build long-term trust."
        />
        <meta
          name="keywords"
          content="branding services, brand identity, logo design, visual style, brand strategy, messaging, Nexo Mark"
        />
      </Head>

      {/* Main content of the page */}
      <main>
        <BrandingMain />
      </main>
    </>
  );
};

export default Page;

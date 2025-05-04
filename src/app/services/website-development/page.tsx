import React from "react";
import MainWeb from "@/app/Components/WebDevelopment/MainWeb";
import Head from "next/head";

const Page = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>Web Development Services - Nexo Mark</title>
        <meta
          name="description"
          content="Nexo Mark builds custom, high-performance websites for eCommerce, businesses, startups, portfolios, blogs, and more. From sleek frontends to scalable backends, we deliver clean code, fast load times, and stunning design — tailored to your goals."
        />
        <meta
          name="keywords"
          content="web development, custom websites, eCommerce, startups, portfolios, business websites, web design, scalable websites"
        />
      </Head>

      {/* Main content of the page */}
      <main>
        <MainWeb />
      </main>
    </>
  );
};

export default Page;

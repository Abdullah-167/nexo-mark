import React, { Suspense } from "react";
import ContactUs from "../Components/Contact/ContactUs";
import Head from "next/head";

const Page = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>Contact Us - Nexo Mark</title>
        <meta
          name="description"
          content="Have a project in mind? Get in touch with Nexo Mark for expert web development, digital marketing, SEO, branding, and more. We're here to turn your ideas into results-driven solutions."
        />
        <meta
          name="keywords"
          content="Contact Us, Nexo Mark, web development, SEO, digital marketing, branding, get in touch"
        />
      </Head>

      {/* Main content with Suspense for loading */}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactUs />
        </Suspense>
      </main>
    </>
  );
};

export default Page;

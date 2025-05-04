import React from "react";
import MainAbout from "../Components/Aboutus/MainAbout";
import Head from "next/head";

export const metadata = {
  title: "About Us - Nexo Mark | Digital Solutions & Web Development Experts",
  description: "Learn more about Nexo Mark — a passionate team of designers, developers, and marketers helping businesses grow through tailored digital solutions.",
  keywords: [
    "about us", "Nexo Mark", "web development", "digital marketing",
    "branding services", "creative team", "company values", "UI/UX design",
    "e-commerce solutions", "SEO services", "social media marketing"
  ],
  openGraph: {
    title: "About Nexo Mark | Digital Experts Team",
    description: "Meet the passionate team behind Nexo Mark's digital solutions",
    url: "https://www.nexomark.agency/about-us",
    type: "website",
    siteName: "Nexo Mark",
  },
  alternates: {
    canonical: "https://www.nexomark.agency/about-us",
  },
  other: {
    "instagram:creator": "@nexomark.agency",
    "linkedin:company": "nexo-mark",
    "fb:profile_id": "61575301816998",
    "og:social_links": JSON.stringify([
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/company/nexo-mark"
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/nexomark.agency/"
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/profile.php?id=61575301816998"
      }
    ])
  }
};


const Page = () => {
  return (
    <>

      <main>
        <MainAbout />
      </main>
    </>
  );
};

export default Page;
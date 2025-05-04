import React from "react";
import MainWeb from "@/app/Components/WebDevelopment/MainWeb";

export const metadata = {
  title: "Web Development Services - Nexo Mark | Custom Websites & Web Solutions",
  description:
    "Nexo Mark builds custom, high-performance websites for eCommerce, businesses, startups, portfolios, blogs, and more. From sleek frontends to scalable backends, we deliver clean code, fast load times, and stunning design — tailored to your goals.",
  keywords: [
    "web development services",
    "custom websites",
    "eCommerce development",
    "business websites",
    "startups web solutions",
    "portfolio websites",
    "scalable websites",
    "frontend development",
    "backend development",
    "web design",
    "Nexo Mark web development"
  ],
  openGraph: {
    title: "Web Development by Nexo Mark",
    description:
      "Get a high-performance, custom website designed for your business. Nexo Mark offers web development services tailored to your needs.",
    url: "https://www.nexomark.agency/services/website-development",
    type: "website",
    siteName: "Nexo Mark"
  },
  alternates: {
    canonical: "https://www.nexomark.agency/services/website-development"
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
    <main>
      <MainWeb />
    </main>
  );
};

export default Page;

import React from "react";
import Mainservices from "../Components/Services/Mainservices";

export const metadata = {
  title: "Services - Nexo Mark | Web, SEO, Marketing & Design",
  description:
    "Explore Nexo Mark's full range of services — including web development, SEO, digital marketing, branding, video editing, and graphic design. Everything your business needs to grow online, all in one place.",
  keywords: [
    "services",
    "Nexo Mark services",
    "web development",
    "SEO agency",
    "digital marketing company",
    "branding agency",
    "UI UX design",
    "graphic design services",
    "video editing for business",
    "ecommerce development",
    "performance marketing",
    "logo and brand identity"
  ],
  openGraph: {
    title: "What We Offer | Nexo Mark Services",
    description: "From development to design and marketing — discover Nexo Mark's powerful service offerings.",
    url: "https://www.nexomark.agency/services",
    type: "website",
    siteName: "Nexo Mark"
  },
  alternates: {
    canonical: "https://www.nexomark.agency/services"
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
      <Mainservices />
    </main>
  );
};

export default Page;

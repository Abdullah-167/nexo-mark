import React from "react";
import MainMarketing from "@/app/Components/Digital-Marketing/MainMarketing";

export const metadata = {
  title: "Digital Marketing Services - Nexo Mark | Performance-Based Growth",
  description:
    "Accelerate your brand’s growth with Nexo Mark’s digital marketing services. From social media and PPC to email marketing, content strategy, and analytics — we drive real results through performance-based campaigns.",
  keywords: [
    "digital marketing services",
    "social media marketing",
    "PPC campaigns",
    "email marketing",
    "content strategy",
    "performance marketing",
    "marketing analytics",
    "paid advertising",
    "lead generation",
    "Nexo Mark marketing"
  ],
  openGraph: {
    title: "Digital Marketing by Nexo Mark",
    description:
      "Unlock growth with our expert digital marketing services — including social media, PPC, email, and more.",
    url: "https://www.nexomark.agency/services/digital-marketing",
    type: "website",
    siteName: "Nexo Mark"
  },
  alternates: {
    canonical: "https://www.nexomark.agency/services/digital-marketing"
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
      <MainMarketing />
    </main>
  );
};

export default Page;

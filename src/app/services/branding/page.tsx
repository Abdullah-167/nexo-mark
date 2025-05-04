import React from "react";
import BrandingMain from "@/app/Components/Branding/BrandingMain";

export const metadata = {
  title: "Branding Services - Nexo Mark | Identity, Strategy & Design",
  description:
    "Build a memorable brand identity with Nexo Mark. We craft logos, visual styles, messaging, and brand strategies that help you stand out, connect with your audience, and build long-term trust.",
  keywords: [
    "branding services",
    "brand identity",
    "logo design",
    "visual branding",
    "brand strategy",
    "brand messaging",
    "Nexo Mark branding",
    "identity design agency",
    "professional brand kit",
    "business branding solutions"
  ],
  openGraph: {
    title: "Branding Solutions by Nexo Mark",
    description: "Stand out with powerful branding and visual identity crafted by Nexo Mark.",
    url: "https://www.nexomark.agency/services/branding",
    type: "website",
    siteName: "Nexo Mark"
  },
  alternates: {
    canonical: "https://www.nexomark.agency/services/branding"
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
      <BrandingMain />
    </main>
  );
};

export default Page;

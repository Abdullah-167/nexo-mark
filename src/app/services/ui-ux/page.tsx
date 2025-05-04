import React from "react";
import MainUiUx from "@/app/Components/UiUx/MainUiUx";

export const metadata = {
  title: "UI/UX Design Services - Nexo Mark | User-Centered Digital Design",
  description:
    "Craft intuitive, conversion-focused user interfaces with Nexo Mark. We design seamless user experiences for websites, mobile apps, and digital products that drive engagement and reflect your brand identity.",
  keywords: [
    "UI/UX design",
    "user experience",
    "user interface design",
    "website design",
    "mobile app UX",
    "digital product design",
    "conversion design",
    "usability design",
    "interaction design",
    "Nexo Mark design services"
  ],
  openGraph: {
    title: "UI/UX Services by Nexo Mark",
    description: "Design intuitive, engaging experiences that convert — powered by Nexo Mark's UI/UX design expertise.",
    url: "https://www.nexomark.agency/ui-ux",
    type: "website",
    siteName: "Nexo Mark"
  },
  alternates: {
    canonical: "https://www.nexomark.agency/services/ui-ux"
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
      <MainUiUx />
    </main>
  );
};

export default Page;

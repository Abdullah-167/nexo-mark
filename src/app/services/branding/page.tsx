import BrandingMain from "@/app/Components/Branding/BrandingMain";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Services - Nexo Mark",
  description:
    "Build a memorable brand identity with Nexo Mark. We craft logos, visual styles, messaging, and brand strategies that help you stand out, connect with your audience, and build long-term trust.",
};

const page = () => {
  return (
    <main>
      <BrandingMain />
    </main>
  );
};

export default page;

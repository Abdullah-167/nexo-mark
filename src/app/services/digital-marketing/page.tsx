import MainMarketing from "@/app/Components/Digital-Marketing/MainMarketing";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services - Nexo Mark",
  description:
    "Accelerate your brand’s growth with Nexo Mark’s digital marketing services. From social media and PPC to email marketing, content strategy, and analytics — we drive real results through performance-based campaigns.",
};

const page = () => {
  return (
    <main>
      <MainMarketing />
    </main>
  );
};

export default page;

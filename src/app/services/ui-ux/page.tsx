import MainUiUx from "@/app/Components/UiUx/MainUiUx";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services - Nexo Mark",
  description:
    "Craft intuitive, conversion-focused user interfaces with Nexo Mark. We design seamless user experiences for websites, mobile apps, and digital products that drive engagement and reflect your brand identity.",
};

const page = () => {
  return (
    <main>
      <MainUiUx />
    </main>
  );
};

export default page;

import MainWeb from "@/app/Components/WebDevelopment/MainWeb";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - Nexo Mark",
  description:
    "Nexo Mark builds custom, high-performance websites for eCommerce, businesses, startups, portfolios, blogs, and more. From sleek frontends to scalable backends, we deliver clean code, fast load times, and stunning design — tailored to your goals.",
};

const page = () => {
  return (
    <main>
      <MainWeb />
    </main>
  );
};

export default page;

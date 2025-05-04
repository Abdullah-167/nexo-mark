"use client";
import React, { Suspense } from "react";
import ContactUs from "../Components/Contact/ContactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Nexo Mark",
  description:
    "Have a project in mind? Get in touch with Nexo Mark for web development, digital marketing, SEO, branding, and more. We're here to turn your ideas into results-driven solutions.",
};

const Page = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactUs />
      </Suspense>
    </main>
  );
};

export default Page;

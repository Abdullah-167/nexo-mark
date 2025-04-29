"use client";
import React, { Suspense } from "react";
import ContactUs from "../Components/Contact/ContactUs";

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

"use client";
import React from "react";

const BrandingApproach = () => {
  return (
    <section className="relative bg-[#0d0d0d] py-32 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-20 relative">
        {/* Curvy Line background */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            fill="none"
            className="opacity-10"
          >
            <path
              d="M0,400 C200,300 600,500 800,400"
              stroke="#00c4cc"
              strokeWidth="4"
              fill="transparent"
            />
          </svg>
        </div>

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-300 mb-6">
            Our Unique Branding Approach
          </h2>
          <p className="text-neutral-400 max-w-3xl">
           {` We believe in creating brands that don't just look good, but feel right.`}
          </p>
        </div>

        {/* Flowing steps */}
        <div className="flex flex-col space-y-32 relative z-10">

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center text-[#0d0d0d] font-bold text-lg">
              1
            </div>
            <div className="text-left max-w-xl">
              <h3 className="text-2xl text-neutral-100 mb-2">Discovery</h3>
              <p className="text-neutral-400">
              {`  We dive deep into your brand's story, values, and vision to uncover its true essence.`}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center text-[#0d0d0d] font-bold text-lg">
              2
            </div>
            <div className="text-left max-w-xl">
              <h3 className="text-2xl text-neutral-100 mb-2">Strategy</h3>
              <p className="text-neutral-400">
                Based on insights, we craft a powerful strategy that defines your unique brand positioning.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center text-[#0d0d0d] font-bold text-lg">
              3
            </div>
            <div className="text-left max-w-xl">
              <h3 className="text-2xl text-neutral-100 mb-2">Creation</h3>
              <p className="text-neutral-400">
               {` From logos to visuals, we design everything to reflect your brand's soul authentically.`}
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center text-[#0d0d0d] font-bold text-lg">
              4
            </div>
            <div className="text-left max-w-xl">
              <h3 className="text-2xl text-neutral-100 mb-2">Launch</h3>
              <p className="text-neutral-400">
                We launch your brand into the world with impact, helping you create unforgettable moments.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandingApproach;

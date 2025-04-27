"use client";
import React from "react";

const BrandingProcess = () => {
  return (
    <section className="relative py-24 bg-[#0F0F0F] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00FFD1]/10 to-[#007CF0]/10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Our <span className="text-[#00FFD1]">Branding Process</span>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-20">
          {/* Line */}
          <div className="absolute hidden md:block top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#00FFD1] to-[#007CF0] opacity-30"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFD1] to-[#007CF0] flex items-center justify-center text-black font-bold text-lg z-10">
              01
            </div>
            <h4 className="text-xl font-semibold text-neutral-100">Research & Discovery</h4>
            <p className="text-neutral-400 max-w-xs">
              We dive deep into your brand, market, and audience to uncover insights.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFD1] to-[#007CF0] flex items-center justify-center text-black font-bold text-lg z-10">
              02
            </div>
            <h4 className="text-xl font-semibold text-neutral-100">Strategy & Positioning</h4>
            <p className="text-neutral-400 max-w-xs">
              We craft a brand strategy that positions you for maximum impact.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFD1] to-[#007CF0] flex items-center justify-center text-black font-bold text-lg z-10">
              03
            </div>
            <h4 className="text-xl font-semibold text-neutral-100">Visual Identity</h4>
            <p className="text-neutral-400 max-w-xs">
              We bring your brand to life visually with logos, colors, and typography.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFD1] to-[#007CF0] flex items-center justify-center text-black font-bold text-lg z-10">
              04
            </div>
            <h4 className="text-xl font-semibold text-neutral-100">Brand Launch</h4>
            <p className="text-neutral-400 max-w-xs">
              We help you launch your brand across all touchpoints for maximum visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingProcess;

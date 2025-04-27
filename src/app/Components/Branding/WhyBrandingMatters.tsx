"use client";
import React from "react";

const WhyBrandingMatters = () => {
  return (
    <section className="relative bg-[#0d0d0d] py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-normal text-neutral-100 mb-6 leading-tight pb-8">
          Why Branding Matters
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            <div className="p-6 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] transition shadow-2xl">
              <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
                First Impressions
              </h3>
              <p className="text-neutral-400">
                Strong branding leaves a lasting first impression that builds trust from the start.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] transition shadow-2xl scale-110">
              <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
                Emotional Connection
              </h3>
              <p className="text-neutral-400">
                Brands that connect emotionally create loyal customers who become lifelong advocates.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] transition shadow-2xl">
              <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
                Competitive Edge
              </h3>
              <p className="text-neutral-400">
                A unique brand identity gives you a powerful advantage in a crowded market.
              </p>
            </div>
          </div>

          {/* Glowing circle behind */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-96 h-96 bg-[#ffffff] opacity-10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrandingMatters;

"use client";
import React from "react";

const BrandingUnforgettable = () => {
  return (
    <section className="relative py-20 bg-[#0F0F0F] text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neutral-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Benefits of <span className="text-neutral-300">Branding</span>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
          {/* Line in center */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-neutral-300 opacity-50"></div>

          {/* Left Side Points */}
          <div className="space-y-12">
            <div className="flex items-center justify-end gap-6">
              <div className="max-w-xs text-right">
                <h3 className="text-xl font-semibold mb-2">Stronger Identity</h3>
                <p className="text-neutral-400 text-sm">
                  Create a unique presence that makes you instantly recognizable in your industry.
                </p>
              </div>
              <div className="w-4 h-4 bg-neutral-300 rounded-full"></div>
            </div>

            <div className="flex items-center justify-end gap-6">
              <div className="max-w-xs text-right">
                <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
                <p className="text-neutral-400 text-sm">
                  Good branding builds trust and creates a loyal customer base over time.
                </p>
              </div>
              <div className="w-4 h-4 bg-neutral-300 rounded-full"></div>
            </div>
          </div>

          {/* Right Side Points */}
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-neutral-300 rounded-full"></div>
              <div className="max-w-xs text-left">
                <h3 className="text-xl font-semibold mb-2">Competitive Edge</h3>
                <p className="text-neutral-400 text-sm">
                  Stand out in a crowded market and make customers choose you over others.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-4 h-4 bg-neutral-300 rounded-full"></div>
              <div className="max-w-xs text-left">
                <h3 className="text-xl font-semibold mb-2">Higher Perceived Value</h3>
                <p className="text-neutral-400 text-sm">
                  Premium branding can let you charge higher prices and position yourself as top-quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingUnforgettable;

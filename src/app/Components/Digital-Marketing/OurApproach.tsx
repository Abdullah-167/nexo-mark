"use client";
import React from "react";

const OurApproach = () => {
  return (
    <section className="py-24 md:py-40 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b7b8] to-[#ff0077]">
          Our Approach to Digital Marketing
        </h2>
        <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
          We combine creative strategies with data-driven insights to achieve the best results for your brand.
        </p>

        {/* Approach Steps - Clean, Modern Divs */}
        <div className="flex flex-wrap justify-center gap-16 mt-20">
          {/* Step 1: Strategy */}
          <div className="w-full md:w-1/3 text-center p-10 rounded-xl border-2 border-[#00b7b8] bg-[#222222]">
            <h3 className="text-3xl font-semibold text-[#00b7b8]">1. Strategy</h3>
            <p className="text-lg text-neutral-400 mt-4">
             {` We conduct thorough market research and competitor analysis to define a tailored strategy for your brand's growth.`}
            </p>
          </div>

          {/* Step 2: Execution */}
          <div className="w-full md:w-1/3 text-center p-10 rounded-xl border-2 border-[#ff0077] bg-[#222222]">
            <h3 className="text-3xl font-semibold text-[#ff0077]">2. Execution</h3>
            <p className="text-lg text-neutral-400 mt-4">
              Our experts ensure seamless execution across channels, creating campaigns that resonate with your target audience.
            </p>
          </div>

          {/* Step 3: Analytics */}
          <div className="w-full md:w-1/3 text-center p-10 rounded-xl border-2 border-[#00b7b8] bg-[#222222]">
            <h3 className="text-3xl font-semibold text-[#00b7b8]">3. Analytics</h3>
            <p className="text-lg text-neutral-400 mt-4">
              We monitor and optimize campaigns in real-time, using data analytics to refine strategies and maximize ROI.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00b7b8] to-[#ff0077] hover:from-[#ff0077] hover:to-[#00b7b8] transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-cyan-500/50">
            Ready to Boost Your Brand?
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;

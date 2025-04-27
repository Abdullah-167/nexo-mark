"use client";
import React from "react";

const UiServices = () => {
  return (
    <section id="uiux" className="py-16 bg-[#111111] text-neutral-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-10">
          Our UI/UX Design Process
        </h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-16">
          We craft beautiful and intuitive designs that create a seamless
          user experience while keeping your brand identity at the forefront.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 bg-[#222222] p-8 rounded-lg shadow-xl transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Research & Discovery
            </h3>
            <p className="text-neutral-400">
              We dive deep into understanding your audience, your brand, and
              your business goals to create a strong foundation for your design
              strategy.
            </p>
          </div>

          <div className="flex-1 bg-[#222222] p-8 rounded-lg shadow-xl transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Wireframing & Prototyping
            </h3>
            <p className="text-neutral-400">
              We create wireframes and prototypes that represent the structure
              and flow of your website or app, ensuring a smooth user experience.
            </p>
          </div>

          <div className="flex-1 bg-[#222222] p-8 rounded-lg shadow-xl transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Visual Design
            </h3>
            <p className="text-neutral-400">
             {` Our visual design process involves creating stunning and
              aesthetically pleasing interfaces that align with your brand's
              personality and goals.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiServices;

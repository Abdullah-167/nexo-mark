"use client";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-[#000000] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#F5F5F5] mb-10">Why Choose Us?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-16 opacity-75">
         {` Partner with us for a seamless, impactful, and lasting digital presence. Here's why we stand out.`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#2D2D2D] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Web Development Excellence</h3>
            <p className="text-sm text-[#B0B0B0]">
              We craft websites that deliver a great user experience, with fast loading times and optimized performance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#2D2D2D] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Creative & Functional Design</h3>
            <p className="text-sm text-[#B0B0B0]">
              Our design approach is simple: functional, clean, and beautiful, ensuring an intuitive user experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#2D2D2D] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">SEO Optimization</h3>
            <p className="text-sm text-[#B0B0B0]">
              We implement the best SEO practices to help you rank higher, drive traffic, and increase online visibility.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#2D2D2D] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Mobile Responsiveness</h3>
            <p className="text-sm text-[#B0B0B0]">
              Every project we deliver is mobile-optimized, ensuring a seamless experience on any device.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#2D2D2D] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Fast Project Delivery</h3>
            <p className="text-sm text-[#B0B0B0]">
              We value your time and ensure that your project is delivered on schedule, without compromising quality.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#2D2D2D] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">24/7 Client Support</h3>
            <p className="text-sm text-[#B0B0B0]">
              We’re here whenever you need us—our dedicated support team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

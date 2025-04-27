"use client";
import React from "react";
import { FaRocket, FaDollarSign, FaSmile, FaCheckCircle, FaUsers } from "react-icons/fa";

const BenefitsOfUIUX = () => {
  return (
    <section id="benefits" className="py-16 bg-[#111111] text-neutral-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-10">
          The Benefits of Good UI/UX
        </h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-16">
         {` Good UI/UX is more than just aesthetics; it's about enhancing user experience and driving your business forward. Let’s explore the core benefits.`}
        </p>

        <div className="flex flex-wrap justify-center gap-16">
          {/* Benefit 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="relative flex items-center justify-center mb-6">
              <FaRocket className="text-[#00c4cc] text-6xl absolute opacity-20 transform translate-x-1/2 translate-y-1/2" />
              <h3 className="text-3xl font-bold text-neutral-100 hover:text-[#00c4cc] transition duration-300 ease-in-out">
                Fast User Experience
              </h3>
            </div>
            <p className="text-lg text-neutral-400">
              A fast and intuitive UI ensures users can complete their tasks quickly, increasing overall efficiency and satisfaction.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="relative flex items-center justify-center mb-6">
              <FaDollarSign className="text-[#00c4cc] text-6xl absolute opacity-20 transform translate-x-1/2 translate-y-1/2" />
              <h3 className="text-3xl font-bold text-neutral-100 hover:text-[#00c4cc] transition duration-300 ease-in-out">
                Increased Conversion
              </h3>
            </div>
            <p className="text-lg text-neutral-400">
              A user-friendly design makes it easier for visitors to complete desired actions, leading to higher conversion rates.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="relative flex items-center justify-center mb-6">
              <FaSmile className="text-[#00c4cc] text-6xl absolute opacity-20 transform translate-x-1/2 translate-y-1/2" />
              <h3 className="text-3xl font-bold text-neutral-100 hover:text-[#00c4cc] transition duration-300 ease-in-out">
                Enhanced User Satisfaction
              </h3>
            </div>
            <p className="text-lg text-neutral-400">
              A smooth and enjoyable experience keeps users happy, fostering positive reviews, loyalty, and repeat visits.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="relative flex items-center justify-center mb-6">
              <FaCheckCircle className="text-[#00c4cc] text-6xl absolute opacity-20 transform translate-x-1/2 translate-y-1/2" />
              <h3 className="text-3xl font-bold text-neutral-100 hover:text-[#00c4cc] transition duration-300 ease-in-out">
                Increased Trust & Credibility
              </h3>
            </div>
            <p className="text-lg text-neutral-400">
              Well-designed interfaces give users confidence in your brand, improving trust and increasing the likelihood of engagement.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="relative flex items-center justify-center mb-6">
              <FaUsers className="text-[#00c4cc] text-6xl absolute opacity-20 transform translate-x-1/2 translate-y-1/2" />
              <h3 className="text-3xl font-bold text-neutral-100 hover:text-[#00c4cc] transition duration-300 ease-in-out">
                Enhanced User Retention
              </h3>
            </div>
            <p className="text-lg text-neutral-400">
              Intuitive design not only attracts visitors but also encourages them to come back, reducing bounce rates and increasing retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfUIUX;

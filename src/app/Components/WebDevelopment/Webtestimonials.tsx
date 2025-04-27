"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Webtestimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#000000] text-neutral-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-10">
          What Our Clients Say
        </h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-16">
         {` Our clients' satisfaction is our top priority. Here's what some of
          them have to say about working with us.`}
        </p>

        <Swiper
          spaceBetween={30} // Adjust the space between slides
          slidesPerView={1} // Show 1 slide at a time on small screens
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 slides on medium screens
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on large screens
            },
          }}
          loop={true}
          autoplay={{
            delay: 2000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keeps autoplay running even after user interacts
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {/* Testimonial 1 */}
          <SwiperSlide className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <p className="text-neutral-400 mb-4">
            {`  Nexo Mark helped us transform our online presence. The website
              they built for us is exactly what we needed, and our sales have
              skyrocketed since launch!`}
            </p>
            <p className="font-semibold text-neutral-100">Sarah Johnson</p>
            <p className="text-neutral-400">Founder, StyleHub</p>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <p className="text-neutral-400 mb-4">
              {`Their attention to detail and expertise in design and
              functionality made all the difference. We are now able to connect
              with more customers than ever before.`}
            </p>
            <p className="font-semibold text-neutral-100">James Lee</p>
            <p className="text-neutral-400">CEO, UrbanTech</p>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <p className="text-neutral-400 mb-4">
              {`Working with Nexo Mark was a fantastic experience. They
              understood our vision and brought it to life with a beautiful,
              functional website.`}
            </p>
            <p className="font-semibold text-neutral-100">Linda Williams</p>
            <p className="text-neutral-400">Co-Founder, CreativeCo</p>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <p className="text-neutral-400 mb-4">
              {`The team at Nexo Mark not only created an outstanding website but
              also helped us with SEO and ongoing support. Our online business
              has never been better.`}
            </p>
            <p className="font-semibold text-neutral-100">Robert Green</p>
            <p className="text-neutral-400">
              Director of Operations, Green Solutions
            </p>
          </SwiperSlide>

          {/* Testimonial 5 */}
          <SwiperSlide className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <p className="text-neutral-400 mb-4">
              {`We are very happy with the outcome of our website. Nexo Mark
              understood our needs and created a design that perfectly reflects
              our brand identity.`}
            </p>
            <p className="font-semibold text-neutral-100">Emily Brown</p>
            <p className="text-neutral-400">
              Marketing Director, BlueSky Innovations
            </p>
          </SwiperSlide>

          {/* Testimonial 6 */}
          <SwiperSlide className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <p className="text-neutral-400 mb-4">
             {` The team at Nexo Mark exceeded our expectations. Their process
              was smooth, and the results were exactly what we were hoping for.`}
            </p>
            <p className="font-semibold text-neutral-100">Michael Harris</p>
            <p className="text-neutral-400">Owner, FreshFruits</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Webtestimonials;

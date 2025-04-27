// app/components/CaseStudies.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      client: "Fintech Startup",
      result: "3X User Growth",
      highlight: "210% Conversion Boost",
      category: "Web Design + Development",
      color: "#38b6ff",
      images: [
        "/evoc/header.png",
        "/evoc/whats.png",
        "/evoc/articles.png",
        "/evoc/cover.png",
        "/evoc/blogs.png",
        "/evoc/contact.png",
      ],
      description:
        "Redesigned the entire digital experience with AI-powered personalization, resulting in unprecedented user engagement metrics across all platforms.",
      stats: [
        { label: "Mobile Conversions", value: "+178%" },
        { label: "Avg. Session Duration", value: "4.2 mins" },
        { label: "Customer Satisfaction", value: "92%" },
      ],
    },
    {
      id: 2,
      client: "Luxury Retailer",
      result: "$2.4M Revenue",
      highlight: "35% Online Sales",
      category: "Digital Marketing",
      color: "#ff3887",
      images: [
        "/luxury-storefront.jpg",
        "/luxury-campaign.jpg",
        "/luxury-social.jpg",
      ],
      description:
        "Developed an omnichannel strategy blending physical retail experiences with augmented reality shopping features.",
      stats: [
        { label: "Social Media Engagement", value: "+320%" },
        { label: "ROI on Ad Spend", value: "8.5x" },
        { label: "New Customer Acquisition", value: "42%" },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#000000] overflow-hidden">
      {/* Background */}

      <div className="container relative z-10 px-6 mx-auto py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-6">
          Elevating Brands Worldwide 
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-3xl mx-auto">
            Selected projects that redefine digital excellence
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project.id)}
              className="relative group cursor-pointer"
            >
              <div
                className="absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at center, ${project.color}20, transparent 70%)`,
                  boxShadow: `0 0 60px ${project.color}20`,
                }}
              />

              <div className="relative h-full rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-white/80 tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-light text-white mt-2 mb-1">
                    {project.client}
                  </h3>
                  <p className="text-blue-400/80 text-lg font-medium">
                    {project.result}
                  </p>
                  <p className="text-neutral-400 mt-4 line-clamp-2">
                    {project.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-x-0 bg-neutral-950/80 " />|{" "}
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[500px] top-5 rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden"
            >
              {selectedProject !== null && (
                <div className="grid lg:grid-cols-2">
                  {/* Swiper Slider */}
                  <div className="relative h-full min-h-[400px] overflow-hidden">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      pagination={{
                        clickable: true,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                      }}
                      loop
                      className="h-full relative"
                    >
                      {projects[selectedProject - 1].images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="flex items-center justify-center w-full h-[400px] md:h-[500px] bg-neutral-950">
                            <Image
                              src={img}
                              alt={`Slide ${idx}`}
                              width={800}
                              height={500}
                              className="object-contain max-h-full max-w-full rounded-md"
                            />
                          </div>
                        </SwiperSlide>
                      ))}

                      {/* Navigation Buttons */}
                      <div className="swiper-button-prev text-white !left-2 !text-2xl" />
                      <div className="swiper-button-next text-white !right-2 !text-2xl" />

                      {/* Pagination Dots */}
                      <div className="swiper-pagination !bottom-4" />
                    </Swiper>
                  </div>

                  {/* Details */}
                  <div className="p-8 md:p-12 relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    <span className="text-sm font-medium text-blue-400 tracking-widest">
                      {projects[selectedProject - 1].category}
                    </span>
                    <h2 className="text-4xl font-light text-white mt-2 mb-4">
                      {projects[selectedProject - 1].client}
                    </h2>

                    <div className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-6">
                      {projects[selectedProject - 1].result}
                    </div>

                    <p className="text-lg text-neutral-300 mb-8">
                      {projects[selectedProject - 1].description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {projects[selectedProject - 1].stats.map((stat, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50"
                        >
                          <div className="text-2xl font-bold text-white mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-neutral-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="px-6 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors flex items-center gap-2">
                      View Full Case Study
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5 11L11 5M11 5H5M11 5V11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

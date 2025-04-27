"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Precision scroll effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  const [activeIndex, setActiveIndex] = useState<number>(0); // Default open the first service

  const services = [
    {
      title: "Digital Marketing",
      description:
        "In the ever-evolving digital landscape, it’s crucial for brands to not just exist but to thrive. At Nexomark, our Digital Marketing services empower your business to reach new heights by implementing data-driven strategies tailored to your specific goals.",
      highlight: "From social to search, we make brands impossible to ignore",
    },
    {
      title: "Web Development",
      description:
        "In today’s digital world, having a strong online presence is more than just a necessity; it’s a competitive advantage. At Nexomark, we specialize in creating bespoke websites that not only look stunning but function flawlessly. Whether you need a custom website, an eCommerce store, or a complex web application, we’ve got you covered.",
      highlight:
        "Websites that load instantly, convert reliably, and scale effortlessly",
    },
    {
      title: "Web Design & UI/UX",
      description:
        "In today’s fast-paced digital world, the user experience is everything. Our design philosophy centers on crafting intuitive, visually stunning interfaces that not only captivate but also convert. From custom websites to immersive eCommerce platforms, we ensure that every element enhances the user journey.",
      highlight: "Design that removes friction and amplifies engagement",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Unlock the true potential of your digital presence by ranking higher on search engines. Our SEO strategies go beyond basic optimization focusing on sustainable growth, targeted traffic, and long-term success. Whether you're a local business or a global brand, we tailor our SEO approach to ensure you stand out in a crowded digital marketplace.",
      highlight: "Sustainable visibility outperforming short-term tactics",
    },
    {
      title: "Graphics Design",
      description:
        "Transform your brand’s visual identity with compelling, creative designs that capture attention and tell your story. Our graphic design services blend aesthetics with functionality, creating designs that not only look great but also resonate with your target audience.",
      highlight: "Assets that grow in value as your brand evolves",
    },
    {
      title: "Branding Services",
      description:
        "Build a brand that resonates, connects, and stands the test of time. Our branding services are designed to help you craft a unique and consistent identity that elevates your business and distinguishes you from the competition.",
      highlight: "Brands that own their category narrative",
    },
    {
      title: "Social Media Management",
      description:
        "Leverage the power of social media to amplify your brand’s reach and engagement. Our social media management services include content creation, strategy development, and community building to ensure your brand stays connected with its audience, grows organically, and converts effectively.",
      highlight: "Engagement that drives loyalty and awareness",
    },
    {
      title: "Video Editing & Animation",
      description:
        "Tell your story through captivating videos and animations. Our video editing and animation services bring your brand’s message to life with professional-grade visuals that captivate, educate, and convert. From explainer videos to dynamic animations, we deliver content that engages your audience.",
      highlight: "Videos that captivate, communicate, and convert",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[140vh] pb-10 pt-10 sm:pt-40 sm:pb-20 bg-[#000000] border-t border-neutral-800/50 overflow-hidden"
      id="services"
    >
      {/* Background Effects */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[2.5%]"></div>
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 0.9,
              ease: [0.16, 0.77, 0.3, 0.99],
            }}
            className="text-4xl md:text-[3.4rem] font-light text-neutral-100 mb-5 tracking-tight leading-[1.12]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
              Precision
            </span>{" "}
            digital services
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: index * 0.06,
                ease: [0.16, 0.77, 0.3, 0.99],
              }}
              className="border-b border-neutral-800/40 py-14 group relative cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex flex-col gap-4 items-start">
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="text-2xl md:text-[1.75rem] font-light text-neutral-100 mb-2.5 tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-blue-400/80 font-light tracking-tight">
                      {service.highlight}
                    </p>
                  </div>
                  <div>
                    {/* Arrow Icon */}
                    <motion.div
                      className={`transform transition-all ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      } duration-300`}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-neutral-400"
                      >
                        <path
                          d="M5 11L11 5M11 5H5M11 5V11"
                          stroke="currentColor"
                          strokeWidth="1.1"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                {/* Description */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <p className="text-lg text-neutral-400/90 mb-7 leading-relaxed font-light tracking-tight">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm text-neutral-400/90 hover:text-blue-400 transition-colors duration-300 group/link tracking-tight"
                      >
                        <span className="border-b border-transparent group-hover/link:border-blue-400/50 transition-all duration-300 pb-0.5">
                          View case studies
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="mt-0.5 opacity-80"
                        >
                          <path
                            d="M5 11L11 5M11 5H5M11 5V11"
                            stroke="currentColor"
                            strokeWidth="1.1"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

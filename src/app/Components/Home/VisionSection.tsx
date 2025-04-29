"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VisionSection() {
  return (
    <section className="relative bg-[#000000] py-28 overflow-hidden">
      {/* Background Glow */}

      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-sky-400 to-pink-400 bg-clip-text text-transparent leading-tight max-w-4xl"
        >
          We came together to build a{" "}
          <span className="text-5xl sm:text-6xl">brand</span> that’s good for
          people, society, and the planet.
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-24 h-1 mb-8 bg-gradient-to-r from-indigo-400 via-sky-400 to-pink-400 mt-6 rounded-full origin-left"
        ></motion.div>

        {/* Call To Action Button */}
        <Link href={"/contact-us"}>
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="px-8 py-3.5 border border-[#818cf8] text-[#818cf8] rounded-full text-sm font-medium tracking-wide"
          >
            {` Let's Discuss Your Project`}
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

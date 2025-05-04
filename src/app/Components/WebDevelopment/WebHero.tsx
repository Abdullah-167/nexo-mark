// app/components/Hero.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";


export default function WebHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative md:h-screen md:pt-0 pt-40  flex items-center justify-center overflow-hidden bg-[#000000]"
      id="home"
    >
      {/* Background layer (Instrument-style subtle texture) */}

      {/* Oui Will-inspired color wash */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(125, 125, 255, 0.1), transparent 60%)",
            "radial-gradient(circle at 70% 30%, rgba(255, 125, 125, 0.1), transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(125, 125, 255, 0.1), transparent 60%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 mix-blend-soft-light"
      />

      {/* Content container */}
      <div className="container relative z-10 px-6">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Instrument-style minimal heading */}
          <h1 className="text-5xl md:text-7xl font-normal text-neutral-100 mb-6 leading-tight">
            <motion.span
              className="block "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We Create
            </motion.span>
            <motion.span
              className="block text-neutral-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Stunning Digital Experiences
            </motion.span>
          </h1>

          {/* Oui Will-inspired paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto"
          >
            Our team of experts designs and develops custom websites tailored to
            your business needs, ensuring top-notch functionality and user
            engagement.{" "}
          </motion.p>

          {/* Hybrid CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
                        <Link href={'/about-us'}>
            <motion.button
              whileHover={{ backgroundColor: '#f5f5f5', color: '#171717' }}
              className="px-8 py-3.5 bg-neutral-100 text-neutral-900 rounded-full text-sm font-medium tracking-wide"
            >
             About our studio
            </motion.button>
            </Link>
            <Link href={'/contact-us'}>
            <motion.button
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="px-8 py-3.5 border border-neutral-600 text-neutral-100 rounded-full text-sm font-medium tracking-wide"
            >
              Contact Us
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Instrument-style scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-neutral-500 mb-1 tracking-widest">
            SCROLL
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-neutral-400"
          >
            <path
              d="M8 0V18M8 18L12 14M8 18L4 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Oui Will-inspired floating elements */}
      <motion.div
        animate={{
          rotate: [0, 5, 0, -5, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute right-10 top-1/4 opacity-20 text-neutral-400"
        style={{ fontSize: "12rem", lineHeight: 1 }}
      >
        ◦
      </motion.div>
    </section>
  );
}

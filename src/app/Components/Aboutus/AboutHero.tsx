"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-[#000000] overflow-hidden">
      {/* Soft gradient background wash */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(125, 125, 255, 0.08), transparent 60%)",
            "radial-gradient(circle at 70% 30%, rgba(255, 125, 125, 0.08), transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(125, 125, 255, 0.08), transparent 60%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 mix-blend-soft-light z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-normal text-neutral-100 leading-tight mb-6"
        >
          We Build <span className="text-neutral-400">Brands</span> for Tomorrow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
        >
          {`At Nexo Mark, we're not just creating brands we're crafting legacies that stand the test of time.`}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={"/about-us"}>
            <motion.button
              whileHover={{ backgroundColor: "#f5f5f5", color: "#171717" }}
              className="px-8 py-3.5 bg-neutral-100 text-neutral-900 rounded-full text-sm font-medium tracking-wide"
            >
              About our studio
            </motion.button>
          </Link>
          <Link href={"/contact-us"}>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              className="px-8 py-3.5 border border-neutral-600 text-neutral-100 rounded-full text-sm font-medium tracking-wide"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Accent Dot (optional, for vibe) */}
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
        className="absolute left-10 bottom-1/4 opacity-20 text-neutral-400"
        style={{ fontSize: "12rem", lineHeight: 1 }}
      >
        ◦
      </motion.div>
    </section>
  );
}

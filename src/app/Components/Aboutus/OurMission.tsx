"use client";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="relative py-28 flex items-center justify-center bg-[#000000] overflow-hidden">
      {/* Soft gradient background wash */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(125, 125, 255, 0.05), transparent 60%)",
            "radial-gradient(circle at 70% 30%, rgba(255, 125, 125, 0.05), transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(125, 125, 255, 0.05), transparent 60%)",
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
      <div className="relative z-10 px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-normal text-neutral-100 leading-tight mb-6">
            Our <span className="text-neutral-400">Mission</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neutral-600 to-neutral-400 mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl text-neutral-100 mb-4">
              Redefining Digital Excellence
            </h3>
            <p className="text-lg text-neutral-400">
             {` We exist to push boundaries and challenge conventions in the digital space. Our mission is to create transformative brand experiences that resonate in today's fast-paced digital landscape while remaining timeless in their appeal.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl text-neutral-100 mb-4">
              More Than Just Aesthetics
            </h3>
            <p className="text-lg text-neutral-400">
              While stunning visuals are our signature, we go deeper. We architect digital ecosystems that drive meaningful engagement, foster authentic connections, and deliver measurable business results for our clients.
            </p>
          </motion.div>
        </div>

        {/* Floating Accent Elements */}
        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute right-20 top-1/3 opacity-15 text-neutral-400"
          style={{ fontSize: "8rem", lineHeight: 1 }}
        >
          ◦
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, -5, 0, 5, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute left-32 bottom-1/4 opacity-10 text-neutral-400"
          style={{ fontSize: "6rem", lineHeight: 1 }}
        >
          ◦
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative py-32 bg-[#000000] overflow-hidden border-t border-b border-neutral-900">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(125, 125, 255, 0.1), transparent 70%)",
            "radial-gradient(circle at 70% 30%, rgba(255, 125, 125, 0.1), transparent 70%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 mix-blend-soft-light z-0"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]">
        <div className="h-full w-full [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)]"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex  flex-col lg:flex-row-reverse gap-16 items-center">
          {/* Left column - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <video className="sm:h-[500px] w-[350px] sm:w-[600px] " autoPlay loop muted playsInline>
              <source src="/nm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-normal text-neutral-100 mb-6 leading-tight">
                Digital Architects{" "}
                <span className="text-neutral-400">of the</span> Future
              </h2>

              <div className="h-[3px] w-16 bg-gradient-to-r from-neutral-600 to-neutral-400 mb-8"></div>

              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              {`  We're a collective of visionary strategists, designers, and
                technologists reshaping digital landscapes. Our
                multidisciplinary approach blends creative intuition with
                data-driven precision.`}
              </p>

              <p className="text-lg text-neutral-400 leading-relaxed">
               {` Every brand interaction we craft is designed to not just meet
                today's standards, but to define tomorrow's possibilities. We
                build systems that evolve, experiences that resonate, and
                identities that endure.`}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-neutral-400"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-neutral-400"
      />
    </section>
  );
}

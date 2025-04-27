// app/components/WhoWeAre.tsx
"use client";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#000000] border-t border-neutral-800 overflow-hidden">
      {/* Premium Background */}

      {/* Content Container */}
      <div className="container relative z-10 px-6 mx-auto pt-24 pb-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-100 mb-6">
            <span className=" font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
              Nexomark
            </span>{" "}
            <br />
            Where Vision Meets Reality
          </h2>
          <p className="text-xl text-neutral-400 font-light">
            Crafting digital excellence since 2015
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light text-neutral-300 mb-6 tracking-wide">
              OUR PHILOSOPHY
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-neutral-400 leading-relaxed">
                {`We don't just build brands—we architect digital experiences that
                redefine industries. At Nexomark, we believe exceptional design
                should be indistinguishable from flawless functionality.`}
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {`Our team of strategists, designers, and engineers collaborate to
                create solutions that don't just meet expectations they
                establish new benchmarks.`}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <video autoPlay loop muted playsInline>
              <source src="/Section01-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>

      </div>

    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Innovation First",
    description: "We challenge conventions and pioneer digital solutions that set new industry standards.",
    accent: "from-purple-500 to-blue-500"
  },
  {
    title: "Strategic Precision",
    description: "Every decision is data-informed and aligned with measurable business outcomes.",
    accent: "from-blue-400 to-cyan-400"
  },
  {
    title: "Relentless Craft",
    description: "We obsess over details, delivering pixel-perfect experiences at every touchpoint.",
    accent: "from-amber-500 to-pink-500"
  },
  {
    title: "Collaborative Impact",
    description: "We believe the best work emerges from transparent partnerships with our clients.",
    accent: "from-green-500 to-teal-400"
  }
];

export default function OurCoreValues() {
  return (
    <section className="relative py-28 bg-black overflow-hidden border-t border-neutral-900">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-[3%] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]">
        <div className="h-full w-full [background-size:50px_50px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)]"></div>
      </div>

      {/* Gradient glows */}
      <motion.div 
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-20 left-[10%] w-[300px] h-[300px] rounded-full bg-purple-500 blur-[100px] opacity-10"></div>
        <div className="absolute bottom-10 right-[15%] w-[400px] h-[400px] rounded-full bg-blue-500 blur-[120px] opacity-10"></div>
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-neutral-100 mb-6">
            Our <span className="text-neutral-400">Core Values</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-400">
            The principles that guide every decision, collaboration, and innovation we deliver.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated card background */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${value.accent} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-[1px] rounded-xl bg-neutral-900 group-hover:bg-neutral-800 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-6"
                >
                  {/* Animated number indicator */}
                  <div className="relative mt-1">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${value.accent} flex items-center justify-center`}>
                      <span className="text-black font-medium text-lg">{index + 1}</span>
                    </div>
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-neutral-400"
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.3, opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl text-neutral-100 mb-3">{value.title}</h3>
                    <p className="text-neutral-400">{value.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating micro-interactions */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-neutral-400 opacity-60"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-neutral-400 opacity-40"
        />
      </div>
    </section>
  );
}
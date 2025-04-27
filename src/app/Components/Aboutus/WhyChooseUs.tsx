"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const advantages = [
  {
    title: "Future-Proof Solutions",
    description: "We build digital ecosystems designed to evolve with your business and market trends",
    icon: "⟡"
  },
  {
    title: "Bespoke Strategy",
    description: "Tailored approaches for each client—no cookie-cutter solutions",
    icon: "✧"
  },
  {
    title: "Full-Service Mastery",
    description: "From concept to execution—seamless integration across all digital touchpoints",
    icon: "⧉"
  },
  {
    title: "Data-Driven Creativity",
    description: "Where analytical rigor meets breakthrough creative thinking",
    icon: "⇝"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-neutral-900">
      {/* Dynamic background elements */}
      <motion.div 
        animate={{
          opacity: [0.8, 0.9, 0.8],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-[15%] w-[400px] h-[400px] rounded-full bg-purple-500 blur-[150px] opacity-[0.08]"></div>
        <div className="absolute bottom-1/3 right-[20%] w-[300px] h-[300px] rounded-full bg-blue-500 blur-[120px] opacity-[0.06]"></div>
      </motion.div>

      {/* Grid texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
        <div className="h-full w-full [background-size:60px_60px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-normal text-neutral-100 mb-6 leading-tight">
                Why <span className="text-neutral-400">Choose Us</span>
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-neutral-600 to-neutral-400 mb-8"></div>
            </div>
            <p className="md:w-1/2 text-lg text-neutral-400 md:pt-3">
              In a sea of digital agencies, we stand apart through our unique blend of strategic vision, technical excellence, and uncompromising creative standards.
            </p>
          </div>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated border effect */}
              <motion.div 
                className="absolute inset-0 rounded-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black rounded-xl"></div>
                <div className="absolute inset-[1px] bg-neutral-900 rounded-xl group-hover:bg-neutral-800 transition-all duration-300"></div>
              </motion.div>

              <div className="relative z-10 p-8 h-full">
                <div className="flex gap-6 items-start">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1
                    }}
                    className="flex-shrink-0 mt-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gradient-to-br from-purple-500 to-blue-500 transition-all duration-300">
                      <span className="text-xl text-neutral-300 group-hover:text-white">{item.icon}</span>
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="text-xl text-neutral-100 mb-3 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400">{item.description}</p>
                    
                    {/* Animated read more */}
                    <motion.div 
                      className="flex items-center mt-4 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats counter - optional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 pt-12 border-t border-neutral-800"
        >
          {[
            { value: "200+", label: "Projects delivered" },
            { value: "97%", label: "Client retention" },
            { value: "5x", label: "Average ROI" },
            { value: "24/7", label: "Dedicated support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.p 
                className="text-4xl md:text-5xl font-light text-neutral-100 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-neutral-400 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Floating elements */}
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
          className="absolute top-1/3 left-8 w-2 h-2 rounded-full bg-neutral-400 opacity-60"
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
          className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-neutral-400 opacity-40"
        />
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

export default function HowWeWork() {
  return (
    <section className="py-24 bg-[#171717] text-neutral-100" id="how-we-work">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl text-neutral-100 font-semibold mb-6">
            The Roadmap to Success
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            At the core of our work is a proven, seamless process that we follow to ensure every project exceeds expectations. Our approach integrates strategy, creativity, and technology to achieve long-lasting results.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="relative mb-12">
            <div className="absolute left-0 -top-4 text-5xl font-semibold text-neutral-400 z-[100]">1</div>
            <motion.div
              className="p-8 bg-[#1e1e1e] rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl text-neutral-100 mb-4">Discovery & Research</h3>
              <p className="text-neutral-400">
                We start by understanding your brand, goals, and target audience. Through in-depth research and discovery, we lay the foundation for a strategy tailored to your needs.
              </p>
            </motion.div>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-0 -top-4 text-5xl font-semibold text-neutral-400 z-[100]">2</div>
            <motion.div
              className="p-8 bg-[#1e1e1e] rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl text-neutral-100 mb-4">Strategy Development</h3>
              <p className="text-neutral-400">
                With insights from research, we craft a tailored strategy, using data-driven tactics that align with your brand values, ensuring the highest chance of success.
              </p>
            </motion.div>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-0 -top-4 text-5xl font-semibold text-neutral-400 z-[100]">3</div>
            <motion.div
              className="p-8 bg-[#1e1e1e] rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl text-neutral-100 mb-4">Execution</h3>
              <p className="text-neutral-400">
                Our team executes the strategy with precision, leveraging cutting-edge tools and technologies to ensure your campaign delivers the desired results.
              </p>
            </motion.div>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-0 -top-4 text-5xl font-semibold text-neutral-400 z-[100]">4</div>
            <motion.div
              className="p-8 bg-[#1e1e1e] rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl text-neutral-100 mb-4">Optimization</h3>
              <p className="text-neutral-400">
                We continuously monitor, optimize, and tweak campaigns in real-time, ensuring the best performance and maximized ROI for your business.
              </p>
            </motion.div>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-0 -top-4 text-5xl font-semibold text-neutral-400 z-[100]">5</div>
            <motion.div
              className="p-8 bg-[#1e1e1e] rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl text-neutral-100 mb-4">Reporting & Insights</h3>
              <p className="text-neutral-400">
                Transparency is key. We provide comprehensive reports and actionable insights that help you understand campaign performance and the overall impact.
              </p>
            </motion.div>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-0 -top-4 text-5xl font-semibold text-neutral-400 z-[100]">6</div>
            <motion.div
              className="p-8 bg-[#1e1e1e] rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl text-neutral-100 mb-4">Refinement & Scaling</h3>
              <p className="text-neutral-400">
                With data insights, we refine strategies and scale them for greater success. This ensures that your brand continues to grow sustainably.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

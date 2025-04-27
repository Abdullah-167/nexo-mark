"use client";
import { motion } from "framer-motion";

export default function ResultsSection() {
  return (
    <section className="py-24 bg-[#171717] text-neutral-100" id="results">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl text-neutral-100 font-semibold mb-6">
            Our Proven Impact
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
           {` The success of our digital marketing strategies is proven by the
            results we deliver. Here's how we have transformed brands across
            industries.`}
          </p>
        </motion.div>

        {/* Case Study Result Metrics */}
        <div className="flex flex-wrap justify-center gap-16">
          {/* Metric 1 */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-8 bg-[#1e1e1e] rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-semibold text-neutral-100 mb-4">
              150%
            </h3>
            <p className="text-xl text-neutral-400 mb-4">Increase in Revenue</p>
            <p className="text-neutral-300">
              Our marketing campaigns have consistently led to significant
              revenue growth for our clients. This 150% increase shows our
              commitment to delivering results.
            </p>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-8 bg-[#1e1e1e] rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-semibold text-neutral-100 mb-4">
              80%
            </h3>
            <p className="text-xl text-neutral-400 mb-4">Engagement Rate</p>
            <p className="text-neutral-300">
              Our content strategies have led to an 80% increase in engagement,
              fostering deeper connections between brands and their audiences.
            </p>
          </motion.div>

          {/* Metric 3 */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-8 bg-[#1e1e1e] rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-semibold text-neutral-100 mb-4">
              300%
            </h3>
            <p className="text-xl text-neutral-400 mb-4">
              Growth in Website Traffic
            </p>
            <p className="text-neutral-300">
              Our SEO-driven strategies have boosted website traffic by over
              300%, helping brands reach a wider audience and increase
              conversions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

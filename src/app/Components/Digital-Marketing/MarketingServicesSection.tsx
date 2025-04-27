"use client";
import { motion } from "framer-motion";

export default function MarketingServicesSection() {
  return (
    <section className="relative py-24 bg-[#171717]" id="services">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl text-neutral-100 font-semibold mb-6">
            Our Expertise in Digital Marketing
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            We provide tailored digital marketing services that are designed to
            help your brand grow and thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div
            className="p-6 bg-[#1e1e1e] rounded-xl text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl text-neutral-100 mb-4">SEO Optimization</h3>
            <p className="text-neutral-400">
              Our SEO strategies will increase your visibility, improve your
              rankings, and drive more organic traffic to your site.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-[#1e1e1e] rounded-xl text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl text-neutral-100 mb-4">
              Social Media Marketing
            </h3>
            <p className="text-neutral-400">
              {`              We create impactful social media campaigns to engage your audience and elevate your brand's presence across platforms.`}
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-[#1e1e1e] rounded-xl text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl text-neutral-100 mb-4">PPC Campaigns</h3>
            <p className="text-neutral-400">
              Our PPC campaigns are strategically designed to get you the
              highest ROI while reaching your ideal customer.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-[#1e1e1e] rounded-xl text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl text-neutral-100 mb-4">
              Content Marketing
            </h3>
            <p className="text-neutral-400">
              We craft compelling content strategies that resonate with your
              audience and help convert leads into loyal customers.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-[#1e1e1e] rounded-xl text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl text-neutral-100 mb-4">Email Marketing</h3>
            <p className="text-neutral-400">
              Our email marketing campaigns are designed to nurture
              relationships and maximize engagement with personalized content.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-[#1e1e1e] rounded-xl text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl text-neutral-100 mb-4">
              Analytics & Reporting
            </h3>
            <p className="text-neutral-400">
              We provide detailed analytics and insights that help you
              understand your audience and optimize your marketing strategy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

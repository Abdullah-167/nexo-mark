'use client';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-24 bg-[#000000] text-neutral-100">
      <div className="container px-6 mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light mb-6"
        >
          Ready to Start Your Project?
        </motion.h2>

        <p className="text-xl md:text-2xl text-neutral-400 mb-12">
         {` Let's bring your vision to life. Our creative team is here to help you every step of the way.`}
        </p>

        <motion.a 
          href="#contact"
          className="inline-block px-10 py-4 bg-neutral-100 text-neutral-900 font-semibold text-lg rounded-full shadow-lg hover:bg-neutral-200 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}

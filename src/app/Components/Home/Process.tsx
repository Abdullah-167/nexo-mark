// app/components/Process.tsx
'use client';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#000000] border-t border-neutral-800 overflow-hidden">
      {/* Background elements */}


      {/* Content Container */}
      <div className="container relative z-10 px-6 mx-auto py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-neutral-100 mb-8 tracking-tight">
              How we create<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">impact</span>
            </h2>
            
            <div className="space-y-10">
              {[
                {
                  title: "Discovery",
                  description: "We immerse ourselves in your world—understanding your business, audience, and objectives through research and workshops."
                },
                {
                  title: "Strategy",
                  description: "Our team crafts a tailored roadmap that aligns your business goals with user needs and market opportunities."
                },
                {
                  title: "Execution",
                  description: "Designers and engineers collaborate to build solutions with precision, testing and refining at every stage."
                },
                {
                  title: "Optimization",
                  description: "We analyze performance and user feedback to continuously improve and evolve your digital presence."
                }
              ].map((step, index) => (
                <div key={index} className="border-l border-neutral-800 pl-6 group">
                  <h3 className="text-xl text-neutral-100 mb-2 font-light tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    <span className="text-blue-400/80 mr-2">0{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <video autoPlay loop muted playsInline>
              <source src="/process.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 grid md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "97%", label: "Client Retention" },
            { value: "36", label: "Industry Awards" },
            { value: "5x", label: "Average ROI" }
          ].map((stat, index) => (
            <div key={index} className="p-6 border border-neutral-800 rounded-xl">
              <div className="text-3xl font-light text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm text-neutral-400 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute right-10 top-1/4 opacity-10 text-neutral-400"
        style={{ fontSize: '20rem' }}
      >
        •
      </motion.div>
    </section>
  );
}

export default Process;
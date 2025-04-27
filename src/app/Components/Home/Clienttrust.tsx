// app/components/ClientTrust.tsx
'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ClientTrust() {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Dynamic motion effects
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  const trustPillars = [
    {
      title: "Radical Transparency",
      icon: "👁️",
      description: "Live project feeds with unfiltered metrics and decision logs",
      stat: "100%",
      color: "from-purple-500 to-indigo-600",
      particles: ["📊", "📈", "🔍"]
    },
    {
      title: "Ironclad Security",
      icon: "🛡️",
      description: "Military-grade encryption with biometric access controls",
      stat: "0",
      color: "from-amber-500 to-red-600",
      particles: ["🔐", "🛡️", "🚨"]
    },
    {
      title: "Relentless Accountability",
      icon: "📌",
      description: "Blockchain-verified performance records with SLA penalties",
      stat: "24/7",
      color: "from-emerald-500 to-teal-600",
      particles: ["⏱️", "📝", "✅"]
    },
    {
      title: "No-Nonsense Honesty", 
      icon: "💎",
      description: "Brutal ROI forecasts with scenario modeling",
      stat: "∞",
      color: "from-blue-500 to-cyan-600",
      particles: ["📉", "📈", "⚖️"]
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-[200vh] py-32 bg-neutral-950 overflow-hidden"
      id="trust"
    >
      {/* Holographic background */}
      <motion.div 
        style={{ y: yBg, rotateX, scale }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid-3d.svg')] bg-[length:70px_70px] opacity-[0.8%]" />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/80 via-neutral-950/0 to-neutral-950/80" />
      </motion.div>

      {/* Floating particles */}
      {trustPillars.map((pillar, i) => (
        <motion.div
          key={`particles-${i}`}
          animate={{
            y: [0, 15, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute pointer-events-none opacity-20"
          style={{
            top: `${15 + i * 20}%`,
            left: `${10 + i * 15}%`,
            fontSize: '8rem'
          }}
        >
          {pillar.icon}
        </motion.div>
      ))}

      <div className="container relative z-10 px-6 mx-auto h-full">
        {/* Holographic header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-light text-neutral-100 mb-8 leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Trust
            </span> 
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mx-4"
            >
              ✦
            </motion.span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Architecture
            </span>
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-3xl mx-auto">
            Cryptographic proof systems for client sovereignty
          </p>
        </motion.div>

        {/* Interactive pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`h-full border rounded-2xl bg-gradient-to-br ${pillar.color} p-0.5`}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.7,
                  y: hoveredIndex === index ? -10 : 0
                }}
              >
                <div className="h-full bg-neutral-950 rounded-[calc(1rem-2px)] p-8 flex flex-col">
                  <div className="text-5xl mb-6">{pillar.icon}</div>
                  <h3 className="text-2xl font-light text-neutral-100 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-400 mb-6 flex-grow">
                    {pillar.description}
                  </p>
                  <div className="text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2">
                    {pillar.stat}
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
                  >
                    {pillar.particles.map((particle, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ 
                          y: [0, -15, 0],
                          opacity: [0, 1, 0],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity
                        }}
                        className="text-xl"
                      >
                        {particle}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Cryptographic verification */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-40 border-t border-neutral-800 pt-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl text-neutral-300 mb-10 text-center font-light">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                On-Chain
              </span> Verification
            </h3>
            
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: "SOC 3", hash: "0x892...f1c" },
                  { label: "GDPR", hash: "0x7a3...e9d" },
                  { label: "ISO27001", hash: "0x4b2...c7f" },
                  { label: "HIPAA", hash: "0xe61...a83" }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-3 rounded-lg border border-neutral-800 bg-neutral-900 flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80 animate-pulse" />
                    <div>
                      <div className="text-sm font-mono text-neutral-400">{badge.label}</div>
                      <div className="text-xs font-mono text-neutral-600">{badge.hash}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'] 
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="mt-10 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"
              />

              <div className="mt-10 text-center">
                <button className="relative px-8 py-4 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 group overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Verify All Certificates
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                      <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quantum noise decoration */}
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{
          duration: 7,
          repeat: Infinity
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 20%)
          `
        }}
      />
    </section>
  );
}
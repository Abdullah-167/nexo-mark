// src/app/Components/ScrollIndicator.tsx
'use client';

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 80,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#ffffff",
      }}
    />
  );
}

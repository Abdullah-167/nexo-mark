// app/components/Hero/Typewriter.tsx
'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const phrases = [
  "Web Development",
  "UI/UX Design",
  "Branding",
  "SEO",
  "Digital Marketing"
];

export default function Typewriter() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      controls.start({
        opacity: [1, 0],
        transition: { duration: 0.5 }
      }).then(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        controls.start({
          opacity: [0, 1],
          transition: { duration: 0.5 }
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [inView, controls]);

  return (
    <div ref={ref} className="inline-block">
      <motion.span
        animate={controls}
        className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        {phrases[currentPhrase]}
      </motion.span>
    </div>
  );
}
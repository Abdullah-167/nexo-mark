// app/components/Hero/FloatingIcons.tsx
'use client';
import { motion } from 'framer-motion';
import { CodeBracketIcon, PaintBrushIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const services = [
  { icon: <CodeBracketIcon className="w-8 h-8" />, name: 'Web Dev' },
  { icon: <PaintBrushIcon className="w-8 h-8" />, name: 'UI/UX' },
  { icon: <ChartBarIcon className="w-8 h-8" />, name: 'SEO' }
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * 200 - 100],
            y: [null, Math.random() * 200 - 100],
            opacity: 0.3,
            transition: {
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
          className="absolute text-white/10"
          style={{
            left: `${10 + (i * 30)}%`,
            top: `${20 + (i * 20)}%`
          }}
        >
          {service.icon}
        </motion.div>
      ))}
    </div>
  );
}
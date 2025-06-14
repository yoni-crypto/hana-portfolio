"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"

interface VisionSectionProps {
  scrollYProgress: MotionValue<number>
}

export default function VisionSection({ scrollYProgress }: VisionSectionProps) {
  const y = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "20%"])

  return (
    <section
      id="vision"
      className="py-16 sm:py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white relative overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">My Vision</h2>
          <blockquote className="text-lg sm:text-xl lg:text-2xl leading-relaxed italic font-light px-4">
            "To make healthcare in Ethiopia more accessible, affordable, and sustainable by solving major public health
            problems through clinical practice, research, and healthcare technology."
          </blockquote>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-24 h-1 bg-white/50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

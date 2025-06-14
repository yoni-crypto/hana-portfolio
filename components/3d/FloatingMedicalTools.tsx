"use client"

import { Heart, Stethoscope, Eye, Shield } from "lucide-react"
import { motion } from "framer-motion"

const medicalTools = [
  {
    icon: Stethoscope,
    color: "text-teal-600",
    bgColor: "bg-white",
    position: { top: "15%", left: "8%" },
    delay: 0,
    size: "w-6 h-6 sm:w-8 sm:h-8",
  },
  {
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-white",
    position: { top: "25%", right: "8%" },
    delay: 1,
    size: "w-5 h-5 sm:w-7 sm:h-7",
  },
  {
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-white",
    position: { bottom: "25%", left: "8%" },
    delay: 2,
    size: "w-5 h-5 sm:w-7 sm:h-7",
  },
  {
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-white",
    position: { bottom: "15%", right: "8%" },
    delay: 3,
    size: "w-6 h-6 sm:w-8 sm:h-8",
  },
]

export default function FloatingMedicalTools() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {medicalTools.map((tool, index) => (
        <motion.div
          key={index}
          className="absolute z-50"
          style={tool.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            initial: { delay: tool.delay, duration: 0.6, type: "spring", stiffness: 200 },
            y: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
              delay: tool.delay,
            },
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            className={`${tool.bgColor} p-2 sm:p-3 rounded-full shadow-xl border-2 border-gray-100`}
            animate={{
              boxShadow: [
                "0 8px 25px rgba(13, 148, 136, 0.15)",
                "0 12px 35px rgba(13, 148, 136, 0.25)",
                "0 8px 25px rgba(13, 148, 136, 0.15)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
                delay: tool.delay,
              },
            }}
          >
            <tool.icon className={`${tool.size} ${tool.color}`} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

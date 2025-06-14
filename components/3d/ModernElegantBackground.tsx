"use client"

import { motion } from "framer-motion"

export default function ModernElegantBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft Medical Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-purple-100 opacity-80" />

      {/* Large Soft Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-200/40 via-cyan-200/30 to-blue-200/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-pink-200/30 to-teal-200/40 rounded-full blur-3xl"
      />

      {/* Medium Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-1/4 left-1/5 w-[300px] h-[300px] bg-gradient-to-br from-cyan-200/50 to-teal-200/50 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 8,
        }}
        className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-2xl"
      />

      {/* Soft Geometric Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          opacity: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 right-20 w-32 h-32 border border-teal-300/40 rounded-full hidden lg:block"
      />

      <motion.div
        animate={{
          rotate: -360,
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
          opacity: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-purple-200/60 to-pink-200/60 rounded-lg hidden xl:block"
      />

      {/* Small Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-teal-300/50 rounded-full hidden sm:block"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-8 hidden xl:block">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13, 148, 136, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 148, 136, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Soft Wave Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-15 hidden lg:block"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(13, 148, 136, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Additional Soft Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-cyan-200/60 to-teal-200/60 rounded-full hidden lg:block"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-purple-200/60 to-pink-200/60 rounded-full hidden lg:block"
      />

      {/* Subtle Pulsing Ring */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-teal-300/30 rounded-full hidden lg:block"
      />
    </div>
  )
}

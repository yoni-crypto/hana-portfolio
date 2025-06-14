"use client"

import { motion } from "framer-motion"

export default function ElegantBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Much More Visible Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-400 to-blue-400 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.35, 0.65, 0.35],
          x: [0, -70, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
      />

      {/* Additional Visible Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute top-1/2 left-1/6 w-[300px] h-[300px] bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.45, 0.2],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 9,
        }}
        className="absolute bottom-1/3 right-1/5 w-[250px] h-[250px] bg-gradient-to-br from-purple-300 to-pink-400 rounded-full blur-2xl"
      />

      {/* Highly Visible Geometric Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          opacity: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 right-16 w-40 h-40 border-4 border-teal-400/70 rounded-full hidden lg:block"
      />

      <motion.div
        animate={{
          rotate: -360,
          y: [0, -40, 0],
          x: [0, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
          opacity: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-br from-teal-300/80 to-blue-300/80 rounded-lg hidden xl:block"
      />

      {/* More Visible Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-teal-400/60 rounded-full hidden sm:block"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Visible Grid Pattern */}
      <div className="absolute inset-0 opacity-20 hidden xl:block">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13, 148, 136, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 148, 136, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Enhanced Wave Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-25 hidden lg:block"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(13, 148, 136, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)
          `,
          backgroundSize: "250px 250px",
        }}
      />

      {/* Visible Hexagons */}
      <motion.div
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/3 w-28 h-28 border-3 border-blue-400/60 hidden lg:block"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Animated Circles */}
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 right-1/5 w-20 h-20 bg-gradient-to-br from-purple-400/70 to-pink-400/70 rounded-full hidden lg:block"
      />

      {/* Pulsing Rings */}
      <motion.div
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-teal-400/50 rounded-full hidden lg:block"
      />
    </div>
  )
}

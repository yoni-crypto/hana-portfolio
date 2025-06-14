"use client"

import { motion } from "framer-motion"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="py-8 sm:py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm sm:text-base">&copy; 2024 Dr. Hana Degu. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-teal-400 transition-colors text-sm sm:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="hover:text-teal-400 transition-colors text-sm sm:text-base"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-teal-400 transition-colors text-sm sm:text-base"
            >
              Contact
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

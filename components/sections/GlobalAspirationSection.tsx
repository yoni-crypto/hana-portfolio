"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

export default function GlobalAspirationSection() {
  return (
    <section id="global" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Looking Beyond Borders" subtitle="Global perspective for local impact" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl transform rotate-1"></div>
            <Card className="relative p-8 sm:p-12 shadow-xl bg-white rounded-3xl">
              <CardContent className="p-0">
                <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.8 }}>
                  <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-teal-600 mx-auto mb-6 sm:mb-8" />
                </motion.div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  I've always been eager to gain international experience in healthcare innovation to help bring
                  sustainable change to Ethiopia's healthcare system. My goal is to bridge global best practices with
                  local needs, creating lasting impact in my community.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

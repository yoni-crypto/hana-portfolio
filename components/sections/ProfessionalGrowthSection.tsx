"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

export default function ProfessionalGrowthSection() {
  return (
    <section id="growth" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Professional Growth" subtitle="Commitment to continuous learning and development" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-6 sm:p-8 shadow-lg bg-white">
            <CardContent className="p-0 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600 mx-auto mb-4 sm:mb-6" />
              </motion.div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                I actively participate in webinars and CPD (Continuing Professional Development) training to stay
                updated in clinical, research, and leadership fields. This commitment to lifelong learning ensures I
                provide the best possible care to my patients while contributing to the advancement of healthcare in
                Ethiopia.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

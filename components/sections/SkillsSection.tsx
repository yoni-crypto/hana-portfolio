"use client"

import { motion } from "framer-motion"
import { Stethoscope, Users, Eye, Award, BookOpen, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

const skills = [
  { skill: "Clinical Practice", icon: Stethoscope, color: "from-teal-500 to-teal-600" },
  { skill: "Public Health", icon: Users, color: "from-blue-500 to-blue-600" },
  { skill: "Eye Care", icon: Eye, color: "from-purple-500 to-purple-600" },
  { skill: "Leadership", icon: Award, color: "from-green-500 to-green-600" },
  { skill: "Research", icon: BookOpen, color: "from-orange-500 to-orange-600" },
  { skill: "Innovation", icon: Lightbulb, color: "from-pink-500 to-pink-600" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Skills & Interests" subtitle="Areas of expertise and professional interests" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skills.map((item, index) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white group-hover:from-teal-50 group-hover:to-blue-50">
                <CardContent className="p-0">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{item.skill}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

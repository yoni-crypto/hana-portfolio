"use client"

import { motion } from "framer-motion"
import { Heart, Users, Stethoscope, Target, Camera, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

const aboutFeatures = [
  { icon: Heart, label: "Patient Care", color: "text-red-500", bgColor: "bg-red-50" },
  { icon: Users, label: "Team Collaboration", color: "text-blue-500", bgColor: "bg-blue-50" },
  { icon: Stethoscope, label: "Clinical Excellence", color: "text-teal-500", bgColor: "bg-teal-50" },
  { icon: Target, label: "Healthcare Innovation", color: "text-purple-500", bgColor: "bg-purple-50" },
  { icon: Camera, label: "Photography", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: MapPin, label: "Travel", color: "text-green-500", bgColor: "bg-green-50" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          subtitle="Passionate healthcare professional dedicated to making a difference"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-8 shadow-lg border-0 bg-gradient-to-br from-teal-50 to-blue-50">
              <CardContent className="p-0 space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  I am a passionate, disciplined, and skilled General Practitioner currently working at
                  <span className="font-semibold text-teal-700"> ALERT Comprehensive Specialized Hospital</span>, where
                  I provide holistic patient care by collaborating with nurses, medical interns, pharmacists, and other
                  healthcare professionals. I actively engage with senior physicians and administrators to ensure
                  optimal treatment and healthcare outcomes.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Beyond my medical practice, I have a deep appreciation for history and culture. During my time in Gondar, 
                  I explored various religious and historical sites, including the magnificent castle of King Fasiledes and 
                  the serene Lake Tana monasteries. This experience has fostered my love for travel and photography, which 
                  I pursue in a modern way whenever I get the chance.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {aboutFeatures.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <Card
                  className={`p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 ${item.bgColor} border-0`}
                >
                  <CardContent className="p-0">
                    <item.icon
                      className={`w-8 h-8 sm:w-12 sm:h-12 ${item.color} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <p className="font-medium text-gray-800 text-sm sm:text-base">{item.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
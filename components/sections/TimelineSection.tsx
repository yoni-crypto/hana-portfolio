"use client"

import { motion } from "framer-motion"
import { GraduationCap, Eye, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/ui/SectionHeader"

const timelineData = [
  {
    year: "2024",
    title: "Medical Degree",
    institution: "Adama Hospital Medical College",
    icon: GraduationCap,
    side: "left",
    color: "bg-teal-500",
  },
  {
    year: "2014",
    title: "BSc in Clinical Optometry",
    institution: "University of Gondar",
    icon: Eye,
    side: "right",
    color: "bg-blue-500",
  },
  {
    year: "3 Years",
    title: "Eye Care Specialist",
    institution: "Rural & Underserved Communities",
    description: "Focused on primary school children",
    icon: Heart,
    side: "left",
    color: "bg-red-500",
  },
  {
    year: "8 Months",
    title: "Voluntary Medical Service",
    institution: "Government Hospital",
    description: "Dedicated service while job hunting",
    icon: Users,
    side: "right",
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Health Education & Chronic Disease Screening Volunteer",
    institution: "Menilik II Hospital",
    description: "Provided health education and volunteered in screening for chronic diseases.",
    icon: Heart,
    side: "left",
    color: "bg-purple-500",
  },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Experience & Education" subtitle="My journey in healthcare and medical education" />

        {/* Mobile Timeline */}
        <div className="block lg:hidden max-w-2xl mx-auto">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-teal-600 font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-teal-700 font-medium mb-2 text-sm sm:text-base">{item.institution}</p>
                    {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${item.side === "left" ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${item.side === "left" ? "pr-8" : "pl-8"}`}>
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-3">
                        <item.icon className="w-6 h-6 text-teal-600 mr-3" />
                        <span className="text-teal-600 font-bold text-lg">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-teal-700 font-medium mb-2">{item.institution}</p>
                      {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                    </CardContent>
                  </Card>
                </div>

                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

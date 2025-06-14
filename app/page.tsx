"use client"

import { useState, useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import TimelineSection from "@/components/sections/TimelineSection"
import VisionSection from "@/components/sections/VisionSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProfessionalGrowthSection from "@/components/sections/ProfessionalGrowthSection"
import GlobalAspirationSection from "@/components/sections/GlobalAspirationSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import { Toaster } from "@/components/ui/toaster"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      // Update active section based on scroll position
      const sections = ["hero", "about", "timeline", "vision", "skills", "growth", "global", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} parallaxY={y} />
      <AboutSection />
      <TimelineSection />
      <VisionSection scrollYProgress={scrollYProgress} />
      <SkillsSection />
      <ProfessionalGrowthSection />
      <GlobalAspirationSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTop show={showScrollTop} />
      <Toaster />
    </div>
  )
}

"use client"

import { motion, type MotionValue } from "framer-motion"
import { ChevronDown, FileText, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import FloatingMedicalTools from "@/components/3d/FloatingMedicalTools"
import ModernElegantBackground from "@/components/3d/ModernElegantBackground"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
  parallaxY: MotionValue<string>
}

// Define the current image URL at the top so it's easy to change
const CURRENT_IMAGE_URL =
  "https://res.cloudinary.com/dax0v3itz/image/upload/v1749907363/iuvjquwe51uw3tx8dfpw.jpg"

export default function HeroSection({ scrollToSection, parallaxY }: HeroSectionProps) {
  const { toast } = useToast()

  const handleDownloadCV = async () => {
    try {
      toast({
        title: "Generating PDF... 📄",
        description: "Please wait while we prepare your CV download.",
      })

      // Pass the current image URL to the PDF generator
      await generatePDFCV(CURRENT_IMAGE_URL)

      toast({
        title: "CV Downloaded! 📄",
        description: "Dr. Hana Degu's professional CV has been downloaded as PDF.",
      })
    } catch (error) {
      console.error("PDF generation error:", error)
      toast({
        title: "Download Error",
        description: "Failed to download CV. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleViewPortfolio = () => {
    toast({
      title: "Exploring Portfolio 📋",
      description: "Discovering Dr. Hana's professional journey...",
    })
    scrollToSection("about")
  }

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Modern Elegant Background */}
      {/* <ModernElegantBackground /> */}
<ModernElegantBackground/>
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 bg-gradient-to-br from-teal-600/8 to-blue-600/8"
      />

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12 xl:py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center justify-items-center max-w-7xl mx-auto min-h-[80vh] sm:min-h-[75vh] lg:min-h-[70vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6 w-full max-w-xl lg:max-w-none"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-xs sm:text-sm lg:text-base text-teal-700 font-medium"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Healthcare Professional
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight"
            >
              Dr. Hana Degu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-teal-600 font-medium"
            >
              General Practitioner
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Passionate General Practitioner driving change through patient care and health care innovation.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="hidden sm:flex flex-wrap gap-3 lg:gap-4 text-xs sm:text-sm lg:text-base text-gray-600 justify-center lg:justify-start"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                ALERT Hospital
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Clinical Optometry
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Healthcare Innovation
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base lg:text-lg group shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                <motion.span
                  className="mr-2"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                >
                  📧
                </motion.span>
                Get In Touch
              </Button>

              <Button
  variant="outline"
  onClick={handleDownloadCV}
  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base lg:text-lg group shadow-md hover:shadow-lg transition-all sm:hidden"
  size="lg"
>
  <FileText className="w-4 h-4 lg:w-5 lg:h-5 mr-2 group-hover:scale-110 transition-transform" />
  Download CV
</Button>

{/* Learn More button for tablet and up */}
<Button
  variant="outline"
  onClick={handleViewPortfolio}
  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base lg:text-lg group shadow-md hover:shadow-lg transition-all hidden sm:flex"
  size="lg"
>
  <FileText className="w-4 h-4 lg:w-5 lg:h-5 mr-2 group-hover:scale-110 transition-transform" />
  Learn More
</Button>
            </motion.div>
          </motion.div>

          {/* Professional Image with Properly Positioned Circular Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2 relative w-full"
          >
            <div className="relative w-fit flex items-center justify-center">
              {/* Perfectly Positioned Circular Background - Closer to Image */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  rotate: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
                className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 xl:w-96 xl:h-96 2xl:w-[420px] 2xl:h-[420px] bg-gradient-to-br from-teal-400/25 to-blue-500/25 rounded-full blur-2xl"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Elegant Decorative Rings - Closer */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] 2xl:w-[440px] 2xl:h-[440px] border border-teal-300/30 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-80 h-80 sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[440px] xl:h-[440px] 2xl:w-[460px] 2xl:h-[460px] border border-blue-300/20 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Clean Professional Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative z-20"
              >
                <Image
                  src={"https://res.cloudinary.com/dax0v3itz/image/upload/v1749907328/aw6l7emzwpqgzodssvr5.png"}
                  alt="Dr. Hana Degu - Professional portrait"
                  width={400}
                  height={500}
                  className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-90 lg:w-80 lg:h-[400px] xl:w-96 xl:h-[480px] 2xl:w-[400px] 2xl:h-[500px] object-cover object-top rounded-2xl mx-auto"
                  priority
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </motion.div>

              {/* Enhanced Floating Medical Tools */}
              <FloatingMedicalTools />

              {/* Repositioned Stats - Closer to Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-xl border border-teal-100 z-30"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-teal-600">3+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-xl border border-blue-100 z-30"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Patients</div>
                </div>
              </motion.div>

              {/* Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute top-1/2 -left-6 sm:-left-8 lg:-left-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-4 sm:p-5 shadow-xl z-30"
              >
                <div className="text-center">
                  <div className="text-sm sm:text-base lg:text-lg font-bold">✓</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats for Large Screens */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden xl:flex justify-center mt-12 space-x-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600">2024</div>
            <div className="text-sm text-gray-600">Medical Degree</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">ALERT</div>
            <div className="text-sm text-gray-600">Current Hospital</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">3+</div>
            <div className="text-sm text-gray-600">Specializations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">∞</div>
            <div className="text-sm text-gray-600">Innovation Drive</div>
          </div>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 mb-1 hidden sm:block">Scroll Down</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
        </div>
      </motion.div>
    </section>
  )
}

// Optimized 1-Page PDF CV Generator with Dynamic Image
async function generatePDFCV(imageUrl: string) {
  try {
    // Dynamically import the libraries
    const jsPDF = (await import("jspdf")).default
    const html2canvas = (await import("html2canvas")).default

    // Create the CV HTML content - Optimized for 1 page with dynamic image
    const cvContent = `
      <div id="cv-content" style="
        font-family: 'Arial', sans-serif; 
        line-height: 1.4; 
        color: #1f2937; 
        width: 794px; 
        margin: 0 auto; 
        background: white;
        padding: 25px;
        box-sizing: border-box;
        font-size: 12px;
      ">
        <!-- Header with Image -->
        <div style="
          background: linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #7c3aed 100%); 
          color: white; 
          padding: 20px; 
          text-align: center; 
          margin-bottom: 15px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        ">
          <div style="flex: 1;">
            <h1 style="font-size: 2.2em; font-weight: 700; margin: 0 0 5px 0;">HANA DEGU</h1>
            <p style="font-size: 1.1em; margin: 0 0 8px 0;">MEDICAL DOCTOR</p>
            <p style="font-size: 0.9em; opacity: 0.9; font-style: italic; margin: 0;">
              Passionate General Practitioner • Healthcare Innovation Enthusiast
            </p>
          </div>
          <div style="
            width: 100px; 
            height: 120px; 
            border-radius: 8px; 
            border: 3px solid rgba(255, 255, 255, 0.3); 
            background: white;
            overflow: hidden;
            margin-left: 20px;
          ">
            <img src="${imageUrl}" 
                 alt="Dr. Hana Degu" 
                 crossorigin="anonymous"
                 style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
          </div>
        </div>
        
        <!-- Contact Information - Compact -->
        <div style="
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 8px; 
          margin-bottom: 15px; 
          padding: 12px; 
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); 
          border-radius: 6px;
        ">
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px; background: white; border-radius: 4px; font-size: 11px;">
            <span style="color: #0d9488;">📧</span>
            <span>deguhana78@gmail.com</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px; background: white; border-radius: 4px; font-size: 11px;">
            <span style="color: #0d9488;">📱</span>
            <span>+251-912760855</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; padding: 6px; background: white; border-radius: 4px; font-size: 11px;">
            <span style="color: #0d9488;">📍</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

        <!-- Two Column Layout for Content -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          
          <!-- Left Column -->
          <div>
            <!-- Professional Summary -->
            <div style="margin-bottom: 15px;">
              <h2 style="color: #0d9488; font-size: 1.1em; font-weight: 600; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 2px solid #0d9488;">
                Professional Summary
              </h2>
              <div style="background: linear-gradient(135deg, #f0fdfa 0%, #e6fffa 100%); padding: 10px; border-radius: 6px; border: 1px solid #a7f3d0;">
                <p style="margin: 0; font-size: 11px; line-height: 1.4;">
                  Passionate General practitioner at ALERT Comprehensive Specialized Hospital. 
                  Experienced in holistic patient care through multidisciplinary collaboration. 
                  Committed to advancing healthcare accessibility in Ethiopia through innovation.
                </p>
              </div>
            </div>

            <!-- Education -->
            <div style="margin-bottom: 15px;">
              <h2 style="color: #0d9488; font-size: 1.1em; font-weight: 600; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 2px solid #0d9488;">
                Education
              </h2>
              
              <div style="margin-bottom: 10px; padding: 10px; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border-left: 3px solid #0d9488; border-radius: 4px;">
                <h3 style="color: #1f2937; font-size: 1em; font-weight: 600; margin-bottom: 2px;">Doctor of Medicine</h3>
                <div style="color: #0d9488; font-weight: 600; font-size: 0.85em; margin-bottom: 2px;">2018 – 2024</div>
                <div style="color: #4b5563; font-weight: 500; font-size: 0.9em;">Adama Hospital Medical College</div>
              </div>
              
              <div style="margin-bottom: 10px; padding: 10px; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border-left: 3px solid #0d9488; border-radius: 4px;">
                <h3 style="color: #1f2937; font-size: 1em; font-weight: 600; margin-bottom: 2px;">BSc in Optometry</h3>
                <div style="color: #0d9488; font-weight: 600; font-size: 0.85em; margin-bottom: 2px;">2010 – 2014</div>
                <div style="color: #4b5563; font-weight: 500; font-size: 0.9em;">University of Gondar</div>
              </div>
            </div>

            <!-- Skills -->
            <div style="margin-bottom: 15px;">
              <h2 style="color: #0d9488; font-size: 1.1em; font-weight: 600; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 2px solid #0d9488;">
                Core Skills
              </h2>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
                <div style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); padding: 8px 6px; border-radius: 4px; text-align: center; font-weight: 500; color: #0369a1; font-size: 10px;">Clinical Practice</div>
                <div style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); padding: 8px 6px; border-radius: 4px; text-align: center; font-weight: 500; color: #0369a1; font-size: 10px;">Patient Care</div>
                <div style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); padding: 8px 6px; border-radius: 4px; text-align: center; font-weight: 500; color: #0369a1; font-size: 10px;">Team Leadership</div>
                <div style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); padding: 8px 6px; border-radius: 4px; text-align: center; font-weight: 500; color: #0369a1; font-size: 10px;">Active Listening</div>
                <div style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); padding: 8px 6px; border-radius: 4px; text-align: center; font-weight: 500; color: #0369a1; font-size: 10px;">Self Motivation</div>
                <div style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); padding: 8px 6px; border-radius: 4px; text-align: center; font-weight: 500; color: #0369a1; font-size: 10px;">Innovation</div>
              </div>
            </div>

            <!-- Languages -->
            <div>
              <h2 style="color: #0d9488; font-size: 1.1em; font-weight: 600; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 2px solid #0d9488;">
                Languages
              </h2>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <div style="background: white; color: #1f2937; padding: 6px 10px; border-radius: 12px; font-weight: 500; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); font-size: 10px;">🇪🇹 Amharic</div>
                <div style="background: white; color: #1f2937; padding: 6px 10px; border-radius: 12px; font-weight: 500; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); font-size: 10px;">🗣️ Affan Oromo</div>
                <div style="background: white; color: #1f2937; padding: 6px 10px; border-radius: 12px; font-weight: 500; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); font-size: 10px;">🇺🇸 English</div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <!-- Professional Experience -->
            <div style="margin-bottom: 15px;">
              <h2 style="color: #0d9488; font-size: 1.1em; font-weight: 600; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 2px solid #0d9488;">
                Professional Experience
              </h2>
              
              <div style="margin-bottom: 12px; padding: 10px; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border-left: 3px solid #0d9488; border-radius: 4px;">
                <h3 style="color: #1f2937; font-size: 1em; font-weight: 600; margin-bottom: 2px;">Clinician</h3>
                <div style="color: #0d9488; font-weight: 600; font-size: 0.85em; margin-bottom: 2px;">April 2025 – Present</div>
                <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px; font-size: 0.9em;">ALERT Comprehensive Specialized Hospital</div>
                <p style="margin: 0; font-size: 10px; line-height: 1.3;">
                  Providing holistic patient care in collaboration with senior physicians, leading teams of 8-10 nurses and medical interns, maintaining proper EMR.
                </p>
              </div>
              
              <div style="margin-bottom: 12px; padding: 10px; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border-left: 3px solid #0d9488; border-radius: 4px;">
                <h3 style="color: #1f2937; font-size: 1em; font-weight: 600; margin-bottom: 2px;">Free Medical Service</h3>
                <div style="color: #0d9488; font-weight: 600; font-size: 0.85em; margin-bottom: 2px;">April 2024 – December 2024</div>
                <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px; font-size: 0.9em;">Minilik II Hospital</div>
                <p style="margin: 0; font-size: 10px; line-height: 1.3;">Provided voluntary medical services to underserved communities during job transition period.</p>
              </div>
              
              <div style="margin-bottom: 12px; padding: 10px; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border-left: 3px solid #0d9488; border-radius: 4px;">
                <h3 style="color: #1f2937; font-size: 1em; font-weight: 600; margin-bottom: 2px;">Medical Internship</h3>
                <div style="color: #0d9488; font-weight: 600; font-size: 0.85em; margin-bottom: 2px;">October 2022 – December 2023</div>
                <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px; font-size: 0.9em;">Adama Hospital Medical College</div>
                <p style="margin: 0; font-size: 10px; line-height: 1.3;">
                  Active participation in rounds, morning sessions, seminars and case presentations across multiple departments.
                </p>
              </div>
              
              <div style="margin-bottom: 12px; padding: 10px; background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border-left: 3px solid #0d9488; border-radius: 4px;">
                <h3 style="color: #1f2937; font-size: 1em; font-weight: 600; margin-bottom: 2px;">Optometrist</h3>
                <div style="color: #0d9488; font-weight: 600; font-size: 0.85em; margin-bottom: 2px;">2014/2015 – 2017</div>
                <div style="color: #4b5563; font-weight: 500; margin-bottom: 4px; font-size: 0.9em;">Governmental & NGO Organizations</div>
                <p style="margin: 0; font-size: 10px; line-height: 1.3;">
                  Provided primary eye care in rural communities, dispensed spectacles, led trachoma prevention campaigns and cataract treatment programs.
                </p>
              </div>
            </div>

            <!-- Vision & Goals -->
            <div>
              <h2 style="color: #0d9488; font-size: 1.1em; font-weight: 600; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 2px solid #0d9488;">
                Vision & Goals
              </h2>
              <div style="background: linear-gradient(135deg, #f0fdfa 0%, #e6fffa 100%); padding: 10px; border-radius: 6px; border: 1px solid #a7f3d0;">
                <p style="margin: 0; font-size: 11px; line-height: 1.4; font-style: italic;">
                  "To make healthcare in Ethiopia more accessible, affordable, and sustainable by solving major public health problems through clinical practice, research, and healthcare technology innovation."
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); color: white; padding: 12px; text-align: center; border-radius: 6px; margin-top: 15px;">
          <p style="font-weight: 600; margin-bottom: 4px; font-size: 11px;">© 2024 Dr. Hana Degu - Professional Portfolio</p>
          <p style="opacity: 0.8; font-size: 9px;"> Medical Professional CV • References available upon request</p>
        </div>
      </div>
    `

    // Create a temporary container
    const tempContainer = document.createElement("div")
    tempContainer.innerHTML = cvContent
    tempContainer.style.position = "absolute"
    tempContainer.style.left = "-9999px"
    tempContainer.style.top = "-9999px"
    document.body.appendChild(tempContainer)

    const element = tempContainer.querySelector("#cv-content") as HTMLElement

    if (!element) {
      throw new Error("CV content element not found")
    }

    // Convert HTML to canvas using html2canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff",
      width: 794,
      height: 1123, // A4 height in pixels at 96 DPI
      scrollX: 0,
      scrollY: 0,
    })

    // Clean up temporary element
    document.body.removeChild(tempContainer)

    // Create PDF using jsPDF
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    })

    // Calculate dimensions to fit exactly on one page
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    // Add the image to fit the entire page
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST")

    // Save the PDF
    pdf.save("Dr_Hana_Degu_CV.pdf")
  } catch (error) {
    console.error("PDF generation failed:", error)
    throw error
  }
}

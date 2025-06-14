"use client"

import { motion, type MotionValue } from "framer-motion"
import { ChevronDown, FileText, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import FloatingMedicalTools from "@/components/3d/FloatingMedicalTools"
import ElegantBackground from "@/components/3d/ElegantBackground"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
  parallaxY: MotionValue<string>
}

export default function HeroSection({ scrollToSection, parallaxY }: HeroSectionProps) {
  const { toast } = useToast()

  const handleDownloadCV = async () => {
    try {
      const cvContent = generateCVContent()
      const blob = new Blob([cvContent], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Dr_Hana_Degu_CV.html"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      toast({
        title: "CV Downloaded! 📄",
        description: "Dr. Hana Degu's CV has been downloaded successfully.",
      })
    } catch (error) {
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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Elegant Background */}
      <ElegantBackground />

      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-600/5"
      />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-8xl mx-auto min-h-[80vh] lg:min-h-[70vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-xs sm:text-sm text-teal-700 font-medium"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Healthcare Professional
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Dr. Hana Degu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-teal-600 font-medium"
            >
              General Practitioner
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Passionate General Practitioner driving change through care, innovation, and technology.
            </motion.p>

            {/* Key Highlights - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="hidden sm:flex flex-wrap gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600 justify-center lg:justify-start"
            >
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                ALERT Hospital
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                Clinical Optometry
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                Healthcare Innovation
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base group shadow-lg hover:shadow-xl transition-all"
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
                onClick={handleViewPortfolio}
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base group shadow-md hover:shadow-lg transition-all"
                size="lg"
              >
                <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image with Subtle Medical Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2 relative"
          >
            <div className="relative w-fit">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-2xl sm:blur-3xl opacity-10 sm:opacity-20 scale-110"></div>

              {/* Subtle Decorative Ring - Only on larger screens */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border border-teal-200/20 rounded-full scale-110 hidden sm:block"
              />

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative z-20"
              >
                <Image
                  src="/hana3.jpg?height=300&width=300"
                  alt="Dr. Hana Degu - Professional headshot"
                  width={300}
                  height={300}
                  className="relative rounded-full shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover"
                  priority
                />
              </motion.div>

              {/* Subtle Medical Tools - Smaller and less prominent */}
              <FloatingMedicalTools />

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-1 -right-1 sm:-top-3 sm:-right-3 bg-white rounded-full p-1.5 sm:p-3 shadow-lg border border-teal-100 z-30"
              >
                <div className="text-center">
                  <div className="text-sm sm:text-xl font-bold text-teal-600">3+</div>
                  <div className="text-xs text-gray-600 hidden sm:block">Years</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -bottom-1 -left-1 sm:-bottom-3 sm:-left-3 bg-white rounded-full p-1.5 sm:p-3 shadow-lg border border-blue-100 z-30"
              >
                <div className="text-center">
                  <div className="text-sm sm:text-xl font-bold text-blue-600">100+</div>
                  <div className="text-xs text-gray-600 hidden sm:block">Patients</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats for Large Screens Only */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden xl:flex justify-center mt-8 space-x-12"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600">2024</div>
            <div className="text-xs text-gray-600">Medical Degree</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">ALERT</div>
            <div className="text-xs text-gray-600">Current Hospital</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">3+</div>
            <div className="text-xs text-gray-600">Specializations</div>
          </div>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
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

// CV Content Generator
function generateCVContent(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Hana Degu - Curriculum Vitae</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background: #f8fafc; }
        .container { max-width: 800px; margin: 20px auto; background: white; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0d9488, #0891b2); color: white; padding: 40px; text-align: center; }
        .header h1 { font-size: 2.5em; margin-bottom: 10px; }
        .header p { font-size: 1.2em; opacity: 0.9; }
        .content { padding: 40px; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px; margin-bottom: 20px; }
        .contact-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .contact-item { display: flex; align-items: center; }
        .contact-item strong { margin-right: 10px; color: #0d9488; }
        .experience-item { margin-bottom: 20px; padding: 20px; background: #f8fafc; border-left: 4px solid #0d9488; }
        .experience-item h3 { color: #1f2937; margin-bottom: 5px; }
        .experience-item .date { color: #6b7280; font-weight: bold; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; }
        .skill-item { background: #e0f2fe; padding: 15px; border-radius: 8px; text-align: center; }
        .footer { background: #1f2937; color: white; padding: 20px; text-align: center; }
        @media print { .container { box-shadow: none; margin: 0; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dr. Hana Degu</h1>
            <p>General Practitioner</p>
            <p style="margin-top: 10px; font-size: 1em;">Passionate healthcare professional driving change through care, innovation, and technology</p>
        </div>
        
        <div class="content">
            <div class="contact-info">
                <div class="contact-item">
                    <strong>📧 Email:</strong> hana.degu@email.com
                </div>
                <div class="contact-item">
                    <strong>📱 Phone:</strong> +251 91 234 5678
                </div>
                <div class="contact-item">
                    <strong>📍 Location:</strong> Addis Ababa, Ethiopia
                </div>
                <div class="contact-item">
                    <strong>💼 LinkedIn:</strong> linkedin.com/in/hana-degu
                </div>
            </div>

            <div class="section">
                <h2>Professional Summary</h2>
                <p>Passionate, disciplined, and skilled General Practitioner currently working at ALERT Comprehensive Specialized Hospital. Experienced in providing holistic patient care through collaboration with multidisciplinary healthcare teams. Committed to advancing healthcare accessibility and sustainability in Ethiopia through clinical practice, research, and healthcare technology innovation.</p>
            </div>

            <div class="section">
                <h2>Education</h2>
                <div class="experience-item">
                    <h3>Medical Degree (MD)</h3>
                    <div class="date">2024</div>
                    <p><strong>Adama Hospital Medical College</strong></p>
                    <p>Comprehensive medical education with focus on general practice and community healthcare.</p>
                </div>
                <div class="experience-item">
                    <h3>Bachelor of Science in Clinical Optometry</h3>
                    <div class="date">2014</div>
                    <p><strong>University of Gondar</strong></p>
                    <p>Specialized training in eye care and vision health services.</p>
                </div>
            </div>

            <div class="section">
                <h2>Professional Experience</h2>
                <div class="experience-item">
                    <h3>General Practitioner</h3>
                    <div class="date">2024 - Present</div>
                    <p><strong>ALERT Comprehensive Specialized Hospital</strong></p>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li>Provide comprehensive patient care in collaboration with nurses, medical interns, and pharmacists</li>
                        <li>Engage with senior physicians and administrators to ensure optimal treatment outcomes</li>
                        <li>Participate in multidisciplinary healthcare teams for holistic patient management</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <h3>Voluntary Medical Service</h3>
                    <div class="date">8 Months</div>
                    <p><strong>Government Hospital</strong></p>
                    <p>Dedicated volunteer service providing medical care while seeking permanent employment opportunities.</p>
                </div>
                <div class="experience-item">
                    <h3>Eye Care Specialist</h3>
                    <div class="date">3 Years</div>
                    <p><strong>Rural & Underserved Communities</strong></p>
                    <p>Specialized in providing eye care services to primary school children in underserved rural communities.</p>
                </div>
            </div>

            <div class="section">
                <h2>Core Competencies</h2>
                <div class="skills-grid">
                    <div class="skill-item">Clinical Practice</div>
                    <div class="skill-item">Public Health</div>
                    <div class="skill-item">Eye Care</div>
                    <div class="skill-item">Leadership</div>
                    <div class="skill-item">Research</div>
                    <div class="skill-item">Innovation</div>
                    <div class="skill-item">Team Collaboration</div>
                    <div class="skill-item">Patient Care</div>
                </div>
            </div>

            <div class="section">
                <h2>Professional Development</h2>
                <p>Actively participate in webinars and Continuing Professional Development (CPD) training to stay current with advances in clinical practice, research methodologies, and healthcare leadership. Committed to lifelong learning to ensure delivery of optimal patient care and contribution to healthcare advancement in Ethiopia.</p>
            </div>

            <div class="section">
                <h2>Vision & Goals</h2>
                <p>To make healthcare in Ethiopia more accessible, affordable, and sustainable by solving major public health problems through clinical practice, research, and healthcare technology. Eager to gain international experience in healthcare innovation to bring sustainable change to Ethiopia's healthcare system by bridging global best practices with local needs.</p>
            </div>

            <div class="section">
                <h2>Languages</h2>
                <p><strong>Amharic:</strong> Native<br>
                <strong>English:</strong> Fluent<br>
                <strong>Oromo:</strong> Conversational</p>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2024 Dr. Hana Degu - Generated from Professional Portfolio</p>
            <p style="margin-top: 5px; font-size: 0.9em;">This CV was generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>
  `
}

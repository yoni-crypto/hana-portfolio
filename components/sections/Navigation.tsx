"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Experience" },
  { id: "vision", label: "Vision" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toast } = useToast()

  const handleDownloadCV = async () => {
    try {
      // Generate comprehensive CV content
      const cvContent = generateCVContent()

      // Create and download the CV
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
        title: "CV Downloaded Successfully! 📄",
        description: "Dr. Hana Degu's professional CV has been saved to your downloads.",
      })
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download CV. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-teal-700 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              Dr. Hana Degu
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 relative ${
                    activeSection === item.id ? "text-teal-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="sm"
                className="hidden md:flex border-teal-600 text-teal-600 hover:bg-teal-50 group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-teal-100 md:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`text-left text-lg font-medium transition-colors hover:text-teal-600 py-2 ${
                      activeSection === item.id ? "text-teal-600" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    onClick={handleDownloadCV}
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 group"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Download CV
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// CV Content Generator Function
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

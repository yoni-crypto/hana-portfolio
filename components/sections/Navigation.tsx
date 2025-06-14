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
      toast({
        title: "Generating PDF... 📄",
        description: "Please wait while we prepare your CV download.",
      })

      await generatePDFCV()

      toast({
        title: "CV Downloaded Successfully! 📄",
        description: "Dr. Hana Degu's professional CV has been saved as PDF.",
      })
    } catch (error) {
      console.error("PDF generation error:", error)
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
  <div className="max-w-7xl mx-auto w-full overflow-x-hidden px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-xl font-bold text-teal-700 cursor-pointer flex-shrink-0"
              onClick={() => scrollToSection("hero")}
            >
              Dr. Hana Degu
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6 flex-1 justify-center">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 relative whitespace-nowrap ${
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

            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="sm"
                className="hidden sm:flex border-teal-600 text-teal-600 hover:bg-teal-50 group text-xs lg:text-sm px-3 lg:px-4"
              >
                <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden lg:inline">Download </span>CV
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="fixed top-[65px] sm:top-[73px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-teal-100 md:hidden"
          >
            <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`text-left text-base sm:text-lg font-medium transition-colors hover:text-teal-600 py-2 ${
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
                  className="pt-2 sm:pt-4"
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

// Optimized 1-Page PDF CV Generator with Image
async function generatePDFCV() {
  try {
    // Dynamically import the libraries
    const jsPDF = (await import("jspdf")).default
    const html2canvas = (await import("html2canvas")).default

    // Create the CV HTML content - Optimized for 1 page
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
            <img src="https://res.cloudinary.com/dax0v3itz/image/upload/v1749907363/iuvjquwe51uw3tx8dfpw.jpg" 
                 alt="Dr. Hana Degu" 
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
                <p style="margin: 0; font-size: 10px; line-height: 1.3;">Active participation in rounds, morning sessions, seminars and case presentations across multiple departments.</p>
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
          <p style="opacity: 0.8; font-size: 9px;">Generated on ${new Date().toLocaleDateString()} • Medical Professional CV • References available upon request</p>
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

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactSection() {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const { toast } = useToast()

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!contactForm.name.trim()) {
      errors.name = "Name is required"
    } else if (contactForm.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
    }

    if (!contactForm.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!contactForm.message.trim()) {
      errors.message = "Message is required"
    } else if (contactForm.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setContactForm({ name: "", email: "", message: "" })
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. Dr. Hana will get back to you soon.",
        })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg sm:text-xl opacity-90">Ready to collaborate on healthcare innovation?</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              <motion.div
                className="flex items-center cursor-pointer hover:text-teal-200 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-4 flex-shrink-0" />
                <a href="mailto:deguhana78@gmail.com" className="text-sm sm:text-base">
                  deguhana78@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center cursor-pointer hover:text-teal-200 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-4 flex-shrink-0" />
                <a href="tel:+251912760855" className="text-sm sm:text-base">
                  +251-912760855
                </a>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">Addis Ababa, Ethiopia</span>
              </motion.div>
              <motion.div
                className="flex items-center cursor-pointer hover:text-teal-200 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 mr-4 flex-shrink-0" />
                <button
                  onClick={() => handleSocialClick("linkedin", "https://www.linkedin.com/in/hana-degu-b13ba02a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")}
                  className="text-sm sm:text-base text-left"
                >
                  linkedin.com/in/hana-degu
                </button>
              </motion.div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30  text-white :bg-white/10"
                  onClick={() => handleSocialClick("linkedin", "https://www.linkedin.com/in/hana-degu-b13ba02a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white bg-white/10"
                  onClick={() => handleSocialClick("email", "mailto:deguhana78@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-8 bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 ${
                        formErrors.name ? "border-red-400" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {formErrors.name && <p className="text-red-300 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 ${
                        formErrors.email ? "border-red-400" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {formErrors.email && <p className="text-red-300 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 resize-none ${
                        formErrors.message ? "border-red-400" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {formErrors.message && <p className="text-red-300 text-sm mt-1">{formErrors.message}</p>}
                  </div>

                  {submitStatus === "success" && (
                    <Alert className="bg-green-500/20 border-green-400 text-white">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Message sent successfully! Dr. Hana will get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="bg-red-500/20 border-red-400 text-white">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Failed to send message. Please try again or contact directly via email.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-teal-600 mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

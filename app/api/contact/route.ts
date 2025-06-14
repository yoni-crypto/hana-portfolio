import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  message: string
}

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/[<>]/g, "")
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Sanitize inputs
    const name = sanitizeInput(body.name)
    const email = sanitizeInput(body.email)
    const message = sanitizeInput(body.message)

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate input lengths
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Name must be between 2 and 100 characters" }, { status: 400 })
    }

    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json({ error: "Message must be between 10 and 1000 characters" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to Dr. Hana - This appears to come from the user's email
    const mailToDoctor = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Your authenticated email
      replyTo: email, // User's email for replies
      to: "deguhana78@gmail.com", // Dr. Hana's email
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Message</h1>
          </div>
          <div style="padding: 20px; background: #f8fafc;">
            <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #0d9488; margin: 0 0 10px 0;">From: ${name}</h2>
              <p style="margin: 0; color: #0369a1;">
                <strong>Email:</strong> <a href="mailto:${email}" style="color: #0d9488;">${email}</a>
              </p>
              <p style="margin: 5px 0 0 0; color: #0369a1;">
                <strong>Date:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
            
            <h2 style="color: #0d9488;">Message</h2>
            <div style="background: white; padding: 20px; border-left: 4px solid #0d9488; margin: 10px 0; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #dcfce7; border-radius: 5px; border-left: 4px solid #16a34a;">
              <p style="margin: 0; color: #15803d;">
                <strong>💡 Tip:</strong> Click "Reply" to respond directly to ${name} at ${email}
              </p>
            </div>
          </div>
          <div style="background: #1f2937; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This message was sent through your portfolio website contact form</p>
          </div>
        </div>
      `,
    }

    // Auto-reply to sender - This comes from your email to theirs
    const autoReply = {
      from: `"Dr. Hana Degu" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Dr. Hana Degu",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Dr. Hana Degu</h1>
            <p style="color: white; margin: 5px 0 0 0;">General Practitioner</p>
          </div>
          <div style="padding: 20px; background: #f8fafc;">
            <h2 style="color: #0d9488;">Thank you for your message, ${name}!</h2>
            <p>I have received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
            
            <div style="background: white; padding: 15px; border-left: 4px solid #0d9488; margin: 20px 0; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #0d9488;">Your Message:</h3>
              <p style="margin-bottom: 0; font-style: italic;">"${message.replace(/\n/g, "<br>")}"</p>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0; color: #92400e;">
                <strong>⚠️ Important:</strong> If you have any urgent medical concerns, please contact your local emergency services or visit the nearest hospital immediately.
              </p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #e0f2fe; border-radius: 8px; text-align: center;">
              <h3 style="color: #0369a1; margin-top: 0;">Connect with me</h3>
              <p style="margin: 10px 0;">
                <a href="mailto:deguhana78@gmail.com" style="color: #0d9488; text-decoration: none; margin-right: 20px;">📧 Email</a>
                <a href="https://linkedin.com/in/hana-degu" style="color: #0d9488; text-decoration: none;">💼 LinkedIn</a>
              </p>
            </div>
            
            <p style="margin-top: 20px;">Best regards,<br><strong>Dr. Hana Degu</strong><br>General Practitioner<br>ALERT Comprehensive Specialized Hospital</p>
          </div>
          <div style="background: #1f2937; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">&copy; 2024 Dr. Hana Degu. All rights reserved.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(mailToDoctor), transporter.sendMail(autoReply)])

    // Log the contact for analytics
    console.log(`✅ Contact form submission: ${name} (${email}) - ${new Date().toISOString()}`)

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! You will receive a confirmation email shortly.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("❌ Contact form error:", error)

    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later or contact directly via email.",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 },
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}

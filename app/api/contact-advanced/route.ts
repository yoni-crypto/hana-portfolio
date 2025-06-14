import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  message: string
}

// Alternative approach using SMTP with user's email as sender
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, message } = body

    // Validation (same as before)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Method 1: Using your SMTP but setting user as sender (recommended)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // This email will appear to come from the user
    const emailToDoctor = {
      from: `"${name} (via Portfolio)" <${process.env.EMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`, // When Dr. Hana replies, it goes to user
      to: "deguhana78@gmail.com",
      subject: `Portfolio Contact: ${name} wants to connect`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
          </div>
          
          <!-- Sender Info Card -->
          <div style="padding: 20px; background: #f8fafc;">
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #0d9488, #0891b2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <span style="color: white; font-size: 20px; font-weight: bold;">${name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <h2 style="margin: 0; color: #1f2937; font-size: 20px;">${name}</h2>
                  <p style="margin: 5px 0 0 0; color: #6b7280;">
                    <a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a>
                  </p>
                </div>
              </div>
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                📅 Sent on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
            </div>
            
            <!-- Message -->
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="margin: 0 0 15px 0; color: #0d9488; font-size: 18px;">Message:</h3>
              <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #0d9488; border-radius: 4px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="margin-top: 20px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your message to Dr. Hana Degu" 
                 style="display: inline-block; background: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-right: 10px;">
                📧 Reply to ${name}
              </a>
              <a href="tel:+251-912760855" 
                 style="display: inline-block; background: #6b7280; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">
                📞 Call Back
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #1f2937; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This message was sent through your portfolio website contact form</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Dr. Hana Degu Portfolio • Professional Healthcare Services</p>
          </div>
        </div>
      `,
    }

    // Confirmation email to user
    const confirmationEmail = {
      from: `"Dr. Hana Degu" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Message received - Dr. Hana Degu will respond soon`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Dr. Hana Degu</h1>
            <p style="color: white; margin: 5px 0 0 0; opacity: 0.9;">General Practitioner</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px; background: #f8fafc;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #0d9488; margin: 0 0 15px 0;">Hello ${name}! 👋</h2>
              <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out through my portfolio website. I have received your message and will respond personally within <strong>24-48 hours</strong>.
              </p>
              
              <!-- Message Preview -->
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <h4 style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">YOUR MESSAGE:</h4>
                <p style="margin: 0; color: #1f2937; font-style: italic;">"${message.length > 100 ? message.substring(0, 100) + "..." : message}"</p>
              </div>
              
              <!-- Emergency Notice -->
              <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  <strong>⚠️ Medical Emergency?</strong> If you have urgent medical concerns, please contact emergency services or visit the nearest hospital immediately.
                </p>
              </div>
              
              <!-- Contact Info -->
              <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; text-align: center; margin-top: 25px;">
                <h3 style="color: #0369a1; margin: 0 0 15px 0;">Stay Connected</h3>
                <p style="margin: 10px 0;">
                  <a href="mailto:deguhana78@gmail.com" style="color: #0d9488; text-decoration: none; margin: 0 15px;">📧 Email</a>
                  <a href="https://linkedin.com/in/hana-degu" style="color: #0d9488; text-decoration: none; margin: 0 15px;">💼 LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #1f2937; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-weight: 500;">Dr. Hana Degu</p>
            <p style="margin: 5px 0; opacity: 0.8; font-size: 14px;">General Practitioner • ALERT Comprehensive Specialized Hospital</p>
            <p style="margin: 10px 0 0 0; opacity: 0.6; font-size: 12px;">&copy; 2024 All rights reserved</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(emailToDoctor), transporter.sendMail(confirmationEmail)])

    console.log(`✅ Enhanced contact form: ${name} (${email}) - ${new Date().toISOString()}`)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("❌ Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again.",
      },
      { status: 500 },
    )
  }
}

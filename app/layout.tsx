import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Dr. Hana Degu - General Practitioner",
  description:
    "Passionate General Practitioner driving change through care, innovation, and technology. Based in Ethiopia, focused on making healthcare more accessible and sustainable.",
  keywords:
    "Dr. Hana Degu, General Practitioner, Ethiopia, Healthcare, Medical Doctor, ALERT Hospital, Clinical Optometry",
  authors: [{ name: "Dr. Hana Degu" }],
  openGraph: {
    title: "Dr. Hana Degu - General Practitioner",
    description: "Passionate General Practitioner driving change through care, innovation, and technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Hana Degu - General Practitioner",
    description: "Passionate General Practitioner driving change through care, innovation, and technology.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

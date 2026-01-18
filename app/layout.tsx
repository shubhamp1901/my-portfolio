import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
      default: "Shubham Patel - Fullstack Developer | React & Next.js | Node.js | TypeScript",
    template: "%s | Shubham Patel"
  },
  description: "Fullstack Developer with 3+ years of frontend and 2+ years of backend experience building scalable web applications using React.js, Next.js, Node.js, and TypeScript. Specialized in performance optimization, state management, and modern UI/UX design.",
  keywords: [
    "Shubham Patel",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "React.js",
    "Next.js",
    "Node.js Developer",
    "UI/UX Developer",
    "JavaScript Developer"
  ],
  authors: [{ name: "Shubham Patel" }],
  creator: "Shubham Patel",
  publisher: "Shubham Patel",
  metadataBase: new URL("https://shubhampatel.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhampatel.dev",
    title: "Shubham Patel - Fullstack Developer",
    description: "Fullstack Developer with 3+ years of frontend and 2+ years of backend experience building scalable web applications using React.js, Next.js, Node.js, and TypeScript.",
    siteName: "Shubham Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Patel - Fullstack Developer",
    description: "Fullstack Developer with 3+ years of frontend and 2+ years of backend experience building scalable web applications using React.js, Next.js, Node.js, and TypeScript.",
    creator: "@shubhamp1901",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

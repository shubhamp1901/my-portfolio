"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/95 backdrop-blur-sm">
            <CardContent className="pt-6">
              <motion.p
                className="text-lg text-foreground/90 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Full stack developer with <span className="font-bold text-primary">3 years of experience in frontend</span> and <span className="font-bold text-primary">2 years of experience in backend</span> building scalable and performance-optimized web applications using React.js, Next.js, and Node.js. Experienced in both frontend and backend development, including state management, API integration, server-side architecture, and database design, with a track record of improving performance and user experience across the full stack.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

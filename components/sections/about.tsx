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
              <motion.div
                className="text-lg text-foreground/90 leading-relaxed space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p>
                  I'm a <span className="font-semibold text-primary">full-stack developer</span> with <span className="font-semibold">4 years</span> of frontend experience working with <span className="font-semibold text-primary">React.js</span> and <span className="font-semibold text-primary">Next.js</span>, and <span className="font-semibold">2 years</span> building backend APIs with <span className="font-semibold text-primary">Node.js</span>.
                </p>
                <p>
                  On the frontend, I work with <span className="font-semibold">state management</span>, <span className="font-semibold">API integrations</span>, and building responsive interfaces. For the backend, I build <span className="font-semibold">RESTful APIs</span>, handle <span className="font-semibold">authentication</span>, and make sure everything works together smoothly in production.
                </p>
                <p>
                  I focus on making apps fast and easy to maintain, whether it's optimizing performance on the frontend, designing clean <span className="font-semibold text-primary">API structures</span> on the backend, or writing <span className="font-semibold">efficient database queries</span>. I enjoy building complete features that works well from start to finish.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Toolbox OS",
    position: "Frontend Developer",
    period: "Nov 2023 - present",
    achievements: [
      "Built a real-time chat feature using Firebase, enabling smooth communication between users and contributing to a 15% increase in user engagement.",
      "Led frontend performance optimization by implementing route-level lazy loading and code splitting, improving initial load time by 20% and enhancing Core Web Vitals.",
      "Migrated legacy Django templates to modern React-based applications (Asset Management & Agreement Builder), improving UI responsiveness and reducing page load time by 25%.",
      "Designed and implemented a public and private template marketplace, enabling domain-restricted access for organizations and public purchases for external users, using React.js, Tailwind CSS, and TanStack Query.",
      "Integrated a rich text editor using Quill, allowing users to easily create and format agreement templates and speeding up document creation.",
      "Implemented TOTP-based two-factor authentication using django-mfa2, working on frontend authentication flows and improving application security.",
      "Created a template package feature that allows users to group multiple templates into a single package for easier agreement creation.",
    ],
  },
  {
    company: "Shypmax",
    position: "Frontend Developer",
    period: "Jan 2023 - Oct 2023",
    achievements: [
      "Owned the frontend for a warehouse management system, building scalable React screens that simplified daily operations and reduced manual effort.",
      "Built reusable, responsive UI components using React.js, ensuring consistency across complex operational screens.",
      "Integrated RESTful APIs and handled async states, error handling, and loading flows for data-heavy screens.",
      "Refactored global state management using Redux Toolkit, making data flow easier to manage and improving performance.",
    ],
  },
  {
    company: "Infosys",
    position: "System Engineer",
    period: "June 2021 - Dec 2022",
    achievements: [
      "Worked on enterprise internal applications for a CITI Bank project, focusing on UI validation and workflow consistency.",
      "Reported and tracked UI and functional issues, contributing to a reduction in user-reported defects.",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/95 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-lg text-primary font-semibold mt-2">
                    {exp.company}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 list-none pl-0">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary shadow-sm"></span>
                        <span className="text-foreground/80 leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
